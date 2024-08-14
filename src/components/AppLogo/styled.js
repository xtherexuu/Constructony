import styled from "styled-components";

export const Image = styled.img`
    width: 50px;
    @media (min-width: 800px) {
        width: 65px;
    }
    @media (min-width: 1000px) {
        width: 80px;
    }
    @media (min-width: 1700px) {
        width: 95px;
    }
    @media (min-width: 3000px) {
        width: 150px;
    }
`;