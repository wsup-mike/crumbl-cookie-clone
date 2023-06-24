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

import { View, Text, SafeAreaView, Button, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import TestingModal from './TestingModal'

const SelectPickupLocation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;

  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const animateScreenShrink = () => {
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const animateScreenExpand = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={[{ flex: 1, transform: [{ scale: scaleValue }] }]}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, marginTop: 8, marginBottom: 6, textAlign: 'center' }}>
            SelectPickupLocation Modal
          </Text>
          <Button
            title="StorePickupOption"
            onPress={() => {
              navigation.navigate('StorePickupOrderingStack', { screen: 'StorePickupOption' })
            }}
          />

          <Button
            title="Open TestingModal"
            onPress={openModal}
          />
          <TestingModal
            visible={modalVisible}
            onClose={closeModal}
            onModalShow={animateScreenShrink}
            onModalHide={animateScreenExpand}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  )
}

export default SelectPickupLocation

