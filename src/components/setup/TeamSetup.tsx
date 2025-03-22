import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Team, AbilityType } from '../../types/game.types';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import EmojiPickerElement from '../common/EmojiPickerElement';

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 6px 20px rgba(0, 153, 204, 0.15);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(102, 212, 255, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 153, 204, 0.25);
    border-color: rgba(102, 212, 255, 0.5);
  }
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  z-index: 5;
`;

const TeamAvatarPicker = styled(EmojiPickerElement)`
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
  padding: 0;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span:first-child {
    font-size: 36px;
  }
  
  &:hover {
    transform: scale(1.1);
    background: none;
  }
  
  input {
    font-size: 36px;
    width: 80px;
    height: 60px;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Styling for emoji-picker-element */
  emoji-picker {
    height: 350px;
    --emoji-size: 1.5rem;
    --background: white;
    --border-color: #e0e0e0;
    --border-size: 1px;
    --input-border-color: #e0e0e0;
    --input-font-color: #333;
    --input-placeholder-color: #999;
    --category-font-color: #111;
  }
  
  /* Custom positioning for the emoji picker */
  div[class*='PickerWrapper'] {
    position: absolute;
    z-index: 10000;
    right: calc(100% + 10px);
    top: 0;
    
    /* Reset position when being dragged */
    &[data-dragging="true"] {
      position: fixed;
    }
  }
`;

const TeamNameInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 2px solid rgba(102, 212, 255, 0.3);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.8);
  color: #0f5e87;
  transition: all 0.2s ease;
  max-width: 200px;
  height: 36px;
  text-align: center;
  direction: rtl; /* For proper Arabic text display */
  
  &:focus {
    border-color: #0099cc;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 153, 204, 0.2);
  }
`;

const RefreshButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 8px;
  color: #0099cc;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  
  &:hover {
    color: #66d4ff;
  }
`;

interface TeamSetupProps {
  teamNumber: number;
  onChange: (team: Partial<Team>) => void;
  teamData: Partial<Team>;
}

// List of emoji options for team avatars
const avatarOptions = [
  '😎', '🦊', '🐱', '🐶', '🦁', '🐯', '🐺', '🦝', '🐮', '😏',
  '🐸', '🐵', '🐔', '🐧', '🐢', '🦄', '🐲', '👽', '🤖', '👻',
  '🦉', '🦇', '🐙', '🦈', '🐬', '🦚', '🦜', '🦖', '🐘', '🦓',
  '🦒', '🦛', '🐼', '🐨', '🦔', '🦡', '🐰', '🐻', '🐹', '🐝',
  '🦋', '🐌', '🐞', '🦂', '🦕', '🐊', '🐅', '🦍', '🦧', '🦮'
];

// Function to generate default abilities
const generateDefaultAbilities = (): Record<AbilityType, { type: AbilityType; used: boolean }> => {
  return {
    chatgpt: { type: 'chatgpt', used: false },
    double: { type: 'double', used: false },
    google: { type: 'google', used: false },
    dismiss: { type: 'dismiss', used: false },
    electric: { type: 'electric', used: false }
  };
};

// Random avatar generator
const getRandomAvatar = (): string => {
  const randomIndex = Math.floor(Math.random() * avatarOptions.length);
  return avatarOptions[randomIndex];
};

export const TeamSetup: React.FC<TeamSetupProps> = ({ teamNumber, onChange, teamData }) => {
  const { playSound } = useSoundEffects();
  
  // Initialize team if not already set
  useEffect(() => {
    if (!teamData.name && !teamData.avatar) {
      onChange({
        name: `Team ${teamNumber}`,
        avatar: getRandomAvatar(),
        abilities: generateDefaultAbilities(),
      });
    }
  }, [teamData, teamNumber, onChange]);
  
  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...teamData,
      name: e.target.value
    });
  };
  
  const handleRefreshAvatar = () => {
    playSound('button-click');
    onChange({
      ...teamData,
      avatar: getRandomAvatar()
    });
  };
  
  return (
    <Container>
      <TeamHeader>
        <TeamAvatarPicker
          onEmojiSelected={(emoji) => {
            playSound('button-click');
            onChange({
              ...teamData,
              avatar: emoji
            });
          }}
          currentEmoji={teamData.avatar || '😎'}
          label=""
          buttonStyle={{ background: 'none' }}
        />
        <TeamNameInput
          value={teamData.name || ''}
          onChange={handleTeamNameChange}
          placeholder={`Team ${teamNumber} Name`}
        />
        <RefreshButton
          onClick={handleRefreshAvatar}
          whileHover={{ rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          🔄
        </RefreshButton>
      </TeamHeader>
    </Container>
  );
};

export default TeamSetup; 