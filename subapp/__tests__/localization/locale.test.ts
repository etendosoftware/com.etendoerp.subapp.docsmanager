import i18n from 'i18n-js';
import { enUS, esES } from 'date-fns';
import locale from '../../src/localization/locale';
import ES from '../../src/lang/esES.json';
import EN from '../../src/lang/enUS.json';

// Mock the i18n-js module
jest.mock('i18n-js', () => ({
  locale: 'en-US',
  fallbacks: false,
  defaultLocale: '',
  translations: {},
  t: jest.fn((key, params) => key),
}));

// Mock the Localization object
const mockLocalization = {
  locale: 'en-US'
};

// Add the mock to the global object
(global as any).Localization = mockLocalization;

describe('locale module', () => {
  beforeEach(() => {
    // Reset i18n configuration before each test
    i18n.locale = 'en-US';
    i18n.fallbacks = false;
    i18n.defaultLocale = '';
    i18n.translations = {};
    (global as any).Localization.locale = 'en-US';
    locale.currentDateLocale = null;
    jest.clearAllMocks();
  });

  
  describe('t()', () => {
    it('should call i18n.t with correct parameters', () => {
      const key = 'test.key';
      const params = { value: 'test' };
      
      locale.t(key, params);
      expect(i18n.t).toHaveBeenCalledWith(key, params);
    });
  });

  describe('setCurrentLanguage()', () => {
    it('should set new language correctly', () => {
      locale.setCurrentLanguage('es_ES');
      
      expect(i18n.locale).toBe('es-ES');
      expect(i18n.translations).toHaveProperty('es-ES');
      expect(i18n.translations['es-ES']).toBe(ES);
    });

    it('should handle unsupported language', () => {
      locale.setCurrentLanguage('fr_FR');
      
      expect(i18n.locale).toBe('fr-FR');
      expect(Object.keys(i18n.translations)).toHaveLength(0);
    });
  });

  describe('formatDate()', () => {
    it('should format date correctly', () => {
      locale.init(); // Initialize with default locale
      const testDate = new Date(2023, 0, 1); // January 1, 2023
      const formatStr = 'yyyy-MM-dd';
      
      const result = locale.formatDate(testDate, formatStr);
      expect(result).toBe('2023-01-01');
    });

    it('should throw error for invalid date format', () => {
      locale.init();
      const testDate = new Date(2023, 0, 1);
      const invalidFormat = 'invalid';
      
      expect(() => locale.formatDate(testDate, invalidFormat)).toThrow();
    });
  });

  describe('parseISODate()', () => {
    it('should parse ISO date string correctly', () => {
      const isoDate = '2023-01-01T00:00:00.000Z';
      const result = locale.parseISODate(isoDate);
      
      expect(result).toBeInstanceOf(Date);
      expect(result.getUTCFullYear()).toBe(2023);
      expect(result.getUTCMonth()).toBe(0);
      expect(result.getUTCDate()).toBe(1);
    });
  });

  describe('getDeviceLocale()', () => {
    it('should return current locale if supported', () => {
      locale.init();
      i18n.locale = 'en-US';
      
      const result = locale.getDeviceLocale();
      expect(result).toBe('en-US');
    });

    it('should return fallback language if current locale not supported', () => {
      (global as any).Localization.locale = 'fr-FR';
      locale.init();
      
      const result = locale.getDeviceLocale();
      expect(result).toBe('en-US');
    });
  });

  describe('formatLanguageUnderscore()', () => {
    it.each([
      ['en', false, 'en_US'],
      ['en-US', false, 'en_US'],
      ['en_US', false, 'en_US'],
      ['es', false, 'es_ES'],
      ['es-ES', false, 'es_ES'],
      ['es_ES', false, 'es_ES'],
      ['other', false, 'en_US'],
      ['en', true, 'en-US'],
      ['en-US', true, 'en-US'],
      ['en_US', true, 'en-US'],
      ['es', true, 'es-ES'],
      ['es-ES', true, 'es-ES'],
      ['es_ES', true, 'es-ES'],
      ['other', true, 'en-US'],
    ])('should format %s correctly with dash=%s', (input, dash, expected) => {
      const result = locale.formatLanguageUnderscore(input, dash);
      expect(result).toBe(expected);
    });
  });

  describe('getLanguageName()', () => {
    it('should return formatted language name for supported languages', () => {
      expect(locale.getLanguageName('en')).toBe('en-US');
      expect(locale.getLanguageName('es')).toBe('es-ES');
    });

  });

  describe('languageByDefault()', () => {
    it('should return default language format', () => {
      const result = locale.languageByDefault();
      expect(result).toBe('en-US');
    });
  });
});
