/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Colors} from '../../component/helpers/colors';
import {useNavigation} from '@react-navigation/native';

const CustomButton = ({width, borderRadius, forWhat, goto}) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(goto)}>
      <View
        style={{
          backgroundColor: Colors.primaryBtnColor,
          padding: 12,
          marginTop: 50,
          borderRadius: borderRadius,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          elevation: 2,
          width: width,
          position: 'absolute',
          bottom: 100,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {forWhat}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;
