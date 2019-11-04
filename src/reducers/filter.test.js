import { filters } from './filters';

describe('filters', () => {
  it('should return the initial state', () => {
    const initialState = {
      distance: 10,
      gravity: 1,
      year: 365
    }
    const expectedState = initialState;

    const result = filters(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return filters', () => {
    const initialState = {
      distance: 10,
      gravity: 1,
      year: 365
    }
    const mockFilters = {
      distance: 100,
      gravity: 2,
      year: 1000
    };
    const mockAction = {
      type: 'ADD_FILTERS',
      filters: mockFilters
    }
    const expectedState = mockFilters;

    const result = filters(initialState, mockAction);

    expect(result).toEqual(expectedState);
  });
});