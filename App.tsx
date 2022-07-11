import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useCachedResources from './hooks/useCachedResources'

function App() {
  const [isLoadingComplete] = useCachedResources()

  if (!isLoadingComplete) return null

  return (
    <View>
      <View style={styles.greenBlock} />
      <Text>Fresh project v11</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  greenBlock: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
})

export default App
