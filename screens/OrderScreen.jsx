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
              title='StorePickupOrderingStack' 
              onPress={() => {}}
            />
             
            
            <Button 
              title='StorePickupOrderingStack' 
              onPress={() => {}}
            />
          
            
            <Button 
              title='StorePickupOrderingStack' 
              onPress={() => {}}
            />
           
            
            <Button 
              title='StorePickupOrderingStack' 
              onPress={() => {}}
            />
        
            
            <Button 
              title='StorePickupOrderingStack' 
              onPress={() => {}}
            />
   
            
        </View>
    </SafeAreaView>
  )
}

export default OrderScreen