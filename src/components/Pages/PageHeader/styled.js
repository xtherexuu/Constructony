import styled from "styled-components";

export const StyledHeader = styled.header``;

export const HeaderImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  @media (orientation: landscape) {
    @media (min-height: 700px) {
      height: 300px;
    }
    @media (min-height: 1000px) {
      height: 400px;
    }
    @media (min-height: 1400px) {
      height: 500px;
    }
    @media (min-height: 2000px) {
      height: 600px;
    }
  }
`;

export const HeaderHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  & > h1 {
    font-size: 1.3rem;
  }
  margin: 15px 0 20px;
`;
