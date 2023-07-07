import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const AddressesScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>AddressesScreen screen</Text>
            <Text className='text-2xl text-center'>All user addresses on file</Text>
        </View>
    </SafeAreaView>
  )
}

export default AddressesScreen