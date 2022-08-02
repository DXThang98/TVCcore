import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { fakeAuth } from '~slices/auth'
import { FormikInput, FormikSubmitButton } from '~components/Formik'

const validationSchema = Yup.object().shape({
    username: Yup.string().required('required'),
    password: Yup.string().required('required'),
})

export default function Login() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    const handleLogin = values => {
        // dispatch(auth({
        //     ...values,
        //     "DeviceID": "2FF2610C-56AC-457A-AF06-9CE91B6E8FC5",
        //     "firebase_client_id": "eP7B2hYkzEWQuxXssTmJUt:APA91bHEbS28fwx5hr4ZQBQ2WxGCOcnmVrFDBqpF_vaElMMc-xfACKC4RybNHsrkOI7QF6-on-na8a54hY2kFNzhD2VR_RkAGTMTmNE2slx_q7nSpQNDB-MuOhJMlsnZhjDeHTZIAPbt5",
        //     "Language": "vi-VN",
        // }))
        dispatch(fakeAuth())
    }

    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme === 'light' ? 'white' : 'black'
        }}>
            <View style={{ width: '100%', paddingHorizontal: 30 }}>
                <Text style={{ color: 'black' }}>LOGIN MAVIN</Text>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={handleLogin}
                    validationSchema={validationSchema}
                >
                    <View>
                        <FormikInput
                            name='username'
                            placeholder='username'
                        />
                        <FormikInput
                            name='password'
                            placeholder='password'
                        />
                        <FormikSubmitButton>
                            LOGIN
                        </FormikSubmitButton>
                    </View>
                </Formik>
            </View>

        </View>
    )
}