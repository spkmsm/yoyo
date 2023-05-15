/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import {Colors} from '../../component/helpers/colors';
import Footer from './Footer';
import Company from './company';
import {useRoute} from '@react-navigation/native';
import Staff from './staff';

const ProfileHome = () => {
  const route = useRoute();

  return (
    <View style={{backgroundColor: Colors.primaryBgColor, minHeight: '100%'}}>
      <Header who={route.params.data} />
      <ScrollView style={{height: '70%'}} showsVerticalScrollIndicator={false}>
        {route.params.data === 'organization' ? <Company /> : <Staff />}
      </ScrollView>
      <Footer who={route.params.data} />
    </View>
  );
};

export default ProfileHome;
