import {View, Image} from 'react-native';
import React from 'react';

export function Avatar({size, src}) {
  return (
    <View>
      <Image src={{uri: src}} />
    </View>
  );
}
