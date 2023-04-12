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

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home Screen" component={HomeScreen} />
      <MenuStack.Group screenOptions={{ presentation: "modal" }}>
        <MenuStack.Screen
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
      </MenuStack.Group>
    </HomeStack.Navigator>
  );
}

const MenuStack = createNativeStackNavigator();
function MenuStackScreen() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="Menu Screen"
        options={{}}
        component={MenuScreen}
      />

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
      <SearchStack.Screen
        name="Downloads2"
        component={DownloadOption}
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
      <SearchStack.Group screenOptions={{ presentation: "modal" }}>
        <SearchStack.Screen
          name="Downloads"
          component={DownloadOption}
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
      </SearchStack.Group>
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App({ route }: any) {
  return (
    <>
      <View
        style={{
          flex: 1,
          position: "relative",
        }}
      >
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
                      <View
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#003554",
                          borderRadius: 50,
                          height: 60,
                          width: 60,
                          transform: [{ translateY: -8 }],
                        }}
                      >
                        <Ionicons name={iconName} size={50} color={color} />
                      </View>
                    ) : (
                      <Ionicons name={iconName} size={30} color={color} />
                    )}
                  </>
                );
              },
              headerShown: false,
              tabBarActiveTintColor: "#dc4100",
              tabBarInactiveTintColor: "gray",
              tabBarStyle: {
                position: "relative",
                borderTopWidth: 1,
                borderTopColor: "darkblue",
                backgroundColor: "#003554",
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen
              name="Search"
              component={SearchStackScreen}
              options={{}}
            />
            <Tab.Screen name="Menu" component={MenuStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        {/* <View
          style={{
            backgroundColor: "red",
            height: 80,
            width: 80,
            borderRadius: 50,
            zIndex: 1,
            position: "absolute",
            bottom: 0,
            //transform: [{ translateY: -10 }, { translateX: 140 }],
          }}
        ></View> */}
      </View>
    </>
  );
}
