import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
