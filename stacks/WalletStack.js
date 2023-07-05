import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const WalletStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="WalletScreen"
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen name="" component={{}} options={{}} />
    </Stack.Navigator>
  );
};

export default WalletStack;
