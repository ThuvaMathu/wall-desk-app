import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import { theme } from "../../services/global-theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getRandomHexColor } from "./gen-random-collection";

interface RandColorPickerProps {
  onSelectColor?: (color1: string, color2: string) => void;
  rectangle?: boolean;
  isgradient?: boolean;
}

const RandomColorPicker: React.FC<RandColorPickerProps> = ({
  onSelectColor,
  rectangle,
  isgradient,
}) => {
  const [CurrentColor, setCurrentColor] = useState("blue");
  const [randHex, setRandHex] = useState({
    color1: getRandomHexColor(),
    color2: getRandomHexColor(),
  });

  const generateRandomGradient = () => {
    const getColor1 = getRandomHexColor();
    const getColor2 = getRandomHexColor();
    setRandHex({ color1: getColor1, color2: getColor2 });
    onSelectColor && onSelectColor(getColor1, getColor2);
  };

  const generateRandomMono = () => {
    const getColor = getRandomHexColor();
    setRandHex({ color1: getColor, color2: getColor });
    onSelectColor && onSelectColor(getColor, getColor);
  };

  return (
    <View>
      {isgradient ? (
        //gradient pallet
        <TouchableOpacity
          onPress={generateRandomGradient}
          style={{
            width: 70,
            height: 70,
            borderRadius: rectangle ? 5 : 35,
            overflow: "hidden",
            borderColor: theme.secondary,
            borderWidth: 1,
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              display: "flex",
              flexDirection: "row",
              transform: [{ rotate: "45deg" }, { scale: 1.5 }],
            }}
          >
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: randHex.color1,
              }}
            ></View>
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: randHex.color2,
              }}
            ></View>
          </View>
        </TouchableOpacity>
      ) : (
        //mono color pallet
        <TouchableOpacity
          onPress={generateRandomMono}
          style={{
            width: 70,
            height: 70,
            borderRadius: rectangle ? 5 : 35,
            overflow: "hidden",
            borderColor: theme.secondary,
            borderWidth: 1,
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              display: "flex",
              flexDirection: "row",
              //transform: [{ rotate: "45deg" }, { scale: 1.5 }],
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: randHex.color2,
              }}
            ></View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RandomColorPicker;
