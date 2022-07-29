import { createSlice } from '@reduxjs/toolkit'
import { apiGet, axiosConfig } from '~api/api'

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
        getConfigRequest: state => {
            state.loading = true
        },
        getConfigSuccess: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.message = payload.message
            state.data = payload
        },
        getConfigFailure: (state, { payload }) => {
            state.loading = false
            state.error = true
            state.message = payload
        }
    }
})
export const { getConfigRequest, getConfigSuccess, getConfigFailure } = configSlice.actions
export default configSlice.reducer

export function getConfig(body) {
    return async dispatch => {
        dispatch(getConfigRequest())
        try {
            const response = await apiGet('/getConfig', body, axiosConfig)
                dispatch(getConfigSuccess(response.data))
        } catch (error) {
            dispatch(getConfigFailure(error.message))
        }
    }
}