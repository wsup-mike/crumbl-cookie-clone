import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ReviewGiftCardOrder = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>ReviewGiftCardOrder modal</Text>
            <Text className='text-2xl text-center'>Review your digital gift card order details</Text>
        </View>
    </SafeAreaView>
  )
}

export default ReviewGiftCardOrder