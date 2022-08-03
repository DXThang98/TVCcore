import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { metric } from '~styles'

const iconDictonary = {
    Register: 'user-edit',
    Approve: 'user-check',
    Attendance: 'calendar-alt',
    Paycheck: 'money-check',
    News: 'newspaper',
    GPS: 'rss',
    Survey: 'file-alt',
    Meeting: 'user-friends',
}


const NavIcon = ({ name }) => {
    const navigation = useNavigation()
    return (
        < TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate(name)}>
            <View style={styles.iconContainer}>
                <Icon name={iconDictonary[name]} size={20} color={'white'} />
            </View>
            <Text style={{ color: 'black' }}>{name}</Text>
        </TouchableOpacity>
    )
}

export function HorizontalNavBar(props) {
    const navigation = useNavigation()
    const navState = navigation.getState()
    const routes = navState.routeNames.filter(item => item !== navState.routes[0].name)

    return (
        <View>
            <ScrollView
                horizontal={true}
                style={styles.container}
                showsHorizontalScrollIndicator={true}
                persistentScrollbar={true}
            >
                {
                    routes.map((item, index) => <NavIcon key={index} name={item} />)
                }
            </ScrollView>
        </View>
    )
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
        backgroundColor: '#6699ff'
    }
})