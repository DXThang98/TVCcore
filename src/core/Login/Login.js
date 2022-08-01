import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'

export default function Login(props) {
    const { navigation } = props
    return (
        <View>
            <Text style={{ color: 'black' }}>Login tvc</Text>
            <Button title='nav' onPress={() => navigation.navigate('company')} />
        </View>
    )
}