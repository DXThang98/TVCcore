import React, { useEffect, useState } from 'react'
import RootNavigation from '~navigation/navigation'
import SplashScreen from 'react-native-splash-screen'
import { useDispatch } from 'react-redux'

import { getConfig } from '~slices/config'

export function App() {
    const [customerCode, setcustomerCode] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    const handleChange = (e) => setcustomerCode(e)

    const handleSubmit = () => {
        dispatch(getConfig({
            customerCode
        }))
    }

    return (
        <RootNavigation />
    )
}