import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {metric} from '~styles';

const NavIcon = ({name, icon}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.navIcon}
      onPress={() => navigation.navigate(name)}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={20} color={'white'} />
      </View>
      <Text style={{color: 'black'}}>{name}</Text>
    </TouchableOpacity>
  );
};

export function HorizontalNavBar(props) {
  return (
    <View>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={true}
        persistentScrollbar={true}>
        {Object.keys(props.data).map((item, index) => (
          <NavIcon key={index} icon={props.data[item]} name={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  navIcon: {
    width: metric.VW(25),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#6699ff',
  },
});
