import React from "react";
import { View } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";

const GradientRectangle = () => {
  const width = 200; // Change this value based on your device's screen size
  const height = 200; // Change this value based on your device's screen size

  return (
    <View>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#FF7F50" />
            <Stop offset="100%" stopColor="#FFDAB9" />
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
        <Rect
          x="150"
          y="110"
          width="50"
          height="50"
          fill="#fff"
          opacity="0.4"
          rx="25"
          ry="25"
        />
        <Rect
          x="40"
          y="100"
          width="25"
          height="25"
          fill="#fff"
          opacity="0.6"
          rx="12.5"
          ry="12.5"
        />
        <Rect
          x="100"
          y="150"
          width="45"
          height="45"
          fill="#fff"
          opacity="0.2"
          rx="22.5"
          ry="22.5"
        />
        <Rect
          x="30"
          y="150"
          width="35"
          height="35"
          fill="#fff"
          opacity="0.2"
          rx="50"
          ry="50"
        />
      </Svg>
    </View>
  );
};

export default GradientRectangle;
