import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, Button, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TestingModal from './TestingModal';

const SelectPickupLocation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;

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

  const wrapperStyle = {
    flex: 1,
    borderTopLeftRadius: modalVisible ? 20 : 0,
    borderTopRightRadius: modalVisible ? 20 : 0,
    overflow: 'hidden',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[wrapperStyle, { transform: [{ scale: scaleValue }] }]}>
        
        <View style={styles.body}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
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

// // Start other new code here:

// import React, { useState, useRef } from 'react';
// import { View, Text, SafeAreaView, Button, Animated } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import TestingModal from './TestingModal';

// const SelectPickupLocation = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const scaleValue = useRef(new Animated.Value(1)).current;

//   const navigation = useNavigation();

//   const openModal = () => {
//     setModalVisible(true);
//     animateScreenShrink();
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     animateScreenExpand();
//   };

//   const animateScreenShrink = () => {
//     Animated.timing(scaleValue, {
//       toValue: 0.9,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const animateScreenExpand = () => {
//     Animated.timing(scaleValue, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const wrapperStyle = {
//     flex: 1,
//     borderTopLeftRadius: modalVisible ? 20 : 0,
//     borderTopRightRadius: modalVisible ? 20 : 0,
//     overflow: 'hidden',
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
//       <Animated.View style={[wrapperStyle, { transform: [{ scale: scaleValue }] }]}>
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
//           <Text style={{ fontSize: 30, marginTop: 8, marginBottom: 6, textAlign: 'center', color: 'black' }}>
//             SelectPickupLocation Modal
//           </Text>
//           <Button
//             title="StorePickupOption"
//             onPress={() => {
//               navigation.navigate('StorePickupOrderingStack', { screen: 'StorePickupOption' });
//             }}
//           />

//           <Button title="Open TestingModal" onPress={openModal} />
//           <TestingModal visible={modalVisible} onClose={closeModal} />
//         </View>
//       </Animated.View>
//     </SafeAreaView>
//   );
// };

// export default SelectPickupLocation;
