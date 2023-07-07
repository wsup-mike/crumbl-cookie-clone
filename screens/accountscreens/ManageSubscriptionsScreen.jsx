import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ManageSubscriptionsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>ManageSubscriptionsScreen screen</Text>
            <Text className='text-2xl text-center'>To manage all user current subscriptions or create new one</Text>
            <Button 
              title='Take me to to Subscriptions (SubscriptionOption)' 
              onPress={() => navigation.navigate('SubscriptionOption')} 
            />
        </View>
    </SafeAreaView>
  )
}

export default ManageSubscriptionsScreen