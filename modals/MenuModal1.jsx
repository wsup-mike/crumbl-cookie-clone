import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const MenuModal1 = () => {
    const navigation = useNavigation()
        
    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <View>
            <Button title='MenuModal2' onPress={() => {}} />
            </View>
        </SafeAreaView>
    )
}

export default MenuModal1