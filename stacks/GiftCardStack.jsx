import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const GiftCardStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='' component={} options={{}} />
            <Stack.Screen name='' component={} options={{}} />
        </Stack.Navigator>
    )
}

export default GiftCardStack