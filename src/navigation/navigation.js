import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'

//import nav
import PublicNavigaion from './public'
import PrivateNavigation from './private'

import { getData } from '~utils/storage'

function Navigation({ auth, config }) {

    useEffect(() => {
        const loadConfig = async () => {
            const config = await getData('config')
            //dispatch load config...
            SplashScreen.hide()
        }

        loadConfig()
    }, [config])

    return (
        <NavigationContainer>
            {
                (auth && config) ? <PrivateNavigation /> : <PublicNavigaion />
            }
        </NavigationContainer>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    config: state.config,
})
const ConnectedNavigator = connect(mapStateToProps)(Navigation)
export default ConnectedNavigator