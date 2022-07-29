import { StyleSheet } from 'react-native'

import Color from '~styles/color'
import Font from '~styles/font'

export default StyleSheet.create({
    container: {
        marginTop: 10,
    },
    text: {
        color: Color.error,
        fontSize: Font.size.small,
        fontFamily: Font.family.regular,
    }
})