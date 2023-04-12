import * as MediaLibrary from "expo-media-library";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect } from "react";
//import RNFetchBlob from "rn-fetch-blob";
// import RNFS from "react-native-fs";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Alert, Platform } from "react-native";
import * as FileSystem from "expo-file-system";

const screenWidth = Dimensions.get("window").width;

type DownloadOptionProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
  //route: DownloadOptionRouteProp;
};

const DownloadOption: React.FC<DownloadOptionProps> = ({
  route,
  navigation,
}) => {
  const handleDownload = async (urls: any, filename: any) => {
    try {
      const fileUri = FileSystem.documentDirectory + "myImage.jpg";
      const downloadedFile = await FileSystem.downloadAsync(urls, fileUri);
      const asset: any = await MediaLibrary.createAssetAsync(
        downloadedFile.uri
      );
      await MediaLibrary.saveToLibraryAsync(asset);
      console.log("Image saved to photo library");
    } catch (error) {
      console.error("Error saving image to photo library:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <ImageBackground
        style={{
          height: "100%",
          width: screenWidth,
        }}
        source={{ uri: route.params?.imgData?.regular }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Button
            onPress={() => {
              handleDownload(route.params?.imgData?.regular, "demoqq");
            }}
            title="Press me"
          />
          <Text>hello</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DownloadOption;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
