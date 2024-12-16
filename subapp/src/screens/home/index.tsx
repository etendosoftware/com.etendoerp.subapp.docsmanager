import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Pdf from 'react-native-pdf';
import Sound from 'react-native-sound';
import RNFS from 'react-native-fs';

import { HomeProps, IFile } from '../../interfaces';
import { styles } from './styles';
import { Button } from 'etendo-ui-library';
import { cleanFileName } from '../../utils';

const Home: React.FC<HomeProps> = ({ navigationContainer, sharedFiles }) => {
  const [audioPlayer, setAudioPlayer] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [textContent, setTextContent] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<IFile | null>(null);

  useEffect(() => {
    if (sharedFiles && sharedFiles.length > 0) {
      if (sharedFiles.length === 1) {
        setSelectedFile(sharedFiles[0]);
      } else {
        setSelectedFile(null);
      }
    }
  }, [sharedFiles]);

  useEffect(() => {
    let sound: Sound | null = null;

    setAudioPlayer(null);
    setIsPlaying(false);
    setTextContent('');

    const readTextFile = async (filePath: string) => {
      try {
        const content = await RNFS.readFile(filePath, 'utf8');
        setTextContent(content);
      } catch (error) {
        console.error('Error reading text file:', error);
      }
    };

    if (selectedFile) {
      if (selectedFile.fileMimeType.startsWith('text/')) {
        readTextFile(selectedFile.filePath);
      } else if (selectedFile.fileMimeType.startsWith('audio/')) {
        sound = new Sound(selectedFile.filePath, '', error => {
          if (error) {
            console.error('Error loading sound:', error);
          }
        });
        setAudioPlayer(sound);
      }
    }

    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [selectedFile]);

  const toggleAudioPlayback = useCallback(() => {
    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.pause();
        setIsPlaying(false);
      } else {
        audioPlayer.play(success => {
          if (!success) {
            console.error('Error in playback');
          }
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }
  }, [audioPlayer, isPlaying]);

  const handleFileSelect = (file: IFile) => {
    setSelectedFile(file);
  };

  const renderFileContent = (file: IFile) => {
    switch (true) {
      case file.fileMimeType === 'application/pdf':
        return (
          <Pdf
            source={{ uri: file.filePath }}
            style={styles.pdf}
            onError={error => {
              console.error(error);
            }}
          />
        );
      case file.fileMimeType.startsWith('image/'):
        return (
          <Image
            source={{ uri: file.filePath }}
            style={styles.image}
            resizeMode="contain"
          />
        );
      case file.fileMimeType.startsWith('audio/'):
        return (
          <View style={styles.audioContainer}>
            <Button
              typeStyle={'terciary'}
              text={isPlaying ? 'Pause Audio' : 'Play Audio'}
              onPress={toggleAudioPlayback}
            />
          </View>
        );
      case file.fileMimeType.startsWith('text/'):
        return (
          <ScrollView style={styles.textContainer}>
            <Text style={styles.textContent}>{textContent}</Text>
          </ScrollView>
        );
      default:
        return (
          <View style={styles.unsupportedContainer}>
            <Text style={styles.unsupportedText}>
              File type not supported.
            </Text>
          </View>
        );
    }
  };

  const renderFileItem = ({ item }: { item: IFile }) => (
    <TouchableOpacity
      style={styles.fileItem}
      onPress={() => handleFileSelect(item)}
    >
      <Text style={styles.fileItemText}>{item.fileName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shared Files</Text>
      </View>

      {sharedFiles && sharedFiles.length > 0 ? (
        selectedFile && sharedFiles.length > 1 ? (
          <View style={styles.fileContainer}>
            <Button
              typeStyle={'terciary'}
              text={'Go back'}
              onPress={() => setSelectedFile(null)}
            />
            <Text style={styles.fileName}>{selectedFile.fileName}</Text>
            {renderFileContent(selectedFile)}
          </View>
        ) : sharedFiles.length > 1 ? (
          <FlatList
            data={sharedFiles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderFileItem}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
        ) : (
          <View style={styles.fileContainer}>
            <Text style={styles.fileName}>{cleanFileName(sharedFiles[0].fileName)}</Text>
            {renderFileContent(sharedFiles[0])}
          </View>
        )
      ) : (
        <View style={styles.noFileContainer}>
          <Text style={styles.noFileText}>No files uploaded.</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
