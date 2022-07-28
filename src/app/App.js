import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export function App() {

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <View>
            <Text>App</Text>
        </View>
    )
}