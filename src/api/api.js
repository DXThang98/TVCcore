import { create } from 'apisauce'
import { getData } from '~utils/storage'
import { getApiError } from '~utils/error'
import { CORE_DEFAULT } from '~constants/api'

const api = async (baseURL = CORE_DEFAULT) => {
    const defaultBaseURL = await getData('baseURL')
    const token = await getData('token')

    return create({
        baseURL: defaultBaseURL ? defaultBaseURL : baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        timeout: 10000,
    })
}

export const apiGet = async (url = '', params = {}, config = {}) => {

    const apiSauce = await api()
    const response = await apiSauce.get(url, params, config)

    if (
        response.ok &&
        response.status === 200 && 
        response.data.responseStatus > 0
    ) {
        return response
    } else {
        throw new Error(getApiError(response))
    }
}

export const apiPost = async (url = '', body = {}, config = {}) => {
    const apiSauce = await api()
    const response = await apiSauce.post(url, body, config)

    if (response.ok && response.code === 200) {
        return response
    } else {
        throw new Error(JSON.stringify(response))
    }
}