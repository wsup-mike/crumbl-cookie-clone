import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import SelectPickupLocation from '../modals/SelectPickupLocation'

const OrderScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  
  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleStorePickupOrderingStack = () => {
    openModal();
    // Additional logic specific to StorePickupOrderingStack if needed
  };

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
              onPress={
                // navigation.navigate('StorePickupOrderingStack', {screen: 'SelectPickupLocation'}); 
                handleStorePickupOrderingStack
              }
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
   
            {modalVisible && <SelectPickupLocation visible={modalVisible} onClose={closeModal} />}
        </View>
    </SafeAreaView>
  )
}

export default OrderScreen