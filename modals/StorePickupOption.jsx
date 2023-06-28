import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'

const StorePickupOption = ({ visible, onClose }) => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton onPress={onClose} />
      ),
    });
  }, [navigation, onClose]);

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.5}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection='down'
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