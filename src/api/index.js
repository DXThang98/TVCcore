import api from './api'
import * as constant from './apiConstant'

export const error = (body, config) = api.get(constant.ERROR, body, config)