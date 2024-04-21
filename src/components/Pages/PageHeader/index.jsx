import React from "react";
import { HeaderHeadingContainer, HeaderImage, StyledHeader } from "./styled";
import SectionHeading from "../../SectionHeading";

export default function PageHeader({ text, imageUrl }) {
  return (
    <StyledHeader>
      <HeaderImage src={imageUrl} />
      <HeaderHeadingContainer>
        <SectionHeading text={text} />
      </HeaderHeadingContainer>
    </StyledHeader>
  );
}
