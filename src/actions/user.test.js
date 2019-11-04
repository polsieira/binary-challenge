import * as actions from '../actions';

describe('user actions', () => {
  it('should have a type of LOGIN_USER and return a name, id, and boolean', () => {
    const name = 'Pol';
    const id = 2;
    const isSignedIn = true;
    const userInfo = {
      name,
      id,
      isSignedIn
    }
    const expectedAction = {
      type: "LOGIN_USER",
      userInfo
    };

    expect(actions.loginUser(userInfo)).toEqual(expectedAction)
  });

});


