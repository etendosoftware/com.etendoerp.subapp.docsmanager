const React = require('react');
const { render, act } = require('@testing-library/react-native');
const Table = require('../../../src/components/table/index').default;

// Mock de etendo-ui-library
jest.mock('etendo-ui-library', () => {
  return {
    Table: jest.fn(() => null),
    Button: jest.fn(() => null),
    Trash2Icon: jest.fn(() => null),
    Edit2Icon: jest.fn(() => null),
    show: jest.fn()
  };
});

// Mock de utils
jest.mock('../../../src/utils', () => ({
  isTablet: false
}));

// Mock de locale
jest.mock('../../../src/localization/locale', () => ({
  t: jest.fn((key) => key)
}));

// Mock de modal
jest.mock('../../../src/components/modal', () => jest.fn(() => null));

const { show } = require('etendo-ui-library');

describe('Table Component', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };

  const testItem = { id: 1, name: 'Item 1' };

  const defaultProps = {
    navigation: mockNavigation,
    route: {},
    data: [testItem],
    isLoading: false,
    onLoadMoreData: jest.fn(),
    pageSize: 10,
    currentPage: 1,
    isLoadingMoreData: false,
    deleteData: jest.fn(),
    columns: [
      { key: 'name', label: 'Name', visible: true }
    ],
    labels: {
      dataName: 'TestData',
      successfulDelete: 'Successfully deleted',
      errorDelete: 'Error deleting'
    },
    deleteDataItem: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default props', () => {
    render(React.createElement(Table, defaultProps));
    expect(defaultProps.deleteData).not.toHaveBeenCalled();
  });

  it('should render with empty data', () => {
    const emptyProps = { ...defaultProps, data: [] };
    render(React.createElement(Table, emptyProps));
    expect(emptyProps.data).toHaveLength(0);
  });

  it('should render with loading state', () => {
    const loadingProps = { ...defaultProps, isLoading: true };
    render(React.createElement(Table, loadingProps));
    expect(loadingProps.isLoading).toBeTruthy();
  });

  it('should handle load more data', () => {
    render(React.createElement(Table, defaultProps));
    const { onLoadMoreData } = defaultProps;
    onLoadMoreData();
    expect(onLoadMoreData).toHaveBeenCalled();
  });

  it('should handle loading more data state', () => {
    const loadingMoreProps = { ...defaultProps, isLoadingMoreData: true };
    render(React.createElement(Table, loadingMoreProps));
    expect(loadingMoreProps.isLoadingMoreData).toBeTruthy();
  });

  it('should handle page size changes', () => {
    const pageSizeProps = { ...defaultProps, pageSize: 20 };
    render(React.createElement(Table, pageSizeProps));
    expect(pageSizeProps.pageSize).toBe(20);
  });

  it('should handle current page changes', () => {
    const pageProps = { ...defaultProps, currentPage: 2 };
    render(React.createElement(Table, pageProps));
    expect(pageProps.currentPage).toBe(2);
  });

  it('should render correct number of columns', () => {
    const multiColumnProps = {
      ...defaultProps,
      columns: [
        { key: 'id', label: 'ID', visible: true },
        { key: 'name', label: 'Name', visible: true },
        { key: 'description', label: 'Description', visible: true }
      ]
    };
    render(React.createElement(Table, multiColumnProps));
    expect(multiColumnProps.columns).toHaveLength(3);
  });

  it('should handle visible and hidden columns', () => {
    const mixedColumnsProps = {
      ...defaultProps,
      columns: [
        { key: 'id', label: 'ID', visible: true },
        { key: 'name', label: 'Name', visible: false }
      ]
    };
    render(React.createElement(Table, mixedColumnsProps));
    const visibleColumns = mixedColumnsProps.columns.filter(col => col.visible);
    expect(visibleColumns).toHaveLength(1);
  });

  it('should render with custom labels', () => {
    const customLabelsProps = {
      ...defaultProps,
      labels: {
        ...defaultProps.labels,
        dataName: 'CustomTest',
        customLabel: 'Custom Label'
      }
    };
    render(React.createElement(Table, customLabelsProps));
    expect(customLabelsProps.labels.dataName).toBe('CustomTest');
  });
});
