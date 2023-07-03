import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CreateNewAddress from './CreateNewAddress'

const YourAddresses = () => {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView className='flex-1 bg-white rounded-t-3xl items-center justify-center'>
            <View>
                <Text className='text-3xl text-center text-black'>YourAddresses Modal</Text>
                <Button title='Carryout' onPress={() => {
                    navigation.navigate('CreateNewAddress')
                }}/>
            </View>
        </SafeAreaView>
    )
}

export default YourAddresses