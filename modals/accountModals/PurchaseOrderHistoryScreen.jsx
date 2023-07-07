import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const PurchaseOrderHistoryScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>PurchaseOrderHistoryScreen screen</Text>
            <Text className='text-2xl text-center'>A list of all user purchases ever made</Text>
        </View>
    </SafeAreaView>
  )
}

export default PurchaseOrderHistoryScreen