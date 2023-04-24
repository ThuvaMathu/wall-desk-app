import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const screenSize = { width: screenWidth, height: screenHeight };
export const theme = {
  primary: "#14213D",
  secondary: "#FCA311",
  third: "#E5E5E5",
  fourth: "#BAC9E9",
};
