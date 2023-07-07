import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const AccountScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-blue-700'>
        <View>
            <Text className='text-3xl text-center'>Account Screen: Account Information</Text>
        </View>
    </SafeAreaView>
  )
}

export default AccountScreen;