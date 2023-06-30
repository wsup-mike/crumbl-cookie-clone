import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import horizontalAnimation from "../components/horizontalAnimation";
import DeliveryModal1 from "../modals/DeliveryModal1";
import DeliveryModal2 from "../modals/DeliveryModal2";
import DeliveryModal3 from "../modals/DeliveryModal3";
import WalletScreen from "../screens/WalletScreen";
import NormalScreen from "../screens/NormalScreen";

const DeliveryModalStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="WalletScreen"
      // screenOptions={{ headerShown: false }}
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen
        name="NormalScreen"
        component={NormalScreen}
        options={horizontalAnimation}
      />
      <Stack.Screen name="DeliveryModal1" component={DeliveryModal1} />
      <Stack.Screen name="DeliveryModal2" component={DeliveryModal2} />
      <Stack.Screen name="DeliveryModal3" component={DeliveryModal3} />
    </Stack.Navigator>
  );
};

export default DeliveryModalStack;
