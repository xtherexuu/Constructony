import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Lato", sans-serif;
    }
    html, *::after, *::before {
        box-sizing: inherit;
    }
    body {
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.text2};
        overflow-x: hidden;
        transition: background-color 0.5s, color 0.25s;
        /* display: flex;
        justify-content: center; */
        @media (min-width: 1000px) {
            padding: 0 10%;
        }
        @media (min-width: 1300px) {
            padding: 0 15%;
        }
        @media (min-width: 1700px) {
            padding: 0 20%;
        }
    }
    :root {
        font-size: 1em;
        @media (min-width: 500px) {
            font-size: 1.2em;
        }
        @media (min-width: 800px) {
            font-size: 1.3em;
        }
        @media (min-width: 1200px) {
            font-size: 1.3em;
        }
        @media (min-width: 1400px) {
            font-size: 1.45em;
        }
        @media (min-width: 1900px) {
            font-size: 1.55em;
        }
    }

    @keyframes scroller {
        to {
            transform: translate(calc(-50% - 5px));
        }
    }
`;
