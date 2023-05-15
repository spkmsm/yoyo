/* eslint-disable react-native/no-inline-styles */
import {Share, View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import QuickAccess from './QuickAccess';
import Icon from 'react-native-vector-icons/Feather';
import ManageAttendance from './ManageAttendance';
import EmployeesDetails from './EmployeesDetails';

const Company = () => {
  return (
    <View>
      <ManageAttendance />
      <QuickAccess />
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          paddingTop: 10,
        }}>
        <TouchableWithoutFeedback
          onPress={async () =>
            await Share.share({message: 'Weboney Attendance APK'})
          }>
          <View
            style={{
              width: '94%',
              flexDirection: 'row',
              backgroundColor: '#01a4ec',
              padding: 10,
              borderRadius: 5,
              gap: 10,
              justifyContent: 'center',
            }}>
            <Icon name="user-plus" size={18} color="white" />
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Invite Staff via Link
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <EmployeesDetails />
    </View>
  );
};

export default Company;
