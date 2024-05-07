import React from "react";
import {
  OfferContactButton,
  OfferContactDecription,
  OfferContainer,
  OfferDescription,
  OfferHeading,
  OfferPrice,
  OfferPriceDescription,
  SectionHeading,
  Wrapper,
} from "./styled";

export default function OfferComponent({ offerList }) {
  return (
    <Wrapper>
      <SectionHeading>Oferta dla Ciebie:</SectionHeading>
      {offerList.map((offer) => (
        <OfferContainer key={offer.heading} bg={offer.url}>
          <OfferHeading>{offer.heading}</OfferHeading>
          <OfferDescription>{offer.description}</OfferDescription>
          <OfferPriceDescription>
            Średnia cena, jaką płacą nasi klienci za daną usługę, wynosi:
          </OfferPriceDescription>
          <OfferPrice>{offer.price}</OfferPrice>
          <OfferContactDecription>
            Chcesz skorzystać z tej oferty?
            <br /> Skontaktuj się z nami, aby omówić szczegóły!
          </OfferContactDecription>
          <OfferContactButton to="/contact">Kontakt</OfferContactButton>
        </OfferContainer>
      ))}
    </Wrapper>
  );
}
