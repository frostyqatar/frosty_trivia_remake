import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { getThemeStyles } from '../../styles/themeStyles';

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
const GlobalThemeStyles = createGlobalStyle<{ themeStyles: any, themeName: string }>`
  :root {
    ${props => props.themeStyles}
  }
  
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    overflow-x: hidden;
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
  
  /* Lalezar font */
  .lalezar-regular {
    font-family: "Lalezar", system-ui;
    font-weight: 400;
    font-style: normal;
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
    
    /* Answered question tiles styling */
    .question-card[data-answered="true"] {
      background: #000000 !important;
      color: rgba(255, 255, 255, 0.7) !important;
      border: 2px solid rgba(255, 255, 255, 0.1) !important;
    }

    /* Used abilities styling */
    .ability-button[disabled] {
      background: #f44336 !important;
      color: white !important;
      opacity: 0.9 !important;
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
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
      font-size: var(--team-name-font-size, 2.1rem) !important;
      font-weight: var(--team-name-font-weight, 900) !important;
      text-shadow: var(--team-name-text-shadow, 2px 2px 4px rgba(0, 0, 0, 0.7)) !important;
    }

    /* Category styles */
    .category-name, .category-header {
      font-size: var(--category-font-size, 2.1rem) !important;
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

    /* Used abilities styling */
    .ability-button[disabled] {
      background: #f44336 !important;
      color: white !important;
      opacity: 0.9 !important;
      border: 2px solid rgba(255, 255, 255, 0.2) !important;
      box-shadow: 0 4px 0 #8b0000, 0 6px 10px rgba(0, 0, 0, 0.5) !important;
    }

    /* Question tile styles */
    .question-card {
      background: var(--question-tile-background, linear-gradient(135deg, #2c1b30 0%, #451c47 100%)) !important;
      border: var(--question-tile-border, 1px solid #ff6d00) !important;
      box-shadow: var(--question-tile-shadow, 0 4px 0 #000000, 0 6px 10px rgba(255, 109, 0, 0.3)) !important;
      color: var(--question-tile-color, #ff9e58) !important;
      font-size: var(--question-tile-font-size, 1.85rem) !important;
      font-family: "Lalezar", system-ui !important;
      font-weight: 800 !important;
    }

    .question-card:hover {
      background: var(--question-tile-hover-background, linear-gradient(135deg, #451c47 0%, #2c1b30 100%)) !important;
      transform: translateY(-5px) !important;
    }

    /* Answered question tiles styling */
    .question-card[data-answered="true"] {
      background: #000000 !important;
      color: rgba(255, 255, 255, 0.5) !important;
      border: 2px solid rgba(255, 109, 0, 0.3) !important;
      box-shadow: 0 2px 0 #000000, 0 3px 5px rgba(0, 0, 0, 0.3) !important;
    }
    
    ${snowflakesContainer}
  `}
  
  ${({ themeName }) => themeName === 'retro' && css`
    /* Font settings */
    body, button, input, select, textarea {
      font-family: "Lalezar", system-ui;
      font-weight: 400;
      letter-spacing: 1px;
    }
    
    /* Game title */
    .game-title {
      font-family: "Lalezar", system-ui;
      font-size: 3rem;
      color: #f8d800;
      text-shadow: 4px 4px 0 #ff004d;
      animation: pulse 2s infinite;
    }
    
    /* Team name styles */
    .team-name {
      color: #29adff !important;
      font-size: 2.1rem !important;
      font-weight: 400 !important;
      text-shadow: 3px 3px 0 #ff004d !important;
      font-family: "Lalezar", system-ui !important;
    }

    /* Category styles */
    .category-name, .category-header {
      font-size: 2.1rem !important;
      text-shadow: 2px 2px 0 #ff004d !important;
      font-weight: 400 !important;
      color: #f8d800 !important;
      font-family: "Lalezar", system-ui !important;
    }
    
    /* Question tile styles */
    .question-card {
      background: #1d2b53 !important;
      border: 4px solid #ff004d !important;
      box-shadow: 4px 4px 0 #000000 !important;
      color: #f8d800 !important;
      font-size: 1.9rem !important;
      font-family: "Lalezar", system-ui !important;
      image-rendering: pixelated;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .question-card:hover {
      transform: translateY(-5px) !important;
      box-shadow: 6px 6px 0 #000000 !important;
    }

    /* Answered question tiles styling */
    .question-card[data-answered="true"] {
      background: #000000 !important;
      color: rgba(255, 255, 255, 0.7) !important;
      border-color: #666666 !important;
      image-rendering: pixelated;
      box-shadow: 2px 2px 0 #333333 !important;
    }
    
    /* Abilities button styles */
    .ability-button {
      background: #7e2553 !important;
      border: 4px solid #ff77a8 !important;
      box-shadow: 4px 4px 0 #000000 !important;
      color: #ffffff !important;
      font-family: "Lalezar", system-ui !important;
      font-size: 1.2rem !important;
      image-rendering: pixelated;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .ability-button:hover {
      transform: translateY(-3px) !important;
      box-shadow: 6px 6px 0 #000000 !important;
    }

    /* Used abilities styling */
    .ability-button[disabled] {
      background: #83769c !important;
      color: #ffffff !important;
      border: 4px solid #5f574e !important;
      box-shadow: 2px 2px 0 #000000 !important;
      opacity: 0.8 !important;
      image-rendering: pixelated;
    }
    
    /* Modal content */
    .modal-content {
      background: #1d2b53 !important;
      border: 4px solid #ff004d !important;
      box-shadow: 8px 8px 0 #000000 !important;
      color: #fff1e8 !important;
      font-family: "Lalezar", system-ui !important;
    }
    
    /* Buttons */
    button {
      background: #00e436 !important;
      color: #fff !important;
      border: 4px solid #008751 !important;
      box-shadow: 4px 4px 0 #000000 !important;
      font-family: "Lalezar", system-ui !important;
      font-size: 1.2rem !important;
      padding: 8px 16px !important;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    button:hover {
      transform: translateY(-3px) !important;
      box-shadow: 6px 6px 0 #000000 !important;
    }
    
    /* Inputs */
    input, select, textarea {
      background: #c2c3c7 !important;
      color: #000000 !important;
      border: 4px solid #5f574e !important;
      box-shadow: 4px 4px 0 #000000 !important;
      font-family: "Lalezar", system-ui !important;
      padding: 8px !important;
    }
    
    /* Card styling */
    .theme-card, .card {
      background: #1d2b53 !important;
      border: 4px solid #ff004d !important;
      box-shadow: 6px 6px 0 #000000 !important;
      color: #fff1e8 !important;
      padding: 16px !important;
    }
    
    /* Animation for game elements */
    @keyframes pixel-pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    /* Pixelated background effect */
    body, .container {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVQYlWNgYGD4z4AGGBkZSVIAAM9TA99mU+9GAAAAAElFTkSuQmCC') !important;
      background-repeat: repeat !important;
      background-size: 8px 8px !important;
      background-color: #1d2b53 !important;
    }
    
    /* Special effects for retro theme */
    .retro-effect {
      position: relative;
      overflow: hidden;
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.3);
        animation: scan-line 4s linear infinite;
      }
    }
    
    @keyframes scan-line {
      0% { top: -10%; }
      100% { top: 100%; }
    }
    
    /* Pixelated icons */
    .retro-icon {
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
    }
    
    /* Floating pixel effect */
    ${snowflakesContainer}
    
    .snowflake img {
      image-rendering: pixelated;
      height: 16px;
    }
  `}
`;

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { currentTheme } = useTheme();
  const themeStyles = getThemeStyles(currentTheme);
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
    <>
      <GlobalThemeStyles themeStyles={themeStyles} themeName={currentTheme} />
      <Container>
        {showSnowflakes && (currentTheme === 'halloween' || currentTheme === 'retro') && (
          <div className="snowflakes">
            <div className="snowflake">
              <img src={currentTheme === 'retro' ? "/pixel-star.png" : "https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"} /> 
            </div>
            <div className="snowflake">
              <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" /> 
            </div>
            <div className="snowflake">
              <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" /> 
            </div>
            <div className="snowflake">
              <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" /> 
            </div>
            <div className="snowflake">
              <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" /> 
            </div>
            <div className="snowflake">
              <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" /> 
            </div>
            <div className="snowflake">
              <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" /> 
            </div>
            <div className="snowflake">
              <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" /> 
            </div>
            <div className="snowflake">
              <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" /> 
            </div>
            <div className="snowflake">
              <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" /> 
            </div>
          </div>
        )}
        {children}
      </Container>
    </>
  );
};

export default ThemeWrapper; 