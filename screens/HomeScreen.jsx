import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'

const HomeScreen = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const navigation = useNavigation();

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-purple-400'>
      <Modal 
       
        // onBackdropPress={() => setModalOpen(false)}
      >
        
          <View className='flex-1 items-center justify-center bg-amber-500 rounded-t-3xl mt-8'>
            <Text className='text-3xl text-center'>This is Modal Practice</Text>
            <Button 
              title='Toggle Modal on/off'
              onPress={() => setModalOpen(!modalOpen)}
            />
          </View>
        
      </Modal>
      <View>
          <Text className='text-3xl text-center'>HOME SCREEN: The Mutha Frikin Crumbl Cookie Clone App</Text>
          <Button 
            title='Toggle Modal on/off'
            onPress={() => setModalOpen(!modalOpen)}
          />
          <Button 
            title='Go to OrderScreen' 
            // onPress={() => navigation.navigate('Order', { screen: 'OrderScreen'})}
            onPress={() => navigation.navigate('Order', { screen: 'OrderScreen'})}
          />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen