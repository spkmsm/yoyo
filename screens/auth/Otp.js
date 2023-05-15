/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../component/helpers/colors';
import CustomButton from './CustomButton';

const Login = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.primaryBgColor,
        width: '100%',
        flex: 1,
        paddingTop: '30%',
        alignItems: 'center',
        gap: 45,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          width: '80%',
          color: 'gray',
          fontSize: 17,
          textAlign: 'center',
        }}>
        We have Send SMS with an Verification code to your phone
        <Text>+91 9876543210</Text>
      </Text>
      <View style={{flexDirection: 'row', gap: 15, paddingTop: 85}}>
        <TextInput style={styles.box} textAlign="center" />
        <TextInput style={styles.box} textAlign="center" />
        <TextInput style={styles.box} textAlign="center" />
        <TextInput style={styles.box} textAlign="center" />
        <TextInput style={styles.box} textAlign="center" />
        <TextInput style={styles.box} textAlign="center" />
      </View>
      <Text
        onPress={() => navigation.navigate('Login')}
        style={{
          alignSelf: 'flex-end',
          fontWeight: 'bold',
          color: Colors.primaryTextColor,
          paddingRight: 50,
        }}>
        Change Number?
      </Text>
      <CustomButton
        width={'80%'}
        borderRadius={10}
        forWhat="Verify"
        goto="StatusChecking"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    width: '10%',
    elevation: 10,
    borderRadius: 10,
    borderWidth: 0,
    color: 'black',
  },
});

export default Login;
