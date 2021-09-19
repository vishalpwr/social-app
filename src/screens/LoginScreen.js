import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { Login } from '../../store/actions';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Login(username, password))
  }
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        label="Username"
        mode="outlined"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button mode="contained"
        onPress={submit}
        style={{marginTop: 20}}
      >Login</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  }
})
