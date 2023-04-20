import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/home";
import MenuScreen from "./screens/menu";
import SearchScreen from "./screens/search";
import Demo from "./screens/sub-screens/demo";
import DownloadOption from "./screens/sub-screens/download-option";
import { MainTab } from "./tab-config";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MainTab"
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="second" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default function App({ route }: any) {
  return (
    <>
      <NavigationContainer>
        <HomeStackScreen />
      </NavigationContainer>
    </>
  );
}
