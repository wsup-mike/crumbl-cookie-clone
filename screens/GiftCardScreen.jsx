import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GiftCardScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-pink-300'>
        <View>
            <Text className='text-3xl text-center'>Gift Card Screen: Purchase Digital Gift Cards</Text>
            <Button title='Gift Card Design #1' onPress={() => navigation.navigate('GiftCardSelectedScreen')} />
        </View>
    </SafeAreaView>
  )
}

export default GiftCardScreen;