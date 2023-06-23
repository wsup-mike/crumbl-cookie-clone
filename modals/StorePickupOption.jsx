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
              navigation.navigate('CarryoutOrderingStack', {screen: 'CarryoutOrderScreen'})
            }}/>
            <Button title='Curbside' onPress={() => {
              navigation.navigate('CurbsideOrderingStack', {screen: 'CurbsideOrderScreen'})
            }}/>
        </View>
    </SafeAreaView>
  )
}

export default StorePickupOption