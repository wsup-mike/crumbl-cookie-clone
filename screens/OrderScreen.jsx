import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'


const OrderScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View>
            <Text className='text-3xl text-center'>ORDER SCREEN:5 Options to Order</Text>
            <TouchableOpacity>
              <View className='items-center py-4'>
                <Text>StorePickupOrderingStack</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className='items-center py-4'>
                <Text>DeliveryOrderingStack</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className='items-center py-4'>
                <Text>CateringPickupOrderingStack</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className='items-center py-4'>
                <Text>ShippingOrderingStack</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className='items-center py-4'>
                <Text>SubscriptionOrderingStack</Text>
              </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default OrderScreen