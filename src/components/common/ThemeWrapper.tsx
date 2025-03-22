import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { getThemeStyles } from '../../styles/themeStyles';

// Global theme styles
const GlobalThemeStyles = createGlobalStyle<{ themeStyles: any, themeName: string }>`
  :root {
    ${props => props.themeStyles}
  }
  
  body {
    background: var(--background-image);
    background-size: var(--background-size, cover);
    color: var(--text-color);
    font-family: var(--font-family, var(--body-font));
    font-weight: var(--font-weight, normal);
    transition: background 0.5s ease, color 0.3s ease;
    letter-spacing: var(--letter-spacing, normal);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font-family, var(--header-font));
    font-weight: var(--font-weight, bold);
    color: var(--text-color);
    text-shadow: var(--text-shadow, none);
    transition: color 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 2px;
      background: var(--heading-underline, transparent);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: var(--heading-hover-color, var(--text-color));
      
      &::after {
        width: 100%;
      }
    }
  }
  
  h1 {
    font-family: var(--title-font-family, var(--heading-font-family));
  }
  
  .accent-text {
    font-family: var(--accent-font-family, var(--heading-font-family));
  }
  
  button {
    font-family: var(--font-family, var(--body-font));
    font-weight: var(--font-weight, normal);
    background-color: var(--button-background, var(--primary-color));
    color: var(--button-text-color, white);
    border: var(--button-border, none);
    box-shadow: var(--button-shadow, var(--card-shadow));
    transition: all var(--animation-speed, 0.3s) ease;
    position: relative;
    overflow: hidden;
    
    &:hover::after {
      content: var(--hover-content, '');
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--hover-effect, none);
      opacity: 0.1;
      pointer-events: none;
    }
  }
  
  /* Game title specific styling */
  .game-title {
    font-family: var(--title-font-family, var(--heading-font-family));
    letter-spacing: var(--letter-spacing, normal);
    text-shadow: var(--text-shadow, none);
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      50% { transform: translateX(5px); }
      75% { transform: translateX(-5px); }
      100% { transform: translateX(0); }
    }
    
    animation: var(--title-animation, none);
  }
  
  /* Additional theme-specific styles */
  .theme-card {
    background-color: var(--card-background);
    border: var(--card-border, 2px solid var(--border-color));
    box-shadow: var(--card-shadow);
    border-radius: var(--border-radius, 8px);
  }
  
  .theme-button {
    background: var(--primary-gradient, var(--button-gradient));
    color: var(--button-text-color, white);
    border: var(--button-border, none);
    box-shadow: var(--button-shadow, var(--card-shadow));
    border-radius: var(--border-radius, 30px);
  }
  
  /* Style for modal content */
  .modal-content {
    background-color: var(--card-background);
    color: var(--text-color);
    border: var(--card-border, 2px solid var(--border-color));
    box-shadow: var(--card-shadow);
    border-radius: var(--border-radius, 8px);
  }
  
  /* Style for inputs */
  input, textarea, select {
    background-color: var(--card-background);
    color: var(--text-color);
    font-weight: var(--font-weight, normal);
    border: var(--card-border, 1px solid var(--border-color));
    border-radius: var(--border-radius, 4px);
    font-family: var(--font-family, var(--body-font));
  }
  
  /* Add more theme overrides as needed */
  .btn-primary {
    background-color: var(--primary-color);
    color: var(--button-text-color);
  }
  
  .btn-secondary {
    background-color: var(--secondary-color);
    color: var(--button-text-color);
  }
  
  .btn-danger {
    background-color: var(--danger-color);
    color: var(--button-text-color);
  }
  
  .btn-success {
    background-color: var(--success-color);
    color: var(--button-text-color);
  }
  
  /* Halloween drip animation */
  @keyframes drip {
    0% { transform: scaleY(0); transform-origin: top; }
    100% { transform: scaleY(1); transform-origin: top; }
  }

  .halloween-drip {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      width: 2px;
      height: 15px;
      background: var(--primary-color);
      opacity: 0;
      transform-origin: top;
      transition: opacity 0.3s ease;
    }
    
    &:hover::before {
      opacity: 1;
      animation: drip 0.5s ease-in;
    }
  }
  
  /* Retro NES theme specific styles */
  .retro-container {
    padding: 8px;
    border: 4px solid #fff;
    border-radius: 0;
    position: relative;
  }
  
  .retro-button {
    margin: 0 6px;
  }
  
  /* Apply NES.css styling when retro theme is active */
  [data-theme="retro"] {
    .nes-btn {
      margin: 4px;
    }
    
    input, select, textarea {
      border-image-repeat: stretch;
      border-image-slice: 2;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
      border-image-width: 2;
      border-style: solid;
      padding: 6px 8px;
    }
    
    button:not(.nes-btn) {
      position: relative;
      display: inline-block;
      padding: 6px 8px;
      margin: 4px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      border-style: solid;
      border-width: 4px;
      border-image-slice: 2;
      border-image-width: 2;
      border-image-repeat: stretch;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="#92cc41" /></svg>');
      color: var(--text-color);
      background-color: var(--button-background);
      image-rendering: pixelated;
    }
    
    .nes-container {
      border-style: solid;
      border-width: 4px;
      border-color: #92cc41;
      border-image-slice: 2;
      border-image-width: 2;
      border-image-repeat: stretch;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="#92cc41" /></svg>');
      padding: 1rem 1.5rem;
      margin: 8px 0;
    }
  }

  ${({ themeName }) => themeName === 'fun' && css`
    &:root {
      --background-image: url('/fun-bg.svg');
      --background-size: cover;
      --background-position: center;
    }
    
    .card {
      background: rgba(255, 255, 255, 0.85);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.18);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .card:hover {
      transform: scale(1.02);
      box-shadow: 0 12px 32px rgba(31, 38, 135, 0.3);
    }
    
    button {
      background: linear-gradient(45deg, #5271ff, #ff5ebd);
      border-radius: 12px;
      color: white;
      font-weight: bold;
      border: none;
      transition: transform 0.2s, box-shadow 0.2s;
      animation: bounce 0.5s ease-in-out;
    }
    
    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      background: linear-gradient(45deg, #3f5bf0, #ff3aaf);
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
  `}

  ${({ themeName }) => themeName === 'halloween' && css`
    /* Team name styles */
    .team-name {
      color: var(--team-name-color, #ffffff) !important;
      font-size: var(--team-name-font-size, 1.5rem) !important;
      font-weight: var(--team-name-font-weight, 900) !important;
      text-shadow: var(--team-name-text-shadow, 2px 2px 4px rgba(0, 0, 0, 0.7)) !important;
    }

    /* Category styles */
    .category-name, .category-header {
      font-size: var(--category-font-size, 1.25rem) !important;
      text-shadow: var(--category-text-shadow, 2px 2px 3px rgba(0, 0, 0, 0.8)) !important;
      font-weight: bold !important;
      color: var(--text-color, #ff9e58) !important;
    }

    /* Abilities button styles */
    .ability-button {
      background: var(--ability-button-background, linear-gradient(135deg, #7e00fc 0%, #aa53ff 100%)) !important;
      border: var(--ability-button-border, 2px solid #aa53ff) !important;
      box-shadow: var(--ability-button-shadow, 0 4px 0 #4b0094, 0 6px 10px rgba(0, 0, 0, 0.5)) !important;
      color: var(--ability-button-color, #ffffff) !important;
      transform: none !important;
    }

    .ability-button:hover {
      transform: translateY(-2px) !important;
    }

    /* Question tile styles */
    .question-card {
      background: var(--question-tile-background, linear-gradient(135deg, #2c1b30 0%, #451c47 100%)) !important;
      border: var(--question-tile-border, 2px solid #ff6d00) !important;
      box-shadow: var(--question-tile-shadow, 0 4px 0 #000000, 0 6px 10px rgba(255, 109, 0, 0.3)) !important;
      color: var(--question-tile-color, #ff9e58) !important;
      font-size: var(--question-tile-font-size, 1.2rem) !important;
    }

    .question-card:hover {
      background: var(--question-tile-hover-background, linear-gradient(135deg, #451c47 0%, #2c1b30 100%)) !important;
      transform: translateY(-5px) !important;
    }
  `}
`;

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { currentTheme } = useTheme();
  const themeStyles = getThemeStyles(currentTheme);
  
  return (
    <>
      <GlobalThemeStyles themeStyles={themeStyles} themeName={currentTheme} />
      <div data-theme={currentTheme}>
        {children}
      </div>
    </>
  );
};

export default ThemeWrapper; 