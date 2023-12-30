import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    :root {
        --bg-primary: #1E1E1E;
        --bg-secondary: #282828;
        --bg-terciary: #333333;

        --text-primary: #FFFFFF;
        --text-decondary: #CCCCCC;

        --primary: #48D7D7;
        --primary-hover: #39b4b4;
        --secondary: #1B4A70;
        --secondary-hover: #143957;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Oswald', sans-serif;
    }

    html, body {
        min-height: 100dvh;
        background: var(--bg-primary);
        color: var(--text-primary);
        overflow-x: hidden;
    }
`

export default GlobalStyle