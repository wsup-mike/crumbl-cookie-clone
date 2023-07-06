import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const GiftCardScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-orange-500'>
        <View>
            <Text className='text-3xl text-center'>Gift Card Screen: Purchase Digital Gift Cards</Text>
        </View>
    </SafeAreaView>
  )
}

export default GiftCardScreen;