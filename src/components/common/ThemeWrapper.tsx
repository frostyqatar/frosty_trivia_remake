import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle, css, DefaultTheme } from 'styled-components';
import { useTheme, ThemeName } from '../../contexts/ThemeContext';
import { getThemeStyles } from '../../styles/themeStyles';
import { SnowflakesContainer } from './Snowflakes';

// Snowflake animation keyframes
const snowflakesContainer = css`
  .snowflakes {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1000;
    overflow: hidden;
  }

  .snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Serif;
    text-shadow: 0 0 1px #000;
    position: fixed;
    top: -10%;
    z-index: 9999;
    user-select: none;
    cursor: default;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
  }

  .snowflake img {
    height: 40px;
    display: block;
  }

  .snowflake:nth-of-type(0) {
    left: 1%;
    animation-delay: 0s, 0s;
  }
  .snowflake:nth-of-type(1) {
    left: 10%;
    animation-delay: 1s, 1s;
  }
  .snowflake:nth-of-type(2) {
    left: 20%;
    animation-delay: 6s, 0.5s;
  }
  .snowflake:nth-of-type(3) {
    left: 30%;
    animation-delay: 4s, 2s;
  }
  .snowflake:nth-of-type(4) {
    left: 40%;
    animation-delay: 2s, 2s;
  }
  .snowflake:nth-of-type(5) {
    left: 50%;
    animation-delay: 8s, 3s;
  }
  .snowflake:nth-of-type(6) {
    left: 60%;
    animation-delay: 6s, 2s;
  }
  .snowflake:nth-of-type(7) {
    left: 70%;
    animation-delay: 2s, 1s;
  }
  .snowflake:nth-of-type(8) {
    left: 80%;
    animation-delay: 1s, 0s;
  }
  .snowflake:nth-of-type(9) {
    left: 90%;
    animation-delay: 3s, 1s;
  }

  @keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes snowflakes-shake {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(80px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  background: var(--background-image);
  background-size: var(--background-size, cover);
  background-position: var(--background-position, center);
  background-repeat: var(--background-repeat, no-repeat);
  background-attachment: var(--background-attachment, fixed);
  background-blend-mode: var(--background-blend-mode, normal);
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    z-index: -1;
  }
`;

// Global theme styles
const GlobalThemeStyles = createGlobalStyle`
  /* Apply the theme variables */
  :root {
    ${props => {
      // Extract the theme name from props and apply the appropriate styles
      const themeName = props.theme && typeof props.theme === 'object' && 'themeName' in props.theme 
        ? props.theme.themeName as ThemeName 
        : 'default';
      return getThemeStyles(themeName);
    }}
  }

  /* Base styles */
  body {
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
    font-family: var(--font-family);
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar-thumb-hover);
  }

  /* Selection style */
  ::selection {
    background: var(--selection-background);
    color: var(--selection-text);
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }

  /* Dark theme specific enhancements */
  [data-theme="dark"] {
    /* Form elements in dark mode */
    input, textarea, select {
      background-color: var(--input-background);
      border-color: var(--input-border);
      color: var(--input-text);
    }

    /* Card hover effects */
    .card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .card:hover {
      transform: translateY(-2px);
      box-shadow: var(--card-hover-shadow);
      background-color: var(--card-hover-background);
    }

    /* Tables in dark mode */
    th {
      background-color: var(--table-header-background);
    }
    
    tr:nth-child(even) {
      background-color: var(--table-row-even);
    }
    
    tr:nth-child(odd) {
      background-color: var(--table-row-odd);
    }

    /* Question cards with gradient */
    .question-card {
      background-image: var(--question-card-gradient);
      background-size: 200%;
      animation: gradientShift 15s ease infinite;
    }

    /* Category headers with gradient */
    .category-header {
      background-image: var(--category-header-gradient);
    }

    /* Button styles */
    button:not([disabled]) {
      background-image: var(--button-gradient);
      background-size: 200%;
      transition: background-position 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    button:not([disabled]):hover {
      background-position: right center;
      transform: translateY(-1px);
      box-shadow: var(--button-hover-shadow);
    }

    /* Disabled state for buttons & form elements */
    button[disabled], input[disabled], select[disabled], textarea[disabled] {
      opacity: 0.6;
      background: var(--disabled-background);
      color: var(--disabled-text);
      cursor: not-allowed;
    }

    /* Timer styles */
    .timer {
      background: var(--timer-background);
      color: var(--timer-text);
      border: 1px solid var(--timer-border);
    }

    /* Modal styles */
    .modal-content {
      background: var(--modal-background);
      border: 1px solid var(--modal-border);
      box-shadow: var(--modal-shadow);
    }

    /* Focus states for form elements */
    input:focus, textarea:focus, select:focus {
      border-color: var(--input-focus-border);
      box-shadow: 0 0 0 2px var(--input-focus-shadow);
    }
  }

  /* Animation for gradient shifts */
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { currentTheme } = useTheme();
  const [showSnowflakes, setShowSnowflakes] = useState(false);

  // Check if snowfall should be enabled based on theme settings
  useEffect(() => {
    // Read the CSS variable for snowfall
    const enableSnowfall = 
      (currentTheme === 'halloween' || currentTheme === 'retro') && 
      getComputedStyle(document.documentElement)
        .getPropertyValue('--enable-snowflakes')
        .trim() === 'true';
    
    setShowSnowflakes(enableSnowfall);
  }, [currentTheme]);
  
  return (
    <Wrapper data-theme={currentTheme}>
      <GlobalThemeStyles theme={{ themeName: currentTheme }} />
      <Container>
        {showSnowflakes && (currentTheme === 'halloween' || currentTheme === 'retro') && (
          <SnowflakesContainer theme={currentTheme} />
        )}
        {children}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default ThemeWrapper; 