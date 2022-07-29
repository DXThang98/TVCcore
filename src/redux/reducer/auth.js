import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../type'

const initialState = {
    loading: false,
    error: false,
    message: '',
    data: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: true, data: action.payload }
        default:
            return initialState
    }
}