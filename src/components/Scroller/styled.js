import styled from "styled-components";

export const StyledScroller = styled.div`
  max-width: 100%;
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  padding: 10px 0;
`;

export const ElementList = styled.ul`
  width: fit-content;
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  animation: scroller ${({ speed }) => speed} linear
    ${({ scrollDirection }) => scrollDirection} infinite;
`;
