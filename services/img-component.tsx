import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Dimensions, FlatList } from "react-native";
import { createApi } from "unsplash-js";
import { demoData } from "../data-provider/demo-data";
//import fetch from "isomorphic-fetch";

// const unsplash = createApi({
//   accessKey: "YOUR_ACCESS_KEY",
//   fetch: fetch,
// });
const numColumns = 2;
const screenWidth = Dimensions.get("window").width;

function ImgComponent() {
  const accessKey = "sTclklm7E58Hnk651YW72FJWBycrxcHsSoHEKKXJXd0";
  const query = "nature";
  const perPage = 10;
  const endpoint = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&client_id=${accessKey}`;
  const [photo, setPhoto] = useState<any>(null);

  useEffect(() => {
    //fetchImage;
    setPhoto(demoData.results[2].urls.regular);
  }, []);
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item?.urls.regular }} />
      </View>
    );
  };
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
    // <View>
    //   <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
    // </View>
    <FlatList
      data={demoData.results}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
}

export default ImgComponent;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  item: {
    flex: 1,
    margin: 5,
    height: screenWidth / numColumns,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
