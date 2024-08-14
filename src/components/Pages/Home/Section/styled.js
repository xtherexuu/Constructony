import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

export const SectionHeader = styled.header`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media (min-width: 1900px) {
    gap: 45px;
  }
  @media (min-width: 2100px) {
    gap: 50px;
  }
  @media (min-width: 3000px) {
    gap: 55px;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  @media (orientation: landscape) {
    @media (min-height: 700px) {
      height: 250px;
    }
    @media (min-height: 1000px) {
      height: 300px;
    }
    @media (min-height: 1400px) {
      height: 400px;
    }
    @media (min-height: 2000px) {
      height: 500px;
    }
  }
`;

export const SectionContent = styled.span``;
