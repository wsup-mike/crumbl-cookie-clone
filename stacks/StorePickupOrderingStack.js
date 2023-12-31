import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
      // screenOptions={{ presentation: "modal" }}
    >
      <Stack.Screen name="StorePickupOption" component={StorePickupOption} />
      <Stack.Screen
        name="SelectPickupLocation"
        component={SelectPickupLocation}
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
