import { create } from 'apisauce'
import { getData } from '~utils/storage'
import { CORE_DEFAULT } from '~constants/api'
import { store } from '../../index'

const instance = create({
        baseURL: CORE_DEFAULT,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        timeout: 10000,
})

instance.axiosInstance.interceptors.request.use(async(requestConfig) => {
    const defaultBaseURL = store.getState().config.data?.env.linkApi
    const token = await getData('token')

    if(defaultBaseURL) requestConfig.baseURL = 'https://cosmitto-server.herokuapp.com/'
    if(token) requestConfig.headers.Authorization = `Bearer ${token}`

    return requestConfig
})

instance.axiosInstance.interceptors.response.use((onSuccess) => {
    console.log('success', onSuccess)
}, (onError) => {
    console.log('error', onError.toJSON())
})

export default instance