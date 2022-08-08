import React, { useMemo, useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationSelector, newSetupNavigationTree } from './navigationHelper'
import { route } from './route'


const Stack = createNativeStackNavigator()

const CreateStack = ({ stack }) => {
    const companyStack = useMemo(() => NavigationSelector('core'), [])
    console.log('awdawdawd', NavigationSelector('core'))
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                stack?.map((item, index) =>
                    <Stack.Screen
                        name={item.component}
                        key={index}
                        component={companyStack.default[item.component]}
                    />)
            }
        </Stack.Navigator>
    )
}

const tabs = [
    {
        name: 'Home',
        activeIcon: <Icon name="home" color="#fff" size={25} />,
        inactiveIcon: <Icon name="home" color="#fff" size={25} />
    },
    {
        name: 'Contact',
        activeIcon: <Icon name="list-ul" color="#fff" size={25} />,
        inactiveIcon: <Icon name="list-ul" color="#fff" size={25} />
    },
    {
        name: 'QRCode',
        activeIcon: <Icon name="camera" color="#fff" size={25} />,
        inactiveIcon: <Icon name="camera" color="#fff" size={25} />
    },
    {
        name: 'Notification',
        activeIcon: <Icon name="bell" color="#fff" size={25} />,
        inactiveIcon: <Icon name="bell" color="#fff" size={25} />
    },
    {
        name: 'Profile',
        activeIcon: <Icon name="user" color="#fff" size={25} />,
        inactiveIcon: <Icon name="user" color="#fff" size={25} />
    },

];

export default function Private() {
    const [tab, setTab] = useState('Home')
    const config = useSelector(state => state.config.data?.screen)
    const navStackSample = useMemo(() => newSetupNavigationTree(route), [config])


    const mainTabs = {
        Home: <CreateStack stack={navStackSample['Home'].stack} />,
        Contact: <CreateStack stack={navStackSample['Phonebook'].stack} />,
        QRCode: <CreateStack stack={navStackSample['QR'].stack} />,
        Notification: <CreateStack stack={navStackSample['Notification'].stack} />,
        Profile: <CreateStack stack={navStackSample['User'].stack} />,
    }

    const handleTabChange = e => setTab(e.name)

    return (
        <View style={{ flex: 1 }}>
            {mainTabs[tab]}
            <Tabbar
                tabs={tabs}
                tabBarContainerBackground='#6699ff'
                tabBarBackground='#fff'
                activeTabBackground='#6699ff'
                labelStyle={{ color: '#fff', fontWeight: '600', fontSize: 11 }}
                transitionSpeed={50}
                onTabChange={handleTabChange}
            />
        </View>
    )
}