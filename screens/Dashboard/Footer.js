/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconf from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';

const Footer = () => {
  const route = useRoute();
  const [, setCurrentTouched] = useState();

  const navigation = useNavigation();
  useEffect(() => {
    setCurrentTouched(route.name);
  }, [route]);

  return (
    <View style={{position: 'relative', bottom: 0, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableWithoutFeedback
          onPress={() => {
            setCurrentTouched('Home');
            navigation.navigate('ProfileHome', {data: route.params.data});
          }}>
          <View style={styles.footerBox}>
            <Icon
              name={
                route.params.data === 'organization'
                  ? 'ios-home'
                  : 'camera-sharp'
              }
              size={15}
              color={route.name === 'ProfileHome' ? '#01a4ec' : 'gray'}
            />
            <Text>Home</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setCurrentTouched('Chat');
          }}>
          <View style={styles.footerBox}>
            <Icon
              name="chatbubbles-outline"
              size={15}
              color={route.name === 'Chat' ? '#01a4ec' : 'gray'}
            />
            <Text>Chat</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setCurrentTouched('Help');
            navigation.navigate('Helperdesk', {data: route.params.data});
          }}>
          <View style={styles.footerBox}>
            <Iconf
              name="hands-helping"
              size={15}
              color={route.name === 'Helperdesk' ? '#01a4ec' : 'gray'}
            />
            <Text>Help</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setCurrentTouched('Settings');
            navigation.navigate('SettingsScreen', {data: route.params.data});
          }}>
          <View style={styles.footerBox}>
            <Icon
              name="ios-settings"
              size={15}
              color={route.name === 'SettingsScreen' ? '#01a4ec' : 'gray'}
            />
            <Text>Settings</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerBox: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
