import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Team, Player, AbilityType } from '../../types/game.types';
import { BidirectionalText } from '../../utils/textUtils';
import { useSoundEffects } from '../../hooks/useSoundEffects';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const TeamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const TeamTitle = styled.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 24px;
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const AvatarContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  margin-right: 16px;
  color: white;
`;

const RefreshButton = styled(motion.button)`
  background-color: #dfe6e9;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #7f8c8d;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  font-size: 16px;
`;

const PlayersContainer = styled.div`
  margin-top: 16px;
`;

const PlayerInputGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const PlayerInput = styled(Input)`
  flex: 1;
`;

const RemoveButton = styled(motion.button)`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
`;

const AddPlayerButton = styled(motion.button)`
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface TeamSetupProps {
  teamNumber: number;
  onChange: (team: Partial<Team>) => void;
  teamData: Partial<Team>;
}

// List of emojis for avatar selection
const avatarEmojis = ['😎', '🤠', '🦁', '🐯', '🦊', '🐼', '🐻', '🦄', '🐬', '🐢', '🦉', '🐶', '🐱'];

const TeamSetup: React.FC<TeamSetupProps> = ({ teamNumber, onChange, teamData }) => {
  const { playSound } = useSoundEffects();
  
  // Generate abilities for a new team
  const generateDefaultAbilities = (): Record<AbilityType, { type: AbilityType, used: boolean }> => {
    return {
      chatgpt: { type: 'chatgpt', used: false },
      double: { type: 'double', used: false },
      google: { type: 'google', used: false },
      dismiss: { type: 'dismiss', used: false },
      electric: { type: 'electric', used: false },
    };
  };
  
  // Get a random avatar emoji
  const getRandomAvatar = (): string => {
    return avatarEmojis[Math.floor(Math.random() * avatarEmojis.length)];
  };
  
  // Initialize team if not already done
  if (!teamData.avatar) {
    onChange({
      avatar: getRandomAvatar(),
      name: '',
      players: [{ id: '1', name: '' }, { id: '2', name: '' }],
      abilities: generateDefaultAbilities(),
      score: 0,
      pointsMultiplier: 1,
    });
  }
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...teamData, name: e.target.value });
  };
  
  const handlePlayerNameChange = (id: string, name: string) => {
    const updatedPlayers = teamData.players?.map(player => 
      player.id === id ? { ...player, name } : player
    );
    onChange({ ...teamData, players: updatedPlayers });
  };
  
  const handleAddPlayer = () => {
    playSound('button-click');
    const newId = String(Date.now());
    const updatedPlayers = [...(teamData.players || []), { id: newId, name: '' }];
    onChange({ ...teamData, players: updatedPlayers });
  };
  
  const handleRemovePlayer = (id: string) => {
    playSound('button-click');
    const updatedPlayers = teamData.players?.filter(player => player.id !== id);
    onChange({ ...teamData, players: updatedPlayers });
  };
  
  const handleRefreshAvatar = () => {
    playSound('button-click');
    onChange({ ...teamData, avatar: getRandomAvatar() });
  };
  
  return (
    <Container>
      <TeamHeader>
        <TeamTitle>الفريق {teamNumber}</TeamTitle>
      </TeamHeader>
      
      <AvatarSection>
        <AvatarContainer>{teamData.avatar}</AvatarContainer>
        <RefreshButton 
          onClick={handleRefreshAvatar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🔄
        </RefreshButton>
      </AvatarSection>
      
      <InputGroup>
        <Label>اسم الفريق</Label>
        <Input 
          type="text" 
          value={teamData.name || ''} 
          onChange={handleNameChange} 
          placeholder="أدخل اسم الفريق"
          dir="auto"
        />
      </InputGroup>
      
      <PlayersContainer>
        <Label>اللاعبون (٢-٨)</Label>
        <AnimatePresence>
          {teamData.players?.map((player, index) => (
            <PlayerInputGroup
              key={player.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PlayerInput
                type="text"
                value={player.name}
                onChange={(e) => handlePlayerNameChange(player.id, e.target.value)}
                placeholder={`اللاعب ${index + 1}`}
                dir="auto"
              />
              
              {index >= 2 && (
                <RemoveButton
                  onClick={() => handleRemovePlayer(player.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </RemoveButton>
              )}
            </PlayerInputGroup>
          ))}
        </AnimatePresence>
        
        {teamData.players && teamData.players.length < 8 && (
          <AddPlayerButton 
            onClick={handleAddPlayer}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            + إضافة لاعب
          </AddPlayerButton>
        )}
      </PlayersContainer>
    </Container>
  );
};

export default TeamSetup; 