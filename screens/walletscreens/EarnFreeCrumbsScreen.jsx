import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const EarnFreeCrumbsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 items-center justify-center bg-purple-200'>
            <View>
                <Text className='text-3xl text-center'>Earn Free Crumbs!</Text>
                {/* <Button title='Loyalty FAQ' onPress={() => navigation.navigate('LoyaltyFAQ')}/>
                <Button title='Crumbl Cash' onPress={() => navigation.navigate('CrumblCash')} />
                <Button title='AddPromoCode' onPress={() => navigation.navigate('AddPromoCode')}/> */}
            </View>
        </SafeAreaView>
  )
}

export default EarnFreeCrumbsScreen