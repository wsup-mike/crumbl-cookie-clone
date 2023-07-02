import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const DeliveryModal3 = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>DeliveryModal3</Text>
            <Button title='NormalScreen' onPress={() => {
              
            }}/>
        </View>
    </SafeAreaView>
  )
}

export default DeliveryModal3