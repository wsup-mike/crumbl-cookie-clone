import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ConfirmAddress = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>ConfirmAddress modal</Text>
            <Text className='text-2xl text-center'>Form to populate important user address info</Text>
        </View>
    </SafeAreaView>
  )
}

export default ConfirmAddress