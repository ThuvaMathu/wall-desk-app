import React, { useEffect, useRef, useState } from "react";
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
import { screenSize, theme } from "../../../services/global-theme";
import ColorPickerModel from "../../../components/gen-controllers/color-picker";
import CommonGenButtom from "../../../components/gen-controllers/common-gen-buttom";
import CommonColorSelector from "../../../components/gen-controllers/common-gradient-color-stack";
import GenDownloader from "../../../components/gen-controllers/gen-downloader";
interface randInterface {
  backGroundColor: string;
  foreGroungColor: string;
}
export default function GenBlob({ navigation }: any) {
  const [pathData, setPathData] = useState("");
  const [values, setValues] = useState(0);
  const [slopes, setslopes] = useState(15);
  const [radius, setRadius] = useState(150);
  const [randHex, setRandHex] = useState<randInterface>({
    backGroundColor: "#FFDAB9",
    foreGroungColor: "#FF7F50",
  });
  useEffect(() => {
    generateBlob();
  }, []);

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

  const viewShotRef = useRef<any>();

  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        ref={viewShotRef}
        style={{
          width: screenSize.width,
          height: screenSize.height,
          overflow: "hidden",
          backgroundColor: randHex.backGroundColor,
        }}
      >
        <Svg
          style={{
            width: "100%",
            height: "100%",
            // backgroundColor: randHex.backGroundColor,
          }}
          viewBox="0 0 500 500"
        >
          <Path d={pathData} fill={randHex.foreGroungColor} />
        </Svg>
      </View>
      <View style={{ position: "absolute", top: 5, right: 5, width: 220 }}>
        <GenDownloader viewShotRef={viewShotRef} />
      </View>
      <BottomSheet
        drawHeight={260}
        minHeight={75}
        backgroundColor={"white"}
        overHeadChild={
          <CommonGenButtom onChange={() => generateBlob()} tittle="Randomize" />
        }
      >
        <RangeSlider
          min={1}
          max={10}
          header="Radius"
          onChange={(value) => setRadius(value * 50)}
        />
        <RangeSlider
          min={1}
          max={50}
          header="Slopes"
          onChange={(value) => setslopes(value * 2)}
        />

        {/* <ColorPickerModel /> */}
        <CommonColorSelector
          fixed={true}
          firstColorTittle="background"
          SecondColorTittle="color"
          RandomColorTittle="Random"
          onChangeRandomColor={(c1: string, c2: string) =>
            setRandHex({ backGroundColor: c1, foreGroungColor: c2 })
          }
          onChangeFirstColor={(e) =>
            setRandHex((data: randInterface) => ({
              backGroundColor: e,
              foreGroungColor: data.foreGroungColor,
            }))
          }
          onChangeSecondColor={(e) =>
            setRandHex((data: randInterface) => ({
              backGroundColor: data.backGroundColor,
              foreGroungColor: e,
            }))
          }
        />
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

const styles = StyleSheet.create({});
