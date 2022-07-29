import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import Font from '~styles/font'

import { getConfig } from '../api/company'

import { CORE_DEFAULT } from '~constants/api'

export function App() {
    const [customerCode, setcustomerCode] = useState(null)

    console.log('awdawd', CORE_DEFAULT)

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    const handleChange = (e) => setcustomerCode(e)

    const handleSubmit = async () => {
        try {
            const res = await getConfig({ customerCode })
            console.log('res', res)
        } catch (err) {
            console.log('error', err)
        }
    }

    return (
        <View>
            <Text style={{
                fontFamily: Font.family.bold
            }}>App</Text>
            <TextInput
                onChangeText={handleChange}
                value={customerCode}
                style={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'red',
                    color: 'black'
                }}
            />
            <Button title='submit' onPress={handleSubmit} />
        </View>
    )
}