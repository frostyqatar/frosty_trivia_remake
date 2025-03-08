import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { pauseTimer, revealAnswer, returnToBoard, startTimer, tickTimer, resetTimer, setActiveTeam, resetGame, awardPoints } from '../store/gameSlice';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { showNotification } from '../utils/notificationUtils';
import { store } from '../store';

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background-color: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const CategoryInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const PointValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
`;

const QuestionText = styled.div`
  font-size: 32px;
  line-height: 1.5;
  margin-bottom: 40px;
  text-align: center;
  width: 100%;
`;

const ControlButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
`;

const Button = styled(motion.button)`
  padding: 16px 32px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RevealButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
`;

const ReturnButton = styled(Button)`
  background-color: #3498db;
  color: white;
`;

const TeamTimerDisplay = styled.div`
  background-color: #34495e;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 24px;
  margin-bottom: 24px;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const TeamNameSpan = styled.span`
  font-weight: bold;
  color: #f39c12;
  margin: 0 8px;
`;

const TimerValue = styled.span`
  font-weight: bold;
  font-size: 28px;
  color: ${props => {
    const timeRemaining = parseInt(props.children as string);
    if (timeRemaining <= 5) return '#e74c3c';
    if (timeRemaining <= 10) return '#f39c12';
    return '#2ecc71';
  }};
  margin-left: 8px;
`;

// Add a new styled button for ending the game
const EndGameButton = styled(motion.button)`
  background-color: #d9534f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;
`;

// Update or add these styled components for better answer reveal UI
const AnswerRevealSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background-color: #f1f8e9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const AnswerText = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 24px;
  text-align: center;
  padding: 16px;
  background-color: #e8f5e9;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const AwardPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  margin-top: 16px;
`;

const AwardButton = styled(Button)`
  background-color: #27ae60;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 100%;
`;

const NoAwardButton = styled(Button)`
  background-color: #95a5a6;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 100%;
`;

const QuestionScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { currentQuestion, teams, answerRevealed, timer, activeTeamIndex } = useSelector((state: RootState) => ({
    currentQuestion: state.currentQuestion,
    teams: state.teams,
    answerRevealed: state.answerRevealed,
    timer: state.timer,
    activeTeamIndex: state.activeTeamIndex
  }));
  const { playSound } = useSoundEffects();
  
  // Add this state to track if both teams have had their turn
  const [bothTeamsFinished, setBothTeamsFinished] = useState(false);
  const [teamTurnsCompleted, setTeamTurnsCompleted] = useState(0);
  
  // Update the timer useEffect to handle team switching and time up message
  useEffect(() => {
    dispatch(startTimer());
    
    // Set up timer interval
    const timerInterval = setInterval(() => {
      dispatch(tickTimer());
      
      // Get current timer value after tick
      const currentTimer = store.getState().timer;
      
      // Check if timer has reached zero
      if (currentTimer.remaining <= 0) {
        // Play time's up sound
        playSound('timer-tick');
        
        // Increment completed turns
        setTeamTurnsCompleted(prev => prev + 1);

        // Check if both teams have had their turn
        if (teamTurnsCompleted >= 1) {
          // Both teams have had their turn
          setBothTeamsFinished(true);
          clearInterval(timerInterval);
          showNotification(`انتهى الوقت للفريقين`, 3000);
        } else {
          // Switch to the other team
          const currentActiveTeam = store.getState().activeTeamIndex;
          const nextTeam = currentActiveTeam === 0 ? 1 : 0;
          dispatch(setActiveTeam(nextTeam));
          
          // Reset timer back to 30 seconds
          dispatch(resetTimer(30));
          
          // Show notification about team switch
          showNotification(`انتهى الوقت! دور ${teams[nextTeam]?.name || 'الفريق الآخر'} الآن`, 3000);
        }
      }
    }, 1000);
    
    // Play ticking sound when timer is low
    if (timer.remaining <= 5 && timer.remaining > 0) {
      playSound('timer-tick');
    }
    
    return () => {
      clearInterval(timerInterval);
      dispatch(pauseTimer());
    };
  }, [dispatch, playSound, timer.remaining, teams, teamTurnsCompleted]);
  
  if (!currentQuestion) {
    return <div>No question selected</div>;
  }
  
  const { categoryId, question } = currentQuestion;
  const activeTeam = teams[activeTeamIndex];
  const activeTeamName = activeTeam ? activeTeam.name : `Team ${activeTeamIndex + 1}`;
  
  const handleRevealAnswer = () => {
    playSound('button-click');
    dispatch(revealAnswer());
  };
  
  const handleReturnToBoard = () => {
    playSound('button-click');
    dispatch(returnToBoard());
  };

  const handleEndGame = () => {
    if (window.confirm('هل أنت متأكد من أنك تريد إنهاء اللعبة؟')) {
      dispatch(resetGame());
      showNotification('تم إنهاء اللعبة');
    }
  };
  
  const handleAwardPoints = (teamIndex: 0 | 1) => {
    playSound('button-click');
    if (currentQuestion) {
      dispatch(awardPoints({ 
        teamIndex, 
        points: currentQuestion.question.value 
      }));
    }
    dispatch(returnToBoard());
  };
  
  const handleNoAward = () => {
    playSound('button-click');
    dispatch(returnToBoard());
  };
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <QuestionContainer>
          <QuestionHeader>
            <CategoryInfo>
              <BidirectionalText text={categoryId} />
            </CategoryInfo>
            
            <PointValue>{question.value} نقطة</PointValue>
          </QuestionHeader>
          
          <TeamTimerDisplay>
            {bothTeamsFinished ? (
              <>
                <span>انتهى الوقت للفريقين</span>
                <span> ⌛</span>
              </>
            ) : (
              <>
                <span>دور</span>
                <TeamNameSpan>{activeTeamName}</TeamNameSpan>
                <span> - الوقت: </span>
                <TimerValue>{timer.remaining}</TimerValue>
                <span> ثانية ⌛</span>
              </>
            )}
          </TeamTimerDisplay>
          
          <QuestionText>
            <BidirectionalText text={question.question} />
          </QuestionText>
          
          {!answerRevealed ? (
            <ControlButtons>
              <ReturnButton
                onClick={handleReturnToBoard}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                العودة إلى اللوحة
              </ReturnButton>
              
              <RevealButton
                onClick={handleRevealAnswer}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                كشف الإجابة
              </RevealButton>
            </ControlButtons>
          ) : (
            <AnswerRevealSection>
              <AnswerText>
                <BidirectionalText text={question.answer} />
              </AnswerText>
              
              <AwardPointsContainer>
                <AwardButton 
                  onClick={() => handleAwardPoints(0)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  منح النقاط للفريق {teams[0]?.name || 'الفريق 1'}
                </AwardButton>
                
                <AwardButton 
                  onClick={() => handleAwardPoints(1)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  منح النقاط للفريق {teams[1]?.name || 'الفريق 2'}
                </AwardButton>
                
                <NoAwardButton 
                  onClick={handleNoAward}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  لا نقاط
                </NoAwardButton>
              </AwardPointsContainer>
              
              <ReturnButton
                onClick={handleReturnToBoard}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ marginTop: '20px' }}
              >
                العودة إلى اللوحة
              </ReturnButton>
            </AnswerRevealSection>
          )}
        </QuestionContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionScreen; 