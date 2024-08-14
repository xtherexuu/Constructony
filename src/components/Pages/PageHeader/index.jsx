import React from "react";
import { HeaderHeadingContainer, HeaderImage, StyledHeader } from "./styled";
import SectionHeading from "../../SectionHeading";

export default function PageHeader({ text, imageUrl, alt }) {
  return (
    <StyledHeader id="header">
      <HeaderImage src={imageUrl} alt={alt} />
      <HeaderHeadingContainer>
        <SectionHeading text={text} />
      </HeaderHeadingContainer>
    </StyledHeader>
  );
}
