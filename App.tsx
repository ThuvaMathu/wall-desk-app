import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/home";
import MenuScreen from "./screens/menu";
import SearchScreen from "./screens/search";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}

const MenuStack = createNativeStackNavigator();

function MenuStackScreen() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="menu" component={MenuScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </MenuStack.Navigator>
  );
}
const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App({ route }: any) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Menu") {
              iconName = focused ? "ios-menu" : "ios-menu-outline";
            } else {
              iconName = focused
                ? "ios-search-circle"
                : "ios-search-circle-outline";
            }

            // You can return any component that you like here!
            return (
              <>
                {route.name === "Search" ? (
                  <View style={{ backgroundColor: "red", borderRadius: "50%" }}>
                    <Ionicons name={iconName} size={30} color={color} />
                  </View>
                ) : (
                  <Ionicons name={iconName} size={30} color={color} />
                )}
              </>
            );
          },
          headerShown: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {},
          tabBarIconStyle: {
            height: 100,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} options={{}} />
        <Tab.Screen name="Menu" component={MenuStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
