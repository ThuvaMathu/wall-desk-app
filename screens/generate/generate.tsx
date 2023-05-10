import { NavigationProp } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { screenSize } from "../../services/global-theme";
import { demo1, genTypes } from "./gen-data";
import { ImageBackground } from "react-native";
import * as Font from "expo-font";
type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const GenerateScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        // marginTop: 20,
      }}
    >
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 6,
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 5,
            paddingVertical: 20,
          }}
        >
          {genTypes.map((data: any, i: number) => (
            <View
              key={i}
              style={{
                width: screenSize.width / 2.1,
                height: 200,
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //overflow: "hidden",
              }}
            >
              <View
                style={{
                  height: 180,
                  width: "80%",
                  backgroundColor: "pink",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Pressable onPress={() => navigation.navigate(data.name)}>
                  <ImageBackground
                    style={{
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    source={data.img}
                  >
                    {/* <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "500",
                    fontFamily: "Calgary-DEMO",
                  }}
                >
                  {data.name}
                </Text> */}
                  </ImageBackground>
                </Pressable>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  fontFamily: "Calgary-DEMO",
                  textAlign: "center",
                }}
              >
                {data.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GenerateScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
