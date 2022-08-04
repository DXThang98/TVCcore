import React from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

import { Header, Button } from '~components'
import { fakeAuth } from '~slices/auth'
import { clearConfig } from '~slices/config'
import { app } from '~styles'


export default function UserDetail() {
    const dispatch = useDispatch()

    const handleLogout = () => dispatch(fakeAuth(null))

    const handleResetConfig = () => dispatch(clearConfig())

    return (
        <View style={app.screen.mainContainer}>
            <Header
                rightIcon={'id-card'}
                onPressRight={() => console.log('help')}
            />
            <View style={app.screen.container}>
                <Button onPress={handleLogout}>LOGOUT</Button>
                <Button onPress={handleResetConfig}>RESET CONFIG</Button>
            </View>
        </View>
    )
}