import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { metric } from '~styles'
import { list } from './list'

const NavIcon = ({ icon, label, screen = 'Dashboard' }) => {
    const navigation = useNavigation()
    console.log('screen', screen)
    return (
        < TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate(screen)}>
            <View style={styles.iconContainer}>
                <Icon name={icon} size={20} color={'black'} />
            </View>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

export function HorizontalNavBar(props) {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {
                list.map(item => <NavIcon {...item} key={item.label} />)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    navIcon: {
        width: metric.VW(25),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        paddingVertical: 10,
    }
})