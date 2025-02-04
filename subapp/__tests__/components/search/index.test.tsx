import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import Search from '../../../src/components/search';

// Mock the SearchContainer from etendo-ui-library
jest.mock('etendo-ui-library', () => ({
  SearchContainer: ({ onSubmit, value, onChangeText, placeholder }: any) => (
    <input
      testID="search-container"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={() => onSubmit(value)}
      placeholder={placeholder}
    />
  ),
}));

describe('Search Component', () => {
  const defaultProps = {
    onSubmit: jest.fn(),
    labels: {
      searchPlaceholder: 'Search...',
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with default props', () => {
    const { getByTestId } = render(<Search {...defaultProps} />);
    const searchContainer = getByTestId('search-container');
    expect(searchContainer).toBeTruthy();
    expect(searchContainer.props.placeholder).toBe('Search...');
  });

  test('initializes with empty text when no value prop is provided', () => {
    const { getByTestId } = render(<Search {...defaultProps} />);
    const searchContainer = getByTestId('search-container');
    expect(searchContainer.props.value).toBe('');
  });

  test('initializes with provided value prop', () => {
    const { getByTestId } = render(
      <Search {...defaultProps} value="initial value" />
    );
    const searchContainer = getByTestId('search-container');
    expect(searchContainer.props.value).toBe('initial value');
  });

  test('updates text when value prop changes', () => {
    const { getByTestId, rerender } = render(<Search {...defaultProps} />);
    rerender(<Search {...defaultProps} value="new value" />);
    const searchContainer = getByTestId('search-container');
    expect(searchContainer.props.value).toBe('new value');
  });

  test('handles text change correctly', () => {
    const { getByTestId } = render(<Search {...defaultProps} />);
    const searchContainer = getByTestId('search-container');
    
    act(() => {
      // Use onChangeText directly since we're testing a React Native component
      searchContainer.props.onChangeText('new text');
    });

    expect(searchContainer.props.value).toBe('new text');
  });

  test('calls onSubmit with empty string when no text is entered', () => {
    const { getByTestId } = render(<Search {...defaultProps} />);
    const searchContainer = getByTestId('search-container');
    
    act(() => {
      searchContainer.props.onSubmitEditing();
    });

    expect(defaultProps.onSubmit).toHaveBeenCalledWith('');
  });
});
