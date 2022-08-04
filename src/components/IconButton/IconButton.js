import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { metric } from '~styles'

export function IconButton({ name, color = 'black', onPress, size = metric.images.small }) {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Icon name={name} color={color} size={size} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: metric.baseMargin,
    }
})