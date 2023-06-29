import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SelectPickupLocation from "../modals/SelectPickupLocation";
import StorePickupOption from "../modals/StorePickupOption";
import CarryoutOrderingStack from "./CarryoutOrderingStack";
import CurbsideOrderingStack from "./CurbsideOrderingStack";
import TestingModal from "../modals/TestingModal";

const Stack = createStackNavigator();

const StorePickupOrderingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SelectPickupLocation"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animationTypeForReplace: "push",
        ...TransitionPresets.SlideFromRightIOS,
        // headerTransparent: true,
        // headerStyle: { backgroundColor: "transparent" },
        // cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="SelectPickupLocation"
        component={SelectPickupLocation}
        options={{
          headerShown: false, // Hide header
        }}
      />
      <Stack.Screen
        name="StorePickupOption"
        component={StorePickupOption}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animationTypeForReplace: "push",
        }}
      />
      <Stack.Screen
        name="TestingModal"
        component={TestingModal}
        options={{
          headerShown: false, // Hide header
        }}
      />
      <Stack.Screen
        name="CarryoutOrderingStack"
        component={CarryoutOrderingStack}
      />
      <Stack.Screen
        name="CurbsideOrderingStack"
        component={CurbsideOrderingStack}
      />
    </Stack.Navigator>
  );
};

export default StorePickupOrderingStack;
