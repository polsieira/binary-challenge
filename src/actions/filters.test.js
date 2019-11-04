import * as actions from '../actions';

describe('filter actions', () => {

  it('should have a type of ADD_FILTERS and filters as a payload', () => {
    const filters = {
      distance: 10,
      year: 365,
      gravity: 0.5
    }

    const expectedAction = {
      type: "ADD_FILTERS",
      filters
    };

    expect(actions.addFilters(filters)).toEqual(expectedAction)
  });

});