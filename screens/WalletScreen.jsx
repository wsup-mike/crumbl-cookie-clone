import { View, Text, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WalletScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-orange-500'>
        <View>
            <Text className='text-3xl text-center'>Wallet Screen:Loyalty Crumbl Cash</Text>
            <Button title='Loyalty FAQ' onPress={() => navigation.navigate('LoyaltyFAQ')}/>
            <Button title='Crumbl Cash' onPress={() => navigation.navigate('CrumblCash')} />
            <Button title='Earn Free Crumbs' onPress={() => navigation.navigate('EarnFreeCrumbs')} />
            <Button title='AddPromoCode' onPress={() => navigation.navigate('AddPromoCode')}/>
        </View>
    </SafeAreaView>
  )
}

export default WalletScreen;