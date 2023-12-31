import { View, Text, SafeAreaView, Button, Animated, Easing, Dimensions } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const GiftCardScreen = () => {
  const navigation = useNavigation();
  
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
  const translation2 = useRef(new Animated.Value(Dimensions.get('window').width)).current

  // const opacity1 = useRef(new Animated.Value(0)).current
  // const opacity2 = useRef(new Animated.Value(0)).current
  // const opacity3 = useRef(new Animated.Value(0)).current

  // useEffect(() => {
  //   Animated.stagger(400, [
  //     Animated.timing(opacity1, {
  //       toValue: 1, 
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(opacity2, {
  //       toValue: 1, 
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(opacity3, {
  //       toValue: 1, 
  //       useNativeDriver: true,
  //     }),
  //   ]).start()
  // }, [])

  useEffect(() => {
    Animated.timing(translation2, {
      toValue: 1, 
      duration: 5000,
      useNativeDriver: false,
      
    }).start();
  }, []);
  
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

      <Animated.View 
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          // opacity: opacity1,
          transform: [
            { translateX: translation.x },
            { translateY: translation.y },
          ],
        }}
      />
      <Animated.View 
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          // opacity: opacity1,
          transform: [{ translateX: translation2.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 0], // Start fr. outside screen (-100% width) to onscreen (0% width)
          }) }],
        }}
      />
      {/* <Animated.View 
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          // opacity: opacity2,
          transform: [
            { translateX: translation.x },
            { translateY: translation.y },
          ],
        }}
      />
      <Animated.View 
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          // opacity: opacity3,
          transform: [
            { translateX: translation.x },
            { translateY: translation.y },
          ],
        }}
      /> */}
   
    </SafeAreaView>
  )
}

export default GiftCardScreen;