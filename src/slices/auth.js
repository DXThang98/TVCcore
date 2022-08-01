import { createSlice } from '@reduxjs/toolkit'
import { apiPost, axiosConfig } from '~api/api'

const initialState = {
    loading: false,
    error: false,
    message: '',
    data: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authRequest: state => ({
            ...state,
            loading: true
        }),
        authSuccess: (state, { payload }) => ({
            ...state,
            loading: false,
            message: 'success',
            data: payload,
        }),
        authFailure: (state, { payload }) => ({
            ...state,
            loading: false,
            error: true,
            message: payload,
        }),
        authReset: () => ({
            ...initialState
        })
    }
})
export const { authRequest, authSuccess, authFailure, authReset } = authSlice.actions
export default authSlice.reducer

export function auth(body) {
    return async dispatch => {
        dispatch(authRequest())
        try {
            const response = await apiPost('system/login', body, axiosConfig)
            dispatch(authSuccess(response.data))
        } catch (error) {
            dispatch(authFailure(error.message))
        }
    }
}