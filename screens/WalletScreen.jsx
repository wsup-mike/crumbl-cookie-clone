import { View, Text, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NormalScreen from './NormalScreen'

const WalletScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>Wallet Screen:Loyalty Crumbl Cash</Text>
            <Button title='Modals as Stack Animation' onPress={() => navigation.navigate('DeliveryModal1')}/>
            <Button title='Screen Only' onPress={() => navigation.navigate('NormalScreen')}/>
        </View>
    </SafeAreaView>
  )
}

export default WalletScreen;