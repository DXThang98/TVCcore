import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getConfig } from '~slices/config'

import styles from './styles'

export default function SelectCompany(props) {
    const [customerCode, setCustomerCode] = useState()
    const { navigation } = props

    const dispatch = useDispatch()
    const config = useSelector(state => state.config)

    useEffect(() => {
        if (config.data) navigation.navigate('login')
    }, [config.data])

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
                {config.loading && <Text style={{ color: 'black', paddingTop: 20 }}>Loading...</Text>}
                {config.error && <Text style={{ color: 'red', paddingTop: 20 }}>{config.message}</Text>}
                {/* {config.error && <Text>{JSON.stringify(config.data)}</Text>} */}
            </View>

        </View>
    )
}