import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DeliveryModal2 = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
          <Button title='Next Page' onPress={() => {navigation.push('DeliveryModal3')}} />
        </View>
    </SafeAreaView>
  )
}

export default DeliveryModal2