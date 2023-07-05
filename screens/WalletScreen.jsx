import { View, Text, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LoyaltyFAQ from '../modals/walletModals/LoyaltyFAQ'

const WalletScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-purple-200'>
        <View>
            <Text className='text-3xl text-center'>Wallet Screen:Loyalty Crumbl Cash</Text>
            <Button title='Loyalty FAQ' onPress={() => navigation.navigate('LoyaltyFAQ')}/>
            
        </View>
    </SafeAreaView>
  )
}

export default WalletScreen;