import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from '../App';
import locale from '../src/localization/locale';

// Mock dependencies
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: ({ children }: { children: React.ReactNode }) => children,
    Screen: ({ children }: { children: React.ReactNode }) => children,
  }),
}));

jest.mock('../src/screens/home', () => {
  return {
    __esModule: true,
    default: () => null,
  };
});

jest.mock('../src/localization/locale', () => ({
  init: jest.fn(),
  setCurrentLanguage: jest.fn(),
  formatLanguageUnderscore: jest.fn(),
}));

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((msg) => {
    if (msg.includes('Functions are not valid as a React child')) {
      return; 
    }
    console.error(msg); 
  });
});

describe('App Component', () => {
  const mockProps = {
    language: 'en_US',
    dataUser: {
      id: '1',
      username: 'testUser',
    },
    navigationContainer: {
      navigation: {},
    },
    sharedFiles: [
      {
        id: '1',
        name: 'test.pdf',
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('initialization', () => {
    test('should initialize locale on mount', () => {
      render(
        <NavigationContainer>
          <App {...mockProps} />
        </NavigationContainer>
      );

      expect(locale.init).toHaveBeenCalledTimes(1);
    });

    test('should set current language on mount', () => {
      const formattedLanguage = 'en_US';
      (locale.formatLanguageUnderscore as jest.Mock).mockReturnValue(formattedLanguage);

      render(
        <NavigationContainer>
          <App {...mockProps} />
        </NavigationContainer>
      );

      expect(locale.formatLanguageUnderscore).toHaveBeenCalledWith(mockProps.language);
      expect(locale.setCurrentLanguage).toHaveBeenCalledWith(formattedLanguage);
    });
  });

  describe('language updates', () => {
    test('should update language when language prop changes', () => {
      const { rerender } = render(
        <NavigationContainer>
          <App {...mockProps} />
        </NavigationContainer>
      );

      const newLanguage = 'es_ES';
      const formattedNewLanguage = 'es_ES';
      (locale.formatLanguageUnderscore as jest.Mock).mockReturnValue(formattedNewLanguage);

      rerender(
        <NavigationContainer>
          <App {...mockProps} language={newLanguage} />
        </NavigationContainer>
      );

      expect(locale.formatLanguageUnderscore).toHaveBeenCalledWith(newLanguage);
      expect(locale.setCurrentLanguage).toHaveBeenCalledWith(formattedNewLanguage);
    });
  });
});
