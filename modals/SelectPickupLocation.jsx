import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SelectPickupLocation = () => {

  const navigation = useNavigation();
  
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>SelectPickupLocation Modal</Text>
        </View>
    </SafeAreaView>
  )
}

export default SelectPickupLocation