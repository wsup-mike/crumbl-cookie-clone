import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeliveryModal1 from "../modals/DeliveryModal1";
import DeliveryModal2 from "../modals/DeliveryModal2";
import DeliveryModal3 from "../modals/DeliveryModal3";
import WalletScreen from "../screens/WalletScreen";

const DeliveryModalStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="WalletScreen"
      // screenOptions={{ headerShown: false }}
      screenOptions={{ presentation: "modal" }}
    >
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="DeliveryModal1" component={DeliveryModal1} />
      <Stack.Screen name="DeliveryModal2" component={DeliveryModal2} />
      <Stack.Screen name="DeliveryModal3" component={DeliveryModal3} />
    </Stack.Navigator>
  );
};

export default DeliveryModalStack;
