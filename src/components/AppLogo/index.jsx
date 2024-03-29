import React from "react";
import darkLogo from "../../../utils/darkLogo.svg";
import lightLogo from "../../../utils/lightLogo.svg";
import { Image } from "./styled";
import { useTheme } from "styled-components";

export const AppLogo = () => {
  const theme = useTheme();

  if (theme.colors.mode === "light") {
    return (
      <Image
        src={lightLogo}
        alt="This image includes logo of the Constructony company."
      />
    );
  } else {
    return (
      <Image
        src={darkLogo}
        alt="This image includes logo of the Constructony company."
      />
    );
  }
};
