import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import TestingModal from './TestingModal'
import * as Animatable from 'react-native-animatable';

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
      <Animatable.View
        animation={modalVisible ? 'slideInUp' : 'slideOutDown'}
        style={[tw`flex-1 items-center justify-center`, modalVisible && tw`scale-75 pt-30`]}
      >
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
      </Animatable.View>
      {modalVisible && <View style={tw`absolute inset-0 bg-black opacity-50`} />}
      {modalVisible && <TestingModal visible={modalVisible} onClose={closeModal} />}
    </SafeAreaView>
  )
}

export default SelectPickupLocation