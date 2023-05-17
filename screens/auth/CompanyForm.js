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
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {Colors} from '../../component/helpers/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {createUser} from '../../component/helpers/apiHelper';

const Form = ({navigation}) => {
  const {status, phoneNumber} = useSelector(data => data.user);
  const initialValue = {
    status: status,
    phoneNumber: phoneNumber,
    name: '',
    email: '',
    address: '',
    pic: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
  };

  const [formData, setFormData] = useState(initialValue);

  const handleDocumentSelection = async () => {
    try {
      await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
      });
    } catch (err) {}
  };

  const handleInputChange = (e, field) => {
    setFormData(pre => ({...pre, [field]: e}));
  };

  const handleEmployeeFormSubmit = async () => {
    try {
      await createUser(formData);
      navigation.navigate('ProfileHome');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView style={{width: '100%', height: '100%'}}>
      {status === 'organization' ? (
        <View style={styles.container}>
          <TextInput
            label="Company Name"
            style={styles.inputBox}
            placeholder="Company Name"
            onChangeText={e => handleInputChange(e, 'name')}
          />
          <TextInput
            label="Email Id"
            placeholder="Email Id"
            style={styles.inputBox}
            onChangeText={e => handleInputChange(e, 'email')}
          />
          <TextInput
            label="Address"
            placeholder="Company Address"
            style={styles.inputBox}
            multiline={true}
            numberOfLines={2}
            onChangeText={e => handleInputChange(e, 'address')}
          />
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

          <TouchableWithoutFeedback onPress={handleEmployeeFormSubmit}>
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
      ) : (
        <View style={styles.employeeContainer}>
          <TextInput style={styles.inputBox} placeholder="Enter Company Code" />
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('EmployeeForm')}>
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
      )}
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

export default Form;
