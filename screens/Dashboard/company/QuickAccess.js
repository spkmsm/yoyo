/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';
import React from 'react';

const QuickAccess = () => {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontWeight: 'bold', marginBottom: 10}}>Quick Access</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableHighlight>
          <View style={styles.scrollBox}>
            <Image
              source={require('../../../assets/images/staff.png')}
              style={{width: 30, height: 30}}
            />
            <Text>Staff App</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.scrollBox}>
          <Image
            source={require('../../../assets/images/inquary.png')}
            style={{width: 30, height: 30}}
          />
          <Text>Leave Request</Text>
        </View>
        <View style={styles.scrollBox}>
          <Image
            source={require('../../../assets/images/certificate.png')}
            style={{width: 30, height: 30}}
          />
          <Text>Certificate Generator</Text>
        </View>
        <View style={styles.scrollBox}>
          <Image
            source={require('../../../assets/images/gift.png')}
            style={{width: 30, height: 30}}
          />
          <Text>Gretings</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollBox: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 10,
    gap: 10,
    marginRight: 10,
  },
});

export default QuickAccess;
