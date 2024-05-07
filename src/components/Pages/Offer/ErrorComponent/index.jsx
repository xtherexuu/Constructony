import React from "react";
import { ErrorButton, ErrorContent, ErrorHeading, Wrapper } from "./styled";

export default function ErrorComponent({ error }) {
  return (
    <Wrapper>
      <ErrorHeading>Błąd!</ErrorHeading>
      <ErrorContent>{error.content}</ErrorContent>
      <ErrorButton
        onClick={() => {
          error.action();
        }}
      >
        {error.buttonContent}
      </ErrorButton>
    </Wrapper>
  );
}
