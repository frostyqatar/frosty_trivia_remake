import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RootState } from '../store';
import { resetGame } from '../store/gameSlice';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { trackGameEvent } from '../services/analytics';
import Avatar from 'avataaars';
import { AvatarOptions } from './setup/TeamSetup';

// Frosty winter theme colors
const colors = {
  background: 'rgba(236, 246, 255, 0.95)',
  cardBg: 'rgba(255, 255, 255, 0.85)',
  primary: '#68b8e8',
  primaryLight: '#a8d5ff',
  accent: '#9cddff',
  gold: 'linear-gradient(135deg, #ffe259 0%, #ffa751 100%)',
  silver: 'linear-gradient(135deg, #e6e6e6 0%, #b3b3b3 100%)',
  text: '#2c3e50',
  textLight: '#7a96b2',
  winner: '#5bd3a2',
  winnerGlow: '0 0 20px rgba(91, 211, 162, 0.5)',
  shadow: '0 10px 30px rgba(166, 218, 255, 0.4)'
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background: ${colors.cardBg};
  backdrop-filter: blur(15px);
  border-radius: 30px;
  box-shadow: ${colors.shadow};
  width: 100%;
  max-width: 900px;
  
  margin: 0 auto;
  color: ${colors.text};
  overflow: hidden;
  position: relative;
  border: 2px solid rgba(166, 218, 255, 0.6);
  
  /* Frost effect on the edges */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(166, 218, 255, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SnowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.8) 3px, transparent 3px),
      radial-gradient(circle at 60% 20%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
      radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.8) 2px, transparent 2px);
    background-size: 250px 250px;
    animation: snowfall 8s linear infinite;
  }
  
  @keyframes snowfall {
    0% { background-position: 0 0; }
    100% { background-position: 250px 250px; }
  }
`;

const Trophy = styled(motion.div)`
  font-size: 80px;
  margin-bottom: 10px;
  filter: drop-shadow(0 5px 15px rgba(255, 215, 0, 0.4));
`;

const WinnerAnnouncement = styled(motion.div)`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  background: ${colors.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const TieAnnouncement = styled(motion.div)`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  background: ${colors.silver};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const TeamName = styled(motion.div)`
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: ${colors.winner};
  text-shadow: ${colors.winnerGlow};
  
  @media (max-width: 768px) {
    font-size: 54px;
  }
`;

const ScoreDisplay = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 30px 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const TeamScore = styled(motion.div)<{ isWinner: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  border-radius: 20px;
  background-color: ${props => props.isWinner ? 'rgba(91, 211, 162, 0.15)' : 'rgba(166, 218, 255, 0.15)'};
  border: ${props => props.isWinner ? '3px solid rgba(91, 211, 162, 0.6)' : '2px solid rgba(166, 218, 255, 0.3)'};
  box-shadow: ${props => props.isWinner ? '0 8px 25px rgba(91, 211, 162, 0.25)' : '0 8px 25px rgba(166, 218, 255, 0.2)'};
  transform: ${props => props.isWinner ? 'scale(1.05)' : 'scale(1)'};
  position: relative;
  overflow: hidden;
  
  /* Shimmer effect for winner */
  ${props => props.isWinner && `
    &:after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      right: -50%;
      bottom: -50%;
      background: linear-gradient(
        45deg,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0.1) 50%,
        rgba(255,255,255,0) 100%
      );
      transform: rotate(45deg);
      animation: shimmer 3s infinite;
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%) rotate(45deg); }
      100% { transform: translateX(100%) rotate(45deg); }
    }
  `}
  
  @media (max-width: 768px) {
    padding: 20px 40px;
    width: 80%;
  }
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`;

const TeamAvatar = styled.div<{ isWinner: boolean }>`
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.isWinner ? 'rgba(91, 211, 162, 0.2)' : 'rgba(166, 218, 255, 0.2)'};
  box-shadow: 0 4px 15px ${props => props.isWinner ? 'rgba(91, 211, 162, 0.3)' : 'rgba(166, 218, 255, 0.3)'};
  border: 2px solid ${props => props.isWinner ? 'rgba(91, 211, 162, 0.6)' : 'rgba(166, 218, 255, 0.3)'};
`;

const WinnerBadge = styled(motion.div)`
  position: absolute;
  top: -15px;
  right: -15px;
  background: ${colors.gold};
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3);
`;

const TeamLabel = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${colors.textLight};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WinningStar = styled(motion.span)`
  color: #FFD700;
  font-size: 28px;
  display: inline-block;
  filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.8));
`;

const ScoreValue = styled.div<{ isWinner: boolean }>`
  font-size: 78px;
  font-weight: bold;
  color: ${props => props.isWinner ? colors.winner : colors.primary};
  text-shadow: ${props => props.isWinner ? '0 2px 10px rgba(91, 211, 162, 0.3)' : '0 2px 10px rgba(166, 218, 255, 0.3)'};
  
  @media (max-width: 768px) {
    font-size: 66px;
  }
`;

const PlayAgainButton = styled(motion.button)`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%);
  color: white;
  border: none;
  padding: 20px 40px;
  font-size: 28px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: 0 10px 20px rgba(104, 184, 232, 0.4);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Frost effect */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent);
    pointer-events: none;
  }
  
  &:hover {
    box-shadow: 0 15px 30px rgba(104, 184, 232, 0.6);
  }
  
  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 24px;
  }
`;

const GameStats = styled(motion.div)`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(166, 218, 255, 0.1);
  padding: 15px 25px;
  border-radius: 15px;
  border: 1px solid rgba(166, 218, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const StatValue = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.primary};
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: ${colors.textLight};
  margin-top: 5px;
`;

