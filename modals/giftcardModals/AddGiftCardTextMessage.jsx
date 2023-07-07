import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const AddGiftCardTextMessage = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>AddNewGiftCardTextMessage modal</Text>
            <Text className='text-2xl text-center'>Customize a text message to go along with your gift!</Text>
        </View>
    </SafeAreaView>
  )
}

export default AddGiftCardTextMessage