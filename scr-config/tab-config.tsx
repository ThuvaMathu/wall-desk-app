import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { theme } from "../services/global-theme";
import { CreateStackScreen } from "./create-stack";
import { GenerateStackScreen } from "./gen-stack";
import { HomeStackScreen } from "./home-stack";
import { MenuStackScreen } from "./menu-stack";
import { SearchStackScreen } from "./search-stack";

const Tab = createBottomTabNavigator();

export function MainTab({ route }: any) {
  return (
    <>
      <View
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: any;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Create") {
                iconName = focused ? "ios-create" : "ios-create-outline";
              } else if (route.name === "Generate") {
                iconName = focused ? "color-filter" : "color-filter-outline";
              } else if (route.name === "Menu") {
                iconName = focused ? "ios-menu" : "ios-menu-outline";
              } else {
                iconName = focused
                  ? "ios-search-circle"
                  : "ios-search-circle-outline";
              }

              return (
                <>
                  {route.name === "Search" ? (
                    <MaterialIcons
                      name={"image-search"}
                      size={30}
                      color={color}
                    />
                  ) : (
                    <Ionicons name={iconName} size={30} color={color} />
                  )}

                  {/* {route.name === "Search" ? (
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: theme.primary,
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
                  )} */}
                </>
              );
            },
            headerShown: false,
            tabBarActiveTintColor: theme.secondary,
            tabBarInactiveTintColor: theme.third,
            tabBarStyle: {
              position: "relative",
              borderTopWidth: 1,
              borderTopColor: "darkblue",
              backgroundColor: theme.primary,
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Create" component={CreateStackScreen} />
          <Tab.Screen
            name="Search"
            component={SearchStackScreen}
            options={{}}
          />
          <Tab.Screen name="Generate" component={GenerateStackScreen} />
          <Tab.Screen name="Menu" component={MenuStackScreen} />
        </Tab.Navigator>
      </View>
    </>
  );
}
