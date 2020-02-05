import React, { useState } from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

import Home from './Screens/Home'

const stackNavigator = createStackNavigator({
  Home:Home
})

async function getFonts(){
  await Font.loadAsync({
    "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

const App = createAppContainer(stackNavigator)
export default () => {
const [fontLoaded, setFontLoaded] = useState(false)

if (fontLoaded) {
  return(
    <App/>
  )
}else{
  return(
    <AppLoading startAsync = { getFonts} onFinish = {()=> setFontLoaded(true)}/>
  )
  }
}