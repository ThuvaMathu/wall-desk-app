import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

type MenuScreenProps = {
  navigation: NavigationProp<any>;
};

const MenuScreen: React.FC<MenuScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 40 }}>Menu screen</Text>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22, 33, 44, 55, 66, 77].map(
          (da: number, i: number) => (
            <Text key={i} style={{ fontSize: 40 }}>
              Menu screen{da}
            </Text>
          )
        )}
      </View>
    </ScrollView>
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
