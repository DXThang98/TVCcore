import React, {useRef} from 'react';
import {View} from 'react-native';
import {LocaleConfig, Calendar as RNCalendar} from 'react-native-calendars';
import {locale} from './localeConfig';

export function Calendar(props) {
  const {data = {}} = props;
  LocaleConfig.locales['vn'] = locale.vn;
  LocaleConfig.defaultLocale = 'vn';

  const handlePress = value => console.log('short', value);
  console.log('data', data);
  return (
    <View>
      <RNCalendar
        onDayPress={handlePress}
        monthFormat={'MM yyyy'}
        hideArrorw={true}
        disableArrowLeft={true}
        disableArrowRight={true}
        markedDates={data}
      />
    </View>
  );
}
