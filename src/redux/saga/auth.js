import { apiPost } from '../../api/api'
import { put, call } from 'redux-saga/effects'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../type/action'

export function* auth(body) {
    try {
        yield put({ type: LOGIN_REQUEST })
        const response = yield call(async () => {
            const res = await apiPost('/users/authenticate', body.payload, axiosConfig)
            return res
        })
        if (response.ok) {
            yield put({ type: LOGIN_SUCCESS, payload: response.data, })
        } else {
            yield put({ type: LOGIN_FAILURE, payload: response })
        }
    } catch (error) {
        yield put({ type: LOGIN_FAILURE, payload: error.message })
    }
}