import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { pauseTimer, revealAnswer, returnToBoard, startTimer, tickTimer, resetTimer, setActiveTeam, resetGame, awardPoints, setBothTeamsTimedOut, setGamePhase, setVolume, setPointsMultiplier } from '../store/gameSlice';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { showNotification } from '../utils/notificationUtils';
import { TeamIndex } from '../types/game.types';
import { useAbilities } from '../hooks/useAbilities';
import AnswerReveal from './AnswerReveal'; // Added missing import
import { triggerGoogleSearchTimer } from '../hooks/useAbilities'; // Import the trigger function

// Shared styles
const cardStyles = css`
  background: var(--card-background, white);
  border-radius: var(--border-radius, 16px);
  box-shadow: var(--card-shadow, 0 10px 25px rgba(0, 0, 0, 0.1));
`;

const QuestionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  ${cardStyles}
  width: 100%;
  max-width: 1000px;
  
  margin: 0 auto;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
`;

const QuestionHeader = styled.div`
  width: 100%;
  background: var(--primary-gradient, linear-gradient(135deg, var(--primary-color), var(--primary-dark)));
  color: white;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
`;

const CategoryTag = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  backdrop-filter: blur(4px);
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const PointsDisplay = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    font-family: var(--header-font);
  }
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

const QuestionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "question"
    "media"
    "timer"
    "buttons";
  gap: 1.5rem;
  padding: 1.75rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 1.25rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const QuestionTextWrapper = styled(motion.div)`
  grid-area: question;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const QuestionTextContainer = styled.div`
  font-size: 3rem;
  line-height: 1.4;
  text-align: center;
  color: var(--text-color);
  font-weight: 600;
  padding: 1rem;
  border-radius: var(--border-radius);
  background: var(--card-background);
  box-shadow: var(--card-shadow, 0 4px 20px rgba(0, 0, 0, 0.06));
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    padding: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.75rem;
  }
`;

const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: timer;
  border-radius: var(--border-radius);
  padding: 1.25rem;
  background: var(--card-background);
  box-shadow: var(--card-shadow, 0 4px 20px rgba(0, 0, 0, 0.06));
`;

const TimerContainer = styled.div`
  width: 100%;
`;

const TimerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const TimerLabelText = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const TimerDisplay = styled.div<{ $isTimeUp: boolean }>`
  color: ${props => props.$isTimeUp ? 'var(--danger-color)' : 'var(--text-color)'};
  font-weight: 700;
  font-size: 1.25rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;

const TimerTrack = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TimerProgress = styled.div<{ $percent: number; $isTimeUp: boolean }>`
  height: 100%;
  width: ${props => props.$percent}%;
  background: ${props => props.$isTimeUp 
    ? 'var(--danger-color)' 
    : 'var(--primary-color)'};
  border-radius: 6px;
  transition: width 0.3s linear;
`;

const TeamInfoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: rgba(var(--primary-color-rgb, 58, 134, 255), 0.1);
`;

const TimerActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  grid-area: buttons;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ActionButton = styled(motion.button)`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(var(--primary-color-rgb, 58, 134, 255), 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(var(--primary-color-rgb, 58, 134, 255), 0.4);
  }
  
  &:disabled {
    background: #d1d1d1;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const RevealButton = styled(ActionButton)`
  background: var(--secondary-color);
  box-shadow: 0 4px 15px rgba(var(--secondary-color-rgb, 131, 56, 236), 0.3);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(var(--secondary-color-rgb, 131, 56, 236), 0.4);
  }
`;

const MediaContainer = styled(motion.div)`
  grid-area: media;
  border-radius: var(--border-radius);
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MediaWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: auto;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.03);
  overflow: hidden;
`;

const QuestionImage = styled.img`
  max-width: 100%;
  max-height: 571px;
  width: auto;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  display: block;
  border-radius: 8px;
  transition: filter 0.3s ease;
`;

const AudioContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: var(--border-radius);
`;

const IconButton = styled(motion.button)`
  background-color: var(--card-background);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  color: var(--text-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: rgba(var(--primary-color-rgb, 58, 134, 255), 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmojiSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.1em;
  margin: 0 2px;
`;

const RevealQuestionButton = styled(motion.button)`
  background-color: var(--primary-color, #3498db);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 20px auto;
  display: block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const UnblurButton = styled(motion.button)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }
`;

