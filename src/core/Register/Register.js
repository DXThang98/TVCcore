import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {NavHeader} from '~components';
import {getWifiInfo} from '~utils/network';
import {app} from '~styles';

export default function Register() {
  const [data, setData] = useState('');

  const a = async () => {
    try {
      const b = await getWifiInfo();
      setData(b);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    a();
  }, []);

  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <Text style={{color: 'black'}}>Register</Text>
      <Text style={{color: 'black'}}>{JSON.stringify(data)}</Text>
    </View>
  );
}
