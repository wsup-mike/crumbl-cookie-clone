import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import StorePickupOrderingStack from '../stacks/StorePickupOrderingStack'

const OrderScreen = () => {
  
  const navigation = useNavigation();
  
  // const openModal = () => {
  //   setModalVisible(true)
  // }

  // const closeModal = () => {
  //   setModalVisible(false)
  // }

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>ORDER SCREEN:5 Options to Order</Text>
            <Button
              title='DeliveryOrderingStack' 
              onPress={() => {
              }}
            />
             
            
            <Button 
              title='StorePickupOrderingStack' 
              onPress={() => {
                navigation.navigate('StorePickupOrderingStack')
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