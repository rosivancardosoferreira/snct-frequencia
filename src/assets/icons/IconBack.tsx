import React from "react";
import Svg, { Path } from "react-native-svg";

export function IconBack() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={32}
      height={32}
    >
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
        fill="rgba(31,31,31,1)"
      />
    </Svg>
  );
}
