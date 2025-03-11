import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Snowfall from 'react-snowfall';
import { RootState } from '../store';
import { GamePhase } from '../types/game.types';
import TeamPanel from './TeamPanel';
import GameBoard from './GameBoard';
import QuestionScreen from './QuestionScreen';
import AnswerReveal from './AnswerReveal';
import SetupScreen from './SetupScreen';
import EndGame from './EndGame';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { toggleMusic, setVolume, setGamePhase } from '../store/gameSlice';
import { useAbilities } from '../hooks/useAbilities';
import QuestionManagement from './QuestionManagement';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: #f2edf9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const TeamsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: #8c52ff;
  color: white;
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
      {showSnow && (
        <Snowfall 
          snowflakeCount={150}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}
      
      <ControlsBar>
        <AudioControlsContainer
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => {
            setTimeout(() => setShowVolumeSlider(false), 1000);
          }}
        >
          <MusicButton onClick={handleToggleMusic}>
            {musicEnabled ? '🔊' : '🔇'}
          </MusicButton>
          
          <VolumeSlider
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
            style={{
              opacity: showVolumeSlider ? 1 : 0,
              visibility: showVolumeSlider ? 'visible' : 'hidden',
              transitionDelay: showVolumeSlider ? '0s' : '0.5s'
            }}
          />
        </AudioControlsContainer>
        
        <MusicButton onClick={() => setShowSnow(!showSnow)}>
          {showSnow ? '❄️' : '☀️'}
        </MusicButton>
        
        {gamePhase !== 'question' && (
          <TeamClock>
            <ClockIcon>⏱️</ClockIcon>
            <ClockText>
              <span style={{ opacity: 0.7 }}>Current Turn: </span>
              <TeamActiveText>{teams[activeTeamIndex]?.name || '?'}</TeamActiveText>
              <span style={{ fontSize: '12px', opacity: 0.7, marginLeft: '5px' }}>(Team {activeTeamIndex + 1})</span>
            </ClockText>
          </TeamClock>
        )}
      </ControlsBar>
      
      <GameContent>
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
        </TeamsContainer>
        
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
      </GameContent>
    </Container>
  );
};

export default GameContainer; 