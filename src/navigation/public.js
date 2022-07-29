import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SelectCompany from '~core/SelectCompany'

//dynamic import 'tiết kiệm được tí bộn nhớ, why not'
const getLoginComponent = (code = null) => {
    switch (code) {
        case 'BVG':
            return require('../companies/bvg/screen/Login').default
        default:
            return require('../core/Login').default
    }
}

const Stack = createNativeStackNavigator()

export default function Public() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='company' component={SelectCompany} />
            <Stack.Screen name='login' component={getLoginComponent('BVG')} />
        </Stack.Navigator>
    )
}