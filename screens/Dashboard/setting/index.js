/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import CompanySettings from './CompanySettings/CompanySettings';
import EmployeeSettings from './EmployeeSettings/EmployeeSettings';
import {Colors} from '../../../component/helpers/colors';

const Settings = () => {
  const route = useSelector(data => data.user.status);
  return (
    <ScrollView style={{backgroundColor: Colors.primaryBgColor}}>
      {route === 'organization' ? <CompanySettings /> : <EmployeeSettings />}
    </ScrollView>
  );
};

export default Settings;
