import React from 'react'
import { View, Text } from 'react-native'

import { app } from '~styles'
import { NavHeader } from '~components'

export default function PhonebookDetail() {
    return (
        <View style={app.screen.mainContainer}>
            <NavHeader />
            <Text>PhonebookDetail</Text>
        </View>
    )
}