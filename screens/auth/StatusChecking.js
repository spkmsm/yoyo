/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../component/helpers/colors';
import Icons from 'react-native-vector-icons/Fontisto';
import CustomButton from './CustomButton';

const Login = ({navigation}) => {
  const [status, setStatus] = useState('organization');
  return (
    <View
      style={{
        backgroundColor: Colors.primaryBgColor,
        width: '100%',
        flex: 1,
        paddingTop: '30%',
        alignItems: 'center',
        gap: 100,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          width: '80%',
          color: 'gray',
          fontSize: 17,
          textAlign: 'center',
        }}>
        Which one are you?
      </Text>
      <View style={{flexDirection: 'row', gap: 50}}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            setStatus('organization');
          }}>
          <Image
            source={require('../../assets/images/organization.png')}
            color={status === 'organization' ? Colors.primaryTextColor : 'gray'}
            size={50}
          />
          <Text style={{fontWeight: 'bold', color: 'gray'}}>
            {status === 'organization' ? status : ''}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            setStatus('Employee');
          }}>
          <Image
            source={require('../../assets/images/employee.png')}
            color={status === 'Employee' ? Colors.primaryTextColor : 'gray'}
            size={50}
          />

          <Text style={{fontWeight: 'bold', color: 'gray'}}>
            {status === 'Employee' ? status : ''}
          </Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        width={'60%'}
        borderRadius={10}
        forWhat="Continue"
        goto="Form"
        withData={status}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 10,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
