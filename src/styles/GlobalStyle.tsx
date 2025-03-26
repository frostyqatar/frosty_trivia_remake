import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-y: scroll;
    scrollbar-gutter: stable;
  }

  body {
    font-family: var(--font-family, 'Noto Sans Arabic', 'Roboto', sans-serif);
    background-color: var(--background-color, #edf2f7);
    color: var(--text-color, #2d3748);
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  button {
    font-family: var(--font-family, 'Noto Sans Arabic', 'Roboto', sans-serif);
  }
  
  input {
    font-family: var(--font-family, 'Noto Sans Arabic', 'Roboto', sans-serif);
  }

  /* Card styles */
  .card {
    background-color: var(--card-background, white);
    border-radius: var(--border-radius, 8px);
    box-shadow: var(--card-shadow, 0 4px 6px rgba(0, 0, 0, 0.1));
  }
  
  /* Button styles */
  .btn-primary {
    background-color: var(--primary-color, #3498db);
    color: var(--button-text-color, white);
  }

  /* Support for Arabic text */
  .arabic {
    font-family: var(--font-family, 'Noto Sans Arabic', 'Roboto', sans-serif);
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle; 