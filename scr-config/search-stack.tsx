import * as React from "react";
import { Pressable, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import SearchScreen from "../screens/search/search";
import DownloadOption from "../screens/search/download-option";
import { theme } from "../services/global-theme";

const SearchStack = createNativeStackNavigator();
export function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="search Screen"
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
