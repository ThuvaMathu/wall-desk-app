import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const pathWidth = screenWidth;

const VerticalWave = () => {
  const [amplitude, setAmplitude] = useState(
    Math.floor(Math.random() * 50) + 50
  );
  const [frequency, setFrequency] = useState(Math.floor(Math.random() * 4) + 1);

  const generateWavePath = () => {
    const points = [];

    for (let i = 0; i <= screenHeight; i++) {
      const x =
        pathWidth / 2 +
        amplitude * Math.sin((2 * Math.PI * frequency * i) / screenHeight);
      const y = i;

      if (i === 0) {
        points.push(`M ${x},${y}`);
      } else {
        points.push(`L ${x},${y}`);
      }
    }

    return points.join(" ");
  };

  const handlePress = () => {
    setAmplitude(Math.floor(Math.random() * 50) + 50);
    setFrequency(Math.floor(Math.random() * 4) + 2);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Svg height={screenHeight} width={pathWidth}>
        <Path
          d={generateWavePath()}
          stroke="black"
          strokeWidth={160}
          fill="black"
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

export default VerticalWave;
