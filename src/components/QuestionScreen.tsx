import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { pauseTimer, revealAnswer, returnToBoard, startTimer, tickTimer, resetTimer, setActiveTeam, resetGame, awardPoints, setBothTeamsTimedOut, setGamePhase, setVolume } from '../store/gameSlice';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { showNotification } from '../utils/notificationUtils';
import { store } from '../store';
import AnswerReveal from './AnswerReveal';
import { TeamIndex } from '../types/game.types';
import { useAbilities } from '../hooks/useAbilities';

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(140, 82, 255, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
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
  display: flex;
  flex-direction: column;
  padding: 32px;
  position: relative;
  
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "question"
      "media"
      "timer"
      "buttons";
    gap: 24px;
  }
`;

const QuestionTextContainer = styled.div`
  font-size: 32px;
  line-height: 1.4;
  margin-bottom: 24px;
  text-align: center;
  width: 100%;
  padding: 16px;
  color: #333;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  grid-area: timer;
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
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  grid-area: buttons;
  
  @media (max-width: 768px) {
    flex-direction: column;
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
  font-size: 24px;
  color: #333;
  font-weight: bold;
  background: #f8f8f8;
  padding: 16px 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 2px solid #8c52ff;
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

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  width: 100%;
  grid-area: media;
  padding: 0;
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

const isYouTubeUrl = (url: string) => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

const YouTubeEmbed = ({ url }: { url: string }) => {
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
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

const Button = styled(motion.button)`
  background-color: #8c52ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
  }
`;

const EmojiSpan = styled.span`
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif;
  font-size: 1.3em;
  display: inline-block;
  vertical-align: middle;
  margin: 0 2px;
`;

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
  
  const handleAudioEnded = useCallback(() => {
    console.log('Audio playback ended');
  }, []);
  
  const { currentQuestion, timer, teams, activeTeamIndex, answerRevealed, gamePhase } = useSelector((state: RootState) => ({
    currentQuestion: state.currentQuestion,
    timer: state.timer,
    teams: state.teams,
    activeTeamIndex: state.activeTeamIndex || 0,
    answerRevealed: state.answerRevealed,
    gamePhase: state.gamePhase
  }));
  
  useEffect(() => {
    if (currentTimerTeam === null) {
      console.log("Starting timer with activeTeamIndex:", activeTeamIndex);
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
        console.log(`Timer finished for team ${currentTimerTeam}, switching to team ${otherTeam}`);
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
    // Play sound first before state updates to ensure it plays reliably
    playSound('answer-reveal');
    
    // Switch active team before revealing answer
    dispatch(setActiveTeam(activeTeamIndex === 0 ? 1 : 0));
    
    // Then go to answer screen
    dispatch(setGamePhase('answer'));
    dispatch(revealAnswer());
    dispatch(pauseTimer());
    
    console.log(`Switching from team ${activeTeamIndex} to ${activeTeamIndex === 0 ? 1 : 0}`);
  };
  
  const handleReturnToBoard = () => {
    playSound('button-click');
    dispatch(returnToBoard({ markAsAnswered: false }));
  };
  
  useEffect(() => {
    if (!currentQuestion) {
      dispatch(returnToBoard({ markAsAnswered: false }));
    }
  }, [currentQuestion, dispatch]);
  
  useEffect(() => {
    console.log("Active Team Index changed to:", activeTeamIndex);
  }, [activeTeamIndex]);
  
  useEffect(() => {
    console.log("QuestionScreen mounted. Active team index:", activeTeamIndex);
  }, []);
  
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

  const playAudio = useCallback(() => {
    if (audioElement) {
      audioElement.volume = 0.5;
      audioElement.play().catch(e => console.error("Error playing audio:", e));
    }
  }, [audioElement]);

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
    if (currentQuestion?.question?.video && videoRef.current) {
      const videoElement = videoRef.current;
      
      videoElement.style.display = 'block';
      videoElement.autoplay = true;
      
      const handleVideoError = (e: any) => {
        console.error('Video error:', e);
      };
      
      videoElement.addEventListener('error', handleVideoError);
      
      return () => {
        videoElement.removeEventListener('error', handleVideoError);
      };
    }
  }, [currentQuestion?.question?.video]);
  
  useEffect(() => {
    if (currentQuestion && currentQuestion.question.audio) {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audioElement => {
        audioElement.autoplay = false;
        audioElement.preload = 'none';
      });
    }
  }, [currentQuestion]);
  
  if (answerRevealed && currentQuestion) {
    return <AnswerReveal />;
  }
  
  if (!currentQuestion) {
    return null;
  }
  
  const { categoryId, questionIndex, question } = currentQuestion;
  const timerPercent = (timer.remaining / timer.duration) * 100;
  const timerTeam = currentTimerTeam !== null ? teams[currentTimerTeam] : null;
  const questionCount = 10;
  const currentQuestionNumber = questionIndex + 1;
  
  const renderMedia = () => {
    if (question.video) {
      let videoSrc = question.video;
      let videoId = '';
      
      if (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be')) {
        if (videoSrc.includes('youtube.com/watch')) {
          const urlParams = new URLSearchParams(new URL(videoSrc).search);
          videoId = urlParams.get('v') || '';
        } else if (videoSrc.includes('youtu.be')) {
          videoId = videoSrc.split('/').pop() || '';
        } else if (videoSrc.includes('youtube.com/embed')) {
          videoId = videoSrc.split('/').pop() || '';
        }
        
        if (videoId) {
          videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
          
          return (
            <MediaContainer>
              <iframe
                id="youtube-player"
                width="100%"
                height="315"
                src={videoSrc}
                title="Video content"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <script dangerouslySetInnerHTML={{ __html: `
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                
                var player;
                
                window.onYouTubeIframeAPIReady = function() {
                  player = new YT.Player('youtube-player', {
                    events: {
                      'onReady': function(event) {
                        event.target.setVolume(10);
                        event.target.playVideo();
                      }
                    }
                  });
                };
              `}} />
            </MediaContainer>
          );
        }
      }
      
      return (
        <MediaContainer>
          <iframe
            width="100%"
            height="315"
            src={videoSrc}
            title="Video content"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </MediaContainer>
      );
    }
    
  };
  
  const handleTeamAnswer = (teamIndex: TeamIndex) => {
    const team = teams[teamIndex];
    
    if (team.blockedFromAnswering) {
      showNotification(`${team.name} is blocked from answering this question!`);
      playSound('button-click');
      return;
    }
    
  };
  
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
          <ControlStats>
              <StatItem>
                <span></span>
                <span>{question.value} points</span>
              </StatItem>
  
            </ControlStats>
            
          </QuestionHeader>
          
          <QuestionContent>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              style={{ gridArea: 'question' }}
            >
              <QuestionTextContainer>
                {currentQuestion?.question?.question?.split(/((?:\p{Emoji}|\p{Emoji_Presentation}|\p{Emoji_Modifier}|\p{Emoji_Modifier_Base}|\p{Emoji_Component})+)/u).map((part: string, i: number) => {
                  const isEmoji = /(?:\p{Emoji}|\p{Emoji_Presentation}|\p{Emoji_Modifier}|\p{Emoji_Modifier_Base}|\p{Emoji_Component})+/u.test(part);
                  return isEmoji ? 
                    <EmojiSpan key={i}>{part}</EmojiSpan> : 
                    <BidirectionalText key={i} text={part} />
                })}
              </QuestionTextContainer>
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
                
                {currentQuestion.question.video && renderMedia()}
                
                {currentQuestion.question.audio && (
                  <AudioContainer>
                    <QuestionAudio 
                      controls
                      preload="none"
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
                </TimerActions>
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
                <span></span>
                <span>{question.value} points</span>
              </StatItem>
  
            </ControlStats>
            
            
          </BottomControls>
        </QuestionContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionScreen; 