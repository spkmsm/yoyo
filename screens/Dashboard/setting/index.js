/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

import CompanySettings from './CompanySettings/CompanySettings';
import EmployeeSettings from './EmployeeSettings/EmployeeSettings';
import {Colors} from '../../../component/helpers/colors';

const Settings = () => {
  const route = useRoute();
  console.log(route);
  return (
    <ScrollView style={{backgroundColor: Colors.primaryBgColor}}>
      {route.params.data === 'organization' ? (
        <CompanySettings />
      ) : (
        <EmployeeSettings />
      )}
    </ScrollView>
  );
};

export default Settings;
