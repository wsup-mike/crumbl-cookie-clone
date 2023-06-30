import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
// import OrderScreen from "./screens/OrderScreen";
import WalletScreen from "./screens/WalletScreen";
import GiftCardScreen from "./screens/GiftCardScreen";
import AccountScreen from "./screens/AccountScreen";
import OrderStack from "./stacks/OrderStack";
import DeliveryModalStack from "./stacks/DeliveryModalStack";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      screenOptions={({ route }) => ({
        headerTitle: () => (
          <Image
            source={require("./assets/Panera.png")}
            style={{ width: 120, height: 30 }}
            resizeMode="contain"
          />
        ),
      })}
    >
      <Tab.Screen name="Menu" component={HomeScreen} />
      <Tab.Screen name="Order" component={OrderStack} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Gifts" component={GiftCardScreen} />
      <Tab.Screen name="More" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigator;

// RootNavigation
