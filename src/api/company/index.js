import { apiGet } from '../api'

export const getConfig = (body) => apiGet('GetConfig', body)