import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import GiftCardScreen from '../screens/GiftCardScreen'
import GiftCardSelectedScreen from '../screens/giftcardscreens/GiftCardSelectedScreen'
import SelectGiftCardSendDate from '../modals/giftcardModals/SelectGiftCardSendDate'
import SelectGiftCardSendTime from '../modals/giftcardModals/SelectGiftCardSendTime'
import SendGiftCardFrom from '../modals/giftcardModals/SendGiftCardFrom'


const GiftCardStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName='GiftCardScreen'
            screenOptions={{
                presentation: 'modal',
            }}
        >
            <Stack.Screen name='GiftCardScreen' component={GiftCardScreen} options={{}} />
            <Stack.Screen name='GiftCardSelectedScreen' component={GiftCardSelectedScreen} options={{ presentation: 'card'}} />
            <Stack.Screen name='SelectGiftCardSendDate' component={SelectGiftCardSendDate} />
            <Stack.Screen name='SelectGiftCardSendTime' component={SelectGiftCardSendTime} />
            <Stack.Screen name='SendGiftCardFrom' component={SendGiftCardFrom} />
            
        </Stack.Navigator>
    )
}

export default GiftCardStack