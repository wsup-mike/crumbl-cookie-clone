import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const AccountDetailsScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>AccountDetailsScreen screen</Text>
            <Text className='text-2xl text-center'>Basic user account info</Text>
        </View>
    </SafeAreaView>
  )
}

export default AccountDetailsScreen