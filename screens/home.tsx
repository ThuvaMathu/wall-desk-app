import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  let demoData = "hello world";

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button title="Go to Demo" onPress={() => navigation.navigate("Demos")} />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
