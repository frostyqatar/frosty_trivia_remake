import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { pauseTimer, revealAnswer, returnToBoard, startTimer, tickTimer, resetTimer, setActiveTeam, resetGame, awardPoints, setBothTeamsTimedOut } from '../store/gameSlice';
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
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2ecc71, #f1c40f, #e74c3c);
    border-radius: 16px 16px 0 0;
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CategoryInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: #3498db;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgba(52, 152, 219, 0.1);
`;

const PointValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #f1c40f;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgba(241, 196, 15, 0.1);
`;

const QuestionText = styled.div`
  font-size: 32px;
  line-height: 1.5;
  margin-bottom: 40px;
  text-align: center;
  width: 100%;
  color: #2c3e50;
  padding: 20px;
  background-color: rgba(236, 240, 241, 0.5);
  border-radius: 12px;
`;

const ControlButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
  gap: 16px;
`;

const Button = styled(motion.button)`
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RevealButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
  flex: 1;
  
  &:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '🎯';
    margin-right: 8px;
  }
`;

const ReturnButton = styled(Button)`
  background-color: #3498db;
  color: white;
  flex: 1;
  
  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '🔙';
    margin-right: 8px;
  }
`;

const TeamTimerDisplay = styled.div<{ $isTimeUp: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$isTimeUp ? '#e74c3c' : '#3498db'};
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  transition: background-color 0.3s ease;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  ${props => props.$isTimeUp && `
    animation: pulse-warning 1s infinite;
    
    @keyframes pulse-warning {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
  `}
`;

const TimerValue = styled.span`
  font-weight: bold;
  margin: 0 5px;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 6px;
`;

const TeamNameSpan = styled.span`
  font-weight: bold;
  margin: 0 5px;
  color: #fff9c4;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #c9302c;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
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
  gap: 16px;
  width: 100%;
  max-width: 600px;
  margin: 24px 0;
`;

const AwardButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: #27ae60;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #2ecc71;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const NoAwardButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: #e74c3c;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const TeamEmoji = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;

// Add these new styled components for media display
const MediaContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(0, 0, 0, 0.05);
`;

const QuestionImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.01);
  }
`;

const AudioPlayer = styled.audio`
  width: 100%;
  margin: 10px 0;
  height: 40px;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

// Helper function to extract YouTube video ID
const getYoutubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Add this styled component
const TeamIndicator = styled.div`
  background-color: #3498db;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Update the TimerDisplay component with proper typing
const TimerDisplay = styled.div<{ remaining: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  margin: 20px 0;
  color: ${props => props.remaining <= 5 ? '#e74c3c' : '#2c3e50'};
  
  span {
    padding: 12px 20px;
    background-color: ${props => props.remaining <= 5 ? '#ffebee' : '#f0f3f5'};
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    ${props => props.remaining <= 5 && `
      animation: pulse-timer 1s infinite;
      
      @keyframes pulse-timer {
        0% { transform: scale(1); }
        50% { transform: scale(1.03); }
        100% { transform: scale(1); }
      }
    `}
  }
`;

// Add these styled components for the timer control buttons
const TimerControlEmoji = styled.span`
  cursor: pointer;
  font-size: 22px;
  margin: 0 6px;
  transition: transform 0.2s ease;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px;
  border-radius: 50%;
  
  &:hover {
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

const QuestionScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { playSound } = useSoundEffects();
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [bothTeamsFinished, setBothTeamsFinished] = useState(false);
  const [timerTeamIndex, setTimerTeamIndex] = useState(0);
  
  // Get state from Redux
  const { currentQuestion, timer, teams, activeTeamIndex } = useSelector((state: RootState) => ({
    currentQuestion: state.currentQuestion,
    timer: state.timer,
    teams: state.teams,
    activeTeamIndex: state.activeTeamIndex || 0
  }));
  
  // Update the timer duration for testing purposes
  useEffect(() => {
    if (currentQuestion) {
      // Set timer duration to 5 seconds for testing
      dispatch({ type: 'game/setTimer', payload: { duration: 5, remaining: 5 } });
    }
  }, [currentQuestion, dispatch]);
  
  // Update the useEffect that manages the timer
  useEffect(() => {
    // Only start the timer when question is loaded and no answer is revealed yet
    if (currentQuestion && !answerRevealed) {
      console.log(`Starting timer for team: ${teams[timerTeamIndex]?.name || 'الفريق'}`);
      
      // Reset and start timer for current team
      dispatch(resetTimer());
      dispatch(startTimer());
      
      // Set up interval to tick the timer
      const timerInterval = setInterval(() => {
        dispatch(tickTimer());
        
        // Check if timer has reached zero
        const currentTimerValue = store.getState().timer.remaining;
        
        if (currentTimerValue <= 0) {
          // Time's up for the current team
          clearInterval(timerInterval);
          console.log(`Time's up for team: ${teams[timerTeamIndex]?.name || 'الفريق'}`);
          
          // Check if this was the first team's timer
          if (timerTeamIndex === 0) {
            // Switch to second team's timer
            setTimerTeamIndex(1);
            
            // Reset and start timer for the second team
            setTimeout(() => {
              dispatch(resetTimer());
              dispatch(startTimer());
            }, 1000);
          } else {
            // Both teams' timers have ended
            setBothTeamsFinished(true);
            showNotification("انتهى الوقت لكلا الفريقين");
          }
        }
      }, 1000);
      
      // Clear interval when component unmounts or question changes
      return () => {
        clearInterval(timerInterval);
        dispatch(pauseTimer());
      };
    }
  }, [dispatch, currentQuestion, answerRevealed, teams, timerTeamIndex, setBothTeamsFinished, showNotification]);
  
  // Reset bothTeamsFinished state when question changes
  useEffect(() => {
    setBothTeamsFinished(false);
  }, [currentQuestion]);
  
  // Reset timerTeamIndex when question changes
  useEffect(() => {
    setTimerTeamIndex(0);
  }, [currentQuestion]);
  
  // Redirect if no question is selected
  useEffect(() => {
    if (!currentQuestion) {
      dispatch(returnToBoard({ markAsAnswered: false }));
    }
  }, [currentQuestion, dispatch]);
  
  // Return early if no question
  if (!currentQuestion) {
    return null;
  }
  
  const { categoryId, questionIndex, question } = currentQuestion;
  const activeTeam = teams[activeTeamIndex];
  const activeTeamName = activeTeam ? activeTeam.name : `Team ${activeTeamIndex + 1}`;
  
  // Get the timer team name
  const timerTeam = teams[timerTeamIndex];
  const timerTeamName = timerTeam ? timerTeam.name : `Team ${timerTeamIndex + 1}`;
  
  // Update the handleRevealAnswer function
  const handleRevealAnswer = () => {
    playSound('answer-reveal');
    dispatch(revealAnswer());
    setAnswerRevealed(true);
    
    // Stop the timer when revealing answer
    dispatch(pauseTimer());
    
    // Switch to the other team when revealing answer
    dispatch(setActiveTeam(activeTeamIndex === 0 ? 1 : 0));
  };
  
  // Update the handleReturnToBoard function with a console log
  const handleReturnToBoard = () => {
    playSound('button-click');
    
    console.log('RETURNING TO BOARD: Question should NOT be marked as answered');
    
    // Add a direct state check before dispatching
    const state = store.getState();
    const { categoryId, questionIndex } = currentQuestion;
    const category = state.categories.find(c => c.id === categoryId);
    const questionBeforeReturn = category?.questions[questionIndex];
    
    console.log('Question answered state BEFORE return:', questionBeforeReturn?.answered);
    
    dispatch(returnToBoard({ markAsAnswered: false }));
    
    // Check state after dispatch with setTimeout
    setTimeout(() => {
      const afterState = store.getState();
      const categoryAfter = afterState.categories.find(c => c.id === categoryId);
      const questionAfterReturn = categoryAfter?.questions[questionIndex];
      
      console.log('Question answered state AFTER return:', questionAfterReturn?.answered);
      
      // If it's marked as answered, log a warning
      if (questionAfterReturn?.answered) {
        console.error('PROBLEM: Question was marked as answered despite markAsAnswered: false');
      }
    }, 100);
  };
  
  // Handle awarding points to a team
  const handleAwardPoints = (teamIndex: 0 | 1) => {
    playSound('button-click');
    dispatch(awardPoints({ 
      teamIndex, 
      points: question.value 
    }));
    dispatch(returnToBoard({ markAsAnswered: true }));
  };
  
  // Media rendering function
  const renderMedia = () => {
    if (!question) return null;
    
    if (question.image) {
      return (
        <MediaContainer>
          <QuestionImage src={question.image} alt="Question visual" />
        </MediaContainer>
      );
    }
    
    if (question.audio) {
      return (
        <MediaContainer>
          <AudioPlayer controls>
            <source src={question.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </AudioPlayer>
        </MediaContainer>
      );
    }
    
    if (question.video) {
      const videoId = getYoutubeVideoId(question.video);
      if (videoId) {
        return (
          <MediaContainer>
            <VideoContainer>
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoContainer>
          </MediaContainer>
        );
      }
    }
    
    return null;
  };
  
  // Add these handler functions inside the component
  const handleSkipTimer = () => {
    playSound('button-click');
    
    // Clear any existing timer interval
    dispatch(pauseTimer());
    
    if (timerTeamIndex === 0) {
      // Switch to second team's timer
      setTimerTeamIndex(1);
      
      // Reset and start timer for the second team
      setTimeout(() => {
        dispatch(resetTimer());
        dispatch(startTimer());
      }, 300);
      
      showNotification(`تم تخطي وقت الفريق ${teams[0]?.name || 'الأول'}`);
    } else {
      // Both teams' timers have been skipped
      setBothTeamsFinished(true);
      showNotification("تم إيقاف المؤقت");
    }
  };

  const handleRestartTimers = () => {
    playSound('button-click');
    
    // Reset to first team
    setTimerTeamIndex(0);
    setBothTeamsFinished(false);
    
    // Reset and restart timer
    dispatch(resetTimer());
    dispatch(startTimer());
    
    showNotification("تم إعادة تشغيل المؤقت");
  };
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <QuestionContainer>
          <QuestionHeader>
            <CategoryInfo>
              <BidirectionalText text={categoryId} />
            </CategoryInfo>
            
            <PointValue>{question.value} نقطة</PointValue>
          </QuestionHeader>
          
          <TeamTimerDisplay $isTimeUp={timer.remaining <= 0}>
            {answerRevealed ? (
              // When answer is revealed
              <span>الإجابة معروضة الآن - الدور التالي للفريق {teams[activeTeamIndex]?.name}</span>
            ) : bothTeamsFinished ? (
              // When both teams have timed out
              <>
                <span>⚠️ انتهى الوقت لكلا الفريقين! </span>
                <TimerControlEmoji 
                  onClick={handleRestartTimers}
                  title="إعادة تشغيل المؤقتات"
                >
                  🔁
                </TimerControlEmoji>
              </>
            ) : (
              // Normal timer display during team's turn - use timerTeamIndex instead of activeTeamIndex
              <>
               
                <TeamNameSpan>
                  {teams[timerTeamIndex]?.name}
                </TeamNameSpan>
                
                <TimerValue>{timer.remaining}</TimerValue>
              
                
                {/* Emoji controls */}
                <TimerControlEmoji 
                  onClick={handleSkipTimer}
                  title="تخطي المؤقت الحالي"
                >
                  ⏭️
                </TimerControlEmoji>
                
                <TimerControlEmoji 
                  onClick={handleRestartTimers}
                  title="إعادة تشغيل المؤقتات"
                >
                  🔄
                </TimerControlEmoji>
              </>
            )}
          </TeamTimerDisplay>
          
          <QuestionText>
            <BidirectionalText text={question.question} />
          </QuestionText>
          
          {/* Media rendering */}
          {renderMedia()}
          
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
                  <TeamEmoji>🏆</TeamEmoji>
                  منح النقاط للفريق {teams[0]?.name || 'الفريق 1'}
                </AwardButton>
                
                <AwardButton 
                  onClick={() => handleAwardPoints(1)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <TeamEmoji>🏆</TeamEmoji>
                  منح النقاط للفريق {teams[1]?.name || 'الفريق 2'}
                </AwardButton>
                
                <NoAwardButton 
                  onClick={() => dispatch(returnToBoard({ markAsAnswered: true }))}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <TeamEmoji>❌</TeamEmoji>
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