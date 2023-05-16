/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../component/helpers/colors';
import {useSelector, useDispatch} from 'react-redux';
import CustomButton from './CustomButton';
import {changeUserStatus} from '../../redux/slices/UserSlice';

const Login = () => {
  const [status, setStatus] = useState(useSelector(data => data.user.status));
  const dispatch = useDispatch();
  const handlePress = data => {
    try {
      setStatus(data);
      dispatch(changeUserStatus({status: data}));
    } catch (err) {
      console.log(err, 'l');
    }
  };
  console.log(useSelector(data => data.user.status));
  return (
    <View
      style={{
        backgroundColor: Colors.primaryBgColor,
        width: '100%',
        flex: 1,
        paddingTop: '30%',
        alignItems: 'center',
        gap: 100,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          width: '80%',
          color: 'gray',
          fontSize: 17,
          textAlign: 'center',
        }}>
        Which one are you?
      </Text>
      <View style={{flexDirection: 'row', gap: 50}}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            handlePress('organization');
          }}>
          <Image
            source={require('../../assets/images/organization.png')}
            color={status === 'organization' ? Colors.primaryTextColor : 'gray'}
            size={50}
          />
          <Text style={{fontWeight: 'bold', color: 'gray'}}>
            {status === 'organization' ? status : ''}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            handlePress('Employee');
          }}>
          <Image
            source={require('../../assets/images/employee.png')}
            color={status === 'Employee' ? Colors.primaryTextColor : 'gray'}
            size={50}
          />

          <Text style={{fontWeight: 'bold', color: 'gray'}}>
            {status === 'Employee' ? status : ''}
          </Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        width={'60%'}
        borderRadius={10}
        forWhat="Continue"
        goto="Form"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 10,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
