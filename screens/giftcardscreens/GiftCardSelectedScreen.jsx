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
                <Button title='AddGiftCardRecipients' onPress={() => navigation.navigate('AddGiftCardRecipients')} />
                <Button title='AddGiftCardTextMessage' onPress={() => navigation.navigate('AddGiftCardTextMessage')} />
                <Button title='ReviewGiftCardOrder' onPress={() => navigation.navigate('ReviewGiftCardOrder')} />
                <Button title='GiftCardPlaceOrder' onPress={() => navigation.navigate('GiftCardPlaceOrder')} />
                <Button title='PriceBreakdown' onPress={() => navigation.navigate('PriceBreakdown')} />
                <Button title='PaymentMethodScreen' onPress={() => navigation.navigate('PaymentMethodScreen')} />
                <Button title='AddCardScreen' onPress={() => navigation.navigate('AddCardScreen')} />
                <Button title='OrderIsProcessingScreen' onPress={() => navigation.navigate('OrderIsProcessingScreen')} />
                
            </View>
        </SafeAreaView>
    )
}

export default GiftCardSelectedScreen