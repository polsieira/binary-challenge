const initialState = {
  distance: 10,
  gravity: 1,
  year: 365
}

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FILTERS':
      return action.filters
    default:
      return state
  }
}