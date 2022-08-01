import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { useDispatch, useSelector } from 'react-redux'

import { getData } from '~utils/storage'
import { getConfig } from '~slices/config'
import styles from './styles'

export default function SelectCompany(props) {
    const [customerCode, setCustomerCode] = useState()
    const { navigation } = props
    const dispatch = useDispatch()
    const { loading, data, message, error } = useSelector(state => state.config)
    console.log('data', data)
    //
    useEffect(() => {
        const nav = async () => {
            const config = await getData('config')
            console.log('config', config)
            if (config) navigation.navigate('login')
            SplashScreen.hide()
        }

        nav()
    }, [])

    useEffect(() => {
        if (data) {
            console.log('config', data)
            navigation.navigate('login')
        }
    }, [data])

    const handleSubmit = () => dispatch(getConfig({ customerCode }))


    return (
        <View
            style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View style={{ width: '100%', paddingHorizontal: 30, }}>
                <Text style={{ color: 'black' }}>Select Company</Text>

                <TextInput
                    style={{
                        color: 'black',
                        borderColor: 'black'
                    }}
                    value={customerCode}
                    onChangeText={setCustomerCode}
                />
                <Button title='submit' onPress={handleSubmit} />
                {loading && <Text style={{ color: 'black', paddingTop: 20 }}>Loading...</Text>}
                {error && <Text style={{ color: 'red', paddingTop: 20 }}>{message}</Text>}
                {error && <Text>{JSON.stringify(data)}</Text>}
            </View>

        </View>
    )
}