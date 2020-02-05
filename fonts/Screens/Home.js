import React from 'react'
import {View, StyleSheet, Text, Dimensions, Platform, PixelRatio } from 'react-native'

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
}= Dimensions.get('window')

const scale = SCREEN_WIDTH / 375

function normalize(size){
    const newSize = size * scale
    if (Platform.OS == 'ios'){
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    else{
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}



const Home = ({navigation}) => {
    return(
        <View>
            <Text style = {{fontFamily:'open-sans-bold', fontSize: normalize(20)}}> Welcome To UA Studios</Text>
        </View>
    )
}

export default Home