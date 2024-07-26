import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

export default GlobalStyle;
