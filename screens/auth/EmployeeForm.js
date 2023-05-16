/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import {Colors} from '../../component/helpers/colors';

const EmployeeForm = ({navigation}) => {
  const handleDocumentSelection = async () => {
    try {
      await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
      });
    } catch (err) {}
  };

  return (
    <ScrollView style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <TextInput style={styles.inputBox} placeholder="Your Name" />
        <TextInput placeholder="Email Id" style={styles.inputBox} />
        <TextInput placeholder="Employee Id" style={styles.inputBox} />
        <View
          style={{
            alignSelf: 'flex-start',
            paddingLeft: '10%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <TouchableWithoutFeedback onPress={handleDocumentSelection}>
            <Image
              source={require('../../assets/images/add.png')}
              size={50}
              color="grey"
            />
          </TouchableWithoutFeedback>
        </View>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('ProfileHome')}>
          <View
            style={{
              backgroundColor: Colors.primaryBtnColor,
              padding: 12,
              marginTop: 50,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              elevation: 2,
              width: '80%',
              position: 'relative',
              bottom: 0,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Continue
            </Text>
          </View>
        </TouchableWithoutFeedback>
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
    paddingTop: '25%',
    gap: 30,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    width: '80%',
  },
  employeeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: '55%',
  },
});

export default EmployeeForm;
