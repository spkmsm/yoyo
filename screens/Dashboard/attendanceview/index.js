/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Appbar} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Entypo';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const AttendanceView = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const route = useRoute();
  const {name} = route.params;

  const icon = <Icon title="dots-vertical" />;
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('ProfileHome');
          }}
        />
        <Appbar.Content title={name} />
      </Appbar.Header>
      <View style={{padding: 10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableHighlight>
            <View
              style={[
                styles.scrollBox,
                {
                  borderLeftWidth: 2,
                  borderLeftColor: 'green',
                  backgroundColor: '#d7f4d3',
                },
              ]}>
              <Text style={{color: 'gray'}}>Present</Text>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>13</Text>
            </View>
          </TouchableHighlight>
          <View
            style={[
              styles.scrollBox,
              {
                borderLeftWidth: 2,
                borderLeftColor: 'red',
                backgroundColor: '#f7e6e6',
              },
            ]}>
            <Text style={{color: 'gray'}}>Absent</Text>
            <Text style={{color: 'gray', fontWeight: 'bold'}}>0</Text>
          </View>
          <View
            style={[
              styles.scrollBox,
              {
                borderLeftWidth: 2,
                borderLeftColor: '#c65300',
                backgroundColor: '#f7d0af',
              },
            ]}>
            <Text style={{color: 'gray'}}>Half Days</Text>
            <Text style={{color: 'gray', fontWeight: 'bold'}}>0</Text>
          </View>
          <View
            style={[
              styles.scrollBox,
              {
                borderLeftWidth: 2,
                borderLeftColor: 'purple',
                backgroundColor: '#f3e4fd',
              },
            ]}>
            <Text style={{color: 'gray'}}>Paid Leave</Text>
            <Text style={{color: 'gray', fontWeight: 'bold'}}>0.0</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.container}>
        <Calendar
          markedDates={{
            '2023-05-01': {
              selected: true,
              selectedColor: '#0eff00',
            },
            '2023-05-02': {
              selected: true,
              color: 'white',
              selectedColor: '#006100',
            },
            '2023-05-03': {
              selected: true,
              color: 'white',
              selectedColor: '#ec0a06',
            },
          }}
          onMonthChange={e => console.log(e)}
          onDayPress={e => console.log(e)}
          style={{width: '100%', borderRadius: 7}}
        />
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#01a4ec',
            height: 50,
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}>
          <Icons name="download" color="#01a4ec" size={15} />
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#01a4ec'}}>
            Download Report
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
  },
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

export default AttendanceView;
