/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const Form = ({route}) => {
  const {status} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        {status === 'organization' ? (
          <View>
            <TextInput mode="outlined" label="Company Name" />
            <TextInput mode="outlined" label="Email Id" />
          </View>
        ) : (
          <View>
            <Text>Employee</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Form;
