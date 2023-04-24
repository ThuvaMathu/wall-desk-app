import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dimensions,
  PermissionsAndroid,
  Platform,
  View,
} from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import ViewShot, { captureRef } from "react-native-view-shot";
import * as Permissions from "expo-permissions";
import { getRandom } from "unsplash-js/dist/methods/photos";

const GenBubble = ({ navigation }: any) => {
  const screenWidth = Dimensions.get("window").width;

  const width = Dimensions.get("window").width; // Change this value based on your device's screen size
  const height = Dimensions.get("window").height;
  const [randDesign, setrandDesign] = useState([{}]);
  const [randHex, setRandHex] = useState<any>({
    first: "#FFDAB9",
    second: "#FF7F50",
  });
  useEffect(() => {
    generateRandom();
  }, []);
  const viewShotRef = useRef<any>();
  const generateRandom = () => {
    const randomObjects = Array.from(
      { length: Math.floor(Math.random() * 45) },
      () => ({
        x: Math.floor(Math.random() * width - 50),
        y: Math.floor(Math.random() * height - 50),
        //w: Math.floor(Math.random() * 200),
        s: Math.floor(Math.random() * 80),
        //o: Math.floor(Math.random() * (0.5 - 0.1) + 0.1),
        o: Math.random() * (0.8 - 0.1) + 0.1,
      })
    );
    setrandDesign(randomObjects);
    //console.log(randomObjects);
  };
  function getRandomHexColor(): string {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const generateRandomHex = () => {
    setRandHex({ first: getRandomHexColor(), second: getRandomHexColor() });
  };

  const requestPermission = async () => {
    if (Platform.OS === "android") {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      return result === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };
  const downloadImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) {
      console.log("Permission denied");
      return;
    }
    try {
      const uri = await captureRef(viewShotRef, {
        format: "png",
        quality: 1,
      });
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("Pictures", asset, false);
      console.log("Image saved to gallery");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View ref={viewShotRef}>
        <Svg width={width} height={height - 320}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={randHex?.first} />
              <Stop offset="100%" stopColor={randHex?.second} />
              {/* <Stop offset="0%" stopColor="#FF7F50" />
            <Stop offset="100%" stopColor="#FFDAB9" /> */}
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width={width} height={height} fill="url(#grad)" />

          {randDesign.map((data: any, i: number) => (
            <Rect
              key={i}
              x={data?.x}
              y={data.y}
              width={data?.s}
              height={data?.s}
              fill="#fff"
              opacity={data?.o}
              rx="50"
              ry="50"
            />
          ))}
        </Svg>
      </View>
      <Button onPress={() => generateRandom()} title="Generate" />
      <Button onPress={() => generateRandomHex()} title="Color" />
      <Button onPress={() => downloadImage()} title="Download" />
    </View>
  );
};

export default GenBubble;
