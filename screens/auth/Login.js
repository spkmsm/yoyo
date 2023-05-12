/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Colors} from '../../component/helpers/colors';
import PhoneInput from 'react-native-phone-number-input';
const Login = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.primaryBgColor,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <View style={{gap: 20}}>
        <PhoneInput
          textInputStyle={{padding: 0, height: 20, fontWeight: 'bold'}}
          textContainerStyle={{
            backgroundColor: 'white',
            borderRadius: 10,
          }}
          containerStyle={{borderRadius: 10, height: 50, elevation: 2}}
          codeTextStyle={{color: 'black'}}
          flagButtonStyle={{color: 'black'}}
          phoneInputContainer={true}
          textInputProps={{placeholderTextColor: 'gray'}}
        />
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('OTP')}>
        <View
          style={{
            backgroundColor: Colors.primaryBtnColor,
            padding: 12,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            elevation: 2,
            width: '80%',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Continue
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;
