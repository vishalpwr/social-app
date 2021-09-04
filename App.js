import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Feeds from './src/screens/Feeds';
import DetailPage from './src/screens/DetailPage';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// const Stack = createStackNavigator();
const Stack = createSharedElementStackNavigator()

const options = {
  headerShown: false,
  gestureEnabled: true,
  transitionSpec: {
    open: {animation: 'timing', config: {duration: 300}},
    close: {animation: 'timing', config: {duration: 300}},
  },
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {
        opacity: progress
      }
    }
  }
}

const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Feeds" component={Feeds} />
      <Stack.Screen name="Detail" component={DetailPage}
        options={{
          gestureEnabled: true,
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 300}},
            close: {animation: 'timing', config: {duration: 300}},
          },
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              }
            }
          }
        }}
       />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' barStyle="light-content" />
      <MyStack />
    </NavigationContainer>
  )
}

export default App;