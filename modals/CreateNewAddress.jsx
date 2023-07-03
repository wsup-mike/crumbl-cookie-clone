import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CreateNewAddress = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 bg-white rounded-t-3xl items-center justify-center'>
            <View>
                <Text className='text-3xl text-center text-black'>CreateNewAddress Modal</Text>
            </View>
        </SafeAreaView>
    )
}

export default CreateNewAddress