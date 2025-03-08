import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Noto Sans Arabic', 'Roboto', sans-serif;
    background-color: #edf2f7;
    color: #2d3748;
  }

  button {
    font-family: 'Noto Sans Arabic', 'Roboto', sans-serif;
  }
  
  input {
    font-family: 'Noto Sans Arabic', 'Roboto', sans-serif;
  }

  /* Support for Arabic text */
  .arabic {
    font-family: 'Noto Sans Arabic', 'Roboto', sans-serif;
  }
`;

export default GlobalStyle; 