/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

const Header = () => {
  const router = useRoute();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        position: 'relative',
        top: 0,
        backgroundColor: 'white',
      }}>
      <Text style={{fontWeight: 'bold'}}>
        {router.params.data === 'organization'
          ? 'Organization Name'
          : 'Employee Name'}
      </Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Icons name="ios-notifications-outline" size={20} />
        <Avatar.Image
          size={20}
          source={require('../../assets/images/sprofile.png')}
        />
      </View>
    </View>
  );
};

export default Header;
