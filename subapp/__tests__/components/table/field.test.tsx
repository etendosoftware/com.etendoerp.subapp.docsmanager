import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Field from '../../../src/components/table/field';

// Mock the isTablet utility
jest.mock('../../../src/utils', () => ({
  isTablet: false
}));

// Mock etendo-ui-library
jest.mock('etendo-ui-library', () => ({
  Input: ({ onChangeText, value, placeholder, titleLabel, testID = 'input-field' }) => (
    <input
      testID={testID}
      value={value}
      placeholder={placeholder}
      aria-label={titleLabel}
      onChange={(e) => onChangeText(e.target.value)}
    />
  )
}));

describe('Field Component', () => {
  const defaultProps = {
    key: 'test-field',
    setValue: jest.fn(),
    getValue: 'test value',
    labels: {
      placeholder: 'Test Placeholder',
      title: 'Test Title'
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with default props', () => {
    const { getByTestId } = render(<Field {...defaultProps} />);
    expect(getByTestId('input-field')).toBeTruthy();
  });

  test('displays correct value', () => {
    const { getByTestId } = render(<Field {...defaultProps} />);
    const input = getByTestId('input-field');
    expect(input.props.value).toBe(defaultProps.getValue);
  });

  test('handles text changes correctly', () => {
    const { getByTestId } = render(<Field {...defaultProps} />);
    const input = getByTestId('input-field');
    const newValue = 'new test value';

    fireEvent.changeText(input, newValue);
    expect(defaultProps.setValue).toHaveBeenCalledWith(newValue);
  });

  test('passes correct props to InputUI', () => {
    const { getByTestId } = render(<Field {...defaultProps} />);
    const input = getByTestId('input-field');
    
    expect(input.props.placeholder).toBe(defaultProps.labels.placeholder);
    expect(input.props['aria-label']).toBe(defaultProps.labels.title);
  });

});
