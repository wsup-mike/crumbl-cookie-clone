// Refactored with 'classname'
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
// import TestingModal from './TestingModal';
import StorePickupOption from './StorePickupOption';


const SelectPickupLocation = ({ visible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false)
    onClose();
  };
  
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.5}
      // onBackdropPress={onClose}
      onSwipeComplete={closeModal}
      swipeDirection='down'
      style={{ margin: 0, paddingTop: 30 }}
    >
      <SafeAreaView className='flex-1 bg-white rounded-t-3xl items-center justify-center'>
          {
            !showStorePickupOption ? (
              <View>
                <Text className='text-3xl text-center'>SelectPickupLocation Modal</Text>
                <Button 
                  title='StorePickupOption'
                  onPress={navigateToStorePickupOption}              
                /> 
              </View>
            ) : (
              <StorePickupOption  onClose={handleStorePickupOptionClose} />
            )
          }
      </SafeAreaView>
    </Modal>
  );
};

export default SelectPickupLocation;

