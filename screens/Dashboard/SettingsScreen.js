/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import {Colors} from '../../component/helpers/colors';
import Footer from './Footer';
import Settings from './setting';

const SettingsScreen = () => {
  return (
    <View style={{backgroundColor: Colors.primaryBgColor, minHeight: '100%'}}>
      <Header />
      <ScrollView style={{height: '70%'}} showsVerticalScrollIndicator={false}>
        <Settings />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default SettingsScreen;
