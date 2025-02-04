import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import Home from '../../../src/screens/home';
import { IFile } from '../../../src/interfaces';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';

// Mock the dependencies
jest.mock('react-native-pdf', () => {
  return {
    __esModule: true,
    default: jest.fn().mockImplementation(() => null)
  };
});

jest.mock('react-native-sound', () => {
  return jest.fn().mockImplementation(() => ({
    play: jest.fn((callback) => callback(true)),
    pause: jest.fn(),
    release: jest.fn()
  }));
});

jest.mock('react-native-fs', () => ({
  readFile: jest.fn()
}));

jest.mock('etendo-ui-library', () => ({
  ArrowLeftIcon: () => null,
  Button: ({ onPress, text }: { onPress: () => void; text: string }) => (
    <button onClick={onPress}>{text}</button>
  )
}));

describe('Home Screen', () => {
  const mockNavigationContainer = {
    navigate: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    test('renders correctly with no files', () => {
      const { getByText } = render(
        <Home navigationContainer={mockNavigationContainer} sharedFiles={[]} />
      );
      
      expect(getByText('No files uploaded.')).toBeTruthy();
    });

    test('renders correctly with single file', () => {
      const mockFile: IFile = {
        fileName: 'test.pdf',
        filePath: '/path/to/test.pdf',
        fileMimeType: 'application/pdf'
      };

      const { getByText } = render(
        <Home navigationContainer={mockNavigationContainer} sharedFiles={[mockFile]} />
      );
      
      expect(getByText('test.pdf')).toBeTruthy();
    });

    test('renders file list when multiple files are shared', () => {
      const mockFiles: IFile[] = [
        {
          fileName: 'test1.pdf',
          filePath: '/path/to/test1.pdf',
          fileMimeType: 'application/pdf'
        },
        {
          fileName: 'test2.pdf',
          filePath: '/path/to/test2.pdf',
          fileMimeType: 'application/pdf'
        }
      ];

      const { getAllByText } = render(
        <Home navigationContainer={mockNavigationContainer} sharedFiles={mockFiles} />
      );
      
      const fileItems = getAllByText(/test\d\.pdf/);
      expect(fileItems).toHaveLength(2);
    });
  });

  describe('file type handling', () => {
    test('handles text files correctly', async () => {
      const mockTextContent = 'Sample text content';
      (RNFS.readFile as jest.Mock).mockResolvedValue(mockTextContent);

      const mockFile: IFile = {
        fileName: 'test.txt',
        filePath: '/path/to/test.txt',
        fileMimeType: 'text/plain'
      };

      const { getByText } = render(
        <Home navigationContainer={mockNavigationContainer} sharedFiles={[mockFile]} />
      );

      await waitFor(() => {
        expect(getByText(mockTextContent)).toBeTruthy();
      });
    });

    test('handles unsupported file types correctly', () => {
      const mockFile: IFile = {
        fileName: 'test.xyz',
        filePath: '/path/to/test.xyz',
        fileMimeType: 'application/unknown'
      };

      const { getByText } = render(
        <Home navigationContainer={mockNavigationContainer} sharedFiles={[mockFile]} />
      );

      expect(getByText('File type not supported.')).toBeTruthy();
    });
  });

  describe('interactions', () => {


    test('handles file selection in multiple files view', () => {
      const mockFiles: IFile[] = [
        {
          fileName: 'test1.pdf',
          filePath: '/path/to/test1.pdf',
          fileMimeType: 'application/pdf'
        },
        {
          fileName: 'test2.pdf',
          filePath: '/path/to/test2.pdf',
          fileMimeType: 'application/pdf'
        }
      ];

      const { getByText } = render(
        <Home navigationContainer={mockNavigationContainer} sharedFiles={mockFiles} />
      );

      fireEvent.press(getByText('test1.pdf'));
      expect(getByText('test1.pdf')).toBeTruthy();
    });
  });

  describe('cleanup', () => {
    test('cleans up audio player on unmount', () => {
      const mockFile: IFile = {
        fileName: 'test.mp3',
        filePath: '/path/to/test.mp3',
        fileMimeType: 'audio/mpeg'
      };

      const { unmount } = render(
        <Home navigationContainer={mockNavigationContainer} sharedFiles={[mockFile]} />
      );

      unmount();

      const mockSound = Sound as jest.Mock;
      const mockSoundInstance = mockSound.mock.results[0].value;
      expect(mockSoundInstance.release).toHaveBeenCalled();
    });
  });
});
