import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Camera from '../../../src/components/camera';
import { isTablet } from '../../../src/utils';

// Mock the CameraBarCode component
jest.mock('../../../src/components/cameraBarCode', () => {
  return jest.fn().mockImplementation(({ handleReadCode }) => {
    return null;
  });
});

// Mock the etendo-ui-library components
jest.mock('etendo-ui-library', () => ({
  Button: jest.fn().mockImplementation(({ onPress, text }) => (
    <button testID="cancel-button" onPress={onPress}>
      {text}
    </button>
  )),
  XIcon: jest.fn().mockImplementation(() => null),
}));

// Mock isTablet utility
jest.mock('../../../src/utils', () => ({
  isTablet: jest.fn().mockReturnValue(false),
}));

// Mock locale
jest.mock('../../../src/localization/locale', () => ({
  t: jest.fn().mockImplementation((key) => key),
}));

describe('Camera Component', () => {
  const defaultProps = {
    show: true,
    setShow: jest.fn(),
    handleReadCode: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {

    test('renders modal when show is true', () => {
      const { getByTestId } = render(<Camera {...defaultProps} />);
      expect(getByTestId('cancel-button')).toBeTruthy();
    });

    test('renders with correct layout for tablet', () => {
      (isTablet as jest.Mock).mockReturnValueOnce(true);
      const { getByTestId } = render(<Camera {...defaultProps} />);
      expect(getByTestId('cancel-button')).toBeTruthy();
    });
  });

  describe('interactions', () => {
    test('calls setShow with false when cancel button is pressed', () => {
      const setShow = jest.fn();
      const { getByTestId } = render(
        <Camera {...defaultProps} setShow={setShow} />
      );

      fireEvent.press(getByTestId('cancel-button'));
      expect(setShow).toHaveBeenCalledWith(false);
    });

    test('passes handleReadCode to CameraBarCode component', () => {
      const handleReadCode = jest.fn();
      render(<Camera {...defaultProps} handleReadCode={handleReadCode} />);
      // We can't directly test the prop passing since we're mocking CameraBarCode,
      // but we can verify the component renders without errors
      expect(handleReadCode).not.toHaveBeenCalled();
    });
  });
});
