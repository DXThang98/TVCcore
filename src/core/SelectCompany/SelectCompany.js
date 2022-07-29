import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'

export default function SelectCompany(props) {
    const { navigation } = props
    console.log(navigation)
    return (
        <View>
            <Text>SelectCompany</Text>
            <Button title='nav' onPress={() => navigation.navigate('login')} />
        </View>
    )
}