import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Button } from "react-native";
import Svg, { Path } from "react-native-svg";
import { screenSize } from "../../../services/global-theme";

const GenWave = () => {
  const [wavePath, setWavePath] = useState("");
  const [randSet, setrandSet] = useState([{}]);

  const generateWavePath = () => {
    const width = 200;
    const height = 50;
    const amplitude = 10;
    const period = 50;
    const segmentCount = 10;
    const segmentWidth = width / segmentCount;
    const x = Math.floor(Math.random() * screenSize.width - 50);
    const y = Math.floor(Math.random() * screenSize.height - 50);
    const z = Math.floor(Math.random() * 306);
    const seed = Math.random() * 100;

    const points = [];

    for (let i = -1; i <= segmentCount; i++) {
      const x = i * segmentWidth;
      const y =
        height / 2 +
        amplitude *
          Math.sin(((i * segmentWidth) / period) * 2 * Math.PI + seed);

      points.push(`${x},${y}`);
    }

    const wavePath = `M${points[0]} ` + points.slice(1).join(" L");

    setWavePath(wavePath);

    const randomObjects = Array.from(
      { length: Math.floor(Math.random() * 5) },
      () => ({
        x: Math.floor(Math.random() * screenSize.width),
        y: Math.floor(Math.random() * screenSize.height - 100),
        Z: Math.floor(Math.random() * 360 - 10),
      })
    );
    setrandSet(randomObjects);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          position: "relative",
          height: screenSize.height - 220,
          width: screenSize.width,
        }}
      >
        {randSet.map((data: any, i: number) => (
          <Svg
            key={i}
            style={{
              flex: 1,
              //position: "absolute",
              //top: data.y,
              //left: 0,
              //transform: [{ rotate: `${data.z}deg` }],
            }}
            viewBox={`0 0 200 50`}
            preserveAspectRatio="none"
            height={"100%"}
            width={"100%"}
          >
            <Path d={wavePath} fill="blue" />
          </Svg>
        ))}

        <Path d={wavePath} fill="blue" />
      </View>
      <Button title="Generate Wave" onPress={generateWavePath} />
    </View>
  );
};

export default GenWave;
