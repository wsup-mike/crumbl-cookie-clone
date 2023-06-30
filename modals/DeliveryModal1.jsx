import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DeliveryModal1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Button title='Next Page' onPress={() => {navigation.navigate('DeliveryModal2')}} />
        </View>
    </SafeAreaView>
  )
}

export default DeliveryModal1