import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PaymentMethodScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>PaymentMethodScreen: To pay</Text>
            <Button title='AddCardScreen - Add new CC info' onPress={() => navigation.navigate('AddCardScreen')} />
        </View>
    </SafeAreaView>
  )
}

export default PaymentMethodScreen