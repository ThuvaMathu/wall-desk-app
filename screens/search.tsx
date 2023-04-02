import { NavigationProp } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImgComponent from "../services/img-component";

type AboutScreenProps = {
  navigation: NavigationProp<any>;
};

const SearchScreen: React.FC<AboutScreenProps> = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  return (
    <SafeAreaView
      style={{ flex: 1, position: "relative", backgroundColor: "#0288d6" }}
    >
      <View
        style={{
          // position: "absolute",
          // bottom: 10,
          width: "100%",
          zIndex: 2,
          //backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 12,
            padding: 6,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search"
          />
          <View
            style={{
              display: "flex",
              paddingHorizontal: 5,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              <Ionicons name={"search"} size={24} color={"tomato"} />
            </Text>
          </View>
        </View>
      </View>
      <ImgComponent />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    flex: 2,
  },
});
