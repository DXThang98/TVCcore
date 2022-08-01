import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import { resetConfig } from '~slices/config'

export default function Login() {
    const dispatch = useDispatch()


    return (
        <View>
            <Text style={{ color: 'black' }}>Login BVG</Text>
            <Button title='clear config' onPress={() => dispatch(resetConfig())} />
        </View>
    )
}