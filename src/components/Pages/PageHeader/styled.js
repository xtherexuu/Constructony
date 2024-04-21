import styled from "styled-components";

export const StyledHeader = styled.header``;

export const HeaderImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const HeaderHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  & > h1 {
    font-size: 1.3rem;
  }
  margin: 15px 0 20px;
`;
