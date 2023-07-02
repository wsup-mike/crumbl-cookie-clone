import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";

const MenuModalStack = () => {
  const Stack = createStackNavigator();

  return <Stack.Navigator></Stack.Navigator>;
};

export default MenuModalStack;
