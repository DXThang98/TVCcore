import React from 'react';
import {View, Text, Button} from 'react-native';

import {NavHeader} from '~components';
import {app} from '~styles';
import api from '~api/api'

export default function Register() {
  const handlePress = () => {
    api.get('/api/account/error')
  }

  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <Text style={{color: 'black'}}>Regawdawdister</Text>
      <Button title='awdawd' onPress={handlePress}></Button>
    </View>
  );
}
