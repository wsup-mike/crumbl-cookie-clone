import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import OrderStack from "./OrderStack";

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="OrderStack" component={OrderStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;
