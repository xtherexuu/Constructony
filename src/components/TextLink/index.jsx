import React from "react";
import { StyledTextLink } from "./styled";

export default function TextLink({ children, to }) {
  return <StyledTextLink to={to}>{children}</StyledTextLink>;
}
