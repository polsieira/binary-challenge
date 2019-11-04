import { user } from './user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      name: '',
      id: '',
      isLoggedIn: false
    };

    const result = user(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return a user', () => {
    const name = 'Meep meep';
    const id = 5;
    const isSignedIn = true;
    const userInfo = {
      name,
      id,
      isSignedIn
    };
    const mockAction = {
      type: 'LOGIN_USER',
      userInfo
    };

    const result = user(undefined, mockAction);

    expect(result).toEqual(userInfo);
  });
});