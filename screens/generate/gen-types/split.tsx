import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function GenSplit() {
  const [pathData, setPathData] = useState("");

  function generateBlob() {
    const numPoints = Math.floor(Math.random() * 10) + 5; // between 5 and 15 points
    const radius = 150;
    const center = { x: 250, y: 250 };
    const points: any = [];

    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const distance = radius + (Math.random() - 0.5) * radius * 0.5;
      const x = center.x + Math.cos(angle) * distance;
      const y = center.y + Math.sin(angle) * distance;
      points.push({ x, y });
    }

    const d =
      points.reduce((acc: any, point: any, i: any) => {
        const nextPoint = points[(i + 1) % numPoints];
        const nextNextPoint = points[(i + 2) % numPoints];
        const prevPoint = points[(i - 1 + numPoints) % numPoints];
        const prevPrevPoint = points[(i - 2 + numPoints) % numPoints];
        if (i === 0) {
          const c1x = point.x + (nextPoint.x - center.x) * 0.5;
          const c1y = point.y + (nextPoint.y - center.y) * 0.5;
          const c2x = nextPoint.x - (nextNextPoint.x - point.x) * 0.2;
          const c2y = nextPoint.y - (nextNextPoint.y - point.y) * 0.2;
          return `${acc} M ${point.x} ${point.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${nextPoint.x} ${nextPoint.y}`;
        } else {
          const c1x = point.x + (nextPoint.x - prevPoint.x) * 0.2;
          const c1y = point.y + (nextPoint.y - prevPoint.y) * 0.2;
          const c2x = nextPoint.x - (nextNextPoint.x - point.x) * 0.2;
          const c2y = nextPoint.y - (nextNextPoint.y - point.y) * 0.2;
          return `${acc} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${nextPoint.x} ${nextPoint.y}`;
        }
      }, "") + " Z";

    setPathData(d);
  }

  return (
    <View style={styles.container}>
      <Svg style={styles.svg} viewBox="0 0 500 500">
        <Path d={pathData} fill="#3498DB" />
      </Svg>
      <Button title="Generate Blob" onPress={generateBlob} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    width: "100%",
    aspectRatio: 1,
  },
});
