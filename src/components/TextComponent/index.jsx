import React from "react";
import { StyledText } from "./styled";

export default function TextComponent({ children, align }) {
  return <StyledText align={align}>{children}</StyledText>;
}
