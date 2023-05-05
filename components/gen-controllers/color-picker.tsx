import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import WheelColorPicker from "react-native-wheel-color-picker";
import { theme } from "../../services/global-theme";

interface ColorPickerProps {
  onSelectColor?: (color: string) => void;
}

const ColorPickerModel: React.FC<ColorPickerProps> = ({ onSelectColor }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [CurrentColor, setCurrentColor] = useState("blue");

  const openColorPicker = () => {
    setModalVisible(true);
  };

  const closeColorPicker = () => {
    setModalVisible(false);
  };

  const handleColorChange = (color: string) => {
    console.log(color);
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
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: CurrentColor,
        }}
      >
        {/* <Text style={{ textAlign: "center", marginTop: 16 }}>Open</Text> */}
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <Pressable
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View
            style={{
              height: 400,
              width: 300,
              backgroundColor: "white",
              borderWidth: 2,
              borderColor: theme.secondary,
              padding: 10,
              borderRadius: 15,
            }}
          >
            <Text style={{ textAlign: "center", marginBottom: 16 }}>
              Select a color:
            </Text>
            <WheelColorPicker
              onColorChange={handleColorChange}
              discrete={true}
              //style={{ flex: 1 }}
            />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ textAlign: "center", marginTop: 16 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ColorPickerModel;
