import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CrumblCash = () => {


    <SafeAreaView className='flex-1 items-center justify-center bg-purple-200'>
    <View>
        <Text className='text-3xl text-center'>Wallet Screen:Loyalty Crumbl Cash</Text>
        <Button title='Modals as Stack Animation' onPress={() => navigation.navigate('DeliveryModal1')}/>
        <Button title='Screen Only' onPress={() => navigation.navigate('NormalScreen')}/>
    </View>
</SafeAreaView>
}

export default CrumblCash