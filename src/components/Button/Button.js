import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { app, color, metric, font } from '~styles'

export function Button(props) {
    const { onPress, children, label, } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>{children || label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: metric.marginVertical,

    },
    button: {
        paddingVertical: 5,
        backgroundColor: color.primary,
        borderRadius: app.border.radius.rounded,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: color.white,
        fontSize: font.size.large,
        fontWeight: font.weight.normal
    },
})