import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
      <SafeAreaView className='flex-1 items-center justify-center bg-purple-400'>
        <View>
            <Text className='text-3xl text-center'>HOME SCREEN: The Mutha Frikin Crumbl Cookie Clone App</Text>
            <Button 
              title='Order Now (OrderScreen)' 
              onPress={() => navigation.navigate('OrderStack', { screen: 'OrderScreen'})}  
            />
        </View>
      </SafeAreaView>
  )
}

export default HomeScreen