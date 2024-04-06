import React from "react";
import { ElementList, StyledScroller } from "./styled";

export default function Scroller({
  children,
  scrollDirection = "right",
  speed = "medium",
}) {
  return (
    <StyledScroller>
      <ElementList
        speed={speed === "speed" ? "10s" : speed === "medium" ? "20s" : "40s"}
        scrollDirection={scrollDirection === "left" ? "reverse" : "normal"}
      >
        {children}
        {children}
      </ElementList>
    </StyledScroller>
  );
}
