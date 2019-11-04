import { isLoading } from './isLoading';

describe('isLoading', () => {
  it('should return the initial state', () => {
    const expectedState = true;

    const result = isLoading(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return a bool', () => {
    const bool = true;
    const mockAction = {
      type: 'IS_LOADING',
      isLoading: bool
    }

    const result = isLoading(undefined, mockAction);

    expect(result).toEqual(bool);
  });
});