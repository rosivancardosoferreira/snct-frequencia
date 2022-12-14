import React from "react";
import Svg, { Path } from "react-native-svg";

export function IconClose() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={32}
      height={32}
    >
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
        fill="rgba(31,31,31,1)"
      />
    </Svg>
  );
}
