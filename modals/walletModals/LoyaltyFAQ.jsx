import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LoyaltyFAQ = () => {

    const navigation = useNavigation();
  
    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <View>
                <Text className='text-3xl text-center'>Loyalty FAQ modal</Text>
                <Text className='text-2xl text-center'>How does Crumbl Loyalty work?</Text>
                <Button title='' onPress={() => navigation.navigate('')}/>
            </View>
        </SafeAreaView>
    )
}

export default LoyaltyFAQ