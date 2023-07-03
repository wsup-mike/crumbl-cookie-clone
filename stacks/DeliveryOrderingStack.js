import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import YourAddresses from "../modals/YourAddresses";
import CreateNewAddress from "../modals/CreateNewAddress";
import DeliveryModalStack from "./DeliveryModalStack";

const Stack = createStackNavigator();

const DeliveryOrderingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="YourAddresses"
      screenOptions={{
        headerShown: false,
        // presentation: "modal",
      }}
    >
      <Stack.Screen
        name="YourAddresses"
        component={YourAddresses}
        // options={{ presentation: "modal" }}
      />
      <Stack.Screen name="CreateNewAddress" component={CreateNewAddress} />
    </Stack.Navigator>
  );
};

export default DeliveryOrderingStack;
