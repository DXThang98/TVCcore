import React from "react"
import { View, Text } from 'react-native'
import { store } from '../../../index'

export default () => {

    const obj = {}

    store.getState().config?.data?.screen?.map(item => {
        obj[item.container] = () => <View><Text>{item.container}</Text></View>
    })

    console.log("mavin obj", obj)
    return obj
}