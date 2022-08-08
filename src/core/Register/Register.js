import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { NavHeader } from '~components'
import { getWifiInfo } from '~utils/network'
import { app } from '~styles'

export default function Register() {

    useEffect(() => {
        const a = async () => {
            try{
                const b = await getWifiInfo()
                console.log('bbbb', b)
            } catch(err) {
                console.log(err.message)
            }
            
        }
        a()
    }, [])

    return (
        <View style={app.screen.mainContainer}>
            <NavHeader />
            <Text style={{color: 'black'}}>Register</Text>
        </View>
    )
}