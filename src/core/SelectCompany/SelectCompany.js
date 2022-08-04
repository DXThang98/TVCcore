import React, { useEffect, useRef } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { FormikInput, FormikSubmitButton } from '~components'
import { app, color } from '~styles'

import { getConfig } from '~slices/config'

const validationSchema = Yup.object().shape({
    customerCode: Yup.string().required('required')
})

export default function SelectCompany(props) {
    const dispatch = useDispatch()
    const formikRef = useRef(null)
    const { navigation } = props

    const config = useSelector(state => state.config)
    console.log('config', config)
    useEffect(() => {
        if (config.data) navigation.navigate('login')
        if (config.error) formikRef.current.setFieldError('customerCode', config.message)
    }, [config])

    const handleSubmit = (value) => dispatch(getConfig(value))

    return (
        <View style={[app.screen.mainContainer, app.centerContent]}>
            <View style={{ width: '100%', paddingHorizontal: 30, }}>
                <Text style={{ textAlign: 'center', color: 'black', paddingVertical: 10, fontSize: 30, color: color.primary }}>Select Company</Text>
                <Formik
                    initialValues={{ customerCode: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    innerRef={formikRef}
                >
                    <View>
                        <FormikInput name='customerCode' placeholder='company code' />
                        <FormikSubmitButton>SUBMIT</FormikSubmitButton>
                    </View>
                </Formik>
            </View>

        </View>
    )
}