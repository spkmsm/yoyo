// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/auth/Home';
import Login from './screens/auth/Login';
import StatusChecking from './screens/auth/StatusChecking';
import Otp from './screens/auth/Otp';
import Form from './screens/auth/Form';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={Otp} />
        <Stack.Screen name="StatusChecking" component={StatusChecking} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
