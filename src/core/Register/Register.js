import React from 'react';
import {View, Text} from 'react-native';

import {NavHeader} from '~components';
import {app} from '~styles';

export default function Register() {
  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <Text style={{color: 'black'}}>Register</Text>
    </View>
  );
}
