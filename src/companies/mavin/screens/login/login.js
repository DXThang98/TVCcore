import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { resetConfig } from '~slices/config'
import { auth } from '~slices/auth'

const validationSchema = Yup.object().shape({
    username: Yup.string().required('required'),
    password: Yup.string().required('required'),
})

export default function Login() {
    const dispatch = useDispatch()
    const config = useSelector(state => state.config)

    const handleLogin = values => {
        dispatch(auth({
            ...values,
            "DeviceID":"2FF2610C-56AC-457A-AF06-9CE91B6E8FC5",
            "firebase_client_id":"eP7B2hYkzEWQuxXssTmJUt:APA91bHEbS28fwx5hr4ZQBQ2WxGCOcnmVrFDBqpF_vaElMMc-xfACKC4RybNHsrkOI7QF6-on-na8a54hY2kFNzhD2VR_RkAGTMTmNE2slx_q7nSpQNDB-MuOhJMlsnZhjDeHTZIAPbt5",
            "Language":"vi-VN",
        }))
    }

    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{ width: '100%', paddingHorizontal: 30 }}>
                <Text style={{ color: 'black' }}>LOGIN MAVIN</Text>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={handleLogin}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInput
                                onChangeText={handleChange('username')}
                                value={values.username}
                                placeholder="Username..."
                            />
                            <TextInput
                                onChangeText={handleChange('password')}
                                value={values.password}
                                placeholder="Password..."
                            />
                            <Button onPress={handleSubmit} title="Submit" />
                        </View>
                    )}
                </Formik>
                <Button title='clear config' onPress={() => dispatch(resetConfig())} />
            </View>

        </View>
    )
}