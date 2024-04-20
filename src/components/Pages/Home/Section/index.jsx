import React from "react";
import { HeaderImage, SectionContent, SectionHeader, Wrapper } from "./styled";
import SectionHeading from "../../../SectionHeading";

export default function Section({
  children,
  sectionHeading,
  headerImageSrc,
  imageAlt,
}) {
  return (
    <Wrapper>
      <SectionHeader>
        <SectionHeading text={sectionHeading} />
        <HeaderImage alt={imageAlt} src={headerImageSrc} />
      </SectionHeader>
      <SectionContent>{children}</SectionContent>
    </Wrapper>
  );
}
