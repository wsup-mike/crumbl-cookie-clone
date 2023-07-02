import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'

const StorePickupOption = ({ visible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }
  
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button 
  //         title="Back"
  //         onPress={() => navigation.goBack()}
  //       />
  //     )
  //   })
  // }, [navigation]);

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.5}
      onSwipeComplete={onClose}
      swipeDirection='left'
      style={{ margin: 0, paddingTop: 30 }}
    >
      <SafeAreaView className='flex-1 bg-white rounded-t-3xl items-center justify-center'>
          <View>
              <Text className='text-3xl text-center text-black'>StorePickupOption Modal: Carryout or Curbside</Text>
              <Button title='Carryout' onPress={() => {
                navigation.navigate('CarryoutOrderingStack', {screen: 'CarryoutOrderScreen'})
              }}/>
              <Button title='Curbside' onPress={() => {
                navigation.navigate('CurbsideOrderingStack', {screen: 'CurbsideOrderScreen'})
              }}/>
          </View>
      </SafeAreaView>
    </Modal>
  )
}

export default StorePickupOption