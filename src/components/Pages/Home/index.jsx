import React, { useEffect, useState } from "react";
import {
  SlideContainer,
  SliderContainer,
  SlideHeading,
  SlidesContainer,
  Wrapper,
  SlideText,
  SlideContent,
  SliderButton,
} from "./styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const HomePage = () => {
  const [sliderScroll, setSliderScroll] = useState(0);
  return (
    <Wrapper>
      <SliderContainer>
        <SliderButton
          direction="back"
          onClick={() => {
            setSliderScroll(sliderScroll - 1);
          }}
          disabled={sliderScroll <= 0}
        >
          <IoIosArrowBack />
        </SliderButton>
        <SliderButton
          direction="forward"
          disabled={sliderScroll >= 5}
          onClick={() => {
            setSliderScroll(sliderScroll + 1);
          }}
        >
          <IoIosArrowForward />
        </SliderButton>
        <SlidesContainer scroll={sliderScroll}>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Wysoka Jakość Materiałów</SlideHeading>
              <SlideText>
                Stawiamy na najwyższą jakość materiałów. Nasze budynki są
                solidne, trwałe i odporne na wszelkie warunki atmosferyczne.
                Przykład? Nasze ściany zewnętrzne są wykonane z betonu o
                wyjątkowej wytrzymałości.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Pionierzy w Wykończeniach</SlideHeading>
              <SlideText>
                Nasze wykończenia są perfekcyjne. Każdy detal jest dopracowany,
                a efekt końcowy zachwyca. Przykład? Nasze drewniane podłogi są
                ręcznie szlifowane i lakierowane.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Zielone Technologie</SlideHeading>
              <SlideText>
                Dbamy o środowisko naturalne. W naszych projektach stosujemy
                energooszczędne rozwiązania, takie jak panele słoneczne czy
                systemy odzyskiwania wody deszczowej.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Szybka Realizacja</SlideHeading>
              <SlideText>
                Nasza firma działa sprawnie. Od koncepcji do gotowego budynku –
                wszystko w krótkim czasie. Przykład? Nasza ostatnia budowa
                budynku zajęła zaledwie 6 miesięcy.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Bezpieczeństwo na Pierwszym Miejscu</SlideHeading>
              <SlideText>
                Nasze budynki spełniają najwyższe standardy bezpieczeństwa. A
                dodatkowo do każdego projektu budowy nieruchomości dołączamy
                gratisową instalację czujników bezpieczeństwa.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Zaufanie Klientów</SlideHeading>
              <SlideText>
                Nasze referencje mówią same za siebie. Klienci polecają nas
                swoim znajomym. Ostatnie remonty mieszkan zdobyły same pozytywne
                opinie.
              </SlideText>
            </SlideContent>
          </SlideContainer>
        </SlidesContainer>
        
      </SliderContainer>
    </Wrapper>
  );
};
