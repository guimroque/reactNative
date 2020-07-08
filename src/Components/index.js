
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './Login'
import home from './Home'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={login} />
        <Stack.Screen name='Home' component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;