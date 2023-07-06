import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

const GiftCardSelectedScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>GiftCardSelectedScreen screen</Text>
            <Text className='text-2xl text-center'>Digital Gift Card Details</Text>
            <Button title='' onPress={() => navigation.navigate('')} />
        </View>
    </SafeAreaView>
  )
}

export default GiftCardSelectedScreen