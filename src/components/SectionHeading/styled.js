import styled from "styled-components";

export const StyledSectionHeading = styled.h2`
  padding: 0 5px;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text1};
  position: relative;
  & > svg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    bottom: -15px;
    left: 0;
  }
  @media (min-width: 500px) {
    & > svg {
      bottom: -20px;
    }
  }
  @media (min-width: 1700px) {
    & > svg {
      bottom: -25px;
    }
  }
  @media (min-width: 2100px) {
    font-size: 1.5rem;
    & > svg {
      bottom: -35px;
    }
  }
  @media (min-width: 3000px) {
    font-size: 1.6rem;
    & > svg {
      bottom: -50px;
    }
  }
`;
