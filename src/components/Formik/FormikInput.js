import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { useFormikContext } from 'formik'
import { ErrorMessage } from '~components'
import { app, color, font, metric } from '~styles'

export function FormikInput(props) {
    const theme = useSelector(state => state.theme)
    const { name, placeholder, onChange, disable } = props
    const { values, errors, touched, setFieldValue } = useFormikContext()

    const handleChange = (text) => {
        if (onChange) onChange(text)
        setFieldValue(name, text)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, styles[theme]]}
                value={values[name]}
                onChangeText={handleChange}
                editable={!disable}
                placeholder={placeholder}
                placeholderTextColor={color.grey.light}
            />
            {
                errors[name] && touched[name] && <ErrorMessage>{errors[name]}</ErrorMessage>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: metric.marginVertical,
    },
    input: {
        borderColor: color.grey.dark,
        borderWidth: app.border.width.standard,
        borderRadius: app.border.radius.rounded,
        paddingHorizontal: 20,
    },
    light: {
        color: color.grey.dark,
    },
    dark: {
        color: color.white
    },
})