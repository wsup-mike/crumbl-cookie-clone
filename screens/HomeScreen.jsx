import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'

const HomeScreen = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)

  const navigation = useNavigation();

  const closeModal = () => {
    setModalOpen(false)
  }

  const closeModal2 = () => {
    setModal2Open(false)
  }

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-purple-400'>
      {/* 1st Modal */}
     <Modal 
        isVisible={modalOpen}
        animationIn='slideInUp'
        animationOut='slideOutDown'
        swipeDirection={['down']}
        onSwipeComplete={closeModal}
        // propagateSwipe
        onBackdropPress={() => setModalOpen(false)}
        className='m-0 mt-8'
      >
        <View className='flex-1 items-center justify-center bg-amber-500 rounded-t-3xl'>
          <Text className='text-3xl text-center'>This is Modal 1</Text>
          <Button 
            title='Toggle Modal on/off'
            onPress={() => setModalOpen(!modalOpen)}
          />
          <Button 
            title='Move rightwards to Modal 2'
            onPress={() => setModal2Open(!modal2Open)}
          />
        </View>  
      </Modal>
     
     {/* 2nd Modal  */}
     <Modal 
        isVisible={modal2Open}
        animationIn='slideInRight'
        animationOut='slideOutRight'
        swipeDirection={['right']}
        onSwipeComplete={closeModal2}
        // propagateSwipe
        onBackdropPress={() => setModal2Open(false)}
        className='m-0 mt-8'
      >
        <View className='flex-1 items-center justify-center bg-green-400 rounded-t-3xl'>
          <Text className='text-3xl text-center'>This is Modal 2</Text>
          <Button 
            title='Toggle Modal on/off'
            onPress={closeModal2}
          />
        </View>  
      </Modal>

    {/* Our origin screen: HomeScreen */}
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