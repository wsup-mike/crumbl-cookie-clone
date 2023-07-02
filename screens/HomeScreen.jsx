import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>HOME SCREEN: The Mutha Frikin Crumbl Cookie Clone App</Text>
            <Button title='MenuModal1' onPress={()=> {}}/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen