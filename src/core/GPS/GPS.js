import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { NavHeader } from '~components'
import { getLocation } from '~utils/geolocation'
import { app } from '~styles'

export default function GPS() {

  const getUserLocation = () => {
    try{
      getLocation((value) => console.log('value', value))
    } catch (err) {
      console.dir(err)
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <View style={app.screen.container}>
        <Text>Registawdawder</Text>
      </View>
    </View>
  )
}