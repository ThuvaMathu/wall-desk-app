import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import { theme } from "../../services/global-theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getRandomHexColor } from "./gen-random-collection";
import ColorPicker, {
  Panel1,
  Panel2,
  Panel3,
  Panel4,
  Panel5,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
  BrightnessSlider,
  SaturationSlider,
} from "reanimated-color-picker";
interface ColorPickerProps {
  onSelectColor?: (color: string) => void;
  rectangle?: boolean;
}

const ColorPickerModel: React.FC<ColorPickerProps> = ({
  onSelectColor,
  rectangle,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [CurrentColor, setCurrentColor] = useState(getRandomHexColor());

  const openColorPicker = () => {
    setModalVisible(true);
  };

  const closeColorPicker = () => {
    setModalVisible(false);
  };

  const handleColorChange = (color: string) => {
    setCurrentColor(color);
    if (onSelectColor) {
      onSelectColor(color);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={openColorPicker}
        style={{
          width: 70,
          height: 70,
          borderRadius: rectangle ? 5 : 35,
          backgroundColor: CurrentColor,
          borderColor: theme.secondary,
          borderWidth: 1,
        }}
      ></TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              height: 400,
              width: 300,
              backgroundColor: "white",
              position: "relative",
              borderWidth: 3,
              borderColor: theme.secondary,
              padding: 10,
              borderRadius: 15,
            }}
          >
            <Text style={{ textAlign: "center", marginBottom: 16 }}>
              Select your color
            </Text>

            <ColorPicker
              style={{
                width: "100%",

                padding: 10,
                gap: 30,
              }}
              value={CurrentColor}
              onComplete={(color) => handleColorChange(color.rgba)}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Panel3 style={{ width: "90%" }} />
              </View>
              {/* <OpacitySlider /> */}
              <BrightnessSlider />
              {/* <SaturationSlider /> */}
            </ColorPicker>
            <View style={{ position: "absolute", top: 1, right: 4 }}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons
                  name={"ios-close"}
                  size={30}
                  color={theme.secondary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </Pressable> */}
      </Modal>
    </View>
  );
};

export default ColorPickerModel;
