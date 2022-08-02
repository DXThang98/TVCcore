import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationSelector, setupNavigationTree } from './navigationHelper'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const CreateStack = ({ stack }) => {
    const companyCode = useSelector(state => state.config.data?.env.customerKey)
    const companyStack = useMemo(() => NavigationSelector(companyCode), [])
    const a = companyStack.default()

    console.log("companyStack", companyStack)

    return (
        <Stack.Navigator>
            {
                stack?.map(item => <Stack.Screen name={item} key={item} component={a[item]} />)
            }
        </Stack.Navigator>
    )
}

export default function Private() {
    const config = useSelector(state => state.config.data?.screen)
    const navStack = useMemo(() => setupNavigationTree(config), [config])
    console.log('navStack', navStack)
    return (
        <Tab.Navigator>
            {
                navStack ? (
                    Object.keys(navStack).map(field => <Tab.Screen name={field} key={field} children={() => <CreateStack stack={navStack[field]} />} />)
                ) : null
            }
        </Tab.Navigator>
    )
}