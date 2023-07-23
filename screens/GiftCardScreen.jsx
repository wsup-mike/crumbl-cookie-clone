import { View, Text, SafeAreaView, Button, Animated, Easing } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const GiftCardScreen = () => {
  const navigation = useNavigation();
  
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0})).current

  useEffect(() => {
    
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: 100,
        useNativeDriver: true,
      }),
      
      Animated.parallel([
        
        Animated.spring(translation.x, {
          toValue: -100,
          // easing: Easing.bounce,
          useNativeDriver: true,
        }),

        Animated.spring(translation.y, {
          toValue: -100,
          // easing: Easing.bounce,
          useNativeDriver: true,
        }),

      ])
    ]).start()

  }, [])

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-pink-500'>
      <View >
          <Text className='text-3xl text-center'>Gift Card Screen: Purchase Digital Gift Cards</Text>
          <Button title='Gift Card Design #1' onPress={() => navigation.navigate('GiftCardSelectedScreen')} />
      </View>
      <>
      <View className='flex flex-row'>
      <Animated.View 
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          
          // transform: [
          //   { translateX: translation.x },
          //   { translateY: translation.y },
          // ],
        }}
      />
      <Animated.View 
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          
          // transform: [
          //   { translateX: translation.x },
          //   { translateY: translation.y },
          // ],
        }}
      />
      <Animated.View 
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          
          // transform: [
          //   { translateX: translation.x },
          //   { translateY: translation.y },
          // ],
        }}
      />
      </View>
      </>
    </SafeAreaView>
  )
}

export default GiftCardScreen;