/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

const ManageAttendance = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '96%',
          backgroundColor: '#01a4ec',
          height: 120,
          borderRadius: 7,
        }}>
        <Text
          style={{
            padding: 10,
            fontWeight: 'bold',
            fontSize: 15,
            color: 'white',
          }}>
          Today Attendance
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',

            gap: 50,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text style={{fontSize: 20, color: 'white'}}>0/2</Text>
            <Text style={{fontSize: 20, color: 'white'}}>Present</Text>
          </View>
          <Icons
            name="ios-document-text-outline"
            color="white"
            size={45}
            style={{padding: 10}}
          />
        </View>
      </View>
    </View>
  );
};

export default ManageAttendance;
