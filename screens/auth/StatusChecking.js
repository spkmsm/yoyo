/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../component/helpers/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Fontisto';

const Login = ({navigation}) => {
  const [status, setStatus] = useState('organization');
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
            setStatus('organization');
          }}>
          <Icon
            name="office-building-marker-outline"
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
            setStatus('Employee');
          }}>
          <Icons
            name="user-secret"
            size={50}
            color={status === 'Employee' ? Colors.primaryTextColor : 'gray'}
          />
          <Text style={{fontWeight: 'bold', color: 'gray'}}>
            {status === 'Employee' ? status : ''}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('Form', {
            status: status,
          })
        }>
        <View
          style={{
            backgroundColor: Colors.primaryBtnColor,
            padding: 12,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            elevation: 2,
            width: '60%',
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
