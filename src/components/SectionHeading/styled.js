import styled from "styled-components";

export const StyledSectionHeading = styled.h2`
  padding: 0 5px;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text1};
  position: relative;
  & > svg {
    position: absolute;
    z-index: 0;
    min-width: 100%;
    bottom: -10px;
    left: 0;
  }
`;
