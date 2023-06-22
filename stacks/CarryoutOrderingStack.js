import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CarryoutOrderScreen from "../screens/orderscreens/CarryoutOrderScreen";
import SelectPickupLocation from "../modals/SelectPickupLocation";
import PickupDateTime from "../modals/PickupDateTime";
import SelectYourCookies from "../modals/SelectYourCookies";
import AllergyNutrition from "../modals/AllergyNutrition";
import GiftWrapOptions from "../modals/GiftWrapOptions";
import CookiesGame from "../modals/CookiesGame";
import Drinks from "../modals/Drinks";
import ReviewOrder from "../modals/ReviewOrder";
import AddNoteToOrder from "../modals/AddNoteToOrder";
import PickupPersonName from "../modals/PickupPersonName";
import TipPaymentBakers from "../modals/TipPaymentBakers";
import CustomTip from "../modals/CustomTip";
import PriceBreakdown from "../modals/PriceBreakdown";
import PaymentMethodScreen from "../screens/orderscreens/PaymentMethodScreen";
import AddCardScreen from "../screens/orderscreens/AddCardScreen";
import AddtionalPaymentOption from "../modals/AdditionalPaymentOption";
import UseGiftCardVoucher from "../modals/UseGiftCardVoucher";
import EnterPromoCode from "../modals/EnterPromoCode";
import OrderIsProcessingScreen from "../screens/orderscreens/OrderIsProcessingScreen";
import OrderSuccessScreen from "../screens/orderscreens/OrderSuccessScreen";
import FinalOrderConfirmation from "../modals/FinalOrderConfirmation";
import ReasonForCancellation from "../modals/ReasonForCancellation";

const Stack = createStackNavigator();

const CarryoutOrderingStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default CarryoutOrderingStack;
