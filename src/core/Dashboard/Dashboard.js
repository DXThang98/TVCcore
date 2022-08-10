import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Header, HorizontalNavBar} from '~components';

import {app} from '~styles';

const navDictionary = {
  Register: 'user-edit',
  Approve: 'user-check',
  Attendance: 'calendar-alt',
  Paycheck: 'money-check',
  News: 'newspaper',
  GPS: 'rss',
  Survey: 'file-alt',
  Meeting: 'user-friends',
  Checkin: 'calendar-check',
};

export default function Dashboard() {
  return (
    <View style={app.screen.mainContainer}>
      <Header />
      <HorizontalNavBar data={navDictionary} />
      <Text>Dashboard</Text>
    </View>
  );
}
