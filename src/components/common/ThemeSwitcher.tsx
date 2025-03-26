import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, ThemeName } from '../../contexts/ThemeContext';
import { useSoundEffects } from '../../hooks/useSoundEffects';

const SwitcherButton = styled(motion.button)`
  background: var(--card-background);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: var(--card-shadow);
  cursor: pointer;
  z-index: 100;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ThemeMenu = styled(motion.div)`
  position: absolute;
  top: 50px;
  left: 0;
  background: var(--card-background);
  border: 2px solid var(--border-color);
  border-radius: 15px;
  padding: 15px;
  width: 200px;
  box-shadow: var(--card-shadow);
  z-index: 9999;
`;

const SwitcherContainer = styled.div`
  position: relative;
  margin: 0 10px;
`;

const ThemeOption = styled(motion.div)<{ isActive: boolean }>`
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: ${props => props.isActive ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.isActive ? 'white' : 'var(--text-color)'};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.isActive ? 'var(--primary-color)' : 'rgba(0, 0, 0, 0.05)'};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ThemeIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeTitle = styled.span`
  font-weight: 500;
  flex-grow: 1;
`;

// Define theme options with their icons
const themeOptions: { name: ThemeName; icon: string; displayName: string }[] = [
  { name: 'default', icon: '🎮', displayName: 'Default' },
  { name: 'fun', icon: '🎨', displayName: 'Fun' },
  { name: 'halloween', icon: '🎃', displayName: 'Halloween' },
  { name: 'retro', icon: '👾', displayName: 'Retro' },
  { name: 'dark', icon: '🌙', displayName: 'Dark' }
];

const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();
  const { playSound } = useSoundEffects();
  
  const toggleMenu = () => {
    playSound('button-click');
    setIsOpen(!isOpen);
  };
  
  const handleThemeSelect = (themeName: ThemeName) => {
    playSound('button-click');
    setTheme(themeName);
    setIsOpen(false);
  };
  
  // Get the icon for the current theme
  const currentThemeIcon = themeOptions.find(option => option.name === currentTheme)?.icon || '🎮';
  
  return (
    <SwitcherContainer>
      <SwitcherButton
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        {currentThemeIcon}
      </SwitcherButton>
      
      <AnimatePresence>
        {isOpen && (
          <ThemeMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {themeOptions.map((option) => (
              <ThemeOption
                key={option.name}
                isActive={currentTheme === option.name}
                onClick={() => handleThemeSelect(option.name)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThemeIcon>{option.icon}</ThemeIcon>
                <ThemeTitle>{option.displayName}</ThemeTitle>
              </ThemeOption>
            ))}
          </ThemeMenu>
        )}
      </AnimatePresence>
    </SwitcherContainer>
  );
};

export default ThemeSwitcher; 