import { combineReducers } from 'redux'

import configReducer from './config'
import authReducer from './auth'
import themeReducer from './theme'

const rootReducer = combineReducers({
  config: configReducer,
  auth: authReducer,
  theme: themeReducer,
})

export default rootReducer
