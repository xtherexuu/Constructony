import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorHeading = styled.h4`
  color: red;
  font-size: 1.3rem;
  margin: 10px 0 20px;
`;

export const ErrorContent = styled.p`
  text-align: center;
  font-size: 1.1rem;
`;

export const ErrorButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.color1};
  font-size: 1.1rem;
  margin-top: 20px;
  text-decoration: underline;
`;
