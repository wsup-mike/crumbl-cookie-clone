import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

const MenuModal1 = () => {
    const navigation = useNavigation()
        
    return (
        <Animatable.View
            animation='slideInUp'
            style={{ 
                flex: 1, 
                backgroundColor: 'green', 
                borderTopLeftRadius: 20, 
                borderTopRightRadius: 20, 
                marginTop: 40,
                elevation: 5,
            }}
        >
            <SafeAreaView className='flex-1 items-center justify-center'>
                <View>
                    <Text>MenuModal1</Text>
                    <Button title='Next Again!' onPress={() => {navigation.navigate('MenuModal2')}} />
                </View>
            </SafeAreaView>
        </Animatable.View>
    )
}

export default MenuModal1