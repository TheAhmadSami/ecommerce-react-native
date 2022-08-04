import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './AppBar.styles'

export const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Text>Welcome from AppBar</Text>
    </View>
  )
}