const EndGame: React.FC = () => {
  const dispatch = useDispatch();
  const [isConfettiActive, setIsConfettiActive] = useState(true);
  
  const { teams, questionsPlayed, roundsPlayed } = useSelector((state: RootState) => ({
    teams: state.teams,
    questionsPlayed: state.questionsPlayed || 0,
    roundsPlayed: state.currentRound || 0
  }));
  
  const { playSound } = useSoundEffects();
  
  const team1Score = teams[0]?.score || 0;
  const team2Score = teams[1]?.score || 0;
  
  const winningTeam = team1Score > team2Score ? teams[0] : teams[1];
  const isTie = team1Score === team2Score;
  
  // Calculate score difference
  const scoreDifference = Math.abs(team1Score - team2Score);
  
  useEffect(() => {
    const winningTeamName = winningTeam?.name || (isTie ? 'Tie' : 'Unknown');
    const finalScore = Math.max(team1Score, team2Score);
    trackGameEvent.endGame(winningTeamName, finalScore);
    
    playSound('victory');
    
    if (!isConfettiActive) return;
    
    const duration = 6 * 1000;
    const animationEnd = Date.now() + duration;
    
    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };
    
    // Enhanced confetti with more varied shapes and colors
    const fireConfetti = () => {
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#5bd3a2', '#68b8e8', '#a8d5ff', '#ffd700', '#9cddff'],
        shapes: ['circle', 'square'],
        gravity: 0.8,
        scalar: 1.2
      });
      
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#5bd3a2', '#68b8e8', '#a8d5ff', '#ffd700', '#9cddff'],
        shapes: ['circle', 'square'],
        gravity: 0.8,
        scalar: 1.2
      });
    };
    
    // Initial burst of confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }
      
      fireConfetti();
    }, 250);
    
    return () => clearInterval(interval);
  }, [playSound, isConfettiActive]);
  
  const handlePlayAgain = () => {
    playSound('button-click');
    dispatch(resetGame());
  };
  
  const toggleConfetti = () => {
    setIsConfettiActive(!isConfettiActive);
    if (!isConfettiActive) {
      // Restart confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };
  
  // Function to parse avatar options or return null if not valid
  const getAvatarOptions = (avatar: string | undefined): AvatarOptions | null => {
    try {
      if (avatar && avatar.startsWith('{')) {
        return JSON.parse(avatar);
      }
    } catch (e) {
      console.error('Error parsing avatar options:', e);
    }
    return null;
  };
  
  return (
    <AnimatePresence>
      <Container
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SnowOverlay />
        
        {!isTie && (
          <Trophy
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            🏆
          </Trophy>
        )}
        
        {isTie ? (
          <TieAnnouncement
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            !تعادل الفريقان
          </TieAnnouncement>
        ) : (
          <WinnerAnnouncement
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            !الفريق الفائز
          </WinnerAnnouncement>
        )}
        
        {!isTie && (
          <TeamName
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <BidirectionalText text={winningTeam?.name || ''} />
          </TeamName>
        )}
        
        <ScoreDisplay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <TeamScore 
            isWinner={team1Score > team2Score}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {team1Score > team2Score && <WinnerBadge>🥇</WinnerBadge>}
            <TeamHeader>
              <TeamAvatar isWinner={team1Score > team2Score}>
                {getAvatarOptions(teams[0]?.avatar) ? (
                  <Avatar
                    style={{ width: '55px', height: '55px' }}
                    avatarStyle='Circle'
                    {...getAvatarOptions(teams[0]?.avatar)}
                  />
                ) : (
                  teams[0]?.avatar || '👥'
                )}
              </TeamAvatar>
              <TeamLabel>
                {team1Score > team2Score && (
                  <WinningStar
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    ⭐
                  </WinningStar>
                )}
                <BidirectionalText text={teams[0]?.name || 'Team 1'} />
              </TeamLabel>
            </TeamHeader>
            <ScoreValue isWinner={team1Score > team2Score}>{team1Score}</ScoreValue>
          </TeamScore>
          
          <TeamScore 
            isWinner={team2Score > team1Score}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {team2Score > team1Score && <WinnerBadge>🥇</WinnerBadge>}
            <TeamHeader>
              <TeamAvatar isWinner={team2Score > team1Score}>
                {getAvatarOptions(teams[1]?.avatar) ? (
                  <Avatar
                    style={{ width: '55px', height: '55px' }}
                    avatarStyle='Circle'
                    {...getAvatarOptions(teams[1]?.avatar)}
                  />
                ) : (
                  teams[1]?.avatar || '👥'
                )}
              </TeamAvatar>
              <TeamLabel>
                {team2Score > team1Score && (
                  <WinningStar
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    ⭐
                  </WinningStar>
                )}
                <BidirectionalText text={teams[1]?.name || 'Team 2'} />
              </TeamLabel>
            </TeamHeader>
            <ScoreValue isWinner={team2Score > team1Score}>{team2Score}</ScoreValue>
          </TeamScore>
        </ScoreDisplay>
        
        <GameStats
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
     
          
          {/* <StatItem>
            <StatValue>{scoreDifference}</StatValue>
            <StatLabel>فرق النقاط</StatLabel>
          </StatItem> */}
        </GameStats>
        
        <PlayAgainButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlayAgain}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          لعب مرة أخرى
        </PlayAgainButton>
        
        {/* Confetti toggle button */}
        <motion.button
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            opacity: isConfettiActive ? 1 : 0.5
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleConfetti}
          title={isConfettiActive ? "إيقاف الاحتفال" : "تشغيل الاحتفال"}
        >
          🎉
        </motion.button>
      </Container>
    </AnimatePresence>
  );
};

export default EndGame;