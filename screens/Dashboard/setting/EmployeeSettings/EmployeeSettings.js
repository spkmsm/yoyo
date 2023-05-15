/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

const EmployeeSettings = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.settingsBox}>
          <Image
            source={require('../../../../assets/images/sprofile.png')}
            style={styles.logo}
          />
          <Text style={styles.words}>Profile</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.settingsBox}>
          <Image
            source={require('../../../../assets/images/sattendance.png')}
            style={styles.logo}
          />
          <Text style={styles.words}>View Attendace</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.settingsBox}>
          <Image
            source={require('../../../../assets/images/sleave.png')}
            style={styles.logo}
          />
          <Text style={styles.words}>Request Leave</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.settingsBox}>
          <Image
            source={require('../../../../assets/images/sholiday.png')}
            style={styles.logo}
          />
          <Text style={styles.words}>Holiday List</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.settingsBox}>
          <Image
            source={require('../../../../assets/images/sdocument.png')}
            style={styles.logo}
          />
          <Text style={styles.words}>My Documents</Text>
        </View>
      </TouchableWithoutFeedback>
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
  settingsBox: {
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 50,
    paddingLeft: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  words: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default EmployeeSettings;
