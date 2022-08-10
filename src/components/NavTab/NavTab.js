import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import {app, font, color, metric} from '~styles';

export function NavTab({screen, name}) {
    const navigation = useNavigation()

    const handlePress = () => navigation.navigate(screen)

  return (
    <View>
      <TouchableOpacity
        
      >
        <View></View>
        <View></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: metric.baseMargin,
    margin: metric.baseMargin,
    borderRadius: app.border.radius.rounded,
    borderWidth: 1,
    borderColor: 'gray',
  },
  icon__container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  info__container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
});
