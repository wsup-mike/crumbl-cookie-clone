import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const PriceBreakdown = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>PriceBreakdown modal: itemized taxes n fees</Text>
        </View>
    </SafeAreaView>
  )
}

export default PriceBreakdown