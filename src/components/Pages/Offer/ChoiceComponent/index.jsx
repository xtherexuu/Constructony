import React from "react";
import {
  ChoiceElement,
  ChoiceHeading,
  ChoiceText,
  ChoseButton,
  Wrapper,
} from "./styled";

export default function ChoiceComponent({ firstChoice, secoundChoice }) {
  return (
    <Wrapper>
      <ChoiceElement bg={firstChoice.imgUrl}>
        <ChoiceHeading>{firstChoice.heading}</ChoiceHeading>
        <ChoiceText>{firstChoice.text}</ChoiceText>
        <ChoseButton
          onClick={() => {
            firstChoice.action();
          }}
        >
          Wybierz
        </ChoseButton>
      </ChoiceElement>
      <ChoiceElement bg={secoundChoice.imgUrl}>
        <ChoiceHeading>{secoundChoice.heading}</ChoiceHeading>
        <ChoiceText>{secoundChoice.text}</ChoiceText>
        <ChoseButton
          onClick={() => {
            secoundChoice.action();
          }}
        >
          Wybierz
        </ChoseButton>
      </ChoiceElement>
    </Wrapper>
  );
}
