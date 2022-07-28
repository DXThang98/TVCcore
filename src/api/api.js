import { create } from 'apisauce'
import { getData } from '../utils/storage'

const api = async (baseURL) => {
    const defaultBaseURL = await getData('baseURL')
    const token = await getData('token')

    return create({
        baseURL: defaultBaseURL || baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        timeout: 10000,
    })
}

export default async (url = '', body = {}, config = {}) => {
    const response = await api.post(url, body, config)

    if (!response.ok) throw new Error('')

    return response.data
}