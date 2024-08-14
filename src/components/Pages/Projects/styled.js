import styled from "styled-components";

export const Wrapper = styled.div``;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 0;
`;

export const ProjectImage = styled.img`
  width: 100%;
  padding: 10px;
  object-fit: cover;
  height: 150px;
  border-radius: 16px;
  @media (orientation: landscape) {
    @media (min-height: 700px) {
      height: 250px;
    }
    @media (min-height: 1000px) {
      height: 300px;
    }
  }
`;

export const ProjectHeading = styled.h3`
  text-align: center;
`;
