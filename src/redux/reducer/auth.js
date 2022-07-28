import {
    LOGIN_REQUEST,
    LOGIN_SUCESS,
    LOGIN_FAILURE,
} from '../type'

const initialValues = {
    loading: false,
    error: false,
    message: '',
    data: null,
}

export const authReducer = (state = initialValues, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true }
        case LOGIN_SUCESS:
            return { ...state, loading: false, data: action.payload }
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: true, data: action.payload }
    }
}