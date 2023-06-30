import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DeliveryModal1 from "../modals/DeliveryModal1";
import DeliveryModal2 from "../modals/DeliveryModal2";
import DeliveryModal3 from "../modals/DeliveryModal3";

const Stack = createStackNavigator();

const ParentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DeliveryModalStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DeliveryModalStack" component={DeliveryModalStack} />
    </Stack.Navigator>
  );
};

const DeliveryModalStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DeliveryModal1"
        // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="DeliveryModal1" component={DeliveryModal1} />
        <Stack.Screen name="DeliveryModal2" component={DeliveryModal2} />
        <Stack.Screen name="DeliveryModal3" component={DeliveryModal3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DeliveryModalStack;
