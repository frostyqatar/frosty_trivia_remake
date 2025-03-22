import { css } from 'styled-components';
import { ThemeName } from '../contexts/ThemeContext';

// Default theme styles
export const defaultTheme = css`
  --primary-color: #0099cc;
  --primary-light: #66d4ff;
  --primary-dark: #0f5e87;
  --secondary-color: #8c52ff;
  --background-color: #f0f8ff;
  --card-background: rgba(255, 255, 255, 0.9);
  --text-color: #333333;
  --border-color: rgba(102, 212, 255, 0.3);
  --header-font: 'Poppins', sans-serif;
  --body-font: 'Roboto', sans-serif;
  --card-shadow: 0 6px 20px rgba(0, 153, 204, 0.15);
  --button-gradient: linear-gradient(135deg, #0099cc, #66d4ff);
  --background-image: radial-gradient(circle, #f0f8ff 0%, #e6f2ff 100%);
`;

// Fun theme styles (previously Nintendo)
export const funTheme = css`
  --primary-color: #0593ff;
  --primary-light: #7a8cfd;
  --primary-dark: #0077cc;
  --secondary-color: #ff7c7c;
  --background-color: #f5faff;
  --card-background: rgba(255, 255, 255, 0.85);
  --text-color: #333333;
  --border-color: rgba(5, 147, 255, 0.3);
  --header-font: 'Poppins', sans-serif;
  --body-font: 'Roboto', sans-serif;
  --card-shadow: 0 6px 20px rgba(5, 147, 255, 0.15);
  --button-gradient: linear-gradient(135deg, #0593ff, #7a8cfd);
  --background-image: url('/fun-bg.svg');
  --background-size: cover;
  --primary-gradient: linear-gradient(135deg, #0593ff, #7a8cfd);
  --secondary-gradient: linear-gradient(135deg, #ff7c7c, #fbae3c);
  --card-text-color: #333333;
  --card-border: 2px solid rgba(5, 147, 255, 0.2);
  --border-radius: 16px;
  --button-background: #0593ff;
  --button-text-color: white;
  --button-border: none;
  --button-shadow: 0 4px 10px rgba(5, 147, 255, 0.3);
  --animation-speed: 0.3s;
  --box-shadow: 0 6px 20px rgba(5, 147, 255, 0.25);
  --letter-spacing: 0.5px;
  --text-shadow: none;
  --hover-effect: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
  --hover-content: '';
  --title-animation: bounce 3s infinite ease-in-out;
  --hover-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --heading-hover-color: #0593ff;
  --heading-underline: linear-gradient(90deg, #0593ff, #7a8cfd);
  --success-color: #4caf50;
  --danger-color: #f44336;
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

// Halloween theme styles
export const halloweenTheme = css`
  --background-color: #13151a;
  --text-color: #ff9e58;
  --primary-color: #ff6d00;
  --secondary-color: #7e00fc;
  --accent-color: #00ff66;
  --success-color: #38ef7d;
  --danger-color: #ff416c;
  --border-color: #ff6d00;
  --font-family: '"Press Start 2P", "Noto Sans Arabic", cursive, sans-serif';
  --heading-font-family: '"Creepster", cursive';
  --title-font-family: '"Nosifer", cursive';
  --accent-font-family: '"Eater", cursive';
  --background-image: url('/halloween-bg.svg');
  --background-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 20 L35 30 L30 40 L25 30 z' fill='%23ff6d0015' /%3E%3Cpath d='M10 10 L15 5 L20 10 L15 15 z' fill='%237e00fc15' /%3E%3Cpath d='M40 40 L45 35 L50 40 L45 45 z' fill='%2300ff6615' /%3E%3C/svg%3E");
  --primary-gradient: linear-gradient(135deg, #ff6d00 0%, #ff9e58 100%);
  --secondary-gradient: linear-gradient(135deg, #7e00fc 0%, #aa53ff 100%);
  --card-background: #2c1b30;
  --card-text-color: #fff0e8;
  --card-border: 2px solid #ff6d00;
  --card-shadow: 0 4px 0 #000000, 0 6px 10px rgba(255, 109, 0, 0.25);
  --border-radius: 0px;
  --button-background: #ff6d00;
  --button-text-color: #13151a;
  --button-border: 2px solid #ff9e58;
  --button-shadow: 0 4px 0 #732600, 0 6px 10px rgba(0, 0, 0, 0.5);
  --pixel-effect: pixelated;
  --animation-speed: 0.2s;
  --box-shadow: 0 4px 0 #000000, 0 6px 10px rgba(126, 0, 252, 0.3);
  --letter-spacing: 1px;
  --text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  --hover-effect: radial-gradient(circle, transparent, #ff6d00 100%);
  --hover-content: '';
  --title-animation: pulse 3s infinite ease-in-out;
  --hover-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  --heading-hover-color: #ff416c;
  --heading-underline: linear-gradient(90deg, #ff6d00, #ff416c);
  --font-weight: 700;
  
  /* New styles for team names, categories, abilities button, and question tiles */
  --team-name-color: #ffffff;
  --team-name-font-size: 2rem;
  --team-name-font-weight: 900;
  --team-name-text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  
  --category-font-size: 2rem;
  --category-text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
  
  --ability-button-background: linear-gradient(135deg, #7e00fc 0%, #aa53ff 100%);
  --ability-button-border: 2px solid #aa53ff;
  --ability-button-shadow: 0 4px 0 #4b0094, 0 6px 10px rgba(0, 0, 0, 0.5);
  --ability-button-color: #ffffff;
  
  --question-tile-background: linear-gradient(135deg, #2c1b30 0%, #451c47 100%);
  --question-tile-border: 2px solid #ff6d00;
  --question-tile-shadow: 0 4px 0 #000000, 0 6px 10px rgba(255, 109, 0, 0.3);
  --question-tile-color: #ff9e58;
  --question-tile-hover-background: linear-gradient(135deg, #451c47 0%, #2c1b30 100%);
  --question-tile-font-size: 2rem;
`;

// Retro NES theme styles
export const retroTheme = css`
  --primary-color: #209cee;
  --primary-light: #4fb3f6;
  --primary-dark: #006bb3;
  --secondary-color: #92cc41;
  --background-color: #212529;
  --card-background: #000;
  --text-color: #fff;
  --border-color: #92cc41;
  --header-font: 'Press Start 2P', cursive;
  --body-font: 'Press Start 2P', cursive;
  --card-shadow: 0 4px 0 #006bb3;
  --button-gradient: none;
  --background-image: url('/retro-bg.svg');
  --background-size: 800px auto;
  --primary-gradient: none;
  --secondary-gradient: none;
  --card-text-color: #fff;
  --card-border: 4px solid #92cc41;
  --border-radius: 0;
  --button-background: #92cc41;
  --button-text-color: #212529;
  --button-border: 4px solid #92cc41;
  --button-shadow: 0 4px 0 #4aa52e;
  --pixel-effect: pixelated;
  --animation-speed: 0.1s;
  --box-shadow: 0 4px 0 #4aa52e;
  --letter-spacing: 1px;
  --text-shadow: 2px 2px 0 #000;
  --hover-effect: none;
  --hover-content: '';
  --title-animation: none;
  --hover-transition: all 0.1s steps(2);
  --heading-hover-color: #e76e55;
  --heading-underline: #e76e55;
  --font-weight: normal;
  --success-color: #92cc41;
  --danger-color: #e76e55;
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
    case 'default':
    default:
      return defaultTheme;
  }
}; 