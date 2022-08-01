import React from "react";
import {View} from 'react-native';
import {OnBoarding} from './pages/OnBoarding';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./navigation";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
};

export default App;