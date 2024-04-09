import styled from "styled-components";

export const Wrapper = styled.div`
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

export const HeaderHeading = styled.h2`
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

export const HeaderImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const SectionContent = styled.article`
  font-size: 0.85rem;
  padding: 0 10px;
  ${({ theme }) => theme.colors.text2};
`;
