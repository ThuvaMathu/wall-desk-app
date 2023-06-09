import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenBubble from "../screens/generate/gen-types/bubble";
import GenBlob from "../screens/generate/gen-types/Blob";
import GenerateScreen from "../screens/generate/generate";
import { theme } from "../services/global-theme";
import DemoT from "../screens/generate/gen-types/demo";
import ColorPickerScreen from "../screens/generate/color-picker-scr";
import CircleFill from "../screens/generate/gen-types/circle-fill";
import WaveSplitter from "../screens/generate/gen-types/wave-spliter";
import ReactBar from "../screens/generate/gen-types/rect-bar";
import MessyWave from "../screens/generate/gen-types/messy-wave";
import WaterFlow from "../screens/generate/gen-types/water-flow";

const GenerateStack = createNativeStackNavigator();
export function GenerateStackScreen() {
  const scrOptions = (title: any) => {
    return {
      title: title,
      headerStyle: {
        backgroundColor: theme.primary,
      },
      headerTintColor: theme.secondary,
    };
  };
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
        name="Wave Split"
        options={{
          title: "Wave Split",
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.secondary,
        }}
        component={WaveSplitter}
      />
      <GenerateStack.Screen
        name="Checked"
        options={scrOptions("Checked")}
        component={ReactBar}
      />
      <GenerateStack.Screen
        name="Circle Fill"
        options={scrOptions("Circle Fill")}
        component={CircleFill}
      />
      <GenerateStack.Screen
        name="Messy Wave"
        options={scrOptions("Messy Wave")}
        component={MessyWave}
      />
      <GenerateStack.Screen
        name="Water Flow"
        options={scrOptions("Water Flow")}
        component={WaterFlow}
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
