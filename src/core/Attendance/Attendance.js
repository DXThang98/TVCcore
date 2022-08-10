import React, {useMemo} from 'react';
import {View, ScrollView, Text} from 'react-native';

import {NavHeader, Calendar, AttendanceTab} from '~components';
import {app} from '~styles';

export default function Attendance() {
  const memo = useMemo(() => {
    const arr = [];
    const object = {
      type: 'x',
      date: '25/10/2020',
      info: {
        checkinTime: '08:30:00',
        checkoutTime: '18:00:00',
        DMVS: 0,
        OT: 0,
      },
    };
    for (let i = 0; i < 30; i++) {
      arr.push(<AttendanceTab key={i} {...object} />);
    }

    return arr;
  }, []);

  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <ScrollView horizontal={false} style={app.screen.container}>
        <View>
          <Calendar />
        </View>
        <View>{memo}</View>
      </ScrollView>
    </View>
  );
}
