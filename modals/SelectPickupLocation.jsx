import { View, Text, SafeAreaView, Button, Animated, Easing, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import TestingModal from './TestingModal'

const SelectPickupLocation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  
  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <SafeAreaView className='flex-1'>
   
        <View className='flex-1 items-center justify-center'>
          <Text className='text-3xl text-center text-black'>SelectPickupLocation Modal</Text>
          <Button 
            title='StorePickupOption'
            onPress={() => {
              navigation.navigate('StorePickupOrderingStack', { screen: 'StorePickupOption'})
            }}
          />
          <Button 
            title='Open TestingModal'
            onPress={openModal}
          />
          <TestingModal 
            visible={modalVisible}
            onClose={closeModal}
  
          />
          <View className='absolute inset-0 bg-black opacity-50' />
        </View>
    </SafeAreaView>
  )
}

export default SelectPickupLocation