import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from "../screens/OrderScreen";
import StorePickupOrderingStack from "./StorePickupOrderingStack";
import DeliveryOrderingStack from "./DeliveryOrderingStack";
import CateringPickupOrderingStack from "./CateringPickupOrderingStack";
import ShippingOrderingStack from "./ShippingOrderingStack";
import SubscriptionOrderingStack from "./SubscriptionOrderingStack";
import SelectPickupLocation from "../modals/SelectPickupLocation";

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OrderScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="OrderScreen" component={OrderScreen} options={{}} />

      <Stack.Screen
        name="StorePickupOrderingStack"
        component={StorePickupOrderingStack}
      />
      <Stack.Screen
        name="DeliveryOrderingStack"
        component={DeliveryOrderingStack}
      />
      <Stack.Screen
        name="CateringPickupOrderingStack"
        component={CateringPickupOrderingStack}
      />
      <Stack.Screen
        name="ShippingOrderingStack"
        component={ShippingOrderingStack}
      />
      <Stack.Screen
        name="SubscriptionOrderingStack"
        component={SubscriptionOrderingStack}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
