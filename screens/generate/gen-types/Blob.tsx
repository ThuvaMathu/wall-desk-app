import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import Slider from "@react-native-community/slider";
import Svg, { Path } from "react-native-svg";
import BottomSheet from "../../../components/bottom-up-screen/bottom-sheet";
import RangeSlider from "../../../components/gen-controllers/rangeSlider";
import { theme } from "../../../services/global-theme";
import ColorPickerModel from "../../../components/gen-controllers/color-picker";

export default function GenBlob({ navigation }: any) {
  const [pathData, setPathData] = useState("");
  const [values, setValues] = useState(0);
  const [slopes, setslopes] = useState(15);
  const [frequecy, setFrequecy] = useState(0);
  const [radius, setRadius] = useState(50);
  console.log(values);
  function generateBlob() {
    const numPoints = Math.floor(Math.random() * slopes) + 5; // between 5 and 15 points
    //const radius = 150;
    const center = { x: 250, y: 250 };
    const points: any = [];

    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const distance = radius + (Math.random() - 0.5) * radius * 0.5;
      const x = center.x + Math.cos(angle) * distance;
      const y = center.y + Math.sin(angle) * distance;
      points.push({ x, y });
    }

    const d =
      points.reduce((acc: any, point: any, i: any) => {
        const nextPoint = points[(i + 1) % numPoints];
        const nextNextPoint = points[(i + 2) % numPoints];
        const prevPoint = points[(i - 1 + numPoints) % numPoints];
        const prevPrevPoint = points[(i - 2 + numPoints) % numPoints];
        if (i === 0) {
          const c1x = point.x + (nextPoint.x - center.x) * 0.5;
          const c1y = point.y + (nextPoint.y - center.y) * 0.5;
          const c2x = nextPoint.x - (nextNextPoint.x - point.x) * 0.2;
          const c2y = nextPoint.y - (nextNextPoint.y - point.y) * 0.2;
          return `${acc} M ${point.x} ${point.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${nextPoint.x} ${nextPoint.y}`;
        } else {
          const c1x = point.x + (nextPoint.x - prevPoint.x) * 0.2;
          const c1y = point.y + (nextPoint.y - prevPoint.y) * 0.2;
          const c2x = nextPoint.x - (nextNextPoint.x - point.x) * 0.2;
          const c2y = nextPoint.y - (nextNextPoint.y - point.y) * 0.2;
          return `${acc} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${nextPoint.x} ${nextPoint.y}`;
        }
      }, "") + " Z";

    setPathData(d);
  }
  const genButton = (
    <View
      style={{
        display: "flex",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: theme.secondary,
          padding: 15,
          borderRadius: 50,
          marginBottom: 10,
        }}
        onPress={generateBlob}
      >
        <Text style={{}}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Svg style={styles.svg} viewBox="0 0 500 500">
        <Path d={pathData} fill="#3498DB" />
      </Svg>
      <BottomSheet
        drawHeight={450}
        minHeight={80}
        backgroundColor={"white"}
        overHeadChild={genButton}
      >
        <RangeSlider
          min={50}
          max={200}
          header="Radius"
          onChange={(value) => setRadius(value)}
        />
        <RangeSlider
          min={5}
          max={30}
          header="Slopes"
          onChange={(value) => setslopes(value)}
        />
        <RangeSlider
          min={50}
          max={200}
          header="Frequency"
          onChange={(value) => setRadius(value)}
        />

        <ColorPickerModel />
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <Pressable
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View
              style={{
                height: 400,
                width: 300,
                backgroundColor: theme.secondary,
              }}
            >
              <Text style={{}}>Hello World!</Text>
              <Pressable
                style={{}}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={{}}>Hide Modal</Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal> */}
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  svg: {
    width: "100%",
    aspectRatio: 1,
  },
});
