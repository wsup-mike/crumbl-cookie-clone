// Refactored with 'classname'
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
// import TestingModal from './TestingModal';
import StorePickupOption from './StorePickupOption';


const SelectPickupLocation = ({ visible, onClose }) => {
  // const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  // const openModal = () => {
  //   setModalVisible(visible);
  // };

  // const closeModal = () => {
  //   setModalVisible(false);
  // };
  
  return (
    // <Modal
    //   isVisible={visible}
    //   backdropOpacity={0.5}
    //   // onBackdropPress={onClose}
    //   onSwipeComplete={onClose}
    //   swipeDirection='down'
    //   style={{ margin: 0, paddingTop: 30 }}
    // >
      <SafeAreaView className='flex-1 bg-white rounded-t-3xl items-center justify-center'>
          <View>
            <Text className='text-3xl text-center'>SelectPickupLocation Modal</Text>
            <Button 
              title='StorePickupOption'
              onPress={() => {
                // navigation.navigate('StorePickupOrderingStack', { screen: 'StorePickupOption'})
                navigation.navigate('StorePickupOrderingStack', {screen:'StorePickupOption'})
              }}              
            />

            {/* <Button title="Open TestingModal" onPress={openModal} /> */}
            {/* <TestingModal visible={modalVisible} onClose={closeModal} /> */}
            {/* <StorePickupOption visible={modalVisible} onClose={closeModal}/> */}
            {/* {modalVisible && <StorePickupOption visible={modalVisible} onClose={closeModal} />} */}
          </View>
      </SafeAreaView>
    // </Modal>
  );
};

export default SelectPickupLocation;

