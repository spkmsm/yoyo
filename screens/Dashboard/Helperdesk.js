/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import Header from './Header';
import {Colors} from '../../component/helpers/colors';
import Footer from './Footer';

const Helperdesk = () => {
  return (
    <View style={{backgroundColor: Colors.primaryBgColor, minHeight: '100%'}}>
      <Header />
      <ScrollView
        style={{
          height: '70%',
        }}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            paddingLeft: 20,
            paddingTop: 10,
            color: 'gray',
            fontWeight: 'bold',
          }}>
          Contact Us 24/7
        </Text>
        <View style={styles.container}>
          <View style={styles.helperBox}>
            <Image
              source={require('../../assets/images/call.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.helperBox}>
            <Image
              source={require('../../assets/images/whatsapp.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.helperBox}>
            <Image
              source={require('../../assets/images/linkedin.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.helperBox}>
            <Image
              source={require('../../assets/images/instegram.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.helperBox}>
            <Image
              source={require('../../assets/images/gmail.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.helperBox}>
            <Image
              source={require('../../assets/images/youtube.png')}
              style={styles.logo}
            />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  helperBox: {
    width: '40%',
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 30,
    height: 50,
    resizeMode: 'contain',
  },
});

export default Helperdesk;
