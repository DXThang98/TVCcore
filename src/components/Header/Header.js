import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { color, metric, font } from '~styles'
import { IconButton } from '~components'

const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHnMihAfrXN_Ty-x55ylhaXU8Z8M-IZEZRw&usqp=CAU"

export function Header() {
    const info = useSelector(state => state)

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.infoDate}>Ngày 03 tháng 08 năm 2020</Text>
                    <Text style={styles.infoName}>Xin chào, ABC</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <IconButton
                    onPress={() => console.log('aaaaa')}
                    name='user'
                    size={metric.images.medium}
                    color={color.white}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
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
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    infoDate: {
        fontStyle: 'italic',
        fontSize: font.size.XXS
    },
    infoName: {

    },
    buttonContainer: {
        width: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})