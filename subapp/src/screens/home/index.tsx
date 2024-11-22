import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Pdf from 'react-native-pdf';
import Sound from 'react-native-sound';
import RNFS from 'react-native-fs';

import { styles } from '../../styles/styles';
import { HomeProps, IFile } from '../../interfaces';

const Home: React.FC<HomeProps> = ({ navigationContainer, sharedFiles }) => {
  const [audioPlayer, setAudioPlayer] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [textContent, setTextContent] = useState<string>('');

  useEffect(() => {
    let sound: Sound | null = null;

    const readTextFile = async (filePath: string) => {
      try {
        const content = await RNFS.readFile(filePath, 'utf8');
        setTextContent(content);
      } catch (error) {
        console.error('Error reading text file::', error);
      }
    };

    if (sharedFiles && sharedFiles.length > 0) {
      sharedFiles.forEach(file => {
        if (file.fileMimeType.startsWith('text/')) {
          readTextFile(file.filePath);
        } else if (file.fileMimeType.startsWith('audio/')) {
          sound = new Sound(file.filePath, '', error => {
            if (error) {
              console.error('Error loading sound:', error);
            }
          });
          setAudioPlayer(sound);
        }
      });
    }

    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [sharedFiles]);

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
            <TouchableOpacity
              style={styles.audioButton}
              onPress={toggleAudioPlayback}
            >
              <Text style={styles.audioButtonText}>
                {isPlaying ? 'Pause Audio' : 'Play Audio'}
              </Text>
            </TouchableOpacity>
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
              File type not directly supported.
            </Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {sharedFiles && sharedFiles.length > 0 ? (
        sharedFiles.map((file, index) => (
          <View key={index} style={styles.fileContainer}>
            <Text style={styles.fileName}>{file.fileName}</Text>
            {renderFileContent(file)}
          </View>
        ))
      ) : (
        <View style={styles.noFileContainer}>
          <Text style={styles.noFileText}>There are no shared files.</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
