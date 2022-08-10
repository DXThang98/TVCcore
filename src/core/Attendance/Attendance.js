import React, {useMemo, useRef, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import moment from 'moment';

import {NavHeader, Calendar, AttendanceTab} from '~components';
import {app, color} from '~styles';

import {data} from './sample';

const colorSchema = {
  x: 'green',
  'x/2': 'yellow',
  n: 'red',
  p: 'blue',
  ct: 'gray',
};

const parseData = data => {
  const newData = {};

  for (let i = 0; i < data.length; i++) {
    const formatDate = moment(data[i].date).format('YYYY-MM-DD');
    newData[formatDate] = {
      selected: true,
      selectedColor: colorSchema[data[i].type],
    };
  }

  return newData;
};

export default function Attendance() {
  const calendar = useRef();

  const handlePress = value => {
    console.log('value', value);
  };

  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <ScrollView horizontal={false} style={app.screen.container}>
        <View ref={calendar}>
          <Calendar data={parseData(data)} onPress={handlePress} />
        </View>
        <View>
          {data.map((item, index) => (
            <AttendanceTab key={index} {...item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
