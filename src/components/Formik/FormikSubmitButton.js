import React from 'react'
import { useFormikContext } from 'formik'
import { Button } from '~components'

export function FormikSubmitButton({ children, label }) {
    const { handleSubmit } = useFormikContext()

    return (
        <Button onPress={handleSubmit}>{children || label}</Button>
    )
}