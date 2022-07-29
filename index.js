import React from 'react'
import { AppRegistry } from 'react-native'
import { App } from './src/app'
import { name as appName } from './src/config/app.json'
/*
createStore @deprecated
We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.
For more details, please read this Redux docs page: https://redux.js.org/introduction/why-rtk-is-redux-today

BUT for a reason to show remote redux-devtools, we still use "plain Redux"

*/

import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './src/redux/reducer'
import { rootSaga } from './src/redux/saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
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
