import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/home";
import Demo from "../screens/search/demo";

const HomeStack = createNativeStackNavigator();
export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home Screen" component={HomeScreen} />
      <HomeStack.Group screenOptions={{ presentation: "modal" }}>
        <HomeStack.Screen
          name="Demos"
          component={Demo}
          options={{
            headerShown: true,

            headerStyle: {
              backgroundColor: "#003554",
            },
            headerTintColor: "white",
            headerBackTitle: "back",
            headerBackTitleStyle: { fontSize: 18 },
            headerTitleStyle: {
              color: "#fff",
              fontSize: 16,
              fontWeight: "500",
            },
          }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
