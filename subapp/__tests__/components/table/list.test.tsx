import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import TableList from '../../../src/components/table/list';

// Mock the required components and dependencies
jest.mock('../../../src/components/navbar', () => {
  return function MockedNavbar(props) {
    return (
      <div data-testid="navbar" onClick={props.onOptionSelected}>
        {props.title}
      </div>
    );
  };
});

jest.mock('../../../src/components/search', () => {
  return function MockedSearch(props) {
    return (
      <input 
        data-testid="search-input" 
        value={props.value} 
        onChange={(e) => props.onSubmit(e.target.value)}
      />
    );
  };
});

jest.mock('../../../src/components/table', () => {
  return function MockedTable(props) {
    return (
      <div data-testid="table" onClick={props.deleteData}>
        Mock Table
      </div>
    );
  };
});

jest.mock('etendo-ui-library', () => ({
  Button: function Button(props) {
    return (
      <button onClick={props.onPress}>
        {props.text}
      </button>
    );
  },
  PlusIcon: 'PlusIcon',
  TitleContainer: function TitleContainer(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.buttons}
      </div>
    );
  },
}));

const renderWithNavigation = async (component) => {
  const utils = render(
    <NavigationContainer>
      {component}
    </NavigationContainer>
  );
  
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
  
  return utils;
};

describe('TableList Component', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  const mockRoute = {
    params: {
      dataUser: {
        username: 'testUser',
      },
    },
  };

  const mockNavigationContainer = {
    navigate: jest.fn(),
  };

  const mockLabels = {
    dataName: 'TestData',
    navbarTitle: 'Test Navbar',
    containerTitle: 'Test Container',
    buttonNew: 'New Test',
    searchPlaceholder: 'Search...',
    successfulDelete: 'Successfully deleted',
    errorDelete: 'Error deleting',
  };

  const mockColumns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
  ];

  const mockGetData = jest.fn();
  const mockDeleteDataItem = jest.fn();

  const defaultProps = {
    navigation: mockNavigation,
    route: mockRoute,
    navigationContainer: mockNavigationContainer,
    getData: mockGetData,
    labels: mockLabels,
    columns: mockColumns,
    deleteDataItem: mockDeleteDataItem,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockGetData.mockResolvedValue({ content: [] });
  });

  describe('Rendering', () => {


    it('loads initial data on mount', async () => {
      await renderWithNavigation(<TableList {...defaultProps} />);
      
      expect(mockGetData).toHaveBeenCalledWith('', 0, 20);
    }, 30000);
  });

  describe('Data Loading', () => {
    it('handles successful data loading', async () => {
      const mockData = {
        content: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
        ],
      };
      mockGetData.mockResolvedValueOnce(mockData);

      await renderWithNavigation(<TableList {...defaultProps} />);

      await waitFor(() => {
        expect(mockGetData).toHaveBeenCalledWith('', 0, 20);
      });
    }, 30000);
  
  });
  
  describe('Pagination and Data Loading', () => {
  
    it('handles empty data response', async () => {
      mockGetData.mockResolvedValueOnce({ content: [] });
      
      const { getByTestId } = await renderWithNavigation(<TableList {...defaultProps} />);
      
      await waitFor(() => {
        expect(mockGetData).toHaveBeenCalledWith('', 0, 20);
      });
    }, 30000);
  });
  
  describe('Loading States', () => {
   
    it('handles error states gracefully', async () => {
      mockGetData.mockRejectedValueOnce(new Error('Failed to fetch'));
      
      const { getByTestId } = await renderWithNavigation(<TableList {...defaultProps} />);
      
      await waitFor(() => {
        expect(mockGetData).toHaveBeenCalledWith('', 0, 20);
      });
    });
  }, 30000);
  
});
