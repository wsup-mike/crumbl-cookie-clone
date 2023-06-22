import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from "../screens/OrderScreen";

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <View>
      <Text>OrderStack</Text>
    </View>
  );
};

export default OrderStack;
