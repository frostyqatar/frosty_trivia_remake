import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RootState } from '../store';
import { startGame, setGamePhase } from '../store/gameSlice';
import { Team } from '../types/game.types';
import CategorySelector from './setup/CategorySelector';
import TeamSetup from './setup/TeamSetup';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { categories } from '../data/questions';
import { trackGameEvent } from '../services/analytics';
import FeedbackModal from './FeedbackModal';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 32px;
  font-size: 70px; /* Increased font size */
  font-weight: bold; /* Made text bold */
  color: #2c3e50; /* Added a clear color for better visibility */
`;

const Logo = styled.h1`
  font-size: 48px;
  color: #3498db;
  margin-bottom: 8px;
`;

const CreatorInfo = styled.div`
  font-size: 16px;
  color: #7f8c8d;
`;

const TeamsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StartButton = styled(motion.button)<{ disabled: boolean }>`
  background-color: ${props => props.disabled ? '#95a5a6' : '#2ecc71'};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-size: 24px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: block;
`;

const Button = styled(motion.button)`
  background-color: #8c52ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
  }
`;

const FeedbackButton = styled(motion.button)`
  background-color: #8c52ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
  &:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
  }
`;

const SetupScreen: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state: RootState) => state.selectedCategories);
  const { playSound } = useSoundEffects();
  
  const [teams, setTeams] = useState<[Partial<Team>, Partial<Team>]>([{}, {}]);
  const [isReady, setIsReady] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  
  // Check if setup is complete and game can start
  useEffect(() => {
    const [team1, team2] = teams;
    
    const teamsReady = 
      team1.name && team1.name.trim() !== '' &&
      team2.name && team2.name.trim() !== '' &&
      team1.players && team1.players.length >= 2 &&
      team2.players && team2.players.length >= 2 &&
      team1.players.every(p => p.name && p.name.trim() !== '') &&
      team2.players.every(p => p.name && p.name.trim() !== '');
    
    const categoriesReady = selectedCategories.length >= 3;
    
    setIsReady(Boolean(teamsReady && categoriesReady));
  }, [teams, selectedCategories]);
  
  const handleTeamChange = (index: 0 | 1, teamData: Partial<Team>) => {
    const newTeams = [...teams] as [Partial<Team>, Partial<Team>];
    newTeams[index] = teamData;
    setTeams(newTeams);
  };
  
  const handleStartGame = () => {
    if (!isReady) return;
    
    playSound('button-click');
    
    // Create full team objects with initial state
    const fullTeams = teams.map((team, index) => ({
      id: `team-${index + 1}`,
      name: team.name || `Team ${index + 1}`,
      avatar: team.avatar || '😎',
      score: 0,
      players: team.players || [],
      abilities: {
        chatgpt: { type: 'chatgpt', used: false },
        double: { type: 'double', used: false, active: false },
        google: { type: 'google', used: false },
        dismiss: { type: 'dismiss', used: false },
        electric: { type: 'electric', used: false, cooldown: 0, cooldownStart: 0 }
      },
      pointsMultiplier: 1,
    })) as Team[];
    
    // Make sure we're going to the playing phase
    console.log("Starting game with teams:", fullTeams);
    
    // Track the game start in analytics
    trackGameEvent.startGame();
    
    // Dispatch with the teams
    dispatch(startGame(fullTeams));
  };
  
  return (
    <Container>
      <Header>
        <Logo>Frosty Trivia ❄️</Logo>
        <CreatorInfo>برمجة: عبدالله الشاعر - QATAR</CreatorInfo>
      </Header>
      <FeedbackButton
        onClick={() => setIsFeedbackModalOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        عطنا رايك 📝
      </FeedbackButton>
      
      <FeedbackModal 
        isOpen={isFeedbackModalOpen} 
        onClose={() => setIsFeedbackModalOpen(false)} 
      />
      <Button
        onClick={() => dispatch(setGamePhase('questionManagement'))}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📝 إدارة الأسئلة
      </Button>
      <CategorySelector />
      
      <TeamsContainer>
        <TeamSetup 
          teamNumber={1} 
          onChange={(data) => handleTeamChange(0, data)} 
          teamData={teams[0]} 
        />
        <TeamSetup 
          teamNumber={2} 
          onChange={(data) => handleTeamChange(1, data)} 
          teamData={teams[1]} 
        />
      </TeamsContainer>
      
      <StartButton
        disabled={!isReady}
        onClick={handleStartGame}
        whileHover={isReady ? { scale: 1.05 } : {}}
        whileTap={isReady ? { scale: 0.95 } : {}}
      >
        ابدأ اللعبة
      </StartButton>
      
     
    </Container>
  );
};

export default SetupScreen; 