import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {randomAvatarSrc} from '~utils/randomAvatar';
import metric from '~styles/metric';

export function Avatar({size, src}) {
  return <Image source={{uri: randomAvatarSrc()}} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
});
