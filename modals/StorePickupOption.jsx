import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const StorePickupOption = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center text-black'>StorePickupOption Modal: Carryout or Curbside</Text>
        </View>
    </SafeAreaView>
  )
}

export default StorePickupOption