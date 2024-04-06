import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Lato", sans-serif;
    }
    html, ::after, ::before {
        box-sizing: inherit;
    }
    body {
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.text2};
        overflow-x: hidden;
        transition: background-color 0.5s, color 0.25s;
    }
    :root {
        font-size: 1em;
    }

    @keyframes scroller {
        to {
            transform: translate(calc(-50% - 5px));
        }
    }
`;
