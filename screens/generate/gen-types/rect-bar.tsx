import React, { useRef, useState } from "react";
import { View } from "react-native";
import Svg, { Mask, Rect } from "react-native-svg";
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
const ReactBar = () => {
  const width = screenSize.width * 3;
  const height = screenSize.height * 3;
  const [count, setCount] = useState(10);
  const [randHex, setRandHex] = useState<randInterface>({
    backGroundColor: "#FFDAB9",
    foreGroungColor: "#FF7F50",
  });
  const [gap, setGap] = useState(2);
  const [angle, setAngle] = useState(0);
  const generateRandom = () => {
    setCount(Math.floor(Math.random() * 40 + 5));
    setGap(Math.floor(Math.random() * 10 + 2));
    setAngle(Math.floor(Math.random() * 50));
  };
  const rectBar = [];

  for (let j = 0; j < count; j++) {
    rectBar.push(
      <Rect
        key={j}
        x={0}
        y={(height / count) * j}
        width={width}
        height={height / count}
        fill={randHex.foreGroungColor}
        stroke={randHex.backGroundColor}
        strokeWidth={gap}
      />
    );
  }
  const viewShotRef = useRef<any>();

  return (
    <View
      style={{
        flex: 1,
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
        }}
      >
        <Svg
          height={height}
          width={width}
          style={{ transform: [{ rotate: `${angle}deg` }] }}
        >
          {rectBar}
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
          <CommonGenButtom
            onChange={() => generateRandom()}
            tittle="Randomize"
          />
        }
      >
        <RangeSlider
          min={1}
          max={40}
          header="Bar count"
          onChange={(value) => setCount(value)}
        />
        <RangeSlider
          min={1}
          max={50}
          header="Gap"
          onChange={(value) => setGap(value)}
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

export default ReactBar;
