import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

const SmoothWave = () => {
  const [wavePoints, setWavePoints] = useState("");
  const [waveColor, setWaveColor] = useState("#8AC7DE");

  const screenWidth = Dimensions.get("window").width;
  const waveHeight = 200;

  const handleClick = () => {
    const newWavePoints = [];
    const pointCount = 6; // number of points in the wave

    for (let i = 0; i <= pointCount; i++) {
      const x = (i / pointCount) * screenWidth;
      const randomY = Math.random() * waveHeight * 0.5 + waveHeight * 0.25;
      newWavePoints.push(`${x},${randomY}`);
    }

    setWavePoints(
      `M 0 ${waveHeight} L ${newWavePoints.join(
        " "
      )} L ${screenWidth} ${waveHeight} Z`
    );
    setWaveColor(getRandomColor());
  };

  const getRandomColor = () => {
    const hexValues = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={handleClick}>
        <Text>Generate Wave</Text>
      </TouchableOpacity>
      <Svg height={waveHeight} width={screenWidth}>
        <Path d={wavePoints} fill={waveColor} />
      </Svg>
    </View>
  );
};

export default SmoothWave;
