import React from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

//import nav
import PublicNavigaion from './public'
import BottomNav from '~components/BottomNav/BottomNav'
import PrivateNavigation from './private'

function Navigation({ auth, config }) {
    return (
        <NavigationContainer>
            {
                //(auth && config) ? <PrivateNavigation /> : <PublicNavigaion />
                (auth && config) ? <PrivateNavigation /> : <PublicNavigaion />
            }
        </NavigationContainer>
    )
}

const mapStateToProps = state => ({
    auth: state.auth.data,
    config: state.config.data,
})
const ConnectedNavigator = connect(mapStateToProps)(Navigation)
export default ConnectedNavigator