import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { color, font } from '~styles'
import { IconButton } from '~components'

export function NavHeader({ rightIcon, onPressRight }) {
    const navigation = useNavigation()
    const routes = navigation.getState().routes

    return (
        <View style={styles.container}>
            <View style={styles.leftContent}>
                {(routes.length > 1) && <IconButton name='chevron-left' color={color.white} onPress={() => navigation.goBack()} />}
            </View>
            <View style={styles.centerContent}>
                <View>
                    <Text style={styles.screen}>{routes[routes.length - 1].name}</Text>
                </View>
            </View>
            <View style={styles.rightContent}>
                {
                    rightIcon && <IconButton
                        onPress={onPressRight}
                        name={rightIcon}
                        size={metric.images.small}
                        color={color.white}
                    />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: color.primary,
        display: 'flex',
        flexDirection: 'row'
    },
    leftContent: {
        width: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerContent: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        fontSize: font.size.large,
        color: color.white,
    },
    rightContent: {
        width: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})