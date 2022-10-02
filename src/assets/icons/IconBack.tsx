import React from "react";
import Svg, { Path } from "react-native-svg";

export function IconBack() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={32}
      height={32}
      fill="#1F1F1F"
    >
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
    </Svg>
  );
}
