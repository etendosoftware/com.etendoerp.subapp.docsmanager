import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Navbar from '../../../src/components/navbar/index';

// Mocking the dependencies
jest.mock('etendo-ui-library', () => ({
  Button: jest.fn(({ onPress, text }) => (
    <button testID="button" onPress={onPress}>{text}</button>
  )),
  Navbar: jest.fn(({ name, title, navbarComponents }) => (
    <div testID="etendo-navbar">
      <text testID="etendo-username">{name}</text>
      <text testID="etendo-title">{title}</text>
      {navbarComponents?.map((comp, index) => (
        <div key={index} testID={`navbar-component-${index}`}>
          {comp.component}
        </div>
      ))}
    </div>
  )),
  CornerDownLeftIcon: jest.fn(() => null),
}));

jest.mock('../../../src/localization/locale', () => ({ 
  t: jest.fn(str => str),
}));

const mockIsTablet = false;
jest.mock('../../../src/utils', () => ({
  isTablet: mockIsTablet,
}));

jest.mock('../../../styles', () => ({ 
  generalStyles: { icon: {} },
}));

describe('Navbar Component', () => {
  const username = 'testuser';
  const title = 'Test Title';
  const onOptionSelectedMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with correct username and title', () => {
    const { getByTestId } = render(
      <Navbar username={username} title={title} onOptionSelected={onOptionSelectedMock} />
    );

    const usernameElement = getByTestId('etendo-username');
    const titleElement = getByTestId('etendo-title');
    
    expect(usernameElement.props.children).toBe(username);
    expect(titleElement.props.children).toBe(title);
  });

  test('renders go back button when onOptionSelected is provided', () => {
    const { getByTestId } = render(
      <Navbar username={username} title={title} onOptionSelected={onOptionSelectedMock} />
    );

    const button = getByTestId('button');
    expect(button.props.children).toBe('Common.goBack');
  });

  test('calls onOptionSelected with "Home" route when go back button is clicked', () => {
    const { getByTestId } = render(
      <Navbar username={username} title={title} onOptionSelected={onOptionSelectedMock} />
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onOptionSelectedMock).toHaveBeenCalledTimes(1);
    expect(onOptionSelectedMock).toHaveBeenCalledWith('Home');
  });

  test('does not render navbar components when onOptionSelected is not provided', () => {
    const { UNSAFE_getByType } = render(
      <Navbar username={username} title={title} />
    );

    const navbarProps = UNSAFE_getByType('div').props;
    expect(navbarProps.navbarComponents).toBeUndefined();
  });

  test('renders correctly on tablet device', () => {
    jest.resetModules();
    jest.mock('../../../src/utils', () => ({
      isTablet: true,
    }));

    const { getByTestId } = render(
      <Navbar username={username} title={title} onOptionSelected={onOptionSelectedMock} />
    );

    expect(getByTestId('etendo-navbar')).toBeTruthy();
  });

  test('handles undefined profileOptions when onOptionSelected is not provided', () => {
    const { getByTestId } = render(
      <Navbar username={username} title={title} />
    );

    const navbar = getByTestId('etendo-navbar');
    expect(navbar).toBeTruthy();
  });
});
