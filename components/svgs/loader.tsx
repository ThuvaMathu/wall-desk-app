import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: animateTransform */
const Loader = (props: SvgProps) => (
  <Svg
    width={200}
    height={200}
    preserveAspectRatio="xMidYMid"
    color="transparent"
    style={{
      margin: "auto",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <Circle
      cx={50}
      cy={50}
      r={42}
      fill="none"
      stroke="#fe718d"
      strokeDasharray="65.97344572538566 65.97344572538566"
      strokeLinecap="round"
      strokeWidth={8}
    ></Circle>
  </Svg>
);
export default Loader;
