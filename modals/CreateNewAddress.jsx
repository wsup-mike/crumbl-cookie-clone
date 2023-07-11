import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NormalScreen from '../screens/NormalScreen'

const CreateNewAddress = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 bg-white rounded-t-3xl items-center justify-center'>
            <View>
                <Text className='text-3xl text-center text-black'>CreateNewAddress Modal</Text>
                <Button 
                    title='Go to NormalScreen' 
                    onPress={() => {
                        navigation.navigate('DeliveryModalStack', {screen: 'NormalScreen'})
                    }} 
                />
            </View>
        </SafeAreaView>
    )
}

export default CreateNewAddress