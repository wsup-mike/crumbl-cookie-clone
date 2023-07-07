import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const AddGiftCardRecipients = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>AddGiftCardRecipients modal</Text>
            <Text className='text-2xl text-center'>Choose gift recipient(s)</Text>
        </View>
    </SafeAreaView> 
  )
}

export default AddGiftCardRecipients