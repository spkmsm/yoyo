/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../component/helpers/colors';
import CustomButton from './CustomButton';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: '25%',
        backgroundColor: Colors.primaryBgColor,
      }}>
      <Image
        source={require('../../assets/logo/logolarge.png')}
        style={{width: 270, height: 270, resizeMode: 'contain'}}
      />
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          color: Colors.primaryTextColor,
        }}>
        Weboney
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'gray',
          paddingTop: 10,
        }}>
        Better Way to Manage Your Employee
      </Text>
      <CustomButton
        width={150}
        borderRadius={50}
        forWhat="Manage now"
        goto="Login"
      />
    </View>
  );
};

export default Home;
