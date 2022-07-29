import React from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import PublicNavigaion from './public'
import PrivateNavigation from './private'

function Navigation(props) {
    const { auth } = props

    return (
        <NavigationContainer>
            {
                false ? <PrivateNavigation /> : <PublicNavigaion />
            }
        </NavigationContainer>
    )
}

// const mapStateToProps = state => state.auth
// const ConnectedNavigator = connect(mapStateToProps)(Navigation)
export default Navigation