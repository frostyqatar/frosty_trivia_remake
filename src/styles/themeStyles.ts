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
  --primary-color: #8b5cf6;
  --primary-light: #a78bfa;
  --primary-dark: #7c3aed;
  --secondary-color: #ec4899;
  --background-color: #121212;
  --card-background: #1e1e1e;
  --text-color: #f3f4f6;
  --border-color: #2a2a2a;
  --header-font: 'Inter', 'Poppins', sans-serif;
  --body-font: 'Inter', 'Roboto', sans-serif;
  --card-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  --button-gradient: linear-gradient(135deg, #8b5cf6, #ec4899);
  --background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23121212'/%3E%3Cstop offset='1' stop-color='%23a78bfa' stop-opacity='0.05'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.03'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  --background-size: cover;
  --background-position: center;
  --border-radius: 8px;
  --success-color: #10b981;
  --danger-color: #ef4444;
  --primary-gradient: linear-gradient(135deg, #8b5cf6, #a78bfa);
  --secondary-gradient: linear-gradient(135deg, #ec4899, #f472b6);
  --card-text-color: #f3f4f6;
  --card-border: 1px solid #2a2a2a;
  --button-background: #8b5cf6;
  --button-text-color: white;
  --button-border: none;
  --button-shadow: 0 4px 10px rgba(139, 92, 246, 0.3);
  --animation-speed: 0.3s;
  --box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  --letter-spacing: 0.5px;
  --text-shadow: none;
  --hover-effect: linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent);
  --hover-content: '';
  --title-animation: none;
  --hover-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --heading-hover-color: #a78bfa;
  --heading-underline: linear-gradient(90deg, #8b5cf6, #ec4899);
  
  --card-hover-background: #252525;
  --input-background: #2a2a2a;
  --input-border: 1px solid #3a3a3a;
  --input-text: #f3f4f6;
  --input-placeholder: #9ca3af;
  --scrollbar-track: #1e1e1e;
  --scrollbar-thumb: #3a3a3a;
  --scrollbar-thumb-hover: #4a4a4a;
  --tooltip-background: #2d2d2d;
  --tooltip-text: #f3f4f6;
  --menu-background: #1e1e1e;
  --menu-border: 1px solid #2a2a2a;
  --menu-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  --divider-color: #2a2a2a;
  --active-item-background: rgba(139, 92, 246, 0.15);
  --modal-backdrop: rgba(0, 0, 0, 0.7);
  --table-header-background: #252525;
  --table-row-hover: #282828;
  --code-background: #2d2d2d;
  --focus-ring: 0 0 0 2px rgba(139, 92, 246, 0.5);
  --disabled-opacity: 0.6;
  --disabled-background: #2a2a2a;
  --disabled-text: #6b7280;
  --selection-background: rgba(139, 92, 246, 0.4);
  --selection-text: #ffffff;
  --skeleton-base: #252525;
  --skeleton-highlight: #303030;
  
  --question-card-gradient: linear-gradient(145deg, #212121, #262626);
  --answered-question-overlay: rgba(0, 0, 0, 0.7);
  --category-header-gradient: linear-gradient(90deg, #8b5cf6, #ec4899);
  --category-header-text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  --team-score-background: linear-gradient(145deg, #1e1e1e, #252525);
  --team-score-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  --timer-background: #252525;
  --timer-border: 2px solid rgba(139, 92, 246, 0.5);
  --timer-shadow: 0 0 8px rgba(139, 92, 246, 0.3);
  --correct-answer-glow: 0 0 15px rgba(16, 185, 129, 0.5);
  --wrong-answer-glow: 0 0 15px rgba(239, 68, 68, 0.5);
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