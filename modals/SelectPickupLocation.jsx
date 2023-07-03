// Refactored with 'classname'
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectPickupLocation = () => {
  const navigation = useNavigation();

  return (
      <SafeAreaView className='flex-1 bg-white rounded-t-3xl items-center justify-center'>
          <View>
            <Text className='text-3xl text-center'>SelectPickupLocation Modal</Text>
            <Button 
              title='StorePickupOption'
              onPress={() => {
                navigation.navigate('StorePickupOption')
              }}              
            /> 
          </View>
      </SafeAreaView>
  );
};

export default SelectPickupLocation;

