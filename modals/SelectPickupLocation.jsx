// import { View, Text, SafeAreaView, Button, Animated, StyleSheet } from 'react-native'
// import React, { useState, useRef } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import TestingModal from './TestingModal'

// const SelectPickupLocation = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const scaleValue = useRef(new Animated.Value(1)).current;

//   const navigation = useNavigation();
  
//   const openModal = () => {
//     animateScreenShrink();
//     setModalVisible(true)
//   }

//   const closeModal = () => {
//     animateScreenExpand();
//     setModalVisible(false)
//   }

//   const animateScreenShrink = () => {
//     Animated.timing(scaleValue, {
//       toValue: 0.85, // Scale down to 85% of the original size
//       duration: 300, // Adjust the duration as per your preference
//       useNativeDriver: true,
//     }).start();
//   };

//   const animateScreenExpand = () => {
//     Animated.timing(scaleValue, {
//       toValue: 1, // Restore the original size
//       duration: 300, // Adjust the duration as per your preference
//       useNativeDriver: true,
//     }).start();
//   };


//   return (
//     <SafeAreaView className='flex-1 bg-cyan-400'>
//       <Animated.View style={[{ transform: [{ scale: scaleValue }] }]}>
//         <View className='flex-1 items-center justify-center'>
//           <View>
//             <Text className='text-3xl mt-8 mb-6 text-center'>SelectPickupLocation Modal</Text>
//             <Button 
//               title='StorePickupOption'
//               onPress={() => {
//                 navigation.navigate('StorePickupOrderingStack', { screen: 'StorePickupOption'})
//               }}
//             />
          
//             <Button 
//               title='Open TestingModal'
//               onPress={openModal}
//             />
//           </View>
//           <TestingModal 
//             visible={modalVisible}
//             onClose={closeModal}
//           />
          
//         </View>
//       </Animated.View>
//     </SafeAreaView>
//   )
// }

// export default SelectPickupLocation

// Start new code here:

import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, Button, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TestingModal from './TestingModal';

const SelectPickupLocation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const backgroundOpacity = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(true);
    animateScreenShrink();
  };

  const closeModal = () => {
    setModalVisible(false);
    animateScreenExpand();
  };

  const animateScreenShrink = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(backgroundOpacity, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateScreenExpand = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(backgroundOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.background, { opacity: backgroundOpacity }]} />
      <View style={styles.wrapper}>
        <Animated.View style={[styles.content, { transform: [{ scale: scaleValue }] }]}>
          <View style={styles.innerContent}>
            <Text style={styles.title}>SelectPickupLocation Modal</Text>
            <Button
              title="StorePickupOption"
              onPress={() => {
                navigation.navigate('StorePickupOrderingStack', { screen: 'StorePickupOption' });
              }}
            />

            <Button title="Open TestingModal" onPress={openModal} />
            <TestingModal visible={modalVisible} onClose={closeModal} />
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  innerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginTop: 8,
    marginBottom: 6,
    textAlign: 'center',
    color: 'white',
  },
});

export default SelectPickupLocation;
