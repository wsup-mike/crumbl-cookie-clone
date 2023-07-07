import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const GiftCardSelectedScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <View>
                <Text className='text-3xl text-center'>GiftCardSelectedScreen screen</Text>
                <Text className='text-2xl text-center'>Digital Gift Card Details</Text>
                <Button title='SelectGiftCardSendDate' onPress={() => navigation.navigate('SelectGiftCardSendDate')} />
                <Button title='SelectGiftCardSendTime' onPress={() => navigation.navigate('SelectGiftCardSendTime')} />
                <Button title='SendGiftCardFrom' onPress={() => navigation.navigate('SendGiftCardFrom')} />
                
            </View>
        </SafeAreaView>
    )
}

export default GiftCardSelectedScreen