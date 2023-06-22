import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'


const OrderScreen = () => {

  const goToPickupLocation = () => {

  }
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>ORDER SCREEN:5 Options to Order</Text>
            <Button
              title='DeliveryOrderingStack' 
              onPress={() => {}}
            />
             
            
            <Button 
              title='StorePickupOrderingStack' 
              onPress={() => {}}
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