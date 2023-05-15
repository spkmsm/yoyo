/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Avatar, Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const EmployeesDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Searchbar
          placeholder="Search"
          lightTheme
          style={{
            width: '98%',
            borderRadius: 10,
            height: 50,
            backgroundColor: 'white',
          }}
        />
      </View>
      <View style={{width: '98%', paddingTop: 10, gap: 10}}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('AttendanceView', {name: 'Mark'});
          }}>
          <View style={styles.box}>
            <Avatar.Text
              label="M"
              size={40}
              color="white"
              style={{backgroundColor: 'hotpink'}}
            />
            <View>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>Mark</Text>
              <Text style={{color: 'lightgray'}}>
                Last Login : 04 May 04:50 PM
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('AttendanceView', {name: 'Saniya'});
          }}>
          <View style={styles.box}>
            <Avatar.Text
              label="A"
              size={40}
              color="white"
              style={{backgroundColor: 'orange'}}
            />
            <View>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>Saniya</Text>
              <Text style={{color: 'lightgray'}}>
                Last Login : 04 May 04:50 AM
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('AttendanceView', {name: 'Rock'});
          }}>
          <View style={styles.box}>
            <Avatar.Text
              label="R"
              size={40}
              color="white"
              style={{backgroundColor: 'skyblue'}}
            />
            <View>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>Rock</Text>
              <Text style={{color: 'lightgray'}}>
                Last Login : 04 May 04:50 AM
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('AttendanceView', {name: 'Nancy'});
          }}>
          <View style={styles.box}>
            <Avatar.Text
              label="N"
              size={40}
              color="white"
              style={{backgroundColor: 'green'}}
            />
            <View>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>Nancy</Text>
              <Text style={{color: 'lightgray'}}>
                Last Login : 04 May 04:50 AM
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  box: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});

export default EmployeesDetails;
