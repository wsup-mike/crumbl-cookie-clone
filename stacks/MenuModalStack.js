import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import MenuModal1 from "../modals/MenuModal1";
import MenuModal2 from "../modals/MenuModal2";

const MenuModalStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MenuModal1" component={MenuModal1} />
      <Stack.Screen name="MenuModal2" component={MenuModal2} />
    </Stack.Navigator>
  );
};

export default MenuModalStack;
