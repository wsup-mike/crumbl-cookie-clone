import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const EarnFreeCrumbsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <View>
                <Text className='text-3xl text-center'>Earn Free Crumbs!</Text>
                <Button title='Refer a friend' onPress={() => navigation.navigate('ReferFriend')}/>
                <Button title='Join birthday club' onPress={() => navigation.navigate('BirthdayClub')}/>
                <Button title='Sign up for deals' onPress={() => navigation.navigate('SignUpDeals')} />
            </View>
        </SafeAreaView>
  )
}

export default EarnFreeCrumbsScreen