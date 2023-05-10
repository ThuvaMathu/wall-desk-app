import React, { useEffect, useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import BottomSheet from "../../../components/bottom-up-screen/bottom-sheet";
import CommonGenButtom from "../../../components/gen-controllers/common-gen-buttom";
import RangeSlider from "../../../components/gen-controllers/rangeSlider";
import GenDownloader from "../../../components/gen-controllers/gen-downloader";
import CommonColorSelector from "../../../components/gen-controllers/common-gradient-color-stack";
import { theme } from "../../../services/global-theme";
const { width, height } = Dimensions.get("window");

const CircleFill = ({ navigation }: any) => {
  const [randDesign, setrandDesign] = useState([{}]);
  const [randHex, setRandHex] = useState<any>({
    first: "#FFDAB9",
    second: "#FF7F50",
  });
  const [radius, setRadius] = useState(2);
  const [gap, setGap] = useState(5);
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    generateRandom();
  }, []);

  const viewShotRef = useRef<any>();

  const generateRandom = () => {
    setRadius(Math.floor(Math.random() * 40 + 10));
    setGap(Math.floor(Math.random() * 10 + 2));
    setAngle(Math.floor(Math.random() * 10 + 2));
  };

  const numCirclesHorizontal = Math.floor(width / (radius * 2 + gap));
  const numCirclesVertical = Math.floor(height / (radius * 2 + gap));
  const totalGapHorizontal = width - numCirclesHorizontal * (radius * 2);
  const totalGapVertical = height - numCirclesVertical * (radius * 2);
  const horizontalGap = totalGapHorizontal / (numCirclesHorizontal + 1);
  const verticalGap = totalGapVertical / (numCirclesVertical + 1);
  const circles = [];

  for (let i = 0; i < numCirclesVertical; i++) {
    for (let j = 0; j < numCirclesHorizontal; j++) {
      const cx = (radius * 2 + gap) * j + radius + horizontalGap * (j + 1);
      const cy = (radius * 2 + gap) * i + radius + verticalGap * (i + 1);
      circles.push(<Circle key={`${i}-${j}`} cx={cx} cy={cy} r={radius} />);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", position: "relative" }}>
      <View
        ref={viewShotRef}
        style={{
          width: width,
          height: height,
          overflow: "hidden",
          backgroundColor: randHex.second,
        }}
      >
        <Svg
          width={"100%"}
          height={"100%"}
          fill={randHex.first}
          style={{
            transform: [
              { scale: 1 + (angle > 0 ? angle * 0.03 : angle * -0.03) },
              { rotate: `${angle}deg` },
            ],
          }}
          //rotation={50}
        >
          {circles}
        </Svg>
      </View>
      <View style={{ position: "absolute", top: 5, right: 5, width: 220 }}>
        <GenDownloader viewShotRef={viewShotRef} />
      </View>

      <BottomSheet
        drawHeight={240}
        minHeight={180}
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
          min={5}
          max={100}
          header="Gap"
          onChange={(value) => setGap(value)}
        />
        <RangeSlider
          min={-20}
          max={20}
          value={0}
          header="Angle"
          onChange={(value) => setAngle(value)}
        />
        <CommonColorSelector
          fixed={true}
          firstColorTittle="background"
          SecondColorTittle="color"
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

export default CircleFill;
