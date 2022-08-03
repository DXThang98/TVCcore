import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
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

    const handleLogin = values => dispatch(fakeAuth())


    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{ width: '100%', paddingHorizontal: 30 }}>
                <Text style={{ color: 'black' }}>LOGIN CORE</Text>
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