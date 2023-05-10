import React, { useRef, useState } from "react";
import { View, Text, Switch } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { screenSize, theme } from "../../../services/global-theme";
import CommonGenButtom from "../../../components/gen-controllers/common-gen-buttom";
import RangeSlider from "../../../components/gen-controllers/rangeSlider";
import BottomSheet from "../../../components/bottom-up-screen/bottom-sheet";
import GenDownloader from "../../../components/gen-controllers/gen-downloader";
import ColorPickerModel from "../../../components/gen-controllers/color-picker";
import RandomColorPicker from "../../../components/gen-controllers/random-color-picker";

const WaterFlow = () => {
  const [amplitude, setAmplitude] = useState(
    Math.floor(Math.random() * 20) + 20
  );
  const [frequency, setFrequency] = useState(Math.floor(Math.random() * 2) + 1);
  const [topColor, setTopColor] = useState("#FFB6C1");
  const [bottomColor, setBottomColor] = useState("#87CEFA");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [isGrad, setIsGrad] = useState(false);
  const svgWidth = screenSize.width * 2.5;
  const svgHeight = screenSize.height;
  const generateWavePath = () => {
    const points = [];

    for (let i = 0; i <= svgWidth; i++) {
      const x = i;
      const y =
        svgHeight / 1.5 +
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

  const handlePress = () => {
    setAmplitude(Math.floor(Math.random() * 20) + 20);
    setFrequency(Math.floor(Math.random() * 2) + 1);
  };
  const viewShotRef = useRef<any>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        ref={viewShotRef}
        style={{
          display: "flex",
          height: screenSize.height,
          width: screenSize.width,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          backgroundColor: bgColor,
        }}
      >
        <Svg
          height={svgHeight}
          width={svgWidth}
          style={{
            position: "absolute",
            top: 0,
            transform: [{ rotate: `45deg` }],
          }}
        >
          <Defs>
            <LinearGradient id="top" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor={topColor} stopOpacity="1" />
              <Stop offset="100%" stopColor={bottomColor} stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Path
            d={generateWavePath()}
            fill={isGrad ? "url(#top)" : bottomColor}
          />
        </Svg>

        <Svg
          height={svgHeight}
          width={svgWidth}
          style={{
            position: "absolute",
            bottom: 0,
            transform: [{ rotate: `225deg` }],
          }}
        >
          <Defs>
            <LinearGradient id="top" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor={topColor} stopOpacity="1" />
              <Stop offset="100%" stopColor={bottomColor} stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Path d={generateWavePath()} fill={isGrad ? "url(#top)" : topColor} />
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
        <View
          style={{
            marginTop: 5,
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Switch
            value={isGrad}
            onChange={() => setIsGrad(!isGrad)}
            trackColor={{ true: theme.secondary, false: theme.primary }}
            ios_backgroundColor={theme.primary}
          />
          <Text style={{ fontSize: 18, fontWeight: "400" }}>Gradient</Text>
        </View>
        <View
          style={{
            marginTop: 5,
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ColorPickerModel
              rectangle={true}
              onSelectColor={(e) => setTopColor(e)}
            />
            <Text style={{ textAlign: "center", marginTop: 3 }}>Top</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ColorPickerModel
              rectangle={true}
              onSelectColor={(e) => setBottomColor(e)}
            />
            <Text style={{ textAlign: "center", marginTop: 3 }}>Bottom</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ColorPickerModel
              rectangle={true}
              onSelectColor={(e) => setBgColor(e)}
            />
            <Text style={{ textAlign: "center", marginTop: 3 }}>
              Background
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RandomColorPicker
              rectangle={true}
              isgradient={true}
              onSelectColor={(c1: string, c2: string) => {
                setTopColor(c1);
                setBottomColor(c2);
              }}
            />
            <Text style={{ textAlign: "center", marginTop: 3 }}>Random</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default WaterFlow;
