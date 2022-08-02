import { createSlice } from '@reduxjs/toolkit'
import { storeData } from '~utils/storage'

const initialState = 'dark'

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, { payload }) => payload
    }
})
export const { setTheme } = themeSlice.actions
export default themeSlice.reducer

export function setAppTheme(body) {
    return async dispatch => {

        let theme
        if (body === 'light' || body === 'dark') theme = body
        else {
            if (body) theme = 'light'
            else theme = 'dark'
        }

        await storeData('theme', theme)
        dispatch(setTheme(theme))
    }
}