import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export function ErrorMessage({ children, message = '' }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children || message}</Text>
        </View>
    )
}