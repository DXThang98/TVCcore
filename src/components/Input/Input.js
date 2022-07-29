import React from 'react'
import { View, Text, TextInput } from 'react-native'

import { ErrorMessage } from '~components'
import styles from './styles'

export function Input({ value, onChange, label, error, icon }) {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </View>
    )
}