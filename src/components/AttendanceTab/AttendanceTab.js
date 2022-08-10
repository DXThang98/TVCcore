import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {IconButton} from '~components';

import styles from './styles';

export function AttendanceTab({type, date, info, key}) {
  const [display, setDisplay] = useState(false);
  const {checkinTime, checkoutTime, DMVS, OT} = info;

  const getType = {
    x: 'Cong lam viec',
    'x/2': 'Cong lam viec nua ngay',
    n: 'cong nghi khong luong',
    p: 'cong nghi phep',
    ct: 'nghi cuoi tuan',
  };

  return (
    <View style={styles.container} key={key}>
      <View style={styles.overview}>
        <View style={styles.icon__container}>
          <View style={styles.icon}>
            <Text style={styles.icon__content}>{type}</Text>
          </View>
        </View>
        <View style={styles.info__container}>
          <Text style={styles.info__upper}>{date}</Text>
          <Text style={styles.info__lower}>{getType[type]}</Text>
        </View>
        <View style={styles.button__container}>
          <IconButton
            name={'angle-down'}
            onPress={() => setDisplay(prev => !prev)}
          />
        </View>
      </View>
      {display && (
        <View style={styles.detail__container}>
          <View style={styles.detail__item}>
            <Text>Checkin / Checkout</Text>
            <Text>
              {checkinTime} / {checkoutTime}
            </Text>
          </View>
          <View style={styles.detail__item}>
            <Text>DMVS</Text>
            <Text>{DMVS}</Text>
          </View>
          <View style={styles.detail__item}>
            <Text>Overtime</Text>
            <Text>{OT}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
