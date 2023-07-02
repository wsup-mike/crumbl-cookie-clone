import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'

const MenuModal1 = () => {

    const navigation = useNavigation()

    const nextModal = () => {
        navigation.navigate('MenuModal2')
    }

    const closeModal = () => {
        navigation.goBack();
    }
        
    return (
        <SafeAreaView className='flex-1 items-center justify-center bg-yellow-300 mt-10 rounded-t-3xl'>
            <View >
                <Text className='text-center'>MenuModal1</Text>
                <Button title='Close' onPress={closeModal} />
                <Button title='Next Again!' onPress={nextModal} />
            </View>
        </SafeAreaView>
    )
}

export default MenuModal1