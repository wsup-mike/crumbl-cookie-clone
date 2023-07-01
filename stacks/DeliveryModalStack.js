import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import horizontalAnimation from "../components/horizontalAnimation";
import DeliveryModal1 from "../modals/DeliveryModal1";
import DeliveryModal2 from "../modals/DeliveryModal2";
import DeliveryModal3 from "../modals/DeliveryModal3";
import WalletScreen from "../screens/WalletScreen";
import NormalScreen from "../screens/NormalScreen";

const customTransitionConfig = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const DeliveryModalStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="WalletScreen"
      screenOptions={{
        presentation: "modal",
        ...horizontalAnimation,
      }}
    >
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen
        name="NormalScreen"
        component={NormalScreen}
        options={{ ...horizontalAnimation }}
      />
      <Stack.Screen
        name="DeliveryModal1"
        component={DeliveryModal1}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="DeliveryModal2"
        component={DeliveryModal2}
        options={{
          // ...horizontalAnimation,
          presentation: "modal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: customTransitionConfig,
            close: customTransitionConfig,
          },
        }}
      />
      <Stack.Screen
        name="DeliveryModal3"
        component={DeliveryModal3}
        options={{
          // ...horizontalAnimation,
          presentation: "modal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: customTransitionConfig,
            close: customTransitionConfig,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default DeliveryModalStack;
