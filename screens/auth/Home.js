/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Colors} from '../../component/helpers/colors';

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
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
        <View
          style={{
            backgroundColor: Colors.primaryBtnColor,
            padding: 12,
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            elevation: 1,
            position: 'absolute',
            bottom: 100,
          }}>
          <Text
            style={{
              color: '#ffff',
              width: 120,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Manage now
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Home;
