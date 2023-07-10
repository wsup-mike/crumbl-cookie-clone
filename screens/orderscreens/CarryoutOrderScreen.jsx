import { View, Text, SafeAreaView, Button, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CarryoutOrderScreen = () => {
  const navigation = useNavigation()

  return (
    <ScrollView>
        <View  className='flex-1 items-center justify-center'>
            <Text className='text-3xl text-center'>Store Pickup / Carry Out Order Screen</Text>
        
        <Button title='SelectPickupLocation' onPress={() => navigation.navigate('SelectPickupLocation')} />
        <Button title='PickupDateTime' onPress={() => navigation.navigate('PickupDateTime')} />
        <Button title='SelectYourCookies' onPress={() => navigation.navigate('SelectYourCookies')} />
        <Button title='AllergyNutrition' onPress={() => navigation.navigate('AllergyNutrition')} />
        <Button title='GiftWrapOptions' onPress={() => navigation.navigate('GiftWrapOptions')} />
        <Button title='CookiesGame' onPress={() => navigation.navigate('CookiesGame')} />
        <Button title='Drinks' onPress={() => navigation.navigate('Drinks')} />
        <Button title='ReviewOrder' onPress={() => navigation.navigate('ReviewOrder')} />
        <Button title='AddNoteToOrder' onPress={() => navigation.navigate('AddNoteToOrder')} />
        <Button title='PickupPersonName' onPress={() => navigation.navigate('PickupPersonName')} />
        <Button title='TipPaymentBakers' onPress={() => navigation.navigate('TipPaymentBakers')} />
        <Button title='CustomTip' onPress={() => navigation.navigate('CustomTip')} />
        <Button title='PriceBreakdown' onPress={() => navigation.navigate('PriceBreakdown')} />
        <Button title='PaymentMethodScreen' onPress={() => navigation.navigate('PaymentMethodScreen')} />
        <Button title='AddCardScreen' onPress={() => navigation.navigate('AddCardScreen')} />
        <Button title='AdditionalPaymentOption' onPress={() => navigation.navigate('AdditionalPaymentOption')} />
        <Button title='UseGiftCardVoucher' onPress={() => navigation.navigate('AdditionalPaymentOption')} />
        <Button title='EnterPromoCode' onPress={() => navigation.navigate('EnterPromoCode')} />
        <Button title='OrderIsProcessingScreen' onPress={() => navigation.navigate('OrderIsProcessingScreen')} />
        <Button title='OrderSuccessScreen' onPress={() => navigation.navigate('OrderSuccessScreen')} />
        <Button title='FinalOrderConfirmation' onPress={() => navigation.navigate('FinalOrderConfirmation')} />
        <Button title='ReasonForCancellation' onPress={() => navigation.navigate('ReasonForCancellation')} />
        </View>
    </ScrollView>
  )
}

export default CarryoutOrderScreen