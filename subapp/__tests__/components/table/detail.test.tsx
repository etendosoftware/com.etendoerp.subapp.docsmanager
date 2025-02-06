import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import TableDetail from '../../../src/components/table/detail';

// Mock Field component
jest.mock('../../../src/components/table/field', () => ({
  __esModule: true,
  default: ({ labels, setValue, getValue }) => (
    <div testID={`field-${labels.label.toLowerCase().replace(' ', '-')}`}>
      <input 
        testID="field-input"
        value={getValue()}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  ),
}));

// Mock Navbar
jest.mock('../../../src/components/navbar', () => ({
  __esModule: true,
  default: ({ title, username, onOptionSelected }) => (
    <div testID="navbar" onClick={() => onOptionSelected?.('Home')}>
      <span>{title}</span>
      <span>{username}</span>
    </div>
  ),
}));

// Mock Camera
jest.mock('../../../src/components/camera', () => ({
  __esModule: true,
  default: ({ show, handleReadCode }) => (
    <div testID="camera" show={show}>
      <button onClick={() => handleReadCode('test-code')}>Scan</button>
    </div>
  ),
}));

const mockShowAlert = jest.fn();

// Mock UI Library
jest.mock('etendo-ui-library', () => ({
  show: mockShowAlert,
  Button: ({ onPress, text, loading, testID }) => (
    <button 
      testID={testID || `button-${text.toLowerCase()}`} 
      onClick={onPress} 
      disabled={loading}
    >
      {text}
    </button>
  ),
  Input: ({ value, onChange, testID }) => (
    <input testID={testID || 'input'} value={value} onChange={onChange} />
  ),
  CheckIcon: () => null,
  TitleContainer: ({ title, buttons }) => (
    <div testID="title-container" data-title={title}>
      <h2>{title}</h2>
      <div>{buttons}</div>
    </div>
  ),
  XIcon: () => null,
  showAlert: mockShowAlert,
}));

// Mock Vision Camera
jest.mock('react-native-vision-camera', () => ({
  Camera: jest.fn(),
  CameraDevice: jest.fn(),
}));
const mockCreateData = jest.fn();
const mockUpdateData = jest.fn();

const mockNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
};

const mockRoute = {
  params: {
    dataUser: {
      username: 'testUser',
    },
    item: null,
  },
};

const mockFields = [
  {
    key: 'field1',
    labels: { label: 'Field 1' },
    setValue: jest.fn(),
    getValue: jest.fn(() => 'value1'),
    visible: true,
  },
  {
    key: 'field2',
    labels: { label: 'Field 2' },
    setValue: jest.fn(),
    getValue: jest.fn(() => 'value2'),
    visible: true,
  },
];

const mockLabels = {
  editTitle: 'Edit Record',
  newTitle: 'New Record',
  errorTitle: 'Error',
  successTitle: 'Success',
  successUpdateTitle: 'Update Success',
  successCreateTitle: 'Create Success',
  connectionError: 'Connection Error',
  navbarTitle: 'Table Detail',
  cancel: 'Cancel',
  save: 'Save',
};

describe('TableDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (props = {}) => {
    return render(
      <TableDetail
        navigation={mockNavigation}
        route={mockRoute}
        createData={jest.fn()}
        updateData={jest.fn()}
        fields={mockFields}
        labels={mockLabels}
        {...props}
      />
    );
  };

  describe('Rendering', () => {

    it('renders fields correctly', () => {
      const { getByTestId } = renderComponent();
      mockFields.forEach((field) => {
        const fieldId = `field-${field.labels.label.toLowerCase().replace(' ', '-')}`;
        expect(getByTestId(fieldId)).toBeTruthy();
      });
    });

    it('renders with existing data', () => {
      const routeWithItem = {
        params: {
          ...mockRoute.params,
          item: { field1: 'existing1', field2: 'existing2' },
        },
      };
      renderComponent({ route: routeWithItem });
      mockFields.forEach(field => {
        expect(field.setValue).toHaveBeenCalledWith(routeWithItem.params.item[field.key]);
      });
    });
  });

  describe('Interactions', () => {
    it('handles cancel button press', async () => {
      const { getByTestId } = renderComponent();
      await act(async () => {
        fireEvent.press(getByTestId('button-cancel'));
      });
      expect(mockNavigation.goBack).toHaveBeenCalled();
    });

  });

  describe('Camera', () => {
    it('handles QR code scanning', async () => {
      const { getByTestId } = renderComponent();
      const codeValue = 'test-qr-code';

      await act(async () => {
        fireEvent(getByTestId('camera'), 'handleReadCode', codeValue);
      });

      expect(getByTestId('camera').props.show).toBeFalsy();
    });
  });

  describe('Navigation', () => {
    it('handles navbar navigation correctly', () => {
      const { getByTestId } = render(
        <TableDetail
          navigation={mockNavigation}
          route={mockRoute}
          createData={mockCreateData}
          updateData={mockUpdateData}
          fields={mockFields}
          labels={mockLabels}
        />
      );
  
      fireEvent(getByTestId('navbar'), 'onOptionSelected', 'Home');
      expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
    });
  });
    
  describe('Title Handling', () => {
    it('sets correct title for new record', () => {
      const { getByTestId } = render(
        <TableDetail
          navigation={mockNavigation}
          route={mockRoute}
          createData={mockCreateData}
          updateData={mockUpdateData}
          fields={mockFields}
          labels={mockLabels}
        />
      );
  
      const titleContainer = getByTestId('title-container');
      expect(titleContainer.props['data-title']).toBe(mockLabels.newTitle);
    });

  });
});
