import React, { useState } from "react";
import { Button, View } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";

const GradientRectangle = () => {
  const width = 200; // Change this value based on your device's screen size
  const height = 200; // Change this value based on your device's screen size
  const [randDesign, setrandDesign] = useState([{}]);
  const [randHex, setRandHex] = useState<any>({});
  const generateRandom = () => {
    const randomObjects = Array.from(
      { length: Math.floor(Math.random() * 10) },
      () => ({
        x: Math.floor(Math.random() * 150),
        y: Math.floor(Math.random() * 150),
        //w: Math.floor(Math.random() * 200),
        s: Math.floor(Math.random() * 100),
      })
    );
    setrandDesign(randomObjects);
    //console.log(randomObjects);
  };
  function getRandomHexColor(): string {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const generateRandomHex = () => {
    setRandHex({ first: getRandomHexColor(), second: getRandomHexColor() });
  };

  return (
    <View>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={randHex?.first} />
            <Stop offset="100%" stopColor={randHex?.second} />
            {/* <Stop offset="0%" stopColor="#FF7F50" />
            <Stop offset="100%" stopColor="#FFDAB9" /> */}
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width={width} height={height} fill="url(#grad)" />
        <Rect
          x="60"
          y="20"
          width="40"
          height="40"
          fill="#fff"
          opacity="0.3"
          rx="20"
          ry="20"
        />
        <Rect
          x="120"
          y="50"
          width="30"
          height="30"
          fill="#fff"
          opacity="0.5"
          rx="15"
          ry="15"
        />
        {randDesign.map((data: any, i: number) => (
          <Rect
            key={i}
            x={data?.x}
            y={data.y}
            width={data?.s}
            height={data?.s}
            fill="#fff"
            opacity="0.3"
            rx="20"
            ry="20"
          />
        ))}
      </Svg>
      <Button onPress={() => generateRandom()} title="Generate" />
      <Button onPress={() => generateRandomHex()} title="Color" />
    </View>
  );
};

export default GradientRectangle;
