import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImgComponent from "./img-component";
import { theme } from "../../services/global-theme";
import { demoData } from "../../data-provider/demo-data";

type AboutScreenProps = {
  navigation: NavigationProp<any>;
};

const SearchScreen: React.FC<AboutScreenProps> = ({ navigation }) => {
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState<any>([]);
  const [pageValue, setPageValue] = useState(1);
  const [tempReq, setTempReq] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const accessKey = "sTclklm7E58Hnk651YW72FJWBycrxcHsSoHEKKXJXd0";
  let query = "nature";
  const perPage = 10;

  useEffect(() => {
    //fetchImage();
    //setPhoto(demoData.results);
  }, [pageValue]);
  const handleSearch = (searchData: any) => {
    query = searchData;
    // console.log(query, "blue");
    const endpoint1 = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&page=${pageValue}&client_id=${accessKey}`;
    if (searchData) {
      fetch(endpoint1)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Use the fetched data
          console.log("success");
          // console.log(data.results);

          setPhoto(data.results);
        })
        .catch((error) => {
          console.error("There was a problem fetching the data:", error);
        });
    } else {
      setPhoto(demoData.results);
    }
  };

  const fetchImage = () => {
    setIsLoading(true);
    var tempPage = pageValue;
    console.log(tempPage, "orange", pageValue);
    const endpoint = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&page=${tempPage}&client_id=${accessKey}`;
    console.log(tempPage, "orange88", pageValue);
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.results > 0) {
          setPageValue(tempPage + 1);
          photo.push(data.results);
          if (tempReq !== query) {
            setPhoto(data.results);
          } else {
            photo.push(data.results);
          }
        } else {
          console.log(data.results, "no data");
        }
        // // Use the fetched data
        // console.log("success");
        // // console.log(data.results);

        // setPhoto(data.results);
      })
      // .then(() => {
      //   setIsLoading(false);
      // })
      .catch((error) => {
        setIsLoading(false);
        console.error("There was a problem fetching the data:", error);
      });
  };
  console.log(isLoading, "pink", pageValue);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: "relative",
        backgroundColor: "#14213D",
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <View>
        <View
          style={{
            width: "100%",
            zIndex: 2,
            backgroundColor: "",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
              marginHorizontal: 12,
              marginBottom: 12,
              padding: 6,
              height: 40,
              borderRadius: 10,
              borderWidth: 1,
              backgroundColor: theme.third,
            }}
          >
            <TextInput
              style={{ flex: 2 }}
              //onChangeText={searchText =>handleSearch(searchText)}
              //value={text}
              placeholder="Search"
            />
            <View
              style={{
                display: "flex",
                paddingHorizontal: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                }}
              >
                <Ionicons name={"search"} size={24} color={theme.secondary} />
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              marginBottom: 50,
              backgroundColor: "#E5E5E5",
              paddingTop: 10,
            }}
          >
            <ImgComponent navigation={navigation} photos={photo} />

            {/* <ImageGrid /> */}
            <View
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                paddingRight: 10,
                paddingVertical: 10,
                width: "100%",
              }}
            >
              <Button
                color={"red"}
                onPress={() => fetchImage()}
                title="Load More"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
  },
});
