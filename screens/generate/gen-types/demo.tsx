import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Button } from "react-native";

const BottomSheet = () => {
  const [show, setShow] = useState(false);
  const translateY = useSharedValue(300);
  const MAX_TRANSLATE_Y = 0; // Maximum translation value for the sheet

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startY = translateY.value;
    },
    onActive: (event: any, context: any) => {
      translateY.value = context.startY + event.translationY;

      // Limit the translation within the maximum value
      translateY.value = Math.max(
        Math.min(translateY.value, 300),
        -MAX_TRANSLATE_Y
      );
    },
    onEnd: (event) => {
      // Animate the sheet to the closest snap point
      const velocity = event.velocityY;
      translateY.value = withDecay({
        velocity,
        clamp: [-MAX_TRANSLATE_Y, 300],
      });
    },
  });

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <Button onPress={() => setShow(!show)} title="Open/Close" />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.sheet, sheetStyle]}>
          <Text style={styles.sheetText}>Bottom Sheet Content</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "flex-end",
    //justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "pink",
  },
  sheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 500,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  sheetText: {
    fontSize: 16,
  },
});

export default BottomSheet;
