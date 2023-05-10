import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
} from "react-native";
import { theme } from "../../services/global-theme";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import Ionicons from "react-native-vector-icons/Ionicons";

type GenDownladerProps = {
  tittle?: string;
  viewShotRef: React.MutableRefObject<any>;
};

export default function GenDownloader(props: GenDownladerProps) {
  const { tittle, viewShotRef } = props;
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
      Alert.alert("Image Saved", "Image saved in your gallery", [
        { text: "OK" },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={{
        display: "flex",
        //paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: theme.secondary,
          borderRadius: 50,
          marginBottom: 10,
          paddingVertical: 2,
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          //width: "80%",
        }}
        onPress={() => downloadImage()}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Calgary-DEMO",
            fontSize: 20,
            marginTop: 8,
          }}
        >
          {tittle ? tittle : "Download"}
        </Text>
        <Ionicons
          name={"ios-download-outline"}
          size={20}
          color={theme.primary}
        />
      </TouchableOpacity>
    </View>
  );
}
