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
    }
})
export const { authRequest, authSuccess, authFailure } = authSlice.actions
export default authSlice.reducer

export function auth(body) {
    return async dispatch => {
        dispatch(authRequest())
        try {
            const response = await apiPost('system/login', body, axiosConfig)
            console.log("response", response)
            dispatch(authSuccess(response.data))
        } catch (error) {
            console.log("error", error)
            dispatch(authFailure(error.message))
        }
    }
}

export function fakeAuth(body) {
    return dispatch => {
        dispatch(authSuccess(body))
    }
}
