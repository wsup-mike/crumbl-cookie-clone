import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const SubscriptionOption = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>SubscriptionOption modal</Text>
            <Text className='text-2xl text-center'>Choose Carryout or Delivery Subscription</Text>
        </View>
    </SafeAreaView>
  )
}

export default SubscriptionOption