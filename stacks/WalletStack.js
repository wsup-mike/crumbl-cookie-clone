import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoyaltyFAQ from "../modals/walletModals/LoyaltyFAQ";
import CrumblCash from "../modals/walletModals/CrumblCash";
import EarnFreeCrumbsScreen from "../screens/walletscreens/EarnFreeCrumbsScreen";
import AddPromoCode from "../modals/walletModals/AddPromoCode";
import ReferFriend from "../modals/walletModals/ReferFriend";
import BirthdayClub from "../modals/walletModals/BirthdayClub";
import SignUpDeals from "../modals/walletModals/SignUpDeals";

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
      <Stack.Screen
        name="EarnFreeCrumbs"
        component={EarnFreeCrumbsScreen}
        options={{ presentation: "card" }}
      />
      <Stack.Screen name="ReferFriend" component={ReferFriend} />
      <Stack.Screen name="BirthdayClub" component={BirthdayClub} />
      <Stack.Screen name="SignUpDeals" component={SignUpDeals} />
      <Stack.Screen name="AddPromoCode" component={AddPromoCode} options={{}} />
    </Stack.Navigator>
  );
};

export default WalletStack;
