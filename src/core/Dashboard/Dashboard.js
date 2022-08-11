import React, { useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Header, HorizontalNavBar } from '~components'
import BarChart from './BarChart'
import D3Art from './D3Art'
import { app } from '~styles'

const navDictionary = {
  Register: 'user-edit',
  Approve: 'user-check',
  Attendance: 'calendar-alt',
  Paycheck: 'money-check',
  News: 'newspaper',
  GPS: 'rss',
  Survey: 'file-alt',
  Meeting: 'user-friends',
  Checkin: 'calendar-check',
}

const barChartdata = [
  { label: 'Jan', value: 500 },
  { label: 'Feb', value: 312 },
  { label: 'Mar', value: 424 },
  { label: 'Apr', value: 745 },
  { label: 'May', value: 89 },
  { label: 'Jun', value: 434 },
  { label: 'Jul', value: 650 },
  { label: 'Aug', value: 980 },
  { label: 'Sep', value: 123 },
  { label: 'Oct', value: 186 },
  { label: 'Nov', value: 689 },
  { label: 'Dec', value: 643 }
]

const d3ArtData = [
  { "duration": 4, column: 0 },
  { "duration": 7, column: 1 },
  { "duration": 6, column: 2 },
  { "duration": 7, column: 3 },
  { "duration": 8, column: 4 },
  { "duration": 5, column: 5 },
  { "duration": 8, column: 6 },
]

export default function Dashboard() {
  return (
    <View style={app.screen.mainContainer}>
      <Header />
      <HorizontalNavBar data={navDictionary} />
      <ScrollView>
        <View style={{ marginTop: 50 }}>
          <BarChart data={barChartdata} round={100} unit="€" />
        </View>
        <View>
          <D3Art
            color='#FFC77D'
            data={d3ArtData}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightyellow',
    padding: 20,
    borderRadius: 10,
  }
})