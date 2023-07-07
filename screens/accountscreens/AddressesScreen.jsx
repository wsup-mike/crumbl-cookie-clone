import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddressesScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <View>
                <Text className='text-3xl text-center'>AddressesScreen screen</Text>
                <Text className='text-2xl text-center'>All user addresses on file</Text>
                <Button title='CreateNewAddress'  onPress={() => navigation.navigate('CreateNewAddress')} />
            </View>
        </SafeAreaView>
    )
}

export default AddressesScreen