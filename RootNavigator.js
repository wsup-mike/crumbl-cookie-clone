import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import WalletScreen from "./screens/WalletScreen";
import GiftCardScreen from "./screens/GiftCardScreen";
import AccountScreen from "./screens/AccountScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={HomeScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Gifts" component={GiftCardScreen} />
      <Tab.Screen name="More" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
