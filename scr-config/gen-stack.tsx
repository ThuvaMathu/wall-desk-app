import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenBubble from "../screens/generate/gen-types/bubble";
import GenSplit from "../screens/generate/gen-types/split";
import GenWave from "../screens/generate/gen-types/wave";
import GenerateScreen from "../screens/generate/generate";
import { theme } from "../services/global-theme";

const GenerateStack = createNativeStackNavigator();
export function GenerateStackScreen() {
  return (
    <GenerateStack.Navigator>
      <GenerateStack.Screen
        name="Generate Screen"
        options={{
          title: "Generate",
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.secondary,
        }}
        component={GenerateScreen}
      />
      <GenerateStack.Screen
        name="genbubble"
        options={{
          title: "Bubbles",
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.secondary,
        }}
        component={GenBubble}
      />
      <GenerateStack.Screen
        name="gensplit"
        options={{
          title: "Bubbles",
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.secondary,
        }}
        component={GenSplit}
      />
      <GenerateStack.Screen
        name="genwave"
        options={{
          title: "Waves",
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.secondary,
        }}
        component={GenWave}
      />
    </GenerateStack.Navigator>
  );
}
