/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import {Colors} from '../../component/helpers/colors';
import Footer from './Footer';
import Company from './company';
import {useSelector} from 'react-redux';
import Staff from './staff';

const ProfileHome = () => {
  const route = useSelector(data => data.user.status);

  return (
    <View style={{backgroundColor: Colors.primaryBgColor, minHeight: '100%'}}>
      <Header />
      <ScrollView style={{height: '70%'}} showsVerticalScrollIndicator={false}>
        {route === 'organization' ? <Company /> : <Staff />}
      </ScrollView>
      <Footer />
    </View>
  );
};

export default ProfileHome;
