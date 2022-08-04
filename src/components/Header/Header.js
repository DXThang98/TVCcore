import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { color, metric, font } from '~styles'
import { IconButton } from '~components'
import { randomAvatarSrc } from '~utils/randomAvatar'

export function Header({ rightIcon, onPressRight }) {
    const info = useSelector(state => state)

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: randomAvatarSrc() }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.infoName}>Xin chào, ABC</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
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
    imageContainer: {
        width: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: metric.images.medium,
        width: metric.images.medium,
        borderRadius: metric.images.medium / 2,
    },
    infoContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    infoDate: {

        fontSize: font.size.XXS
    },
    infoName: {
        fontSize: font.size.large,
        color: color.white,
    },
    buttonContainer: {
        width: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})