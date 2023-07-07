import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const SendGiftCardFrom = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>SendGiftCardFrom modal</Text>
            <Text className='text-2xl text-center'>Send gift from: ______</Text>
        </View>
    </SafeAreaView> 
  )
}

export default SendGiftCardFrom