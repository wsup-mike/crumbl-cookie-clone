import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import CookieJournalScreen from "../screens/accountscreens/CookieJournalScreen";

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
    </Stack.Navigator>
  );
};

export default AccountStack;
