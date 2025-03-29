import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      name: 'default',
      icon: '☀️',
      label: 'Light',
      description: 'Clean and professional'
    },
    {
      name: 'dark',
      icon: '🌙',
      label: 'Dark',
      description: 'Modern and sleek'
    },
    {
      name: 'fun',
      icon: '🎨',
      label: 'Fun',
      description: 'Vibrant and playful'
    },
    {
      name: 'retro',
      icon: '👾',
      label: 'Retro',
      description: 'Pixelated nostalgia'
    },
    {
      name: 'halloween',
      icon: '🎃',
      label: 'Halloween',
      description: 'Spooky and dark'
    }
  ];

  const currentThemeData = themes.find(t => t.name === currentTheme) || themes[0];

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeSelect = (themeName: string) => {
    setTheme(themeName as any);
    setIsOpen(false);
  };

  return (
    <Container>
      <CurrentThemeButton 
        onClick={handleToggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Current theme: ${currentThemeData.label}. Click to change.`}
        data-theme={currentTheme}
      >
        <ThemeIcon>{currentThemeData.icon}</ThemeIcon>
        <ThemeLabel>{currentThemeData.label}</ThemeLabel>
      </CurrentThemeButton>
      
      <AnimatePresence>
        {isOpen && (
          <ThemeMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {themes.map((theme) => (
              <ThemeOption
                key={theme.name}
                onClick={() => handleThemeSelect(theme.name)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                isActive={currentTheme === theme.name}
                data-theme={theme.name}
              >
                <ThemeOptionIcon>{theme.icon}</ThemeOptionIcon>
                <ThemeDetails>
                  <ThemeOptionLabel>{theme.label}</ThemeOptionLabel>
                  <ThemeDescription>{theme.description}</ThemeDescription>
                </ThemeDetails>
                {currentTheme === theme.name && <ActiveIndicator />}
              </ThemeOption>
            ))}
          </ThemeMenu>
        )}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 100;
`;

const CurrentThemeButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--card-background, rgba(255, 255, 255, 0.95));
  border: 1px solid var(--border-color, rgba(58, 134, 255, 0.2));
  color: var(--text-color, #1e293b);
  border-radius: var(--border-radius, 8px);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  box-shadow: var(--card-shadow, 0 2px 10px rgba(0, 0, 0, 0.1));
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: var(--card-shadow, 0 4px 12px rgba(0, 0, 0, 0.15));
  }
`;

const ThemeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const ThemeLabel = styled.span`
  display: block;
`;

const ThemeMenu = styled(motion.div)`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--card-background, white);
  border-radius: var(--border-radius, 8px);
  overflow: hidden;
  width: 200px;
  box-shadow: var(--menu-shadow, 0 4px 20px rgba(0, 0, 0, 0.2));
  border: var(--menu-border, 1px solid rgba(58, 134, 255, 0.1));
`;

interface ThemeOptionProps {
  isActive: boolean;
}

const ThemeOption = styled(motion.button)<ThemeOptionProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  border: none;
  background: ${props => props.isActive ? 'var(--active-item-background, rgba(58, 134, 255, 0.1))' : 'transparent'};
  color: var(--text-color, #1e293b);
  cursor: pointer;
  position: relative;
  gap: 12px;
  
  &:hover {
    background: var(--active-item-background, rgba(58, 134, 255, 0.05));
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--divider-color, rgba(58, 134, 255, 0.05));
  }
`;

const ThemeOptionIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: var(--primary-color, #3a86ff);
  color: white;
  border-radius: 50%;
  font-size: 14px;
`;

const ThemeDetails = styled.div`
  flex: 1;
`;

const ThemeOptionLabel = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const ThemeDescription = styled.div`
  font-size: 12px;
  opacity: 0.7;
  margin-top: 2px;
`;

const ActiveIndicator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--primary-color, #3a86ff);
`;

export default ThemeSwitcher; 