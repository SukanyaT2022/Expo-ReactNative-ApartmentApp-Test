import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Home = () => {
  const router = useRouter()
  return (
    <View>
      <Text>Welcome Home Screen</Text>
      <TouchableOpacity onPress={()=>router.push('/productRedux')}><Text>See All Products</Text></TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})