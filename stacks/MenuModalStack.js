import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const MenuModalStack = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <Text>MenuModalStack</Text>
    </View>
  );
};

export default MenuModalStack;
