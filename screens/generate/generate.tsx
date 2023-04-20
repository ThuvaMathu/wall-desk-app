import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import GradientRectangle from "./demo-art";

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const CreateScreen: React.FC<HomeScreenProps> = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>demo</Text>
      <GradientRectangle />
    </View>
  );
};

export default CreateScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
