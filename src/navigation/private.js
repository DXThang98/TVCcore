import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/EvilIcons'
import { NavigationSelector, setupNavigationTree } from './navigationHelper'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const CreateStack = ({ stack }) => {
    const companyCode = useSelector(state => state.config.data?.env.customerKey)
    const companyStack = useMemo(() => NavigationSelector(companyCode), [])

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                stack?.map(item => <Stack.Screen name={item} key={item} component={companyStack.default[item]} />)
            }
        </Stack.Navigator>
    )
}

export default function Private() {
    const config = useSelector(state => state.config.data?.screen)
    const navStack = useMemo(() => setupNavigationTree(config), [config])

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                navStack ? (
                    Object.keys(navStack).map(field => <Tab.Screen
                        name={field}
                        key={field}
                        children={() => <CreateStack stack={navStack[field]} />}
                        options={{
                            tabBarIcon: () => (<Icon name='archive' size={30} color={'red'} />)
                        }}
                    />)
                ) : null
            }
        </Tab.Navigator>
    )
}