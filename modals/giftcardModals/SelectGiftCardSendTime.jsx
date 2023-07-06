import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const SelectGiftCardSendTime = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>SelectGiftCardSendTime modal</Text>
            <Text className='text-2xl text-center'>Choose a time to send your digital gift card</Text>
        </View>
    </SafeAreaView>
  )
}

export default SelectGiftCardSendTime