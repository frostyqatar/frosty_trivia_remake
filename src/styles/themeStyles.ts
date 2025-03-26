import { css } from 'styled-components';
import { ThemeName } from '../contexts/ThemeContext';

// Default theme - Modern, Professional
export const defaultTheme = css`
  --primary-color: #3a86ff;
  --primary-light: #83b7ff;
  --primary-dark: #0057e7;
  --secondary-color: #8338ec;
  --background-color: #f8fafc;
  --card-background: rgba(255, 255, 255, 0.95);
  --text-color: #1e293b;
  --border-color: rgba(58, 134, 255, 0.2);
  --header-font: 'Inter', 'Poppins', sans-serif;
  --body-font: 'Inter', 'Roboto', sans-serif;
  --card-shadow: 0 10px 25px -5px rgba(58, 134, 255, 0.1);
  --button-gradient: linear-gradient(135deg, #3a86ff, #0057e7);
  --background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233a86ff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  --border-radius: 8px;
  --success-color: #22c55e;
  --danger-color: #ef4444;
`;

// Fun theme - Vibrant, Playful
export const funTheme = css`
  --primary-color: #00bbf9;
  --primary-light: #72efdd;
  --primary-dark: #0096c7;
  --secondary-color: #ff9f1c;
  --background-color: #fdfffc;
  --card-background: rgba(255, 255, 255, 0.9);
  --text-color: #2b2d42;
  --border-color: rgba(0, 187, 249, 0.2);
  --header-font: 'Quicksand', 'Poppins', sans-serif;
  --body-font: 'Quicksand', 'Roboto', sans-serif;
  --card-shadow: 0 8px 20px rgba(0, 187, 249, 0.15);
  --button-gradient: linear-gradient(135deg, #00bbf9, #72efdd);
  --background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bbf9' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  --background-size: 250px;
  --primary-gradient: linear-gradient(135deg, #00bbf9, #72efdd);
  --secondary-gradient: linear-gradient(135deg, #ff9f1c, #ffbf69);
  --card-text-color: #2b2d42;
  --card-border: 2px solid rgba(0, 187, 249, 0.1);
  --border-radius: 16px;
  --button-background: #00bbf9;
  --button-text-color: white;
  --button-border: none;
  --button-shadow: 0 4px 10px rgba(0, 187, 249, 0.3);
  --animation-speed: 0.3s;
  --box-shadow: 0 6px 20px rgba(0, 187, 249, 0.2);
  --letter-spacing: 0.5px;
  --text-shadow: none;
  --hover-effect: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
  --hover-content: '';
  --title-animation: bounce 3s infinite ease-in-out;
  --hover-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --heading-hover-color: #00bbf9;
  --heading-underline: linear-gradient(90deg, #00bbf9, #72efdd);
  --success-color: #06d6a0;
  --danger-color: #ef476f;
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

// Halloween theme - Spooky, Playful
export const halloweenTheme = css`
  --background-color: #13151a;
  --text-color: #ff9e58;
  --primary-color: #ff6d00;
  --secondary-color: #7e00fc;
  --accent-color: #00ff66;
  --success-color: #38ef7d;
  --danger-color: #ff416c;
  --card-background: rgba(31, 31, 35, 0.85);
  --border-color: rgba(255, 109, 0, 0.5);
  --box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  --button-text-color: #ffffff;
  --primary-gradient: linear-gradient(135deg, #ff6d00 0%, #ff9e58 100%);
  --secondary-gradient: linear-gradient(135deg, #7e00fc 0%, #9b51e0 100%);
  --card-border: 2px solid rgba(255, 109, 0, 0.18);
  --font-family: 'Eater', cursive;
  --background-image: url('/halloweenbg.webp');
  --background-size: cover;
  --background-position: center;
  --background-repeat: no-repeat;
  --background-attachment: fixed;
  --background-blend-mode: multiply;
  --enable-bat-snowfall: true;
`;

// Retro NES theme - Pixelated, Nostalgic
export const retroTheme = css`
  --primary-color: #ff0044;
  --primary-light: #ff6b6b;
  --primary-dark: #c80035;
  --secondary-color: #ffd166;
  --background-color: #0d2b45;
  --card-background: #203c56;
  --text-color:rgb(253, 253, 253);
  --border-color: #ff0044;
  --header-font: 'Press Start 2P', cursive;
  --body-font: 'Press Start 2P', cursive;
  --card-shadow: 0 4px 0 #000;
  --button-gradient: none;
  --background-image: url('/retrobg.webp');
  --background-size: cover;
  --background-position: center;
  --primary-gradient: none;
  --secondary-gradient: none;
  --card-text-color: #eef7ff;
  --card-border: 4px solid #ff0044;
  --border-radius: 0;
  --button-background: #ffd166;
  --button-text-color:rgb(254, 255, 255);
  --button-border: 4px solid #ffd166;
  --button-shadow: 0 4px 0 #c79a31;
  --pixel-effect: pixelated;
  --animation-speed: 0.1s;
  --box-shadow: 0 4px 0 #000;
  --letter-spacing: 1px;
  --text-shadow: 2px 2px 0 #000;
  --hover-effect: none;
  --hover-content: '';
  --title-animation: blink 1s steps(2) infinite;
  --hover-transition: all 0.1s steps(2);
  --heading-hover-color: #ffd166;
  --heading-underline: #ffd166;
  --font-weight: normal;
  --success-color: #06d6a0;
  --danger-color: #ff0044;
  --team-name-color: #ffffff;
 
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

// Dark theme - Modern, Sleek
export const darkTheme = css`
--team-name-color: #ffffff;
  --primary-color: var(--clr-primary-a0, #6a59f4);
  --primary-light: var(--clr-primary-a20, #927cf8);
  --primary-dark: var(--clr-primary-a0, #6a59f4);
  --secondary-color: var(--clr-primary-a30, #a48ef9);
  --background-color: var(--clr-surface-a0, #121212);
  --card-background: var(--clr-surface-a10, #282828);
  --text-color: var(--clr-light-a0, #ffffff);
  --border-color: var(--clr-surface-a20, #3f3f3f);
  --header-font: 'Inter', 'Poppins', sans-serif;
  --body-font: 'Inter', 'Roboto', sans-serif;
  --card-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  --button-gradient: linear-gradient(135deg, var(--clr-primary-a0, #6a59f4), var(--clr-primary-a20, #927cf8));
  --background-image: none;
  --border-radius: 8px;
  --success-color: #22c55e;
  --danger-color: #ef4444;
  --primary-gradient: linear-gradient(135deg, var(--clr-primary-a0, #6a59f4), var(--clr-primary-a20, #927cf8));
  --secondary-gradient: linear-gradient(135deg, var(--clr-primary-a30, #a48ef9), var(--clr-primary-a40, #b5a0fb));
  --card-text-color: var(--clr-light-a0, #ffffff);
  --card-border: 1px solid var(--clr-surface-a20, #3f3f3f);
  --button-background: var(--clr-primary-a0, #6a59f4);
  --button-text-color: var(--clr-light-a0, #ffffff);
  --button-border: none;
  --button-shadow: 0 4px 10px rgba(106, 89, 244, 0.3);
  --animation-speed: 0.3s;
  --box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  --letter-spacing: 0.5px;
  --text-shadow: none;
  --hover-effect: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
  --hover-content: '';
  --title-animation: none;
  --hover-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --heading-hover-color: var(--clr-primary-a20, #927cf8);
  --heading-underline: linear-gradient(90deg, var(--clr-primary-a0, #6a59f4), var(--clr-primary-a20, #927cf8));
`;

// Get theme styles based on theme name
export const getThemeStyles = (themeName: ThemeName) => {
  switch (themeName) {
    case 'halloween':
      return halloweenTheme;
    case 'fun':
      return funTheme;
    case 'retro':
      return retroTheme;
    case 'dark':
      return darkTheme;
    case 'default':
    default:
      return defaultTheme;
  }
};