import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function NavHeader() {
    const navigation = useNavigation()
    const state = navigation.getState()

    return (
        <View style={styles.container}>
            <View style={styles.contentLeft}>

            </View>
            <View style={styles.contentCenter}>

            </View>
            <View style={styles.contentRight}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    contentLeft: {

    },
    contentCenter: {

    },
    contentRight: {

    },
})