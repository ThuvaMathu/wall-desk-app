import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

type MenuScreenProps = {
  navigation: NavigationProp<any>;
};

const MenuScreen: React.FC<MenuScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Menu screen</Text>
    </View>
  );
};

export default MenuScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
