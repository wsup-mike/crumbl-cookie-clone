import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoyaltyFAQ from "../modals/walletModals/LoyaltyFAQ";
import CrumblCash from "../modals/walletModals/CrumblCash";

import WalletScreen from "../screens/WalletScreen";

const WalletStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="WalletScreen"
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen name="WalletScreen" component={WalletScreen} options={{}} />
      <Stack.Screen name="LoyaltyFAQ" component={LoyaltyFAQ} options={{}} />
      <Stack.Screen name="CrumblCash" component={CrumblCash} options={{}} />
    </Stack.Navigator>
  );
};

export default WalletStack;
