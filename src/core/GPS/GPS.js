import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';

import {NavHeader, Button} from '~components';
import {getLocation} from '~utils/geolocation';
import {app} from '~styles';

export default function GPS() {
  const [coordinates, setCoordinates] = useState([0, 0]);

  const getUserLocation = () => {
    try {
      getLocation(
        value => {
          const {latitude, longitude} = value.coords;

          setCoordinates([latitude, longitude]);
        },
        error => Alert.alert(error.message),
      );
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <View style={app.screen.container}>
        <Text>Get location</Text>
        <Text>Latitude: {coordinates[0]}</Text>
        <Text>Longitude: {coordinates[1]}</Text>
        <Button onPress={getUserLocation}>get location</Button>
      </View>
    </View>
  );
}
