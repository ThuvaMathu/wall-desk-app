import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import { screenSize } from "../../../services/global-theme";

const GenWave = () => {
  const [wavePattern, setWavePattern] = useState(generateWavePattern());

  //   function generateWavePattern() {
  //     const amplitude = Math.floor(Math.random() * 40) + 5; // The height of the wave
  //     const frequency = Math.random() * 0.04 + 0.01; // The frequency of the wave
  //     const segmentCount = 100; // The number of segments to use in the wave

  //     const width = Dimensions.get("window").height; // Get the width of the screen
  //     const height = 100; // The height of the wave line

  //     let path = `M 0 ${height / 2}`; // Start the path at the first point
  //     let y = 0;

  //     // Loop through each segment of the wave and add it to the path
  //     for (let i = 0; i < segmentCount; i++) {
  //       const x = (i / (segmentCount - 1)) * width; // Calculate the x position of the segment
  //       y = amplitude * Math.sin(2 * Math.PI * x * frequency); // Calculate the y position of the segment based on the sine wave formula
  //       path += ` L ${x} ${y + height / 2}`; // Add the segment to the path
  //     }

  //     return path;
  //   }
  function generateWavePattern() {
    const amplitude = Math.floor(Math.random() * 10) + 5; // The height of the wave
    const frequency = Math.random() * 0.04 + 0.01; // The frequency of the wave

    const { width } = Dimensions.get("window"); // Get the width of the screen
    const height = 100; // The height of the wave line
    const segmentWidth = 10; // The width of each segment

    let path = `M 0 ${height / 2}`; // Start the path at the first point
    let prevX = 0;
    let prevY = height / 2;

    // Loop through each segment of the wave and add it to the path
    for (let i = segmentWidth; i <= width; i += segmentWidth) {
      const x = i; // Calculate the x position of the segment
      const y = amplitude * Math.sin(2 * Math.PI * x * frequency); // Calculate the y position of the segment based on the sine wave formula
      const xc1 = prevX + segmentWidth / 2; // The x-coordinate of the first control point
      const yc1 = prevY + (y - prevY) / 3; // The y-coordinate of the first control point
      const xc2 = x - segmentWidth / 2; // The x-coordinate of the second control point
      const yc2 = y - (y - prevY) / 3; // The y-coordinate of the second control point
      path += ` C ${xc1} ${yc1} ${xc2} ${yc2} ${x} ${y}`; // Add the curve to the path
      prevX = x;
      prevY = y;
    }

    return path;
  }

  const handleWaveClick = () => {
    setWavePattern(generateWavePattern());
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg width="100%" height="90%">
        <Path d={wavePattern} stroke="#000" strokeWidth={2} fill="none" />
      </Svg>
      <TouchableOpacity onPress={handleWaveClick} style={{ marginTop: 20 }}>
        <Text>Generate New Wave Pattern</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenWave;
