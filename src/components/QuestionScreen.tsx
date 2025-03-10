import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { pauseTimer, revealAnswer, returnToBoard, startTimer, tickTimer, resetTimer, setActiveTeam, resetGame, awardPoints, setBothTeamsTimedOut, setGamePhase } from '../store/gameSlice';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { showNotification } from '../utils/notificationUtils';
import { store } from '../store';
import AnswerReveal from './AnswerReveal';
import { TeamIndex } from '../types/game.types';

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(140, 82, 255, 0.15);
  overflow: hidden;
`;

const QuestionHeader = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #8c52ff 0%, #5e17eb 100%);
  color: white;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionProgress = styled.div`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '❓';
    font-size: 18px;
  }
`;

const BookmarkButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

const QuestionContent = styled.div`
  padding: 32px;
  width: 100%;
`;

const QuestionText = styled.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 36px;
  color: #333;
  padding: 32px;
  background-color: #f8f5ff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(140, 82, 255, 0.1);
  border-left: 5px solid #8c52ff;
`;

const TimerSection = styled.div`
  margin: 32px 0;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 16px;
`;

const TimerContainer = styled.div`
  width: 100%;
`;

const TimerLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #444;
`;

const TimerTrack = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TimerProgress = styled.div<{ $percent: number; $isTimeUp: boolean }>`
  height: 100%;
  width: ${props => props.$percent}%;
  background: ${props => props.$isTimeUp 
    ? 'linear-gradient(90deg, #ff6b6b, #ff4757)' 
    : 'linear-gradient(90deg, #ffda79, #ffa502)'};
  border-radius: 6px;
  transition: width 0.3s linear;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const TimerDisplay = styled.div<{ $isTimeUp: boolean }>`
  color: ${props => props.$isTimeUp ? '#ff4757' : '#333'};
  font-weight: 700;
  font-size: 18px;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0 24px;
  font-weight: 600;
  font-size: 18px;
  color: #8c52ff;
  background: #f0ebff;
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(140, 82, 255, 0.15);
  width: fit-content;
  margin: 0 auto 24px;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 32px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ActionButton = styled(motion.button)`
  background: linear-gradient(135deg, #8c52ff 0%, #7b44e0 100%);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(140, 82, 255, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 6px 15px rgba(140, 82, 255, 0.4);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #cccccc, #aaaaaa);
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const RevealButton = styled(ActionButton)`
  background: linear-gradient(135deg, #ff6b6b 0%, #ff4757 100%);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  
  &:hover {
    box-shadow: 0 6px 15px rgba(255, 107, 107, 0.4);
  }
`;

const BottomControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  background: linear-gradient(to right, #f8f8f8, #f0f0f0);
  padding: 18px 24px;
  border-top: 1px solid #eee;
  border-radius: 0 0 24px 24px;
`;

const ControlStats = styled.div`
  display: flex;
  gap: 18px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #555;
  font-weight: 600;
  background: white;
  padding: 8px 12px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

const TimerActions = styled.div`
  display: flex;
  gap: 12px;
`;

const IconButton = styled(motion.button)`
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  color: #555;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

// Add these styled components for media support
const MediaContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const QuestionImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin-bottom: 16px;
  border-radius: 12px;
  overflow: hidden;
`;

const QuestionVideo = styled.video`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: block;
`;

const AudioContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 16px;
`;

const QuestionAudio = styled.audio`
  width: 100%;
`;

// Add this function to detect YouTube URLs
const isYouTubeUrl = (url: string) => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

// Add this component for YouTube embeds
const YouTubeEmbed = ({ url }: { url: string }) => {
  // Extract video ID from YouTube URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  const videoId = getYouTubeId(url);
  if (!videoId) return null;
  
  return (
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

const QuestionScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { playSound } = useSoundEffects();
  const [currentTimerTeam, setCurrentTimerTeam] = useState<TeamIndex | null>(null);
  const [otherTeamFinished, setOtherTeamFinished] = useState(false);
  const [bothTeamsFinished, setBothTeamsFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Add this function to handle audio ended event
  const handleAudioEnded = useCallback(() => {
    console.log('Audio playback ended');
    // Add any behavior you want when audio finishes
  }, []);
  
  // Get state from Redux
  const { currentQuestion, timer, teams, activeTeamIndex, answerRevealed } = useSelector((state: RootState) => ({
    currentQuestion: state.currentQuestion,
    timer: state.timer,
    teams: state.teams,
    activeTeamIndex: state.activeTeamIndex || 0,
    answerRevealed: state.answerRevealed
  }));
  
  // Initialize timer with active team when component mounts
  useEffect(() => {
    if (currentTimerTeam === null) {
      console.log("Starting timer with activeTeamIndex:", activeTeamIndex);
      setCurrentTimerTeam(activeTeamIndex as TeamIndex);
    }
  }, [activeTeamIndex, currentTimerTeam]);
  
  // Start timer when component mounts or currentTimerTeam changes
  useEffect(() => {
    if (currentTimerTeam !== null) {
      dispatch(resetTimer()); // Reset first
      dispatch(startTimer());
      
      // Set up interval for timer
      const interval = setInterval(() => {
        dispatch(tickTimer());
      }, 1000);
      
      // Clean up on unmount
      return () => {
        clearInterval(interval);
        dispatch(pauseTimer());
      };
    }
  }, [dispatch, currentTimerTeam]);
  
  // Handle timer completion for the current team
  useEffect(() => {
    if (timer.remaining <= 0 && timer.isRunning === false && currentTimerTeam !== null && !bothTeamsFinished) {
      // When timer runs out for the current team
      const otherTeam = currentTimerTeam === 0 ? 1 : 0;
      
      if (otherTeamFinished) {
        // Both teams have finished their turn
        setBothTeamsFinished(true);
        dispatch(setBothTeamsTimedOut(true));
      } else {
        console.log(`Timer finished for team ${currentTimerTeam}, switching to team ${otherTeam}`);
        // Switch to the other team
        setCurrentTimerTeam(otherTeam);
        setOtherTeamFinished(true);
      }
    }
  }, [timer.remaining, timer.isRunning, currentTimerTeam, bothTeamsFinished, otherTeamFinished, dispatch]);

  // Update handleSkipTimer to work with the active team concept
  const handleSkipTimer = () => {
    playSound('button-click');
    
    // If both teams already timed out, do nothing
    if (bothTeamsFinished) return;
    
    // If first team's turn, switch to second team
    if (!otherTeamFinished && currentTimerTeam !== null) {
      const otherTeam = currentTimerTeam === 0 ? 1 : 0;
      setCurrentTimerTeam(otherTeam);
      setOtherTeamFinished(true);
      dispatch(resetTimer()); // Reset timer for other team
    } else {
      // If second team's turn, finish completely
      setBothTeamsFinished(true);
      dispatch(setBothTeamsTimedOut(true));
      dispatch(pauseTimer());
    }
  };
  
  // Reset both timers
  const handleRestartTimers = () => {
    playSound('button-click');
    setCurrentTimerTeam(activeTeamIndex as TeamIndex); // Start with active team
    setOtherTeamFinished(false);
    setBothTeamsFinished(false);
    dispatch(resetTimer());
    dispatch(startTimer());
    dispatch(setBothTeamsTimedOut(false));
  };

  // Answer actions
  const handleRevealAnswer = () => {
    playSound('answer-reveal');
    console.log("Revealing answer. Current active team:", activeTeamIndex);
    
    // Switch to the other team immediately when revealing answer
    const nextTeamIndex = activeTeamIndex === 0 ? 1 : 0;
    console.log(`Switching from team ${activeTeamIndex} to team ${nextTeamIndex} on reveal`);
    dispatch(setActiveTeam(nextTeamIndex));
    
    dispatch(revealAnswer());
    dispatch(pauseTimer());
    dispatch(setGamePhase('answer'));
  };
  
  const handleReturnToBoard = () => {
    playSound('button-click');
    dispatch(returnToBoard({ markAsAnswered: false }));
  };
  
  // Redirect if no question is selected
  useEffect(() => {
    if (!currentQuestion) {
      dispatch(returnToBoard({ markAsAnswered: false }));
    }
  }, [currentQuestion, dispatch]);
  
  // Move the logging useEffect up before any returns
  useEffect(() => {
    console.log("Active Team Index changed to:", activeTeamIndex);
  }, [activeTeamIndex]);
  
  // Add debugging to confirm the active team at component mount
  useEffect(() => {
    console.log("QuestionScreen mounted. Active team index:", activeTeamIndex);
  }, []);
  
  // Handle audio loading and cleanup
  useEffect(() => {
    let newAudioElement: HTMLAudioElement | null = null;
    
    if (currentQuestion?.question?.audio) {
      newAudioElement = new Audio(currentQuestion.question.audio);
      setAudioElement(newAudioElement);
      
      // Add event listeners
      newAudioElement.addEventListener('ended', handleAudioEnded);
      
      // Clean up function for when component unmounts or effect re-runs
      return () => {
        if (newAudioElement) {
          newAudioElement.pause();
          newAudioElement.src = '';
          newAudioElement.removeEventListener('ended', handleAudioEnded);
        }
      };
    }
    
    // Clean up previous audio if no new audio is provided
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, [currentQuestion?.question?.audio, handleAudioEnded]);

  // Control audio playback
  const playAudio = useCallback(() => {
    if (audioElement) {
      audioElement.volume = 0.5; // Set volume (0-1)
      audioElement.play().catch(e => console.error("Error playing audio:", e));
    }
  }, [audioElement]);

  // Add a button or trigger to play audio when needed
  // For example:
  useEffect(() => {
    // Auto-play audio when question is shown
    if (audioElement && currentQuestion) {
      playAudio();
    }
  }, [audioElement, currentQuestion, playAudio]);
  
  // Add this effect to handle video lifecycle
  useEffect(() => {
    // This ensures video persists and doesn't unexpectedly disappear
    if (currentQuestion?.question?.video && videoRef.current) {
      // Setup the video element
      const videoElement = videoRef.current;
      
      // Ensure it's visible
      videoElement.style.display = 'block';
      
      // Add event listeners for debugging
      const handleVideoError = (e: any) => {
        console.error('Video error:', e);
      };
      
      videoElement.addEventListener('error', handleVideoError);
      
      // Cleanup
      return () => {
        videoElement.removeEventListener('error', handleVideoError);
      };
    }
  }, [currentQuestion?.question?.video]);
  
  // Right after your early return if no question (around line 304),
  // add another early return if the answer has been revealed
  if (answerRevealed && currentQuestion) {
    // Render AnswerReveal component for the current question
    return <AnswerReveal />;
  }
  
  // Return early if no question
  if (!currentQuestion) {
    return null;
  }
  
  const { categoryId, questionIndex, question } = currentQuestion;
  const timerPercent = (timer.remaining / timer.duration) * 100;
  const timerTeam = currentTimerTeam !== null ? teams[currentTimerTeam] : null;
  const questionCount = 10; // This should come from your state
  const currentQuestionNumber = questionIndex + 1;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <QuestionContainer>
          <QuestionHeader>
            <QuestionProgress>Question {currentQuestionNumber}/{questionCount}</QuestionProgress>
            <BookmarkButton>🔖</BookmarkButton>
          </QuestionHeader>
          
          <QuestionContent>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <QuestionText>
                <BidirectionalText text={question.question} />
              </QuestionText>
            </motion.div>
            
            {currentQuestion.question.image || currentQuestion.question.video || currentQuestion.question.audio ? (
              <MediaContainer>
                {currentQuestion.question.image && (
                  <QuestionImage 
                    src={currentQuestion.question.image} 
                    alt="Question illustration" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      console.error('Error loading image:', currentQuestion.question.image);
                    }}
                  />
                )}
                
                {currentQuestion.question.video && (
                  <VideoContainer>
                    {isYouTubeUrl(currentQuestion.question.video) ? (
                      <YouTubeEmbed url={currentQuestion.question.video} />
                    ) : (
                      <QuestionVideo 
                        controls
                        autoPlay={false}
                        preload="metadata"
                        onError={(e) => {
                          console.error('Error loading video:', e);
                          e.currentTarget.style.display = 'none';
                        }}
                        ref={videoRef}
                      >
                        <source src={currentQuestion.question.video} />
                        Your browser does not support the video tag.
                      </QuestionVideo>
                    )}
                  </VideoContainer>
                )}
                
                {currentQuestion.question.audio && (
                  <AudioContainer>
                    <QuestionAudio 
                      controls
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        console.error('Error loading audio:', currentQuestion.question.audio);
                      }}
                    >
                      <source src={currentQuestion.question.audio} />
                      Your browser does not support the audio tag.
                    </QuestionAudio>
                  </AudioContainer>
                )}
              </MediaContainer>
            ) : null}
            
            <TimerSection>
              <TimerContainer>
                <TimerLabel>
                  <span>⏱️ Time Remaining</span>
                  <TimerDisplay $isTimeUp={timer.remaining <= 0}>
                    {timer.remaining > 0 ? `00:${timer.remaining.toString().padStart(2, '0')}` : '00:00'}
                  </TimerDisplay>
                </TimerLabel>
                <TimerTrack>
                  <TimerProgress 
                    $percent={timerPercent}
                    $isTimeUp={timer.remaining <= 0}
                  />
                </TimerTrack>
              </TimerContainer>
            
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <TeamInfo>
                  {!bothTeamsFinished && currentTimerTeam !== null && (
                    <>
                      <span>⏱️</span>
                      <span>{teams[currentTimerTeam]?.name}'s turn</span>
                    </>
                  )}
                  {bothTeamsFinished && (
                    <span>⏰ Both teams out of time!</span>
                  )}
                </TeamInfo>
              </motion.div>
            </TimerSection>
            
            <ButtonsContainer>
              <RevealButton
                onClick={handleRevealAnswer}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                🔍 Reveal Answer
              </RevealButton>
              
              <ActionButton
                onClick={handleReturnToBoard}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                🏠 Return to Board
              </ActionButton>
            </ButtonsContainer>
          </QuestionContent>
          
          <BottomControls>
            <ControlStats>
              <StatItem>
                <span>💯</span>
                <span>{question.value} points</span>
              </StatItem>
              <StatItem>
                <span>📊</span>
                <span>50/50</span>
              </StatItem>
            </ControlStats>
            
            <TimerActions>
              <IconButton 
                onClick={handleSkipTimer}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ⏩
              </IconButton>
              <IconButton 
                onClick={handleRestartTimers}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                🔄
              </IconButton>
              <IconButton 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ⏱️
              </IconButton>
            </TimerActions>
          </BottomControls>
        </QuestionContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionScreen; 