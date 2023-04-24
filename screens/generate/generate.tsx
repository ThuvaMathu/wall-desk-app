import { NavigationProp } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
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
        marginTop: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 6,
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        {genTypes.map((data: any, i: number) => (
          <View
            key={i}
            style={{
              width: screenSize.width / 2.1,
              height: 120,
              backgroundColor: "pink",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            {/* <Image
              source={data.img}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            /> */}
            <Pressable onPress={() => navigation.navigate("genbubble")}>
              <ImageBackground
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                source={data.img}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "500",
                    fontFamily: "Calgary-DEMO",
                  }}
                >
                  {data.name}
                </Text>
              </ImageBackground>
            </Pressable>
          </View>
        ))}
        <View
          style={{
            width: screenSize.width / 2.1,
            height: 120,
            backgroundColor: "pink",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {/* <Image
              source={data.img}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            /> */}
          <Pressable onPress={() => navigation.navigate("gensplit")}>
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              source={demo1}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  fontFamily: "Calgary-DEMO",
                }}
              >
                demo split
              </Text>
            </ImageBackground>
          </Pressable>
        </View>
        <View
          style={{
            width: screenSize.width / 2.1,
            height: 120,
            backgroundColor: "pink",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {/* <Image
              source={data.img}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            /> */}
          <Pressable onPress={() => navigation.navigate("genwave")}>
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              source={demo1}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  fontFamily: "Calgary-DEMO",
                }}
              >
                demo wave
              </Text>
            </ImageBackground>
          </Pressable>
        </View>
      </View>
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
