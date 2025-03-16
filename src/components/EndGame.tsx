import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RootState } from '../store';
import { resetGame } from '../store/gameSlice';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { trackGameEvent } from '../services/analytics';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  color: white;
  overflow: hidden;
  position: relative;
`;

const WinnerAnnouncement = styled(motion.div)`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
  background: linear-gradient(to right, #f5d742, #ff9900);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(255, 215, 0, 0.5);
`;

const TeamName = styled(motion.div)`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #2ecc71;
`;

const ScoreDisplay = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 30px 0;
`;

const TeamScore = styled(motion.div)<{ isWinner: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  border-radius: 12px;
  background-color: ${props => props.isWinner ? 'rgba(46, 204, 113, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  border: ${props => props.isWinner ? '3px solid #2ecc71' : '1px solid rgba(255, 255, 255, 0.2)'};
`;

const ScoreValue = styled.div<{ isWinner: boolean }>`
  font-size: 72px;
  font-weight: bold;
  color: ${props => props.isWinner ? '#2ecc71' : 'white'};
`;

const TeamLabel = styled.div`
  font-size: 24px;
  opacity: 0.8;
  margin-bottom: 10px;
`;

const PlayAgainButton = styled(motion.button)`
  background: linear-gradient(to right, #3498db, #2ecc71);
  color: white;
  border: none;
  padding: 16px 32px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: 0 4px 15px rgba(46, 204, 113, 0.5);
`;

const EndGame: React.FC = () => {
  const dispatch = useDispatch();
  
  const { teams } = useSelector((state: RootState) => ({
    teams: state.teams
  }));
  
  const { playSound } = useSoundEffects();
  
  const team1Score = teams[0]?.score || 0;
  const team2Score = teams[1]?.score || 0;
  
  const winningTeam = team1Score > team2Score ? teams[0] : teams[1];
  const isTie = team1Score === team2Score;
  
  useEffect(() => {
    const winningTeamName = winningTeam?.name || (isTie ? 'Tie' : 'Unknown');
    const finalScore = Math.max(team1Score, team2Score);
    trackGameEvent.endGame(winningTeamName, finalScore);
    
    playSound('victory');
    
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    
    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };
    
    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }
      
      const particleCount = 2;
      
      confetti({
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#2ecc71', '#3498db', '#f1c40f', '#e74c3c', '#9b59b6']
      });
      
      confetti({
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#2ecc71', '#3498db', '#f1c40f', '#e74c3c', '#9b59b6']
      });
    }, 250);
    
    return () => clearInterval(interval);
  }, [playSound]);
  
  const handlePlayAgain = () => {
    playSound('button-click');
    dispatch(resetGame());
  };
  
  return (
    <AnimatePresence>
      <Container
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <WinnerAnnouncement
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {isTie ? '!تعادل الفريقان' : 'الفريق الفائز!'}
        </WinnerAnnouncement>
        
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
          <TeamScore isWinner={team1Score > team2Score}>
            <TeamLabel>
              <BidirectionalText text={teams[0]?.name || 'الفريق 1'} />
            </TeamLabel>
            <ScoreValue isWinner={team1Score > team2Score}>{team1Score}</ScoreValue>
          </TeamScore>
          
          <TeamScore isWinner={team2Score > team1Score}>
            <TeamLabel>
              <BidirectionalText text={teams[1]?.name || 'الفريق 2'} />
            </TeamLabel>
            <ScoreValue isWinner={team2Score > team1Score}>{team2Score}</ScoreValue>
          </TeamScore>
        </ScoreDisplay>
        
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
      </Container>
    </AnimatePresence>
  );
};

export default EndGame; 