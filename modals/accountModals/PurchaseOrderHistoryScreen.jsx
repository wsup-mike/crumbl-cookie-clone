import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PurchaseOrderHistoryScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>PurchaseOrderHistoryScreen screen</Text>
            <Text className='text-2xl text-center'>A list of all user purchases ever made</Text>
            <Button title='OrderScreen - To place an order!' onPress={() => navigation.navigate('OrderScreen')}/>
            <Button title='Mock History Order #1' onPress={() => navigation.navigate('IndividualOrderReceiptScreen')}/>
        </View>
    </SafeAreaView>
  )
}

export default PurchaseOrderHistoryScreen