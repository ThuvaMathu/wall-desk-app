import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const CreateScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{}}>Hello world</Text>
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
