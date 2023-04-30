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
};

const ImgComponent: React.FC<ImgComponentProps> = ({ navigation }) => {
  const accessKey = "sTclklm7E58Hnk651YW72FJWBycrxcHsSoHEKKXJXd0";
  const query = "nature";
  const perPage = 10;
  const endpoint = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&client_id=${accessKey}`;

  const [photo, setPhoto] = useState<any>(null);

  useEffect(() => {
    //fetchImage();
    //setPhoto(demoData.results[2].urls.regular);
  }, []);

  const fetchImage = () => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Use the fetched data
        console.log("success");
        console.log(data.results[0].urls.regular);

        setPhoto(data.results[0].urls.regular);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  };

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
        {demoData.results.map((item: any, i: number) => (
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
