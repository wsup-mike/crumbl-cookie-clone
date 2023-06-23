import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import TestingModal from './TestingModal'

const SelectPickupLocation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const navigation = useNavigation();

  const containerStyle = `
    flex-1 bg-${modalVisible ? 'black' : 'white'} ${modalVisible ? 'rounded-t-3xl' : ''}
  `

  const screenStyle = `
    transform ${modalVisible ? 'scale-95' : ''} pt-30 
  `

  return (
    <SafeAreaView className={containerStyle}>
        <View className={screenStyle}>
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
        </View>
    </SafeAreaView>
  )
}

export default SelectPickupLocation