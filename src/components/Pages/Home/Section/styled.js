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
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  @media (orientation: landscape) {
    @media (min-height: 700px) {
      height: 250px;
    }
  }
`;

export const SectionContent = styled.span``;
