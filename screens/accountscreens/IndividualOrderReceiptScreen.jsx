import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const IndividualOrderReceiptScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>IndividualOrderReceiptScreen screen</Text>
            <Text className='text-2xl text-center'>Details of recent receipt order</Text>
        </View>
    </SafeAreaView>
  )
}

export default IndividualOrderReceiptScreen