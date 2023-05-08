import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { demoData } from "../../data-provider/demo-data";
import { NavigationProp } from "@react-navigation/native";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;

type ImgComponentProps = {
  navigation: NavigationProp<any>;
  photos: any
};

const ImgComponent: React.FC<ImgComponentProps> = ({ navigation ,photos}) => {
 
  return (
    <View style={{ flexGrow: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {photos.map((item: any, i: number) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate("Download", { imgData: item })}
          >
            <Image
              style={{
                height: screenWidth / 2.1,
                width: screenWidth / 2.1,
                borderRadius: 5,
              }}
              source={{ uri: item?.urls.regular }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ImgComponent;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  item: {
    flex: 1,
    display: "flex",
    margin: 5,
    // flexDirection: "column",
    // width: screenWidth / 3,
    // height: 100,

    height: screenWidth / numColumns,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 5,
  },
});
