import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPickupLocation from "../modals/SelectPickupLocation";
import StorePickupOption from "../modals/StorePickupOption";
import CarryoutOrderingStack from "./CarryoutOrderingStack";
import CurbsideOrderingStack from "./CurbsideOrderingStack";

const Stack = createStackNavigator();

const StorePickupOrderingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectPickupLocation"
        component={SelectPickupLocation}
      />
      <Stack.Screen name="StorePickupOption" component={StorePickupOption} />
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