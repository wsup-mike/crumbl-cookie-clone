import { View, Text, SafeAreaView, Button, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import TestingModal from './TestingModal'

const SelectPickupLocation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;

  const navigation = useNavigation();
  
  const openModal = () => {
    setModalVisible(true)
    animateScreenExpand();
  }

  const closeModal = () => {
    setModalVisible(false)
    animateScreenShrink()
  }

  const animateScreenShrink = () => {
    Animated.timing(scaleValue, {
      toValue: 0.85, // Scale down to 85% of the original size
      duration: 300, // Adjust the duration as per your preference
      useNativeDriver: true,
    }).start();
  };

  const animateScreenExpand = () => {
    Animated.timing(scaleValue, {
      toValue: 1, // Restore the original size
      duration: 300, // Adjust the duration as per your preference
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
      <Animated.View
        className="transform-[scale(0.85)] flex-1 bg-black rounded-t-3xl overflow-hidden"
        style={{ transform: [{ scale: scaleValue }] }}
      >
        <View className='flex-1 items-center justify-center'>
          {/* <Text className='text-3xl text-center text-black'> */}
          <Text className="text-white text-3xl mt-8 mb-6 text-center">
            SelectPickupLocation Modal
          </Text>
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
        </Animated.View>
        </View>
    </SafeAreaView>
  )
}

export default SelectPickupLocation