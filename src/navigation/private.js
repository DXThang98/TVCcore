import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationSelector } from './navigationHelper'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const CreateStack = ({ stack }) => {
    const companyCode = useSelector(state => state.config.code)
    const path = useMemo(() => NavigationSelector(companyCode), [])

    return (
        <Stack.Navigator>
            {
                stack?.map(item => <Stack.Screen key={item} component={path[item]} />)
            }
        </Stack.Navigator>
    )
}

export default function Private(props) {
    const config = useSelector(state => state.config)
    const navStack = useMemo(() => setupNavigationTree(config), [])

    return (
        <Tab.Navigator>
            {
                navStack ? (
                    Object.keys(navStack).map(field => <Tab.Screen name={field} component={() => <CreateStack stack={config[field]} />} />)
                ) : null
            }
        </Tab.Navigator>
    )
}