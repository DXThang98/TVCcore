import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { resetConfig } from '~slices/config'
import { apiPost } from '~api/api'

const validationSchema = Yup.object().shape({
    username: Yup.string().required('required'),
    password: Yup.string().required('required'),
})

export default function Login() {
    const dispatch = useDispatch()
    const config = useSelector(state => state.config)
    console.log('dawdawdawd', config)

    const wait = (miliseconds = 1000) => new Promise((resolve) => setTimeout(() => { resolve('test') }, miliseconds))

    const handleLogin = async () => {
        const res = await apiPost()
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