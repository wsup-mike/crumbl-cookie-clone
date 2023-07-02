import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
import MenuModal1 from '../modals/MenuModal1';


const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
      <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>HOME SCREEN: The Mutha Frikin Crumbl Cookie Clone App</Text>
            <Button title='Next' onPress={()=> {navigation.navigate('MenuModal1')}}/>
        </View>
      
        <Modal 
          isVisible={modalVisible}
          onBackdropPress={closeModal}
          animationIn='slideInUp'
          animationOut='slideOutDown'
        >
          <MenuModal1 />
        </Modal>
      </SafeAreaView>
  )
}

export default HomeScreen