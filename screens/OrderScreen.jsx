import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import StorePickupOrderingStack from '../stacks/StorePickupOrderingStack'
import DeliveryOrderingStack from '../stacks/DeliveryOrderingStack'

const OrderScreen = () => {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-teal-300'>
        <View>
            <Text className='text-3xl text-center'>ORDER SCREEN:5 Options to Order</Text>
            <Button 
              title='StorePickupOrderingStack' 
              onPress={() => {
                navigation.navigate('StorePickupOrderingStack')
              }}
            />
            
            <Button
              title='DeliveryOrderingStack' 
              onPress={() => {
                navigation.navigate('DeliveryOrderingStack')
              }}
            />
        
            <Button 
              title='CateringPickupOrderingStack' 
              onPress={() => {}}
            />
           
            
            <Button 
              title='ShippingOrderingStack' 
              onPress={() => {}}
            />
        
            
            <Button 
              title='SubscriptionOrderingStack' 
              onPress={() => {}}
            />
   
        </View>

    </SafeAreaView>
  )
}

export default OrderScreen