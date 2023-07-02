import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'


const MenuModal1 = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation()

    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }
        
    return (

        <SafeAreaView className='flex-1 items-center justify-center'>
            <View>
                <Text>MenuModal1</Text>
                <Button title='Next Again!' onPress={() => {navigation.navigate('MenuModal2')}} />
            </View>
        </SafeAreaView>
    )
}

export default MenuModal1