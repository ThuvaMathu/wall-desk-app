import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

const { width: screenWidth } = Dimensions.get("window");
const pathHeight = 200;

const SmoothSineWave = () => {
  const [peaks, setPeaks] = useState(Math.floor(Math.random() * 10) + 1);
  const [height, setHeight] = useState(Math.floor(Math.random() * 100) + 50);

  const generateWavePath = () => {
    const points = [];

    for (let i = 0; i <= screenWidth; i++) {
      const x = i;
      const y =
        height * Math.sin((2 * Math.PI * peaks * i) / screenWidth) + pathHeight;

      if (i === 0) {
        points.push(`M ${x},${y}`);
      } else {
        points.push(`L ${x},${y}`);
      }
    }

    return points.join(" ");
  };

  const handlePress = () => {
    setPeaks(Math.floor(Math.random() * 3) + 1);
    setHeight(Math.floor(Math.random() * 50) + 50);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Svg height={"100%"} width={screenWidth}>
        <Path
          d={generateWavePath()}
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
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

export default SmoothSineWave;
