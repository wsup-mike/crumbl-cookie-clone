import { View, Text } from 'react-native'
import React from 'react'

const testModal = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>Test Modal. Try me! Swipe down!</Text>
        </View>
    </SafeAreaView>
  )
}

export default testModal