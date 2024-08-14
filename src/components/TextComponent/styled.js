import styled from "styled-components";

export const StyledText = styled.p`
  font-size: 0.85rem;
  padding: 0 10px;
  ${({ theme }) => theme.colors.text2};
  @media (min-width: 2100px) {
    margin-bottom: 10px;
  }
  @media (min-width: 2100px) {
    margin-bottom: 25px;
  }
`;
