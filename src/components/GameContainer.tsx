import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Snowfall from 'react-snowfall';
import { RootState } from '../store';
import { GamePhase, Category, Question } from '../types/game.types';
import TeamPanel from './TeamPanel';
import GameBoard from './GameBoard';
import QuestionScreen from './QuestionScreen';
import AnswerReveal from './AnswerReveal';
import SetupScreen from './SetupScreen';
import EndGame from './EndGame';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { toggleMusic, setVolume, setGamePhase, setActiveTeamIndex, setShockedTeam } from '../store/gameSlice';
import { useAbilities } from '../hooks/useAbilities';
import QuestionManagement from './QuestionManagement';
import Legend from './effects/Legend';
import SoundControls from './common/SoundControls';
import CursorStars from './effects/CursorStars';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: #e6f7ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpattern id='pattern-waves' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Cpath d='M0,10 Q5,5 10,10 T20,10' stroke='%2366d4ff20' fill='none' /%3E%3Cpath d='M0,15 Q5,10 10,15 T20,15' stroke='%2366d4ff20' fill='none' /%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' stroke='%2366d4ff20' fill='none' /%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern-waves)' /%3E%3C/svg%3E");
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const GameContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  flex-grow: 1;
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  gap: 45px;
  margin-left: 15px;
  margin-top: 50px;
  
  @media (max-width: 1100px) {
    flex-direction: row;
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ContentContainer = styled(motion.div)`
  flex: 1;
  max-width: calc(100% - 300px);
  
  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  background: linear-gradient(135deg, #0099cc 0%, #66d4ff 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 153, 204, 0.3);
`;

const MusicButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;

const AudioControlsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const VolumeSlider = styled.input`
  position: absolute;
  top: 100%;
  left: 0;
  width: 120px;
  height: 8px;
  margin-top: 8px;
  background-color: #f1f0fe;
  border-radius: 4px;
  outline: none;
  z-index: 10;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  
  transition-delay: 0s;
  
  &:hover {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }
`;

const TeamClock = styled.div`
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ClockIcon = styled.span`
  font-size: 20px;
`;

const ClockText = styled.span`
  font-weight: bold;
`;

const TeamActiveText = styled.span`
  color: #fff;
  font-weight: bold;
`;

const EndGameButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 490px;
  
  @media (max-width: 1100px) {
    width: 100%;
    margin-top: 0;
  }
`;

const EndGameButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6464 0%, #ff5252 100%);
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 15px rgba(255, 82, 82, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 82, 82, 0.4);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const GameTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-align: center;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const GameContainer: React.FC = () => {
  const { gamePhase, teams, musicEnabled, volume, activeTeamIndex } = useSelector((state: RootState) => ({
    gamePhase: state.gamePhase,
    teams: state.teams,
    musicEnabled: state.musicEnabled,
    volume: state.volume,
    activeTeamIndex: state.activeTeamIndex,
  }));
  const dispatch = useDispatch();
  const { playSound } = useSoundEffects();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [shockedTeam, setShockedTeam] = useState<0 | 1 | null>(null);
  const { initializeElectricCooldown } = useAbilities();
  const [showSnow, setShowSnow] = useState(true);
  
  const { categories, selectedCategories } = useSelector((state: RootState) => ({
    categories: state.categories || [],
    selectedCategories: state.selectedCategories || []
  }));
  
  // Listen for electric shock ability
  useEffect(() => {
    const handleElectricShock = (event: CustomEvent) => {
      if (event.detail && (event.detail.teamIndex === 0 || event.detail.teamIndex === 1)) {
        // Don't switch the team indexes - event.detail.teamIndex is already the team to be shocked
        setShockedTeam(event.detail.teamIndex);
        
        // Reset shocked state after animation
        setTimeout(() => {
          setShockedTeam(null);
        }, 2000);
      }
    };
    
    // Set up custom event listener
    window.addEventListener('electricShock' as any, handleElectricShock as EventListener);
    
    return () => {
      window.removeEventListener('electricShock' as any, handleElectricShock as EventListener);
    };
  }, []);
  
  // Effect for initializing electric cooldown when game starts
  useEffect(() => {
    if (gamePhase === 'playing') {
      const hasInitialized = localStorage.getItem('electricInitialized');
      
      if (!hasInitialized) {
        initializeElectricCooldown();
        localStorage.setItem('electricInitialized', 'true');
      }
    }
  }, [gamePhase, initializeElectricCooldown]);
  
  // Separate effect to clear the flag when returning to setup
  useEffect(() => {
    if (gamePhase === 'setup') {
      localStorage.removeItem('electricInitialized');
    }
  }, [gamePhase]);
  
  const handleToggleMusic = () => {
    dispatch(toggleMusic());
    playSound('button-click');
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(Number(e.target.value) / 100));
  };
  
  useEffect(() => {
    // Debug logging for game phase changes
    console.log("Current game phase:", gamePhase);
    
    if (gamePhase === 'playing') {
      const displayCats = categories.filter((cat: Category) => selectedCategories.includes(cat.id));
      
      let answeredCount = 0;
      let totalCount = 0;
      
      displayCats.forEach((cat: Category) => {
        totalCount += cat.questions.length;
        answeredCount += cat.questions.filter((q: Question) => q.answered).length;
      });
      
      console.log(`Questions answered: ${answeredCount}/${totalCount}`);
      
      if (answeredCount === totalCount && totalCount > 0) {
        console.warn("All questions are already marked as answered!");
      }
    }
  }, [gamePhase, categories, selectedCategories]);
  
  if (gamePhase === 'setup') {
    return <SetupScreen />;
  }
  
  let content;
  switch (gamePhase) {
    case 'setup' as GamePhase:
      content = <SetupScreen />;
      break;
    case 'playing':
      content = <GameBoard />;
      break;
    case 'question':
      content = <QuestionScreen />;
      break;
    case 'answer':
      content = <AnswerReveal />;
      break;
    case 'end':
      content = <EndGame />;
      break;
    case 'questionManagement':
      content = <QuestionManagement />;
      break;
    default:
      content = <SetupScreen />;
  }
  
  return (
    <Container>
      <Snowfall 
        snowflakeCount={300}
        speed={[0.5, 2.0]}
        wind={[-0.5, 0.5]}
        radius={[1.0, 3.0]}
        color="rgba(255, 255, 255, 0.9)"
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: showSnow ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      />
      
      <CursorStars active={true} hideDefaultCursor={false} />
      
      <ControlsBar>
        <SoundControls />
        
        <GameTitle>Frosty Trivia ☃️</GameTitle>
        
        <MusicButton onClick={() => setShowSnow(!showSnow)}>
          {showSnow ? '❄️' : '☀️'}
        </MusicButton>
      </ControlsBar>
      
      <GameContent>
        <ContentContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={gamePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%' }}
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </ContentContainer>
        
        <TeamsContainer>
          <TeamPanel 
            team={teams[0]} 
            teamIndex={0} 
            isActive={activeTeamIndex === 0}
            isShocked={shockedTeam === 0}
          />
          
          <TeamPanel 
            team={teams[1]} 
            teamIndex={1} 
            isActive={activeTeamIndex === 1}
            isShocked={shockedTeam === 1}
          />
          
          {gamePhase === 'playing' && (
            <EndGameButtonContainer>
              <EndGameButton
                onClick={() => dispatch(setGamePhase('end'))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                إنهاء اللعبة
              </EndGameButton>
            </EndGameButtonContainer>
          )}
        </TeamsContainer>
      </GameContent>
      
      <Legend />
      
      {gamePhase === 'setup' && (
        <Snowfall 
          speed={[0.5, 1.5]} 
          wind={[-0.5, 0.5]} 
          radius={[0.5, 1.5]} 
          snowflakeCount={200}
        />
      )}
    </Container>
  );
};

export default GameContainer; 