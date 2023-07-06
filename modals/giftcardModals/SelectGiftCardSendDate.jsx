import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const SelectGiftCardSendDate = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>SelectGiftCardSendDate modal</Text>
            <Text className='text-2xl text-center'>Choose the date to send your digital gift card</Text>
        </View>
    </SafeAreaView>
  )
}

export default SelectGiftCardSendDate