import React, {useRef} from 'react';
import {View} from 'react-native';
import {LocaleConfig, Calendar as RNCalendar} from 'react-native-calendars';
import {locale} from './localeConfig';

export function Calendar(props) {
  const {localeType = 'vn', disableSwitchMonth = true, onPress, ref} = props;
  LocaleConfig.locales['vn'] = locale.vn;
  LocaleConfig.defaultLocale = 'vn';

  const CalendarRef = useRef();

  const handlePress = value => console.log('short', value);
  const handleLongPress = value => console.log('long', value);

  return (
    <View>
      <RNCalendar
        ref={CalendarRef}
        onDayPress={handlePress}
        monthFormat={'MM yyyy'}
        hideArrorw={true}
        disableArrowLeft={true}
        disableArrowRight={true}
      />
    </View>
  );
}
