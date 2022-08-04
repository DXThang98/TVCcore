import { View, Text } from 'react-native'
import React, { useRef } from 'react'
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
    const formik = useRef(null)

    const handleLogin = values => {
        const { username } = values
        //assume 1 is manager, 0 is employee
        if (username === 'A') dispatch(fakeAuth({ role: 1 }))
        else dispatch(fakeAuth({ role: 0 }))
        formik.current?.setFieldError('username', 'wrong username')
    }

    console.log('awdawd', formik)

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
                    innerRef={formik}
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