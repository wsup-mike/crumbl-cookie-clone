import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const MenuModal2 = () => {
    const navigation = useNavigation();

    const closeModal = () => {
        navigation.goBack();
    }
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-yellow-300 mt-10 rounded-t-3xl'>
        <View >
            <Text>MenuModal2</Text>
            <Button title='Close' onPress={closeModal} />
        </View>
    </SafeAreaView>
  )
}

export default MenuModal2