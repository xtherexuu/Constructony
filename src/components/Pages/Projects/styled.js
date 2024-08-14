import styled from "styled-components";

export const Wrapper = styled.div``;

export const ProjectsContainer = styled.section`
  margin-top: 40px;
  @media (min-width: 1700px) {
    margin-top: 50px;
  }
  @media (min-width: 2100px) {
    margin-top: 60px;
  }
  @media (min-width: 3000px) {
    margin-top: 70px;
  }
`;

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
    @media (min-height: 1400px) {
      height: 400px;
    }
    @media (min-height: 2000px) {
      height: 500px;
    }
  }
  @media (min-width: 1700px) {
    border-radius: 24px;
  }
  @media (min-width: 2100px) {
    border-radius: 30px;
  }
  @media (min-width: 3000px) {
    border-radius: 50px;
  }
`;

export const ProjectHeading = styled.h3`
  text-align: center;
`;
