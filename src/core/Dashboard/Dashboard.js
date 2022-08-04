import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Header, HorizontalNavBar } from '~components'

import { app } from '~styles'

export default function Dashboard() {
    return (
        <View style={app.screen.mainContainer}>
            <Header />
            <HorizontalNavBar />
            <Text>Dashboard</Text>
        </View>
    )
}