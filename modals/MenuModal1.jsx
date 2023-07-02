import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

const MenuModal1 = () => {
    const navigation = useNavigation()
        
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