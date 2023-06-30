import { View, Text, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import DeliveryModalStack from '../stacks/DeliveryModalStack'

const WalletScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>Wallet Screen:Loyalty Crumbl Cash</Text>
            <Button title='Modals' onPress={() => navigation.navigate('DeliveryModalStack')}/>
        </View>
    </SafeAreaView>
  )
}

export default WalletScreen;