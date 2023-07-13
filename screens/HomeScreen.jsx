import { View, Text, Button, SafeAreaView, Modal } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-purple-400'>
      <Modal visible={true}>
        <View className='flex-1 items-center justify-center bg-slate-400 pt-10'>
          <Text className='text-3xl text-center text-white'>This is Modal Practice</Text>
        </View>
      </Modal>
      <View>
          <Text className='text-3xl text-center'>HOME SCREEN: The Mutha Frikin Crumbl Cookie Clone App</Text>
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