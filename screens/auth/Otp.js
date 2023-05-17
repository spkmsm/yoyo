/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../component/helpers/colors';

const Login = ({route, navigation}) => {
  const initialValue = {
    box1: '',
    box2: '',
    box3: '',
    box4: '',
  };
  const [formData, setFormData] = useState(initialValue);

  const handleVerifyotp = () => {
    try {
      if (
        route.params.otp.otp ===
        +`${formData.box1}${formData.box2}${formData.box3}${formData.box4}`
      ) {
        navigation.navigate('StatusChecking', {
          phone: route.params.phoneNumber,
        });
      } else {
        Alert.alert('Invalid OTP');
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      <View style={{flexDirection: 'row', gap: 25, paddingTop: 85}}>
        <TextInput
          style={styles.box}
          textAlign="center"
          onChangeText={e => {
            setFormData(pre => ({...pre, ['box1']: e}));
          }}
        />
        <TextInput
          style={styles.box}
          textAlign="center"
          onChangeText={e => {
            setFormData(pre => ({...pre, ['box2']: e}));
          }}
        />
        <TextInput
          style={styles.box}
          textAlign="center"
          onChangeText={e => {
            setFormData(pre => ({...pre, ['box3']: e}));
          }}
        />
        <TextInput
          style={styles.box}
          textAlign="center"
          onChangeText={e => {
            setFormData(pre => ({...pre, ['box4']: e}));
          }}
        />
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

      <TouchableWithoutFeedback onPress={handleVerifyotp}>
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
            verify
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '10%',
    elevation: 10,
    borderRadius: 10,
    borderWidth: 0,
    color: 'black',
    gap: 10,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 10,
  },

  underlineStyleHighLighted: {
    borderColor: 'red',
  },
});

export default Login;
