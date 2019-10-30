export const exoplanets = (state = false, action) => {
  switch (action.type) {
    case 'ADD_EXOPLANETS':
      return action.exoplanets
    default:
      return state
  }
}