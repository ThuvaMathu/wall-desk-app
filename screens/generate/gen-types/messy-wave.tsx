import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import CommonGenButtom from "../../../components/gen-controllers/common-gen-buttom";
import CommonColorSelector from "../../../components/gen-controllers/common-gradient-color-stack";
import GenDownloader from "../../../components/gen-controllers/gen-downloader";
import RangeSlider from "../../../components/gen-controllers/rangeSlider";
import { screenSize } from "../../../services/global-theme";
import BottomSheet from "../../../components/bottom-up-screen/bottom-sheet";

//const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const pathWidth = screenSize.width * 1.8;
const screenHeight = screenSize.height * 1.5;
interface randInterface {
  backGroundColor: string;
  foreGroungColor: string;
}
const MessyWave = () => {
  const [lineWidth, setLineWidth] = useState(2);
  const [waveGap, setWaveGap] = useState(5);
  const [angle, setAngle] = useState(0);
  const [randHex, setRandHex] = useState<randInterface>({
    backGroundColor: "#FFDAB9",
    foreGroungColor: "#FF7F50",
  });
  const [amplitude, setAmplitude] = useState(80);
  const [frequency, setFrequency] = useState(4);
  const numWaves = 10;

  const generateWavePath = (index: any) => {
    const points = [];

    for (let i = 0; i <= screenHeight; i++) {
      const x =
        pathWidth / 3 -
        waveGap +
        amplitude * Math.sin((2 * Math.PI * frequency * i) / screenHeight) +
        waveGap * index;
      const y = i;

      if (i === 0) {
        //console.log(y);

        points.push(`M ${x},${y}`);
      } else {
        points.push(`L ${x},${y}`);
      }
    }

    return points.join(" ");
  };

  const handlePress = () => {
    setAmplitude(Math.floor(Math.random() * 150) + 50);
    setFrequency(Math.floor(Math.random() * 4) + 2);
  };

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Svg
          height={screenHeight}
          width={pathWidth}
          style={{ transform: [{ rotate: `${angle}deg` }] }}
        >
          {[...Array(numWaves)].map((_, index) => (
            <Path
              key={index}
              d={generateWavePath(index)}
              stroke={randHex.foreGroungColor}
              strokeWidth={lineWidth}
              fill="none"
            />
          ))}
        </Svg>
      </View>
      <View style={{ position: "absolute", top: 5, right: 5, width: 220 }}>
        <GenDownloader viewShotRef={viewShotRef} />
      </View>
      <BottomSheet
        drawHeight={320}
        minHeight={75}
        backgroundColor={"white"}
        overHeadChild={
          <CommonGenButtom onChange={() => handlePress()} tittle="Randomize" />
        }
      >
        <RangeSlider
          min={0}
          max={10}
          header="Radius"
          onChange={(value) => setLineWidth(value * 2)}
        />
        <RangeSlider
          min={1}
          max={30}
          header="Gap"
          onChange={(value) => setWaveGap(value * 2)}
        />
        <RangeSlider
          min={0}
          max={20}
          header="Angle"
          onChange={(value) => {
            console.log(value);
            setAngle(value * 18);
          }}
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
      </BottomSheet>
    </View>
  );
};

export default MessyWave;
