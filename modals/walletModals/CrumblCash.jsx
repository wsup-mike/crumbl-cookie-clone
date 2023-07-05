import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CrumblCash = () => {

    const navigation = useNavigation();

    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>Crumbl Cash modal</Text>
            <Button title='' onPress={() => navigation.navigate('')} />
        </View>
    </SafeAreaView>
}

export default CrumblCash