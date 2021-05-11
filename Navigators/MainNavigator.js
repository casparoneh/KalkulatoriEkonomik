import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Home from '../screens/Home';
import Tvsh from '../screens/Tvsh';
import Taksat from '../screens/Taksat';
import Dogana from '../screens/Dogana';
import TatimiNePaga from '../screens/TatimiNePaga';
import Gjendja from '../screens/Gjendja';
import Info from '../screens/Info';

const HomeStack = createStackNavigator();

const MainNavigator = () => {
    return (

      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Tvsh" component={Tvsh} />
        <HomeStack.Screen name="Dogana" component={Dogana} />
        <HomeStack.Screen name="Taksat" component={Taksat} />
        <HomeStack.Screen name="TatimiNePaga" component={TatimiNePaga} />
        <HomeStack.Screen name="Gjendja" component={Gjendja} />
        <HomeStack.Screen name="Info" component={Info} />
      </HomeStack.Navigator>
     
    )
}

export default MainNavigator
