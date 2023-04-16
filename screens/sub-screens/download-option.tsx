import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Alert, Platform } from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

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
  const [modalVisible, setModalVisible] = useState(false);
  const handleDownload = async (imageUrl: any) => {
    setModalVisible(true);
    const fileUri =
      FileSystem.documentDirectory +
      `${route.params?.imgData.alt_description.replace(/\s+/g, "-")}.jpg`;

    const downloadResumable = FileSystem.createDownloadResumable(
      imageUrl,
      fileUri
    );

    try {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      if (!granted) {
        console.log("Permission to access media library denied");
        return;
      }

      const { uri }: any = await downloadResumable.downloadAsync();

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("Expo", asset, false);
      console.log("Image saved to gallery");
      setModalVisible(false);
    } catch (error) {
      setModalVisible(false);
      console.error(error);
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
        source={{ uri: route.params?.imgData?.urls.regular }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
        >
          <Text style={{ color: "#003554", fontWeight: "700", fontSize: 34 }}>
            Select size
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              marginTop: 10,
              height: 130,
              padding: 20,
            }}
          >
            <TouchableOpacity
              style={styles.touchContainer}
              onPress={() => {
                handleDownload(route.params?.imgData?.urls.small);
              }}
            >
              <Text
                style={{ color: "#003554", fontWeight: "500", fontSize: 20 }}
              >
                small
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchContainer}
              onPress={() => {
                handleDownload(route.params?.imgData?.urls.regular);
              }}
            >
              <Text
                style={{ color: "#003554", fontWeight: "500", fontSize: 20 }}
              >
                regular
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              height: 130,
              padding: 20,
            }}
          >
            <TouchableOpacity
              style={styles.touchContainer}
              onPress={() => {
                handleDownload(route.params?.imgData?.urls.full);
              }}
            >
              <Text
                style={{ color: "#003554", fontWeight: "500", fontSize: 20 }}
              >
                full
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchContainer}
              onPress={() => {
                handleDownload(route.params?.imgData?.urls.raw);
              }}
            >
              <Text
                style={{ color: "#003554", fontWeight: "500", fontSize: 20 }}
              >
                raw
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            style={styles.touchContainer}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ color: "gray", fontWeight: "500", fontSize: 20 }}>
              modal
            </Text>
          </TouchableOpacity> */}
        </View>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{}}>Downloading...</Text>
            {/* <Pressable
              style={{}}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{}}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
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
  touchContainer: {
    flex: 0.5,
    borderColor: "#003554",
    borderWidth: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(240, 211, 175, 0.7)",
    borderRadius: 10,
  },
});
