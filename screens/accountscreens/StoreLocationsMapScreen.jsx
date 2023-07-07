import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const StoreLocationsMapScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>StoreLocationsMapScreen screen</Text>
            <Text className='text-2xl text-center'>A dynamic map of store locations</Text>
        </View>
    </SafeAreaView>
  )
}

export default StoreLocationsMapScreen