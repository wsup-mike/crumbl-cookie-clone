import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const WalletStack = () => {
  const Stack = createStackNavigator();

  return <Stack.Navigator></Stack.Navigator>;
};

export default WalletStack;
