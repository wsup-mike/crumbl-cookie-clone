import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import YourAddresses from "../modals/YourAddresses";

const Stack = createStackNavigator();

const DeliveryOrderingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="YourAddresses"
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen name="YourAddresses" component={YourAddresses} />
    </Stack.Navigator>
  );
};

export default DeliveryOrderingStack;
