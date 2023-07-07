import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-blue-700'>
        <View>
            <Text className='text-3xl text-center'>Account Screen: Account Information</Text>
            <Button title='CookieJournalScreen' onPress={() => navigation.navigate('CookieJournalScreen')}/>
        </View>
    </SafeAreaView>
  )
}

export default AccountScreen;