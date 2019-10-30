export const exoplanets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXOPLANETS':
      return action.exoplanets
    default:
      return state
  }
}