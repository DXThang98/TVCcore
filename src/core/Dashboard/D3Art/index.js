import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import XAxis from './xAxis'
import YAxis from './yAxis'
import Columns from './Columns'

export default ({ data, color }) => {
    const width = Dimensions.get('screen').width
    const xAxisHeight = 30
    const yAxisHeight = 325
    const barsHeight = 315

    return (
        <View style={styles.main}>
            <YAxis
                height={yAxisHeight}
                width={width} />

            <Columns
                data={data}
                width={width - 10}
                height={barsHeight}
                color={color} />

            <XAxis
                width={width - 10}
                height={xAxisHeight} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginVertical: 25,
        marginHorizontal: 0,
    }
})