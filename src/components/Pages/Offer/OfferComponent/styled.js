import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 80%;
  justify-content: center;
  color: white;
  text-align: center;
`;

export const SectionHeading = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text1};
`;

export const OfferContainer = styled.div`
  border-radius: 6px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  background: #00000090 url(${({ bg }) => bg});
  background-blend-mode: darken;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const OfferHeading = styled.h5`
  font-size: 1.15rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.gradientLight};
`;

export const OfferDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

export const OfferPriceDescription = styled.p`
  font-size: 0.85rem;
  margin-bottom: 5px;
`;

export const OfferPrice = styled.p`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 25px;
`;

export const OfferContactDecription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const OfferContactButton = styled(Link)`
  color: inherit;
  padding: 10px 20px;
  background: rgb(51, 212, 214);
  background: -moz-linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 83%
  );
  background: -webkit-linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 83%
  );
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 83%
  );
  border-radius: 6px;
  align-self: center;
`;
