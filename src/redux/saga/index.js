import { takeEvery } from 'redux-saga/effects'
import { auth } from './auth'
import {
    LOGIN,
} from './trigger'

export function* rootSaga() {
    yield takeEvery(LOGIN, auth)
}