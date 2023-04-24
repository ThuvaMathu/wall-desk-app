import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/menu/menu";

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
