import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const CustomTip = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>CustomTip modal: prompt for custom tip</Text>
        </View>
    </SafeAreaView>
  )
}

export default CustomTip