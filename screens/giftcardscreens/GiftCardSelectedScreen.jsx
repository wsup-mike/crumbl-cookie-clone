import { View, Text, Button, SafeAreaView, ScrollView, Animated } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const GiftCardSelectedScreen = () => {
    const [headerShown, setHeaderShown] = useState(false)

    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 80,
                    backgroundColor: 'tomato',
                    transform: [{
                        translateY: headerShown ? 0 : -100,
                    }],
                }}
            />
            
            {/* <ScrollView
                onScroll={(event) => {
                    const scrolling = event.nativeEvent.contentOffset.y;

                    if (scrolling > 100) {
                        setHeaderShown(true) 
                    } else {
                        setHeaderShown(false)
                    }
                }}

                scrollEventThrottle={16}

                style={{ flex: 1, height: 1000 }}
            > */}
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
                        <Button title='OrderSuccessScreen' onPress={() => navigation.navigate('OrderSuccessScreen')} />
                        <Button title='FinalGiftCardOrderConfirmation' onPress={() => navigation.navigate('FinalGiftCardOrderConfirmation')} />
                        <Button title='ReasonForCancellation' onPress={() => navigation.navigate('ReasonForCancellation')} />

                </View>
            {/* </ScrollView> */}

        </SafeAreaView>
    )
}

export default GiftCardSelectedScreen