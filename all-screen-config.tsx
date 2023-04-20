import * as React from "react";
import { Button, Pressable, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import HomeScreen from "./screens/home";
import MenuScreen from "./screens/menu";
import SearchScreen from "./screens/search";
import Demo from "./screens/sub-screens/demo";
import DownloadOption from "./screens/sub-screens/download-option";
import { theme } from "./services/global-theme";
import CreateScreen from "./screens/create/create";

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

const MenuStack = createNativeStackNavigator();
export function MenuStackScreen() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="Menu Screen"
        options={{}}
        component={MenuScreen}
      />
    </MenuStack.Navigator>
  );
}
const CreateStack = createNativeStackNavigator();
export function CreateStackScreen() {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen name="Create" component={CreateScreen} />
    </CreateStack.Navigator>
  );
}
const GenerateStack = createNativeStackNavigator();
export function GenerateStackScreen() {
  return (
    <GenerateStack.Navigator>
      <GenerateStack.Screen
        name="Generate"
        options={{}}
        component={MenuScreen}
      />
    </GenerateStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();
export function SearchStackScreen() {
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
        name="Download"
        component={DownloadOption}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: "#14213D",
          },
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate("search")}>
              <View>
                <AntDesign name={"left"} size={30} color={theme.secondary} />
              </View>
            </Pressable>
          ),
          headerTintColor: "white",
          headerBackTitle: "back",
          headerBackTitleStyle: { fontSize: 18 },
          headerTitleStyle: {
            color: "#FCA311",
            fontSize: 16,
            fontWeight: "500",
          },
        })}
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
    </SearchStack.Navigator>
  );
}
