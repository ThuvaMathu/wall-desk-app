import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import { screenSize } from "../../../services/global-theme";
import CommonGenButtom from "../../../components/gen-controllers/common-gen-buttom";
import CommonColorSelector from "../../../components/gen-controllers/common-gradient-color-stack";
import RangeSlider from "../../../components/gen-controllers/rangeSlider";
import BottomSheet from "../../../components/bottom-up-screen/bottom-sheet";
import GenDownloader from "../../../components/gen-controllers/gen-downloader";
interface randInterface {
  backGroundColor: string;
  foreGroungColor: string;
}
const WaveSplitter = () => {
  const [amplitude, setAmplitude] = useState(
    Math.floor(Math.random() * 20) + 20
  );
  const [frequency, setFrequency] = useState(Math.floor(Math.random() * 2) + 1);
  const [topColor, setTopColor] = useState("#FFB6C1");
  const [bottomColor, setBottomColor] = useState("#87CEFA");
  const [angle, setAngle] = useState(0);
  const [randHex, setRandHex] = useState<randInterface>({
    backGroundColor: "#FFDAB9",
    foreGroungColor: "#FF7F50",
  });

  const svgWidth = screenSize.width * 2.5;
  const svgHeight = screenSize.height * 2.5;
  const width = screenSize.width;
  const height = screenSize.height;

  const generateWavePath = () => {
    const points = [];

    for (let i = 0; i <= svgWidth; i++) {
      const x = i;
      const y =
        svgHeight / 2 +
        amplitude * Math.sin((2 * Math.PI * frequency * i) / svgWidth);

      if (i === 0) {
        points.push(`M ${x},${y}`);
      } else {
        points.push(`L ${x},${y}`);
      }
    }

    points.push(`L ${svgWidth},${svgHeight}`);
    points.push(`L 0,${svgHeight}`);
    points.push(`Z`);

    return points.join(" ");
  };
  const getRandomColor = () => {
    const hexValues = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const handlePress = () => {
    setAmplitude(Math.floor(Math.random() * 20) + 20);
    setFrequency(Math.floor(Math.random() * 2) + 1);
    setTopColor(getRandomColor());
    setBottomColor(getRandomColor());
  };
  const viewShotRef = useRef<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        ref={viewShotRef}
        style={{
          display: "flex",
          height: screenSize.height,
          width: screenSize.width,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Svg
          height={svgHeight}
          width={svgWidth}
          style={{ transform: [{ rotate: `${angle}deg` }] }}
        >
          <Defs>
            <LinearGradient id="top" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor={topColor} stopOpacity="1" />
              <Stop offset="100%" stopColor={bottomColor} stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect
            x="0"
            y="0"
            width={svgWidth}
            height={svgHeight}
            fill="url(#top)"
          />
          <Path d={generateWavePath()} fill="white" />
          <Path d={generateWavePath()} fill="url(#top)" />
          <Path d={generateWavePath()} fill="url(#top)" />
        </Svg>
      </View>
      <View style={{ position: "absolute", top: 5, right: 5, width: 220 }}>
        <GenDownloader viewShotRef={viewShotRef} />
      </View>
      <BottomSheet
        drawHeight={200}
        minHeight={180}
        backgroundColor={"white"}
        overHeadChild={
          <CommonGenButtom onChange={() => handlePress()} tittle="Randomize" />
        }
      >
        <RangeSlider
          min={1}
          max={10}
          header="Frequncy"
          onChange={(value) => setFrequency(value)}
        />
        <RangeSlider
          min={0}
          max={10}
          header="Amplitude"
          onChange={(value) => setAmplitude(value * 10)}
        />
        <RangeSlider
          min={0}
          max={360}
          value={-10}
          header="Angle"
          onChange={(value) => setAngle(value)}
        />

        {/* <ColorPickerModel /> */}
        <CommonColorSelector
          fixed={true}
          firstColorTittle="top"
          SecondColorTittle="bottom"
          RandomColorTittle="Random"
          onChangeRandomColor={(c1: string, c2: string) => {
            setTopColor(c1);
            setBottomColor(c2);
          }}
          onChangeFirstColor={(e) => setTopColor(e)}
          onChangeSecondColor={(e) => setBottomColor(e)}
        />
      </BottomSheet>
    </View>
  );
};

export default WaveSplitter;