// Main component
const QuestionScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { playSound } = useSoundEffects();
  const [currentTimerTeam, setCurrentTimerTeam] = useState<TeamIndex | null>(null);
  const [otherTeamFinished, setOtherTeamFinished] = useState(false);
  const [bothTeamsFinished, setBothTeamsFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { switchTeam } = useAbilities();
  const [questionHidden, setQuestionHidden] = useState(true);
  const [imageBlurred, setImageBlurred] = useState(true);
  const questionContainerRef = useRef<HTMLDivElement>(null);
  
  const { currentQuestion, timer, teams, activeTeamIndex, answerRevealed, gamePhase } = useSelector((state: RootState) => ({
    currentQuestion: state.currentQuestion,
    timer: state.timer,
    teams: state.teams,
    activeTeamIndex: state.activeTeamIndex || 0,
    answerRevealed: state.answerRevealed,
    gamePhase: state.gamePhase
  }));
  
  // Add this effect to auto-scroll to the question card when component mounts
  useEffect(() => {
    if (questionContainerRef.current) {
      // Get the element's position relative to the viewport
      const rect = questionContainerRef.current.getBoundingClientRect();
      // Calculate where to scroll - either to the element's top or with a small offset
      const scrollToY = window.scrollY + rect.top - 10; // 10px offset from top
      
      // Smooth scroll to the position
      window.scrollTo({
        top: scrollToY,
        behavior: 'smooth'
      });
    }
  }, []);
  
  // Timer handlers and effects
  useEffect(() => {
    if (currentTimerTeam === null) {
      setCurrentTimerTeam(activeTeamIndex as TeamIndex);
    }
  }, [activeTeamIndex, currentTimerTeam]);
  
  useEffect(() => {
    if (currentTimerTeam !== null) {
      dispatch(resetTimer());
      dispatch(startTimer(60));
      
      const interval = setInterval(() => {
        dispatch(tickTimer());
      }, 1000);
      
      return () => {
        clearInterval(interval);
        dispatch(pauseTimer());
      };
    }
  }, [dispatch, currentTimerTeam]);
  
  useEffect(() => {
    if (timer.remaining <= 0 && timer.isRunning === false && currentTimerTeam !== null && !bothTeamsFinished) {
      const otherTeam = currentTimerTeam === 0 ? 1 : 0;
      
      if (otherTeamFinished) {
        setBothTeamsFinished(true);
        dispatch(setBothTeamsTimedOut(true));
      } else {
        setCurrentTimerTeam(otherTeam);
        setOtherTeamFinished(true);
      }
    }
  }, [timer.remaining, timer.isRunning, currentTimerTeam, bothTeamsFinished, otherTeamFinished, dispatch]);

  const handleSkipTimer = () => {
    playSound('button-click');
    
    if (bothTeamsFinished) return;
    
    if (!otherTeamFinished && currentTimerTeam !== null) {
      const otherTeam = currentTimerTeam === 0 ? 1 : 0;
      setCurrentTimerTeam(otherTeam);
      setOtherTeamFinished(true);
      dispatch(resetTimer());
    } else {
      setBothTeamsFinished(true);
      dispatch(setBothTeamsTimedOut(true));
      dispatch(pauseTimer());
    }
  };
  
  const handleToggleTimer = () => {
    playSound('button-click');
    if (timer.isRunning) {
      dispatch(pauseTimer());
    } else if (timer.remaining > 0) {
      dispatch(startTimer(timer.remaining));
    }
  };
  
  const handleRestartTimers = () => {
    playSound('button-click');
    setCurrentTimerTeam(activeTeamIndex as TeamIndex);
    setOtherTeamFinished(false);
    setBothTeamsFinished(false);
    dispatch(resetTimer());
    dispatch(startTimer(60));
    dispatch(setBothTeamsTimedOut(false));
  };

  const handleRevealAnswer = () => {
    playSound('answer-reveal');
    dispatch(setActiveTeam(activeTeamIndex === 0 ? 1 : 0));
    dispatch(setGamePhase('answer'));
    dispatch(revealAnswer());
    dispatch(pauseTimer());
    
    // Stop the Google search timer and notifications when answer is revealed
    triggerGoogleSearchTimer(false, '');
  };
  
  const handleReturnToBoard = () => {
    playSound('button-click');
    dispatch(returnToBoard({ markAsAnswered: false }));
    
    // Also stop the Google search timer when returning to board
    triggerGoogleSearchTimer(false, '');
  };

  // Media and cleanup effects
  const handleAudioEnded = useCallback(() => {}, []);
  
  useEffect(() => {
    if (!currentQuestion) {
      dispatch(returnToBoard({ markAsAnswered: false }));
    }
  }, [currentQuestion, dispatch]);
  
  useEffect(() => {
    let newAudioElement: HTMLAudioElement | null = null;
    
    if (currentQuestion?.question?.audio) {
      newAudioElement = new Audio(currentQuestion.question.audio);
      setAudioElement(newAudioElement);
      
      newAudioElement.addEventListener('ended', handleAudioEnded);
      
      return () => {
        if (newAudioElement) {
          newAudioElement.pause();
          newAudioElement.src = '';
          newAudioElement.removeEventListener('ended', handleAudioEnded);
        }
      };
    }
    
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, [currentQuestion?.question?.audio, handleAudioEnded]);

  useEffect(() => {
    if (audioElement && currentQuestion) {
      audioElement.volume = 0.5;
    }
  }, [audioElement, currentQuestion]);

  useEffect(() => {
    const handleMediaPlay = () => {
      dispatch(setVolume(0));
    };
    
    const handleMediaPause = () => {
      dispatch(setVolume(1));
    };
    
    const mediaElements = document.querySelectorAll('audio, video');
    
    mediaElements.forEach(element => {
      element.addEventListener('play', handleMediaPlay);
      element.addEventListener('pause', handleMediaPause);
      element.addEventListener('ended', handleMediaPause);
    });
    
    return () => {
      mediaElements.forEach(element => {
        element.removeEventListener('play', handleMediaPlay);
        element.removeEventListener('pause', handleMediaPause);
        element.removeEventListener('ended', handleMediaPause);
      });
    };
  }, [dispatch, currentQuestion]);

  useEffect(() => {
    if (currentQuestion?.question?.hideQuestion) {
      setQuestionHidden(true);
    } else {
      setQuestionHidden(false);
    }
  }, [currentQuestion]);

  useEffect(() => {
    setImageBlurred(true);
  }, [currentQuestion]);

  // Render conditions
  if (answerRevealed && currentQuestion) {
    return <AnswerReveal />;
  }
  
  if (!currentQuestion) {
    return null;
  }
  
  const { categoryId, questionIndex, question } = currentQuestion;
  const timerPercent = (timer.remaining / timer.duration) * 100;
  const timerTeam = currentTimerTeam !== null ? teams[currentTimerTeam] : null;
  
  // Media rendering
  const renderMedia = () => {
    if (!question.image && !question.video && !question.audio) return null;
    
    return (
      <MediaContainer
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <MediaWrapper style={{ maxWidth: '622px', margin: '0 auto' }}>
          {question.image && (
            <ImageContainer>
              <QuestionImage 
                src={question.image} 
                alt="Question illustration"
                style={{
                  filter: question.imageBlur && imageBlurred ? `blur(${question.imageBlur}px)` : 'none',
                  maxHeight: '571px', 
                  maxWidth: '622px'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {question.imageBlur && imageBlurred && (
                <UnblurButton
                  onClick={handleUnblurImage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔍 Unblur Image
                </UnblurButton>
              )}
            </ImageContainer>
          )}
          
          {question.video && (
            <iframe
              width="100%"
              height="400"
              style={{ maxWidth: '622px', maxHeight: '571px' }}
              src={isYouTubeUrl(question.video) ? 
                `https://www.youtube.com/embed/${getYouTubeVideoId(question.video)}?autoplay=1&enablejsapi=1` : 
                question.video
              }
              title="Video content"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          
          {question.audio && (
            <AudioContainer>
              <audio 
                controls
                preload="none"
                style={{ width: '100%', maxWidth: '622px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              >
                <source src={question.audio} />
                Your browser does not support the audio element.
              </audio>
            </AudioContainer>
          )}
        </MediaWrapper>
      </MediaContainer>
    );
  };
  
  // Helper for YouTube URLs
  function isYouTubeUrl(url: string) {
    return url.includes('youtube.com') || url.includes('youtu.be');
  }
  
  function getYouTubeVideoId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  }
  
  const handleRevealQuestion = () => {
    setQuestionHidden(false);
  };

  const handleUnblurImage = () => {
    setImageBlurred(false);
    playSound('button-click');
  };
  
  const handleCorrectAnswer = (teamIndex: 0 | 1) => {
    playSound('button-click');
    
    // Calculate points based on current question value and team's multiplier
    const points = currentQuestion.value * teams[teamIndex].pointsMultiplier;
    
    // Award points to the team
    dispatch(awardPoints({ teamIndex, points }));
    
    // Reset multiplier (if it was doubled)
    if (teams[teamIndex].pointsMultiplier > 1) {
      dispatch(setPointsMultiplier({ teamIndex, multiplier: 1 }));
    }
    
    // Stop the Google search timer when a team answers correctly
    triggerGoogleSearchTimer(false, '');
    
    // Return to board with this question marked as answered
    dispatch(returnToBoard({ markAsAnswered: true }));
  };
  
  const handleWrongAnswer = (teamIndex: 0 | 1) => {
    playSound('button-click');
    
    // Switch to the other team
    const otherTeamIndex = teamIndex === 0 ? 1 : 0;
    dispatch(setActiveTeam(otherTeamIndex));
    
    // Stop the Google search timer when a team answers incorrectly
    triggerGoogleSearchTimer(false, '');
  };
  
  return (
    <AnimatePresence>
      <QuestionContainer
        ref={questionContainerRef}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
<QuestionHeader>
  <PointsDisplay style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    fontWeight: "bold",
    margin: "0 auto"
  }}>
    <span>{question.value}</span> points
  </PointsDisplay>
</QuestionHeader>


        
        <QuestionContent>
          <QuestionTextWrapper
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {currentQuestion?.question?.hideQuestion && questionHidden ? (
              <RevealQuestionButton
                onClick={handleRevealQuestion}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🔍 Reveal Question
              </RevealQuestionButton>
            ) : (
              <QuestionTextContainer>
                <BidirectionalText text={question.question} />
              </QuestionTextContainer>
            )}
          </QuestionTextWrapper>
          
          {renderMedia()}
          
          <TimerSection>
            <TimerHeader>
              <TimerLabelText>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Time Remaining
              </TimerLabelText>
              <TimerDisplay $isTimeUp={timer.remaining <= 0}>
                {timer.remaining > 0 ? `${Math.floor(timer.remaining / 60)}:${(timer.remaining % 60).toString().padStart(2, '0')}` : '0:00'}
              </TimerDisplay>
            </TimerHeader>
            
            <TimerTrack>
              <TimerProgress 
                $percent={timerPercent}
                $isTimeUp={timer.remaining <= 0}
              />
            </TimerTrack>
            
            <TeamInfoContainer>
              <TeamInfo>
                {!bothTeamsFinished && currentTimerTeam !== null ? (
                  <>Team: {teams[currentTimerTeam]?.name}</>
                ) : (
                  <>Time expired</>
                )}
              </TeamInfo>
              
              <TimerActions>
                <IconButton 
                  onClick={handleToggleTimer}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={timer.remaining <= 0 || bothTeamsFinished}
                  aria-label={timer.isRunning ? "Pause timer" : "Resume timer"}
                >
                  {timer.isRunning ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 4H6V20H10V4Z" fill="currentColor" />
                      <path d="M18 4H14V20H18V4Z" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4L18 12L6 20V4Z" fill="currentColor" />
                    </svg>
                  )}
                </IconButton>
                
                <IconButton 
                  onClick={handleSkipTimer}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Skip timer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5L21 12L13 19V5Z" fill="currentColor" />
                    <path d="M3 5L11 12L3 19V5Z" fill="currentColor" />
                  </svg>
                </IconButton>
                
                <IconButton 
                  onClick={handleRestartTimers}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Restart timer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C9.26349 20 6.85738 18.6778 5.42035 16.5698" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 4L4 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </IconButton>
              </TimerActions>
            </TeamInfoContainer>
          </TimerSection>
          
          <ButtonsContainer>
            <RevealButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRevealAnswer}
            >
              🔍 كشف الإجابة
            </RevealButton>
            
            <ActionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleReturnToBoard}
            >
              🏠 العودة للوحة
            </ActionButton>
          </ButtonsContainer>
        </QuestionContent>
      </QuestionContainer>
    </AnimatePresence>
  );
};

export default QuestionScreen;