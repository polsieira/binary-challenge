const initialState = {
  name: '',
  id: '',
  isLoggedIn: false
}

export const user = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'LOGIN_USER':
      return action.userInfo
    default:
      return state
  }
}