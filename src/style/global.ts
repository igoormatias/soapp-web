import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
    }

    html, button, input, textarea {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    button, input {
        outline: none;
    }
`