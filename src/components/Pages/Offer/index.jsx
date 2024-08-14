import React, { useEffect, useState } from "react";
import {
  ChoiceSection,
  OfferSection,
  SectionHeading,
  StepBar,
  StepButton,
  StepComponent,
  StepContainer,
  StepInfo,
  Wrapper,
} from "./styled";
import PageHeader from "../PageHeader";
import TextComponent from "../../TextComponent";
import { useSearchParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ChoiceComponent from "./ChoiceComponent";
import srcToHeaderImage from "../../../../utils/ourOffert.png";
import srcToHouseImage from "../../../../utils/houseImage.png";
import srcToOurProjectsImage from "../../../../utils/ourProjects.png";
import srcToBuilderInWorkImage from "../../../../utils/builderInWork.png";
import srcToBuilderInWork2Image from "../../../../utils/builderInWork2.png";
import ErrorComponent from "./ErrorComponent";
import OfferComponent from "./OfferComponent";

export default function Offer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [step, setStep] = useState(
    searchParams.size > 0
      ? {
          currentStep:
            +searchParams.get("currentStep") >= 1 &&
            +searchParams.get("currentStep") <= 3
              ? +searchParams.get("currentStep")
              : 1,
          maxStep: 3,
          areaChoice:
            searchParams.get("areaChoice") === "big" ||
            searchParams.get("areaChoice") === "small"
              ? searchParams.get("areaChoice")
              : null,
          typeChoice:
            searchParams.get("typeChoice") === "renovation" ||
            searchParams.get("typeChoice") === "building"
              ? searchParams.get("typeChoice")
              : null,
        }
      : {
          currentStep: 1,
          maxStep: 3,
          areaChoice: null,
          typeChoice: null,
        }
  );

  useEffect(() => {
    const params = new URLSearchParams();
    const objKeys = Object.keys(step);
    objKeys.forEach((key) => {
      if (key !== "maxStep") {
        params.append(key, step[key]);
      }
    });
    setSearchParams(params);
  }, [step]);

  useEffect(() => {
    setStep({
      currentStep:
        +searchParams.get("currentStep") >= 1 &&
        +searchParams.get("currentStep") <= 3
          ? +searchParams.get("currentStep")
          : 1,
      maxStep: 3,
      areaChoice:
        searchParams.get("areaChoice") === "big" ||
        searchParams.get("areaChoice") === "small"
          ? searchParams.get("areaChoice")
          : null,
      typeChoice:
        searchParams.get("typeChoice") === "renovation" ||
        searchParams.get("typeChoice") === "building"
          ? searchParams.get("typeChoice")
          : null,
    });
  }, [searchParams]);

  return (
    <Wrapper>
      <PageHeader
        text="OFERTA"
        imageUrl={srcToHeaderImage}
        alt="Obrazek przedstawia dwójkę budowniczych na budowie, którzy ze sobą rozmawiają."
      />
      <OfferSection>
        <SectionHeading>Powiedz nam w czym możemy pomóc!</SectionHeading>
        <TextComponent align="center">
          Nasza oferta jest bardzo obszerna, więc żeby Cię nie zmuszać do
          czytania rzeczy, które Cię nie interesują, prosimy, abyś
          odpowiedział/a na kilka poniższych pytań w celu dostosowania oferty do
          Twoich potrzeb.
        </TextComponent>
        <ChoiceSection>
          <StepComponent>
            <StepButton
              aria-label="Przewiń etap wybierania oferty o jeden do tyłu."
              onClick={() => {
                setStep((e) => ({
                  ...e,
                  currentStep: e.currentStep - 1,
                }));
              }}
              disabled={step.currentStep < 2}
            >
              <FaChevronLeft />
            </StepButton>
            <StepContainer>
              <StepInfo>
                {step.currentStep === 1
                  ? `Krok 1: Wybierz wielkość projektu`
                  : step.currentStep === 2
                  ? "Krok 2: Wybierz typ projektu"
                  : step.currentStep === 3
                  ? "Oferta"
                  : ""}
              </StepInfo>
              <StepBar
                step={`${((step.currentStep / step.maxStep) * 100).toFixed(2)}`}
              />
            </StepContainer>
            <StepButton
              aria-label="Przewiń etap wybierania oferty o jeden do przodu."
              onClick={() => {
                setStep((e) => ({
                  ...e,
                  currentStep: e.currentStep + 1,
                }));
              }}
              disabled={
                step.currentStep > 2 ||
                (step.currentStep === 1 && !step.areaChoice) ||
                (step.currentStep === 2 && !step.typeChoice)
              }
            >
              <FaChevronRight />
            </StepButton>
          </StepComponent>
          {step.currentStep === 1 ? (
            <ChoiceComponent
              firstChoice={{
                text: "Ta opcja jest głównie przeznaczona dla firm lub osób planujących realizację dużych projektów. Wybierając ten plan, możemy zaoferować Ci usługi takie jak budowa fabryk, remont lub budowa biurowców oraz inne duże projekty. Tutaj jedynym ograniczeniem jest Twoja wyobraźnia!",
                heading: "Duży projekt",
                imgUrl: srcToOurProjectsImage,
                action: () => {
                  setStep((e) => ({
                    ...e,
                    currentStep: 2,
                    areaChoice: "big",
                    typeChoice: null,
                  }));
                },
              }}
              secoundChoice={{
                text: "Ta opcja jest głównie przeznaczona dla osób, które planują budowę lub remont własnego domu lub realizację mniejszych projektów, takich jak budowa basenu, upiększenie ogrodu czy też wybudowanie garażu.",
                heading: "Mały projekt",
                imgUrl: srcToHouseImage,
                action: () => {
                  setStep((e) => ({
                    ...e,
                    currentStep: 2,
                    areaChoice: "small",
                    typeChoice: null,
                  }));
                },
              }}
            />
          ) : null}
          {step.currentStep === 2 ? (
            step.areaChoice === "big" || step.areaChoice === "small" ? (
              <ChoiceComponent
                firstChoice={{
                  text: "Wybierz tę opcję, jeśli planujesz budowę czegoś nowego.",
                  heading: "Budowa",
                  imgUrl: srcToBuilderInWorkImage,
                  action: () => {
                    setStep((e) => ({
                      ...e,
                      currentStep: 3,
                      typeChoice: "building",
                    }));
                  },
                }}
                secoundChoice={{
                  text: "Wybierz tę opcję, jeśli chcesz przeprowadzić remont lub odświeżyć istniejący obiekt.",
                  heading: "Remont",
                  imgUrl: srcToBuilderInWork2Image,
                  action: () => {
                    setStep((e) => ({
                      ...e,
                      currentStep: 3,
                      typeChoice: "renovation",
                    }));
                  },
                }}
              />
            ) : (
              <ErrorComponent
                error={{
                  content:
                    "Wykonaj najpierw krok pierwszy, aby przejść do drugiego!",
                  buttonContent: "Przejdź do pierwszego kroku",
                  action: () => {
                    setStep((step) => ({ ...step, currentStep: 1 }));
                  },
                }}
              />
            )
          ) : null}
          {step.currentStep === 3 ? (
            step.areaChoice ? (
              step.typeChoice ? (
                step.areaChoice === "small" ? (
                  step.typeChoice === "building" ? (
                    <OfferComponent
                      offerList={[
                        {
                          heading: "Zbuduj swój dom!",
                          description:
                            "Chcesz zbudować swój wymarzony dom? Jeśli tak, świetnie trafiłeś! Nasza firma stworzy dla Ciebie projekt twojego wymarzonego domu i go zrealizuje!",
                          price: (
                            <>
                              3.000-6.000ZŁ/m<sup>2</sup>
                            </>
                          ),
                          url: srcToBuilderInWorkImage,
                        },
                        {
                          heading: "Stwórz projekt",
                          description:
                            "Masz pomysł w głowie i chcesz, aby ktoś stworzył dla Ciebie rzetelny projekt, ale nie chcesz, abyśmy go zrealizowali, bo wolisz samemu wziąć sprawy w swoje ręce? U nas nic nie stoi na przeszkodzie!",
                          price: (
                            <>
                              150-500ZŁ/m<sup>2</sup>
                            </>
                          ),
                          url: srcToBuilderInWorkImage,
                        },
                        {
                          heading: "Zrealizuj swój pomysł",
                          description:
                            "Chcesz wybudować garaż, upiększyć swój ogród lub zrealizować jakiś inny mniejszy projekt? Nasza firma zaprojektuje i wykona go dla Ciebie!",
                          price: (
                            <>
                              5.000-10.000ZŁ/m<sup>2</sup>
                            </>
                          ),
                          url: srcToBuilderInWorkImage,
                        },
                      ]}
                    />
                  ) : (
                    <OfferComponent
                      offerList={[
                        {
                          heading: "Generalny remont",
                          description:
                            "Chcesz przeprowadzić generalny remont domu, połączyć pewne pomieszczenia, oddzielić je nową ścianą, pomalować dom, wymienić instalację elektryczną lub wodną, i tym podobne? To jest odpowiedni plan dla Ciebie!",
                          price: (
                            <>
                              1.000-5.000ZŁ/m<sup>2</sup>
                            </>
                          ),
                          url: srcToBuilderInWork2Image,
                        },
                        {
                          heading: "Projekt wnętrza",
                          description:
                            "Chcesz, aby nasi specjaliści od wykończenia stworzyli dla Ciebie projekt nowoczesnego wnętrza domu, tak aby twój dom wyglądał olśniewająco nie tylko od zewnątrz? To jest plan dla Ciebie!",
                          price: (
                            <>
                              80-300ZŁ/m<sup>2</sup>
                            </>
                          ),
                          url: srcToBuilderInWork2Image,
                        },
                        {
                          heading: "Renowacja",
                          description:
                            "Chcesz, aby wnętrze Twojego domu wyglądało wyjątkowo? Zleć nam projektowanie jego wnętrza oraz wykonanie całej reorganizacji. Nasza ekipa zakupi potrzebne meble i materiały, wstawi je, a Ty będziesz musiał jedynie pokryć koszty.",
                          price: (
                            <>
                              4.000-7.000ZŁ/m<sup>2</sup>
                            </>
                          ),
                          url: srcToBuilderInWork2Image,
                        },
                      ]}
                    />
                  )
                ) : step.typeChoice === "building" ? (
                  <OfferComponent
                    offerList={[
                      {
                        heading: "Wybuduj projekt",
                        description:
                          "Chcesz zbudować miejsce do zarządzania swoją firmą, fabrykę do produkcji swoich wyrobów lub zrealizować inne duże projekty dla firmy? Ta oferta jest dla Ciebie!",
                        price: (
                          <>
                            2.000-5.000ZŁ/m<sup>2</sup>
                          </>
                        ),
                        url: srcToBuilderInWorkImage,
                      },
                      {
                        heading: "Zaprojektuj projekt",
                        description:
                          "Chcesz, abyśmy przygotowali dla Ciebie projekt budowy Twojego przedsięwzięcia, ale sam chcesz go zrealizować? To idealna propozycja!",
                        price: (
                          <>
                            100-300ZŁ/m<sup>2</sup>
                          </>
                        ),
                        url: srcToBuilderInWorkImage,
                      },
                    ]}
                  />
                ) : (
                  <OfferComponent
                    offerList={[
                      {
                        heading: "Wyremontuj obiekt",
                        description:
                          "Chcesz przeprowadzić generalny remont siedziby Twojej firmy, fabryki lub innego dużego obiektu? To oferta dla Ciebie!",
                        price: (
                          <>
                            1.000-5.000ZŁ/m<sup>2</sup>
                          </>
                        ),
                        url: srcToBuilderInWork2Image,
                      },
                      {
                        heading: "Unowocześnij obiekt",
                        description:
                          "Chcesz odnowić siedzibę swojej firmy, wymienić maszyny w fabryce lub przeprowadzić modernizację i zaprojektować wnętrze innego dużego obiektu? Ten plan jest dla Ciebie!",
                        price: (
                          <>
                            5.000-15.000ZŁ/m<sup>2</sup>
                          </>
                        ),
                        url: srcToBuilderInWork2Image,
                      },
                      {
                        heading: "Zaprojektuj wnętrze",
                        description:
                          "Chcesz, aby nasza firma zaprojektowała wnętrze dużego obiektu? Zaprojektujemy dla Ciebie cały plan zgodnie z Twoimi pomysłami na zagospodarowanie tego miejsca.",
                        price: (
                          <>
                            100-300ZŁ/m<sup>2</sup>
                          </>
                        ),
                        url: srcToBuilderInWork2Image,
                      },
                    ]}
                  />
                )
              ) : (
                <ErrorComponent
                  error={{
                    content:
                      "Wykonaj najpierw krok drugi, aby przejść do oferty!",
                    buttonContent: "Przejdź do drugiego kroku",
                    action: () => {
                      setStep((step) => ({ ...step, currentStep: 2 }));
                    },
                  }}
                />
              )
            ) : (
              <ErrorComponent
                error={{
                  content:
                    "Wykonaj najpierw wszystkie kroki, aby przejść do oferty!",
                  buttonContent: "Przejdź do pierwszego kroku",
                  action: () => {
                    setStep((step) => ({ ...step, currentStep: 1 }));
                  },
                }}
              />
            )
          ) : null}
        </ChoiceSection>
      </OfferSection>
    </Wrapper>
  );
}
