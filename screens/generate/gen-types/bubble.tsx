import React, { useEffect, useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import BottomSheet from "../../../components/bottom-up-screen/bottom-sheet";
import CommonGenButtom from "../../../components/gen-controllers/common-gen-buttom";
import RangeSlider from "../../../components/gen-controllers/rangeSlider";
import GenDownloader from "../../../components/gen-controllers/gen-downloader";
import { getRandomHexColor } from "../../../components/gen-controllers/gen-random-collection";
import CommonColorSelector from "../../../components/gen-controllers/common-gradient-color-stack";

const GenBubble = ({ navigation }: any) => {
  const [randDesign, setrandDesign] = useState([{}]);
  const [randHex, setRandHex] = useState<any>({
    first: "#FFDAB9",
    second: "#FF7F50",
  });
  const [radius, setRadius] = useState(50);
  const [count, setCount] = useState(10);
  useEffect(() => {
    generateRandom();
  }, []);

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const viewShotRef = useRef<any>();

  const generateRandom = () => {
    const randomObjects = Array.from({ length: count }, () => ({
      x: Math.floor(Math.random() * width - 50),
      y: Math.floor(Math.random() * height - 50),
      //w: Math.floor(Math.random() * 200),
      s: Math.floor(Math.random() * radius),
      //o: Math.floor(Math.random() * (0.5 - 0.1) + 0.1),
      o: Math.random() * (0.8 - 0.1) + 0.1,
    }));
    setrandDesign(randomObjects);
  };

  const generateRandomHex = () => {
    setRandHex({ first: getRandomHexColor(), second: getRandomHexColor() });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", position: "relative" }}>
      <View ref={viewShotRef} style={{ width: width, height: height }}>
        <Svg width={"100%"} height={"100%"}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={randHex?.first} />
              <Stop offset="100%" stopColor={randHex?.second} />
              {/* <Stop offset="0%" stopColor="#FF7F50" />
            <Stop offset="100%" stopColor="#FFDAB9" /> */}
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width={width} height={height} fill="url(#grad)" />

          {randDesign.map((data: any, i: number) => (
            <Rect
              key={i}
              x={data?.x}
              y={data.y}
              width={data?.s}
              height={data?.s}
              fill="#fff"
              opacity={data?.o}
              rx="50"
              ry="50"
            />
          ))}
        </Svg>
      </View>
      <View style={{ position: "absolute", top: 5, right: 5, width: 220 }}>
        <GenDownloader viewShotRef={viewShotRef} />
      </View>

      <BottomSheet
        drawHeight={310}
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
          max={15}
          header=" Bubble Radius"
          onChange={(value) => setRadius(value * 10)}
        />
        <RangeSlider
          min={10}
          max={100}
          header="Count"
          onChange={(value) => setCount(value)}
        />
        <CommonColorSelector
          fixed={false}
          firstColorTittle="Left"
          SecondColorTittle="Right"
          RandomColorTittle="Random"
          onChangeRandomColor={(c1: string, c2: string) =>
            setRandHex({ first: c1, second: c2 })
          }
          onChangeFirstColor={(e) =>
            setRandHex((data: any) => ({ first: e, second: data.second }))
          }
          onChangeSecondColor={(e) =>
            setRandHex((data: any) => ({ first: data.first, second: e }))
          }
        />
        {/* <View style={{ margin: 10 }}>
          <GenDownloader viewShotRef={viewShotRef} tittle="Save" />
        </View> */}
      </BottomSheet>
    </View>
  );
};

export default GenBubble;
