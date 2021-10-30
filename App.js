import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';
import Feeds from './src/screens/Feeds';
import DetailPage from './src/screens/DetailPage';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import LoginScreen from './src/screens/LoginScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store';
import Profile from './src/screens/Profile';
import { ActivityIndicator } from 'react-native-paper';
import Colors from './src/constants/Colors';
import { Init } from './src/store/actions';
const Stack = createSharedElementStackNavigator()

const options = {
  gestureEnabled: true,
  transitionSpec: {
    open: { animation: 'timing', config: { duration: 300 } },
    close: { animation: 'timing', config: { duration: 300 } },
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      }
    }
  }
}

const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Feeds" component={Feeds} />
      <Stack.Screen name="Detail" component={DetailPage}
        options={options}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

const RootNavigation = () => {
  const token = useSelector(state => state.Reducers.authToken);
  console.log(token);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  }

  useEffect(() => {
    init()
  }, [])

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    )
  }
  
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' barStyle="light-content" />
      {
        token === null ?
          <AuthStack /> : <MyStack />
      }
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}

export default App;