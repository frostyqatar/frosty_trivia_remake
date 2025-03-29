import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeName } from '../../contexts/ThemeContext';

interface SnowflakesContainerProps {
  theme: ThemeName;
}

// Snowflake animation keyframes
const snowfall = keyframes`
  0% {
    transform: translateY(-10%) translateX(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateY(50%) translateX(20px) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(110%) translateX(-20px) rotate(360deg);
    opacity: 0.6;
  }
`;

export const SnowflakesContainer: React.FC<SnowflakesContainerProps> = ({ theme }) => {
  // Determine the image source based on the theme
  const imageSrc = theme === 'retro' 
    ? "/pixel-star.png" 
    : "https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif";

  // Create an array of 10 elements for the snowflakes
  const snowflakes = Array.from({ length: 10 }, (_, index) => (
    <Snowflake key={index} delay={index * 2} currentTheme={theme}>
      <img src={imageSrc} alt="" />
    </Snowflake>
  ));

  return <Container>{snowflakes}</Container>;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 100;
  overflow: hidden;
`;

// Define a separate interface with proper typing for the styled component
interface SnowflakeStyledProps {
  delay: number;
  currentTheme: ThemeName;
}

const Snowflake = styled.div<SnowflakeStyledProps>`
  position: absolute;
  top: -10%;
  left: ${props => Math.random() * 100}%;
  animation: ${snowfall} 15s linear infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.7;
  z-index: 999;
  
  img {
    width: auto;
    height: 24px;
    ${props => props.currentTheme === 'retro' && `
      image-rendering: pixelated;
      height: 16px;
    `}
  }
`;

export default SnowflakesContainer; 