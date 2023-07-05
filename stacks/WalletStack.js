import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const WalletStack = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <Text>WalletStack</Text>
    </View>
  );
};

export default WalletStack;
