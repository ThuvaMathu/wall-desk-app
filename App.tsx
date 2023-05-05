import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTab } from "./scr-config/tab-config";
import * as Font from "expo-font";

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
      {/* <HomeStack.Screen name="second" component={DemoT} /> */}
    </HomeStack.Navigator>
  );
}

export default function App({ route }: any) {
  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Boogaloo-Regular": require("./assets/fonts/Boogaloo-Regular.ttf"),
        "Calgary-DEMO": require("./assets/fonts/Calgary-DEMO.ttf"),
        "Hugh-is-Life-Personal-Use": require("./assets/fonts/Hugh-is-Life-Personal-Use.ttf"),
      });
      await Font.loadAsync({});
    }
    loadFont();
  }, []);
  return (
    <>
      <NavigationContainer>
        <HomeStackScreen />
      </NavigationContainer>
    </>
  );
}
