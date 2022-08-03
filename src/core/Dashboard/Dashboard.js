import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Header, HorizontalNavBar } from '~components'

export default function Dashboard() {
    useEffect(() => {
        console.log('awdawdawdwadawd')
    }, [])

    return (
        <View>
            <Header />
            <HorizontalNavBar />
            <Text>Dashboard</Text>
        </View>
    )
}