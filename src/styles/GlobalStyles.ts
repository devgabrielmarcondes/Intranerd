import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  *, button, input {
    border: 0;
    background: none;
    text-decoration: none;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
  }

  html {
    background: var(--background);
  }

  :root {
    --purple: #A025CC;
    --purple-light: #BC45E5;
    --purple-dark: #8912B2;
    --sec-purple: #781EE3;
    --sec-purple-light: #9033FF;
    --sec-purple-dark: #630ACC;
    --green: #1BCC1C;
    --green-light: #45E546;
    --green-dark: #08A609;
    --yellow: #CCB423;
    --yellow-light: #E5CF45;
    --yellow-dark: #B29A07;
    --red: #EB5757;
    --white: #F5F0F0;
    --white-light: #FAF5F5;
    --white-dark: #EBE6E6;
    --grey: #333335;
    --grey-light: #3D3D3F;
    --grey-dark: #29282D;
    --black: #171617;
    --black-light: #1A181A;
    --black-dark: #121112;
    --black-icon-bg: #2D2B2E;
    --black-text: #4B494D;
    --black-bg: #171717;
    --background: #19181A;
  }
`;
