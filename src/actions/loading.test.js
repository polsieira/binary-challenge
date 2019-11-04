import * as actions from '../actions';

describe('loading actions', () => {

  it('should have a type of IS_LOADING and a boolean as a payload', () => {
    const bool = true;

    const expectedAction = {
      type: "IS_LOADING",
      isLoading: bool
    };

    expect(actions.checkIsLoading(bool)).toEqual(expectedAction)
  });

});