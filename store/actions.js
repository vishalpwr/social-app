import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = () => {
  return async dispatch => {
    const username = await AsyncStorage.getItem('username');
    const password = await AsyncStorage.getItem('password');
    let token = null;
    if (username && password) {
      token = username + password;
      console.log('username fetched', username, password);
    }
    dispatch({
      type: 'INIT',
      payload: token,
    })
  }
}

export const Login = (username, password) => {
  return async dispatch => {
    let token = null;
    if (username === 'vishal' && password == '1234') {
      token = username + password;
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      console.log('username stored');
    }
    dispatch({
      type: 'LOGIN',
      payload: token,
    })
  }
}

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
    type: 'LOGOUT'
  })
}
}