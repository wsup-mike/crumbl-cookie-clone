import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./stacks/HomeStack";

import GiftCardStack from "./stacks/GiftCardStack";
import AccountStack from "./stacks/AccountStack";
import OrderStack from "./stacks/OrderStack";
// import DeliveryModalStack from "./stacks/DeliveryModalStack";
// import MenuModalStack from "./stacks/MenuModalStack";
import WalletStack from "./stacks/WalletStack";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      // screenOptions={({ route }) => ({
      //   headerTitle: () => (
      //     <Image
      //       source={require("./assets/Panera.png")}
      //       style={{ width: 120, height: 30 }}
      //       resizeMode="contain"
      //     />
      //   ),
      // })}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Menu" component={HomeStack} />
      <Tab.Screen name="Order" component={OrderStack} />
      <Tab.Screen name="Wallet" component={WalletStack} />
      <Tab.Screen name="Gifts" component={GiftCardStack} />
      <Tab.Screen name="More" component={AccountStack} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
