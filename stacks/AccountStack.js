import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import CookieJournalScreen from "../screens/accountscreens/CookieJournalScreen";
import AllergyNutrition from "../modals/AllergyNutrition";
import UseGiftCardVoucher from "../modals/UseGiftCardVoucher";
import StoreLocationsMapScreen from "../screens/accountscreens/StoreLocationsMapScreen";
import PurchaseOrderHistoryScreen from "../modals/accountModals/PurchaseOrderHistoryScreen";
import OrderScreen from "../screens/OrderScreen";

const AccountStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="AccountScreen"
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen
        name="CookieJournalScreen"
        component={CookieJournalScreen}
        options={{ presentation: "card" }}
      />
      <Stack.Screen name="AllergyNutrition" component={AllergyNutrition} />
      <Stack.Screen name="UseGiftCardVoucher" component={UseGiftCardVoucher} />
      <Stack.Screen
        name="StoreLocationsMapScreen"
        component={StoreLocationsMapScreen}
        options={{ presentation: "card" }}
      />
      <Stack.Screen
        name="PurchaseOrderHistoryScreen"
        component={PurchaseOrderHistoryScreen}
        options={{ presentation: "card" }}
      />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
