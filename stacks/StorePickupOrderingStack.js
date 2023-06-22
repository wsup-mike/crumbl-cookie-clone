import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPickupLocation from "../modals/SelectPickupLocation";
import StorePickupOption from "./modals/StorePickupOption";

const Stack = createStackNavigator();

const StorePickupOrderingStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default StorePickupOrderingStack;
