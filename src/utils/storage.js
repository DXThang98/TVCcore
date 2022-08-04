import AsynscStorage from '@react-native-async-storage/async-storage'

import { isObject, isJSONString } from './type'

export const storeData = async (key, value) => {
    try {
        if (isObject(value)) return await AsynscStorage.setItem(key, JSON.stringify(value))
        return await AsynscStorage.setItem(key, value)
    } catch (err) {
        console.error(err)
    }
}

export const getData = async (key) => {
    try {
        const data = await AsynscStorage.getItem(key)

        return isJSONString(data) ? JSON.parse(data) : data
    } catch (err) {
        console.error(err)
    }
}

export const removeData = async (key) => {
    try {
        return await AsynscStorage.removeItem(key)
    } catch (err) {
        console.error(err)
    }
}