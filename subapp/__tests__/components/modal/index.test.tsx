import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Modal from '../../../src/components/modal';

// Mock the etendo-ui-library components
jest.mock('etendo-ui-library', () => ({
  Button: ({ text, onPress, testID = `button-${text}` }) => (
    <button testID={testID} onClick={onPress}>
      {text}
    </button>
  ),
  XIcon: () => 'XIcon',
  CheckIcon: () => 'CheckIcon',
}));

describe('Modal Component', () => {
  const defaultProps = {
    textModal: 'Test Modal Text',
    textConfirm: 'Confirm',
    textCancel: 'Cancel',
    visible: true,
    setVisible: jest.fn(),
    functionConfirm: jest.fn(),
    functionCancel: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly when visible', () => {
    const { getByText, getByTestId } = render(<Modal {...defaultProps} />);

    // Verify modal content is rendered
    expect(getByText('Test Modal Text')).toBeTruthy();
    expect(getByTestId('button-Confirm')).toBeTruthy();
    expect(getByTestId('button-Cancel')).toBeTruthy();
  });

  it('does not render when visible is false', () => {
    const { queryByText } = render(
      <Modal {...defaultProps} visible={false} />
    );

    // Verify modal content is not rendered
    expect(queryByText('Test Modal Text')).toBeNull();
  });

  it('calls functionCancel when cancel button is pressed', () => {
    const { getByTestId } = render(<Modal {...defaultProps} />);

    fireEvent.press(getByTestId('button-Cancel'));
    expect(defaultProps.functionCancel).toHaveBeenCalledTimes(1);
  });

  it('calls functionConfirm when confirm button is pressed', () => {
    const { getByTestId } = render(<Modal {...defaultProps} />);

    fireEvent.press(getByTestId('button-Confirm'));
    expect(defaultProps.functionConfirm).toHaveBeenCalledTimes(1);
  });

  it('calls setVisible when modal is closed via onRequestClose', () => {
    const { UNSAFE_getByType } = render(<Modal {...defaultProps} />);
    
    // Get the Modal component and trigger onRequestClose
    const modalComponent = UNSAFE_getByType('Modal');
    modalComponent.props.onRequestClose();
    
    expect(defaultProps.setVisible).toHaveBeenCalledTimes(1);
  });

  it('renders with custom text values', () => {
    const customProps = {
      ...defaultProps,
      textModal: 'Custom Modal Message',
      textConfirm: 'Yes',
      textCancel: 'No',
    };

    const { getByText, getByTestId } = render(<Modal {...customProps} />);
    
    expect(getByText('Custom Modal Message')).toBeTruthy();
    expect(getByTestId('button-Yes')).toBeTruthy();
    expect(getByTestId('button-No')).toBeTruthy();
  });
});
