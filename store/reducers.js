
const initialState = {
  authToken: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'INIT':
      return {
        authToken: action.payload,
      }
    case 'LOGIN':
      return {
        authToken: action.payload,
      }
    case 'LOGOUT':
      return {
        authToken: null,
      }
    default:
      return state;
  }
}