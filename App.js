import React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./Navigators/MainNavigator";
import TatimiContextProvider from "./context/context";

const App = () => {
  return (
    <TatimiContextProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </TatimiContextProvider>
  );
};

export default App;
