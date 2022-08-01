import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useFormikContext } from 'formik'
import { ErrorMessage } from '~components'

export function FormikInput(props) {
    const { name, label, placeholder, onChange, disable } = props
    const { values, errors, touched, setFieldValue } = useFormikContext()

    const handleChange = (text) => {
        if (onChange) onChange(text)
        setFieldValue(name, text)
    }

    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                value={values[name]}
                onChangeText={handleChange}
                editable={!disable}
                placeholder={placeholder}
            />
            {
                errors[name] && touched[name] && <ErrorMessage>{errors[name]}</ErrorMessage>
            }
        </View>
    )
}