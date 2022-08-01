import React from 'react'
import { AppRegistry } from 'react-native'
import { App } from './src/app'
import { name as appName } from './app.json'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from '~slices'

export const store = configureStore({ reducer: rootReducer })

const AppWithStore = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => AppWithStore)

/* to register someBackgroundTask
AppRegistry.registerHeadlessTask('someBackgroundTaskName', () => require('./someBackgroundTask'))
*/
