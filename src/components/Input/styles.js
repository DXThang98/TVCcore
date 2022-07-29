import { StyleSheet } from 'react-native'

import { metric, font, color } from '~styles'

export default StyleSheet.create({
    container: {
        marginTop: metric.smallMargin,
        marginBottom: metric.smallMargin,
    },
    label: {
        marginBottom: metric.smallMargin,
        fontFamily: font.family.regular,
        fontSize: font.size.small,
        color: color.grey.lightest,
    },
    input: {
        borderWidth: 1,
        borderColor: color.input,
        backgroundColor: color.white,
    }
})