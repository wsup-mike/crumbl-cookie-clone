import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ManageSubscriptionsScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>ManageSubscriptionsScreen screen</Text>
            <Text className='text-2xl text-center'>To manage all user current subscriptions or create new one</Text>
        </View>
    </SafeAreaView>
  )
}

export default ManageSubscriptionsScreen