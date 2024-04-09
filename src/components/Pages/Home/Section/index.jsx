import React from "react";
import {
  HeaderHeading,
  HeaderImage,
  SectionContent,
  SectionHeader,
  Wrapper,
} from "./styled";
import { useTheme } from "../../../../../redux/useTheme";

export default function Section({ children, sectionHeading, headerImageSrc }) {
  const theme = useTheme();

  return (
    <Wrapper>
      <SectionHeader>
        <HeaderHeading>
          {sectionHeading}
          <svg
            viewBox="0 0 137 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.05389 7.46707C3.00998 6.49701 8.82236 1.57486 12.7904 1.64671C16.7585 1.71857 19.7764 7.79042 24.8623 7.89821C29.9481 8.00599 37.1018 2.68863 43.3054 2.29342C49.509 1.89821 56.495 5.23953 62.0838 5.52695C67.6727 5.81438 72.7585 4.08983 76.8383 4.01797C80.9182 3.94611 83.2655 4.88024 86.5629 5.09581C89.8603 5.31138 92.5429 5.27546 96.6228 5.31138C100.703 5.34731 104.559 5.31138 111.042 5.31138C117.525 5.31138 131.441 5.31138 135.521 5.31138"
              stroke="url(#paint0_linear_80_5)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_80_5"
                x1="1.05389"
                y1="1.64594"
                x2="135.521"
                y2="1.64594"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={`${
                    theme.colors.mode === "light" ? "#33D4D6" : "#f8a718"
                  }`}
                />
                <stop
                  offset="1"
                  stopColor={`${
                    theme.colors.mode === "light" ? "#3377D6" : "#fa5f3c"
                  }`}
                />
              </linearGradient>
            </defs>
          </svg>
        </HeaderHeading>
        <HeaderImage src={headerImageSrc} />
      </SectionHeader>
      <SectionContent>{children}</SectionContent>
    </Wrapper>
  );
}
