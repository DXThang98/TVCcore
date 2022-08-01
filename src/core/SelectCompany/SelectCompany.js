import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { getData } from '~utils/storage'

import styles from './styles'

export default function SelectCompany(props) {
    const { navigation } = props

    useEffect(() => {
        const nav = async () => {
            const config = await getData('config')
            if (config) navigation.navigate('login')
            SplashScreen.hide()
        }

        nav()
    }, [])

    return (
        <View>
            <Text>SelectCompany</Text>
            <Button title='nav' onPress={() => navigation.navigate('login')} />
        </View>
    )
}