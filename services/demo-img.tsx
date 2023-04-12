import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { demoData } from "../data-provider/demo-data";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const width = Dimensions.get("window").width / numColumns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function ImageGrid() {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* <Image
            style={{ height: 200, width: screenWidth / 2.1 }}
            source={{ uri: demoData.results[1].urls.regular }}
          /> */}
        {demoData.results.map((item: any, i: number) => (
          <Image
            key={i}
            style={{
              height: screenWidth / 2.1,
              width: screenWidth / 2.1,
              borderRadius: 5,
            }}
            source={{ uri: item?.urls.regular }}
          />
        ))}
      </View>
    </View>
  );
}

export default ImageGrid;
