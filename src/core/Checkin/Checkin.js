import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';

import {NavHeader, Button} from '~components';
import {Alert} from '~components/Alert';
import {Toast} from '~components/Toast';
import {app} from '~styles';
import {checkTouchID} from '~utils/biometry';

export default function Checkin() {
  const [data, setData] = useState({});

  const handleGetBiometric = async () => {
    const data = await checkTouchID();
    setData(data);
    Alert.alert('awdawdawdawdawdawdadawdasdawdasdawd', {title: 'test title'});
  };

  const handleAlert = () => {
    Alert.alert('abcxyz');
  };

  const handleToast = () => {
    Toast.toast('just message you');
  };

  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <Text>Register</Text>
      {Object.keys(data).map((item, index) => (
        <Text style={{color: 'black'}} key={index}>
          {item}: {data[item].toString()}
        </Text>
      ))}
      <Button onPress={handleGetBiometric}>finger</Button>
      <Button onPress={handleAlert}>Alert</Button>
      <Button onPress={handleToast}>Toast</Button>
    </View>
  );
}
