import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import Icon from 'react-native-vector-icons/FontAwesome'
import EmptyScreen from '~components/EmptyScreen/EmptyScreen';

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

export default function BottomNav() {
    const [tab, setTab] = useState('Home')

    const mainTabs = {
        Home: <EmptyScreen />,
        Contact: <EmptyScreen />,
        QRCode: <EmptyScreen />,
        Notification: <EmptyScreen />,
        Profile: <EmptyScreen />,
    }

    const handleTabChange = e => {
        setTab(e.name)
    }

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