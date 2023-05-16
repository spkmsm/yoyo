// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/auth/Home';
import Login from './screens/auth/Login';
import StatusChecking from './screens/auth/StatusChecking';
import Otp from './screens/auth/Otp';
import Form from './screens/auth/CompanyForm';
import EmployeeForm from './screens/auth/EmployeeForm';
import ProfileHome from './screens/Dashboard/ProfileHome';
import Helperdesk from './screens/Dashboard/Helperdesk';
import SettingsScreen from './screens/Dashboard/SettingsScreen';
import AttendanceView from './screens/Dashboard/attendanceview';
import {Provider} from 'react-redux';
import {store} from './redux/store/PrimaryStores';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OTP" component={Otp} />
          <Stack.Screen name="StatusChecking" component={StatusChecking} />
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="EmployeeForm" component={EmployeeForm} />
          <Stack.Screen name="ProfileHome" component={ProfileHome} />
          <Stack.Screen name="Helperdesk" component={Helperdesk} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="AttendanceView" component={AttendanceView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
