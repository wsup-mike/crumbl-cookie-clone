import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import GiftCardScreen from '../screens/GiftCardScreen'
import GiftCardSelectedScreen from '../screens/giftcardscreens/GiftCardSelectedScreen'

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
        </Stack.Navigator>
    )
}

export default GiftCardStack