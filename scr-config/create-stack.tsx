import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateScreen from "../screens/create/create-screen";

const CreateStack = createNativeStackNavigator();
export function CreateStackScreen() {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen name="Create Screen" component={CreateScreen} />
    </CreateStack.Navigator>
  );
}
