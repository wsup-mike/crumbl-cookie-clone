import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const OrderSuccessScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>OrderSuccessScreen: Complete transaction confirmation</Text>
        </View>
    </SafeAreaView>
  )
}

export default OrderSuccessScreen