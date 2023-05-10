import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { theme } from "../../services/global-theme";
import DiceIcon from "../svgs/dice";

type rangeSliderProps = {
  tittle?: string;
  onChange: (e: any) => void;
};

export default function CommonGenButtom(props: rangeSliderProps) {
  const { tittle, onChange } = props;

  return (
    <View
      style={{
        display: "flex",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: theme.secondary,
          padding: 12,
          borderRadius: 50,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 5,
        }}
        onPress={(e) => onChange(e)}
      >
        {/* <Text
          style={{ fontFamily: theme.font.primary, fontSize: 22, marginTop: 5 }}
        >
          {tittle ? tittle : "Generate"}
        </Text> */}
        <DiceIcon height={34} width={34} />
      </TouchableOpacity>
    </View>
  );
}
