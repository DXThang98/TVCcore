import React from 'react'
import { useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SelectCompany from '~core/SelectCompany'
import { getLoginComponent } from './navigationHelper'

const Stack = createNativeStackNavigator()

export default function Public({ navigation }) {
    const companyCode = useSelector(state => state.config.data?.env?.name)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {!companyCode && <Stack.Screen name='company' component={SelectCompany} />}
            {companyCode && <Stack.Screen name='login' component={getLoginComponent('core')} />}
        </Stack.Navigator>
    )
}