import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
        html { 
            font-size: 93.75%;
        }
    };

    @media (max-width: 720px) {
        html { 
            font-size: 87.5%;
        }
    };

    body {
        background-color: var(--white);
        color: var(--gray-700);
    };

    body, input, textarea, select, button {
        font: 400 1rem "Poppins", sans-serif;
    };

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`;

export { GlobalStyle };