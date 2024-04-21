import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTextLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.color2};
  transition: 0.5s;
  &:hover {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.color1light};
  }
  &:visited {
    color: ${({ theme }) => theme.colors.color1light};
  }
`;
