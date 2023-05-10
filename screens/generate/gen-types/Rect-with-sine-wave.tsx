import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import { screenSize } from "../../../services/global-theme";

const RectWithSineWave = () => {
  const [amplitude, setAmplitude] = useState(
    Math.floor(Math.random() * 20) + 20
  );
  const [frequency, setFrequency] = useState(Math.floor(Math.random() * 2) + 1);
  const [topColor, setTopColor] = useState("#FFB6C1");
  const [bottomColor, setBottomColor] = useState("#87CEFA");
  const width = screenSize.width;
  const height = screenSize.height;
  const generateWavePath = () => {
    const points = [];

    for (let i = 0; i <= width; i++) {
      const x = i;
      const y =
        height / 2 +
        amplitude * Math.sin((2 * Math.PI * frequency * i) / width);

      if (i === 0) {
        points.push(`M ${x},${y}`);
      } else {
        points.push(`L ${x},${y}`);
      }
    }

    points.push(`L ${width},${height}`);
    points.push(`L 0,${height}`);
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

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Svg height={height} width={width}>
        <Defs>
          <LinearGradient id="top" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor={topColor} stopOpacity="1" />
            <Stop offset="100%" stopColor={bottomColor} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width={width} height={height} fill="url(#top)" />
        <Path d={generateWavePath()} fill="white" />
        <Path d={generateWavePath()} fill="url(#top)" />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RectWithSineWave;
