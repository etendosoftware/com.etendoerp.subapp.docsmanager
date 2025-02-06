import { BaseService } from '../../../src/lib/base/baseservice';
import { EntityType } from '../../../src/lib/base/baseservice.types';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Mock console.log to avoid noise in tests
console.log = jest.fn();

// Mock the logger
jest.mock('../../../src/utils/log', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Test implementation of BaseService
interface TestEntity extends EntityType {
  name: string;
}

class TestService extends BaseService<TestEntity> {
  getModelName(): string {
    return 'test';
  }
  
  getFetchName(): string {
    return 'test';
  }
}

describe('BaseService', () => {
  let service: TestService;
  const mockEntity: TestEntity = {
    id: '1',
    name: 'Test Entity'
  };

  beforeEach(() => {
    service = new TestService();
    service.url = 'http://test-api';
    service.authToken = 'test-token';
    mockFetch.mockClear();
  });

  describe('save', () => {
    it('should create a new entity with POST request', async () => {
      const newEntity = { name: 'New Entity' } as TestEntity;
      const expectedResponse = { id: '1', name: 'New Entity' };
      
      mockFetch.mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(expectedResponse)
        })
      );

      const result = await service.save(newEntity);
      
      expect(mockFetch).toHaveBeenCalledWith(
        'http://test-api/das/test',
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(newEntity),
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            'X-TOKEN': 'test-token'
          })
        })
      );
      expect(result).toEqual(expectedResponse);
    });

    it('should update an existing entity with PUT request', async () => {
      const expectedResponse = { ...mockEntity };
      
      mockFetch.mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(expectedResponse)
        })
      );

      const result = await service.save(mockEntity);
      
      expect(mockFetch).toHaveBeenCalledWith(
        'http://test-api/das/test/1',
        expect.objectContaining({
          method: 'PUT',
          body: JSON.stringify(mockEntity)
        })
      );
      expect(result).toEqual(expectedResponse);
    });

    it('should handle error responses', async () => {
      mockFetch.mockImplementationOnce(() => 
        Promise.resolve({
          ok: false,
          status: 400,
          statusText: 'Bad Request',
          json: () => Promise.resolve({ message: 'Invalid request' })
        })
      );

      await expect(service.save(mockEntity)).rejects.toThrow('HTTP 400: Invalid request');
    });
  });

  describe('delete', () => {
    it('should delete an entity successfully', async () => {
      mockFetch.mockImplementationOnce(() => 
        Promise.resolve({
          status: 204,
          ok: true
        })
      );

      const status = await service.delete('1');
      
      expect(mockFetch).toHaveBeenCalledWith(
        'http://test-api/das/test/1',
        expect.objectContaining({
          method: 'DELETE',
          headers: expect.objectContaining({
            'X-TOKEN': 'test-token'
          })
        })
      );
      expect(status).toBe(204);
    });
  });

  describe('_fetchSearch', () => {
    it('should fetch search results with correct parameters', async () => {
      const mockResponse = {
        content: [mockEntity],
        pageable: {},
        totalElements: 1,
        totalPages: 1,
        last: true,
        size: 20,
        sort: {},
        numberOfElements: 1,
        first: true,
        empty: false
      };

      mockFetch.mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      );

      const params = { page: 1, size: 20 };
      const result = await service._fetchSearch('testSearch', params);
      
      expect(mockFetch).toHaveBeenCalledWith(
        'http://test-api/das/test/searches/testSearch?page=1&size=20',
        expect.objectContaining({
          method: 'GET',
          headers: expect.objectContaining({
            'X-TOKEN': 'test-token'
          })
        })
      );
      expect(result).toEqual(mockResponse);
    });

    it('should handle null parameters correctly', async () => {
      const mockResponse = {
        content: [],
        pageable: {},
        totalElements: 0,
        totalPages: 0,
        last: true,
        size: 20,
        sort: {},
        numberOfElements: 0,
        first: true,
        empty: true
      };

      mockFetch.mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      );

      const params = { filter: null };
      const result = await service._fetchSearch('testSearch', params);
      
      expect(mockFetch).toHaveBeenCalledWith(
        'http://test-api/das/test/searches/testSearch?',
        expect.any(Object)
      );
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getters and setters', () => {
    it('should get and set authToken correctly', () => {
      service.authToken = 'new-token';
      expect(service.authToken).toBe('new-token');
    });

    it('should get and set url correctly', () => {
      service.url = 'new-url';
      expect(service.url).toBe('new-url');
    });
  });
});
