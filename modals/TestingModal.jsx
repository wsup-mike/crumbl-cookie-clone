import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';

const TestingModal = ({ visible, onClose }) => {
  return (
    <Modal
        isVisible={visible}
        swipeDirection="down"
        onSwipeComplete={onClose}
        backdropOpacity={0.5}
        style={{ margin: 0, paddingTop: 30}}
      
    >
        <SafeAreaView className='bg-white rounded-t-3xl flex-1'>
            {/* <View className='bg-red-500 rounded-t-3xl flex-1'> */}
            <View className='flex-1 items-center justify-center'>
                <Text className='text-3xl text-center'>TestingModal. Try Me!</Text>
            </View>
            {/* <Button title='Close Modal' onPress={onClose}/> */}
        </SafeAreaView>
    </Modal>
  )
}

export default TestingModal