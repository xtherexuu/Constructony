import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media (min-width: 2100px) {
    grid-gap: 30px;
  }
  @media (min-width: 3000px) {
    grid-gap: 45px;
  }
`;

export const ChoiceElement = styled.div`
  background: rgba(0, 0, 0, 0.6) url(${({ bg }) => bg});
  background-blend-mode: darken;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  @media (min-width: 1700px) {
    border-radius: 12px;
    gap: 20px;
  }
  @media (min-width: 2100px) {
    border-radius: 15px;
    gap: 30px;
    padding: 30px;
  }
  @media (min-width: 3000px) {
    border-radius: 25px;
    gap: 50px;
    padding: 50px;
  }
`;

export const ChoiceHeading = styled.h4`
  color: white;
  font-size: 1.2rem;
`;

export const ChoiceText = styled.p`
  color: white;
  text-align: center;
`;

export const ChoseButton = styled.button`
  background: rgb(51, 212, 214);
  background: -moz-linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 100%
  );
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 100%
  );
  padding: 8px;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  @media (min-width: 1700px) {
    border-radius: 12px;
    padding: 10px 18px;
  }
  @media (min-width: 2100px) {
    border-radius: 15px;
    padding: 14px 22px;
  }
  @media (min-width: 3000px) {
    border-radius: 25px;
    padding: 18px 35px;
  }
`;
