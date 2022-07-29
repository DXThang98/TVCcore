import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, TextInput, Button } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import Font from '~styles/font'

import { getConfig } from '~slices/config'

import { CORE_DEFAULT } from '~constants/api'

export function App() {
    const [customerCode, setcustomerCode] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    const handleChange = (e) => setcustomerCode(e)

    const handleSubmit = () => {
        dispatch(getConfig({
            customerCode
        }))
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