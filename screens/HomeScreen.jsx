import { View, Text, Button, SafeAreaView, Animated } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'

const HomeScreen = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)

  const translation = useRef(new Animated.Value(0)).current  

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  const navigation = useNavigation();

  const toggleModal1 = () => {
    setModalOpen(!modalOpen)
  }

  const toggleModal2 = () => {
    setModal2Open(!modal2Open)
  }


  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-slate-700'>
      {/* 1st Modal */}
      
     <Modal 
        isVisible={modalOpen}
        animationIn='slideInUp'
        animationOut='slideOutDown'
        swipeDirection={['down']}
        onSwipeComplete={toggleModal1}
        // propagateSwipe
        // onBackdropPress={() => setModalOpen(false)}
        
        className='m-0 mt-8'
      >
        <View className='flex-1 items-center justify-center bg-amber-500 rounded-t-3xl'>
          <Text className='text-3xl text-center'>This is Modal 1</Text>
          <Button 
            title='Toggle Modal on/off'
            onPress={() => setModalOpen(!modalOpen)}
          />
          <Button 
            title='Move rightwards to Modal 2'
            onPress={() => setModal2Open(true)}
          />
        </View>  
        
      </Modal>
      
     
     {/* 2nd Modal  */}
     <Modal 
        isVisible={modal2Open}
        animationIn='slideInRight'
        animationOut='slideOutRight'
        swipeDirection={['right']}
        // onSwipeComplete={toggleModal2}
        // propagateSwipe
        onBackdropPress={() => setModal2Open(false)}
        
        className='m-0 mt-8'
      >
        <View className='flex-1 items-center justify-center bg-green-400 rounded-t-3xl'>
          <Text className='text-3xl text-center'>This is Modal 2</Text>
          <Button 
            title='Toggle Modal on/off'
            onPress={toggleModal2}
          />
        </View>  
      </Modal>

    {/* The origin screen: HomeScreen */}
      <View>
          <Text className='text-3xl text-center'>HOME SCREEN: The Mutha Frikin Crumbl Cookie Clone App</Text>
          <Button 
            title='Toggle Modal on/off'
            onPress={() => setModalOpen(!modalOpen)}
            // onPress={() => setModal2Open(!modal2Open)}
          />
          <Button 
            title='Go to OrderScreen' 
            // onPress={() => navigation.navigate('Order', { screen: 'OrderScreen'})}
            onPress={() => navigation.navigate('Order', { screen: 'OrderScreen'})}
          />
          <Button 
            title='Go to GesturePracticeScreen' 
            onPress={() => navigation.navigate('GesturePracticeScreen', { screen: 'GesturePracticeScreen'})}
          />
          
      </View>
      <Animated.View 
          style={{
            width: 100,
            height: 100,
            backgroundColor: translation.interpolate({
              inputRange: [0, 100],
              outputRange: ['red', 'blue']
            }),
            transform: [{ translateX: translation }],
            opacity: translation.interpolate({
              inputRange: [25, 50, 100],
              outputRange: [0, 1, 0],
              extrapolate: 'clamp',
            }),
            transform: [
              { translateX: translation},
              {
                rotate: translation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0deg', '360deg']
                })
              },
            ],
          }}
        />
    </SafeAreaView>
  )
}

export default HomeScreen

