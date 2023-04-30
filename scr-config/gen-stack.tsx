import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenBubble from "../screens/generate/gen-types/bubble";
import GenBlob from "../screens/generate/gen-types/Blob";
import GenWave from "../screens/generate/gen-types/spikes";
import GenerateScreen from "../screens/generate/generate";
import { theme } from "../services/global-theme";
import DemoT from "../screens/generate/gen-types/demo";
import ColorPickerScreen from "../screens/generate/color-picker-scr";

const GenerateStack = createNativeStackNavigator();
export function GenerateStackScreen() {
  return (
    <GenerateStack.Navigator initialRouteName="Generate Screen">
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
        name="Bubbles"
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
        name="Blob"
        options={{
          title: "Blob",
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.secondary,
        }}
        component={GenBlob}
      />
      <GenerateStack.Screen
        name="Messi Spikes"
        options={{
          title: "Messi Spikes",
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.secondary,
        }}
        component={GenWave}
      />
      <GenerateStack.Screen
        name="DemoT"
        options={{
          title: "DemoT",
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.secondary,
        }}
        component={DemoT}
      />
      <GenerateStack.Group screenOptions={{ presentation: "modal" }}>
        <GenerateStack.Screen
          name="color-picker"
          component={ColorPickerScreen}
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
      </GenerateStack.Group>
    </GenerateStack.Navigator>
  );
}
