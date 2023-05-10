import React, { ReactNode, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Button } from "react-native";
import { screenSize, theme } from "../../services/global-theme";
import Svg, { SvgProps, Rect } from "react-native-svg";

type BottomSheetProps = {
  children: ReactNode;
  overHeadChild?: ReactNode;
  drawHeight?: number;
  minHeight?: number;
  backgroundColor?: string;
  handlerColor?: string;
  handleDirections?: "flex-end" | "center" | "flex-start";
};

const BottomSheet = (props: BottomSheetProps) => {
  const {
    children,
    drawHeight,
    minHeight,
    handlerColor,
    backgroundColor,
    handleDirections,
    overHeadChild,
  } = props;
  const [show, setShow] = useState(false);
  const translateY = useSharedValue(drawHeight ? drawHeight : 300);
  const MAX_TRANSLATE_Y = 0; // Maximum translation value for the sheet

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startY = translateY.value;
    },
    onActive: (event: any, context: any) => {
      translateY.value = context.startY + event.translationY;
      // Limit the translation within the maximum value
      translateY.value = Math.max(
        Math.min(translateY.value, drawHeight ? drawHeight : 300),
        -MAX_TRANSLATE_Y
      );
    },
    onEnd: (event) => {
      // Animate the sheet to the closest snap point
      const velocity = event.velocityY;
      translateY.value = withDecay({
        velocity,
        clamp: [-MAX_TRANSLATE_Y, drawHeight ? drawHeight : 300],
      });
    },
  });

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View
      style={{
        flex: 1,
        width: screenSize.width,
        position: "absolute",
        bottom: 0,
      }}
    >
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height:
                (drawHeight ? drawHeight : 300) +
                40 +
                (minHeight ? minHeight : 10),
            },
            sheetStyle,
          ]}
        >
          <View style={{}}>{overHeadChild}</View>
          <View
            style={{
              backgroundColor: backgroundColor ? backgroundColor : "grey",
              height: "100%",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              paddingBottom: 10,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <View
              style={{
                // display: "flex",
                marginBottom: 30,
                height: 50,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor: theme.third,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: handleDirections ? handleDirections : "center",
                  height: 25,
                  paddingTop: 10,
                  paddingHorizontal: 30,
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 6,
                    backgroundColor: handlerColor ? handlerColor : "grey",
                    borderRadius: 10,
                  }}
                />
              </View>
            </View>
            <View style={{ paddingHorizontal: 10 }}>{children}</View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default BottomSheet;
