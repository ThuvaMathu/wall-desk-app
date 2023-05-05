import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const ColorPickerScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    ></View>
  );
};

export default ColorPickerScreen;
