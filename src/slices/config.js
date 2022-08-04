import { createSlice } from '@reduxjs/toolkit'
import { apiGet, axiosConfig } from '~api/api'
import { removeData, storeData } from '~utils/storage'
import { fakeAuth } from './auth'

const initialState = {
    loading: false,
    error: false,
    message: '',
    data: null,
}

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        getConfigRequest: state => ({
            ...initialState,
            loading: true
        }),
        getConfigSuccess: (state, { payload }) => ({
            ...state,
            loading: false,
            message: 'success',
            data: payload,
        }),
        getConfigFailure: (state, { payload }) => ({
            ...state,
            loading: false,
            error: true,
            message: payload,
        }),
        resetConfig: () => ({
            ...initialState
        })
    }
})
export const { getConfigRequest, getConfigSuccess, getConfigFailure, resetConfig } = configSlice.actions
export default configSlice.reducer

export function getConfig(body) {
    return async dispatch => {
        dispatch(getConfigRequest())
        try {
            const response = await apiGet('/getConfig', body, axiosConfig)
            await storeData('customerCode', response.data.env.customerKey)
            dispatch(getConfigSuccess(response.data))
        } catch (error) {
            const { data } = JSON.parse(error.message)
            dispatch(getConfigFailure(data.message))
        }
    }
}

export function clearConfig() {
    return async dispatch => {
        try {
            await removeData('customerCode')
            dispatch(resetConfig())
            dispatch(fakeAuth(null))
        } catch (err) {
            console.log(err)
        }
    }
}