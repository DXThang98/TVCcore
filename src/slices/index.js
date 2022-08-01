import { combineReducers } from 'redux'

import configReducer from './config'
import authReducer from './auth'

const rootReducer = combineReducers({
  config: configReducer,
  auth: authReducer,
})

export default rootReducer
