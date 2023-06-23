import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StorePickupOption = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center text-black'>StorePickupOption Modal: Carryout or Curbside</Text>
            <Button title='Carryout' onPress={() => {
              navigation.navigate('CarryoutOrderingStack')
            }}/>
            <Button title='Curbside' onPress={() => {
              
            }}/>
        </View>
    </SafeAreaView>
  )
}

export default StorePickupOption