import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const EarnFreeCrumbsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <View>
                <Text className='text-3xl text-center'>Earn Free Crumbs!</Text>
                <View>
                    <Button title='Refer a friend' onPress={() => navigation.navigate('ReferFriend')}/>
                    <Button title='Join birthday club' onPress={() => navigation.navigate('BirthdayClub')}/>
                    <Button title='Sign up for deals' onPress={() => navigation.navigate('SignUpDeals')} />
                    <Button title='Review us on Facebook' onPress={() => navigation.navigate('FacebookReview')} />
                    <Button title='Review us on Google' onPress={() => navigation.navigate('GoogleReview')} />
                    <Button title='Follow us on LinkedIn' onPress={() => navigation.navigate('LinkedInFollow')} />
                    <Button title='Follow us on Pinterest' onPress={() => navigation.navigate('PinterestFollow')} />
                    <Button title='Follow us on TikTok' onPress={() => navigation.navigate('TikTokFollow')} />
                    <Button title='Follow us on Twitter' onPress={() => navigation.navigate('TwitterFollow')} />
                    <Button title='Follow us on YouTube' onPress={() => navigation.navigate('YouTubeFollow')} />
                    <Button title='Rate our app' onPress={() => navigation.navigate('RateApp')} />
                    <Button title='Follow us on Facebook' onPress={() => navigation.navigate('FacebookFollow')} />
                    <Button title='Follow us on Instagram' onPress={() => navigation.navigate('InstagramFollow')} />
                </View>
            </View>
        </SafeAreaView>
  )
}

export default EarnFreeCrumbsScreen