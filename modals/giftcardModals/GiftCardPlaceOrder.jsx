import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const GiftCardPlaceOrder = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>GiftCardPlaceOrder modal</Text>
            <Text className='text-2xl text-center'>Review and place your digital gift card order</Text>
        </View>
    </SafeAreaView>
  )
}

export default GiftCardPlaceOrder