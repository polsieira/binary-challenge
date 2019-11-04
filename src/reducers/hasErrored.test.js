import { hasErrored } from './hasErrored';

describe('hasErrored', () => {
  it('should return the initial state', () => {
    const expectedState = '';

    const result = hasErrored(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return a message', () => {
    const message = 'You done messed up';
    const mockAction = {
      type: 'HAS_ERRORED',
      message
    }
    const expectedState = message;

    const result = hasErrored(undefined, mockAction);

    expect(result).toEqual(expectedState);
  });
});