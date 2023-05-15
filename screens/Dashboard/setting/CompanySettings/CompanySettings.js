import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../component/helpers/colors';

const CompanySettings = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.box}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Icons name="cellphone-screenshot" size={25} color="#01a4ec" />
            <View>
              <Text style={{color: 'gray'}}>Company Code:</Text>
              <Text style={{fontWeight: 'bold', color: '#01a4ec'}}>MMWRHM</Text>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={async () => {
              await Share.share({message: 'MMWRHM'});
            }}>
            <Icon name="md-share-social" size={20} color="#01a4ec" />
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginTop: 10,
    width: '94%',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60,
    borderRadius: 7,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default CompanySettings;
