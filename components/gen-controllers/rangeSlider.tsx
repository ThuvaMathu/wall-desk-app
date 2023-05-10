import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { Value } from "react-native-reanimated";
import { screenSize } from "../../services/global-theme";

type rangeSliderProps = {
  min?: number;
  max?: number;
  header?: string;
  value?: number;
  onChange?: (values: number) => void;
};

export default function RangeSlider(props: rangeSliderProps) {
  const { min, max, header, onChange } = props;
  const [value, setValue] = useState(min ? min : 0);

  const onRangeChange = (values: any) => {
    setValue(values);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <View
      style={
        {
          //backgroundColor: "pink",
        }
      }
    >
      <Text style={{ fontSize: 16 }}>{header}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Slider
          style={{ width: "80%" }}
          minimumValue={min ? min : 0}
          maximumValue={max ? max : 10}
          value={value ? value : 0}
          onValueChange={onRangeChange}
          //value={maxValue}
          step={1}
        />
        <Text style={{ marginLeft: 10, textAlign: "center" }}>
          {value}
          {header === "Angle" && "°"}
        </Text>
      </View>
    </View>
  );
}
