import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const NormalScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>Normal</Text>
        </View>
    </SafeAreaView>
  )
}

export default NormalScreen