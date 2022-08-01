import { createSlice } from '@reduxjs/toolkit'
import { apiGet, axiosConfig } from '~api/api'

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
        getAuthFailure: (state, { payload }) => ({
            ...state,
            loading: false,
            error: true,
            message: payload,
        }),
        auth: () => ({
            ...initialState,
            data: true,
        })
    }
})
export const { getAuthRequest, getAuthSuccess, getAuthFailure, auth } = authSlice.actions
export default authSlice.reducer

// export function getConfig(body) {
//     return async dispatch => {
//         dispatch(getConfigRequest())
//         try {
//             const response = await apiGet('/getConfig', body, axiosConfig)
//             dispatch(getConfigSuccess(response.data))
//         } catch (error) {
//             dispatch(getConfigFailure(error.message))
//         }
//     }
// }
