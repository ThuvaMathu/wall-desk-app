import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { theme } from "../../services/global-theme";
import ColorPickerModel from "./color-picker";
import RandomColorPicker from "./random-color-picker";

type ColorSelectorProps = {
  firstColorTittle?: string;
  onChangeFirstColor?: (e: any) => void;
  SecondColorTittle?: string;
  onChangeSecondColor?: (e: any) => void;
  RandomColorTittle?: string;
  fixed: boolean;
  onChangeRandomColor?: (e: string, f: string) => void;
};

export default function CommonColorSelector(props: ColorSelectorProps) {
  const {
    firstColorTittle,
    onChangeFirstColor,
    SecondColorTittle,
    onChangeSecondColor,
    RandomColorTittle,
    fixed,
    onChangeRandomColor,
  } = props;
  const [isGrad, setIsGrad] = useState(false);

  useEffect(() => {
    if (fixed) {
      setIsGrad(true);
    }
  }, []);

  return (
    <View style={{}}>
      {!fixed && (
        <View
          style={{
            marginTop: 5,
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Switch
            value={isGrad}
            onChange={() => setIsGrad(!isGrad)}
            trackColor={{ true: theme.secondary, false: theme.primary }}
            ios_backgroundColor={theme.primary}
          />
          <Text style={{ fontSize: 18, fontWeight: "400" }}>Gradient</Text>
        </View>
      )}

      {!isGrad ? (
        // Mono color pallet
        <View
          style={{
            marginTop: 5,
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ColorPickerModel
              rectangle={true}
              onSelectColor={(e) => onChangeFirstColor && onChangeFirstColor(e)}
            />
            <Text style={{ textAlign: "center", marginTop: 3 }}>
              Background
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RandomColorPicker
              rectangle={true}
              onSelectColor={(c1: string, c2: string) =>
                onChangeRandomColor && onChangeRandomColor(c1, c2)
              }
            />
            <Text style={{ textAlign: "center", marginTop: 3 }}>
              {RandomColorTittle}
            </Text>
          </View>
        </View>
      ) : (
        //gradient color pallet

        <View
          style={{
            marginTop: 5,
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ColorPickerModel
              rectangle={true}
              onSelectColor={(e) => onChangeFirstColor && onChangeFirstColor(e)}
            />
            <Text style={{ textAlign: "center", marginTop: 3 }}>
              {firstColorTittle}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ColorPickerModel
              rectangle={true}
              onSelectColor={(e) =>
                onChangeSecondColor && onChangeSecondColor(e)
              }
            />
            <Text style={{ textAlign: "center", marginTop: 3 }}>
              {SecondColorTittle}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RandomColorPicker
              rectangle={true}
              isgradient={true}
              onSelectColor={(c1: string, c2: string) =>
                onChangeRandomColor && onChangeRandomColor(c1, c2)
              }
            />
            <Text style={{ textAlign: "center", marginTop: 3 }}>
              {RandomColorTittle}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
