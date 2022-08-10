import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {NavHeader, Button} from '~components';
import {app} from '~styles';
import {checkTouchID} from '~utils/biometry';

export default function Checkin() {
  const [data, setData] = useState({});

  const handleGetBiometric = async () => {
    const data = await checkTouchID();
    setData(data);
  };

  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <Text>Register</Text>
      {Object.keys(data).map(item => (
        <Text style={{color: 'black'}}>
          {item}: {data[item].toString()}
        </Text>
      ))}
      <Button onPress={handleGetBiometric}>finger</Button>
    </View>
  );
}
