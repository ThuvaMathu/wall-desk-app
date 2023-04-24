import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const Demo: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>demo</Text>
    </View>
  );
};

export default Demo;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
