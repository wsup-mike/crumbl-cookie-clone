import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CurbsideOrderScreen from "../screens/orderscreens/CurbsideOrderScreen";
import SelectPickupLocation from "../modals/SelectPickupLocation";
import PickupDateTime from "../modals/PickupDateTime";
import SelectYourCookies from "../modals/SelectYourCookies";
import AllergyNutrition from "../modals/AllergyNutrition";
import GiftWrapOptions from "../modals/GiftWrapOptions";
import CookiesGame from "../modals/CookiesGame";
import Drinks from "../modals/Drinks";
import ReviewOrder from "../modals/ReviewOrder";
import AddNoteToOrder from "../modals/AddNoteToOrder";
import PickupPersonNameVehicle from "../modals/PickupPersonNameVehicle";
import TipPaymentBakers from "../modals/TipPaymentBakers";
import CustomTip from "../modals/CustomTip";
import PriceBreakdown from "../modals/PriceBreakdown";
import PaymentMethodScreen from "../screens/orderscreens/PaymentMethodScreen";
import AddCardScreen from "../screens/orderscreens/AddCardScreen";
import AdditionalPaymentOption from "../modals/AdditionalPaymentOption";
import UseGiftCardVoucher from "../modals/UseGiftCardVoucher";
import EnterPromoCode from "../modals/EnterPromoCode";
import OrderIsProcessingScreen from "../screens/orderscreens/OrderIsProcessingScreen";
import OrderSuccessScreen from "../screens/orderscreens/OrderSuccessScreen";
import FinalOrderConfirmation from "../modals/FinalOrderConfirmation";
import ReasonForCancellation from "../modals/ReasonForCancellation";

const Stack = createStackNavigator();

const CurbsideOrderingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CurbsideOrderScreen"
        component={CurbsideOrderScreen}
      />
      <Stack.Screen
        name="SelectPickupLocation"
        component={SelectPickupLocation}
      />
      <Stack.Screen name="PickupDateTime" component={PickupDateTime} />
      <Stack.Screen name="SelectYourCookies" component={SelectYourCookies} />
      <Stack.Screen name="AllergyNutrition" component={AllergyNutrition} />
      <Stack.Screen name="GiftWrapOptions" component={GiftWrapOptions} />
      <Stack.Screen name="CookiesGame" component={CookiesGame} />
      <Stack.Screen name="Drinks" component={Drinks} />
      <Stack.Screen name="ReviewOrder" component={ReviewOrder} />
      <Stack.Screen name="AddNoteToOrder" component={AddNoteToOrder} />
      <Stack.Screen
        name="PickupPersonNameVehicle"
        component={PickupPersonNameVehicle}
      />
      <Stack.Screen name="TipPaymentBakers" component={TipPaymentBakers} />
      <Stack.Screen name="CustomTip" component={CustomTip} />
      <Stack.Screen name="PriceBreakdown" component={PriceBreakdown} />
      <Stack.Screen
        name="PaymentMethodScreen"
        component={PaymentMethodScreen}
      />
      <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
      <Stack.Screen
        name="AdditionalPaymentOption"
        component={AdditionalPaymentOption}
      />
      <Stack.Screen name="UseGiftCardVoucher" component={UseGiftCardVoucher} />
      <Stack.Screen name="EnterPromoCode" component={EnterPromoCode} />
      <Stack.Screen
        name="OrderIsProcessingScreen"
        component={OrderIsProcessingScreen}
      />
      <Stack.Screen name="OrderSuccessScreen" component={OrderSuccessScreen} />
      <Stack.Screen
        name="FinalOrderConfirmation"
        component={FinalOrderConfirmation}
      />
      <Stack.Screen
        name="ReasonForCancellation"
        component={ReasonForCancellation}
      />
    </Stack.Navigator>
  );
};

export default CurbsideOrderingStack;
