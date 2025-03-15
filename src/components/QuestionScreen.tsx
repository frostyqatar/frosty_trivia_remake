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
  width: 100%;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(140, 82, 255, 0.15);
  overflow: hidden;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #8c52ff 0%, #5e17eb 100%);
  color: white;
  padding: 16px 24px;
`;

const CategoryTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  flex-grow: 1;
`;

const PointsDisplay = styled.div`
  background-color: white;
  color: #8c52ff;
  font-size: 28px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 0;
  width: 100%;
`;

const QuestionContent = styled.div`
  flex: 1;
  padding: 32px;
`;

const ButtonsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 24px;
  background-color: #f8f5ff;
  border-left: 1px solid #e6e0f0;
`;

const ActionButton = styled(motion.button)`
  background-color: ${props => props.className === 'reveal' ? '#8c52ff' : '#3498db'};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  min-width: 180px;
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ButtonIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const ButtonText = styled.div`
  text-align: center;
`;

const QuestionText = styled.div`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 32px;
  color: #2c3e50;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-top: 24px;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
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
  const { categoryId, questionIndex, question } = useSelector((state: RootState) => state.currentQuestion);
  const [imageError, setImageError] = useState(false);
  const { musicEnabled, volume } = useSelector((state: RootState) => ({
    musicEnabled: state.musicEnabled,
    volume: state.volume
  }));
  
  // Add this function to handle audio ended event
  const handleAudioEnded = useCallback(() => {
    console.log('Audio playback ended');
    // Add any behavior you want when audio finishes
  }, []);
  
  // Get state from Redux
  const {
    currentQuestion,
    timer,
    teams,
    activeTeamIndex,
    answerRevealed,
    gamePhase
  } = useSelector((state: RootState) => ({
    currentQuestion: state.currentQuestion,
    timer: state.timer,
    teams: state.teams,
    activeTeamIndex: state.activeTeamIndex || 0,
    answerRevealed: state.answerRevealed,
    gamePhase: state.gamePhase,
    musicEnabled: state.musicEnabled,
    volume: state.volume
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
      dispatch(startTimer(60));
      
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
    dispatch(startTimer(60));
    dispatch(setBothTeamsTimedOut(false));
  };

  // Answer actions
  const handleRevealAnswer = () => {
    playSound('button-click');
    dispatch(revealAnswer());
  };
  
  const handleReturnToBoard = () => {
    playSound('button-click');
    dispatch(returnToBoard({ markAsAnswered: false }));
  };
  
  // Redirect if no question is selected
  useEffect(() => {
    if (!question) {
      dispatch(returnToBoard({ markAsAnswered: false }));
    }
  }, [question, dispatch]);
  
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
    
    if (question?.audio) {
      newAudioElement = new Audio(question.audio);
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
  }, [question?.audio, handleAudioEnded]);

  // Control audio playback
  const playAudio = useCallback(() => {
    if (audioElement) {
      audioElement.volume = 0.5; // Set volume (0-1)
      audioElement.play().catch(e => console.error("Error playing audio:", e));
    }
  }, [audioElement]);

  // Remove or modify the existing auto-play effect for audio
  useEffect(() => {
    // Do NOT auto-play audio when question is shown
    // Only set up the audio element, but don't play it automatically
    if (audioElement && question) {
      // Configure the audio but don't auto-play
      audioElement.volume = 0.5;
    }
  }, [audioElement, question]);

  // Add this new effect to handle background music control when media plays/pauses
  useEffect(() => {
    const handleMediaPlay = () => {
      // Mute background music when media starts playing
      dispatch(setVolume(0)); // Or use some other method to mute background music
    };
    
    const handleMediaPause = () => {
      // Allow background music to be resumed when media is paused
      dispatch(setVolume(1)); // Or restore to previous volume level
    };
    
    // Get all audio and video elements in the question
    const mediaElements = document.querySelectorAll('audio, video');
    
    // Add event listeners to each media element
    mediaElements.forEach(element => {
      element.addEventListener('play', handleMediaPlay);
      element.addEventListener('pause', handleMediaPause);
      element.addEventListener('ended', handleMediaPause);
    });
    
    // Cleanup function
    return () => {
      mediaElements.forEach(element => {
        element.removeEventListener('play', handleMediaPlay);
        element.removeEventListener('pause', handleMediaPause);
        element.removeEventListener('ended', handleMediaPause);
      });
    };
  }, [dispatch, question]);

  // Update video handling to ensure it still autoplays
  useEffect(() => {
    if (question?.video && videoRef.current) {
      // Setup the video element
      const videoElement = videoRef.current;
      
      // Ensure it's visible and autoplay is enabled
      videoElement.style.display = 'block';
      videoElement.autoplay = true;
      
      // Event listeners for debugging
      const handleVideoError = (e: any) => {
        console.error('Video error:', e);
      };
      
      videoElement.addEventListener('error', handleVideoError);
      
      // Cleanup
      return () => {
        videoElement.removeEventListener('error', handleVideoError);
      };
    }
  }, [question?.video]);
  
  // Add the effect here, along with other hooks at the top level
  useEffect(() => {
    if (question && question.audio) {
      // Find any audio elements and prevent autoplay
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audioElement => {
        audioElement.autoplay = false;
        audioElement.preload = 'none';
      });
    }
  }, [question]);
  
  // Right after your early return if no question (around line 304),
  // add another early return if the answer has been revealed
  if (answerRevealed && question) {
    // Render AnswerReveal component for the current question
    return <AnswerReveal />;
  }
  
  // Return early if no question
  if (!question) {
    return null;
  }
  
  const timerPercent = (timer.remaining / timer.duration) * 100;
  const timerTeam = currentTimerTeam !== null ? teams[currentTimerTeam] : null;
  const questionCount = 10; // This should come from your state
  const currentQuestionNumber = questionIndex + 1;
  
  const renderMedia = () => {
    if (question.video) {
      // Extract the video ID if it's a YouTube URL
      let videoSrc = question.video;
      let videoId = '';
      
      // Check if it's a YouTube URL
      if (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be')) {
        // Extract video ID from various YouTube URL formats
        if (videoSrc.includes('youtube.com/watch')) {
          // Format: https://www.youtube.com/watch?v=VIDEO_ID
          const urlParams = new URLSearchParams(new URL(videoSrc).search);
          videoId = urlParams.get('v') || '';
        } else if (videoSrc.includes('youtu.be')) {
          // Format: https://youtu.be/VIDEO_ID
          videoId = videoSrc.split('/').pop() || '';
        } else if (videoSrc.includes('youtube.com/embed')) {
          // Format: https://www.youtube.com/embed/VIDEO_ID
          videoId = videoSrc.split('/').pop() || '';
        }
        
        if (videoId) {
          // Create embed URL with autoplay parameter but without mute
          videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
          
          // Return iframe with script to set volume after loading
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
                // Initialize YouTube API
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                
                var player;
                
                // When YouTube API is ready
                window.onYouTubeIframeAPIReady = function() {
                  player = new YT.Player('youtube-player', {
                    events: {
                      'onReady': function(event) {
                        // Set volume to 10%
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
      
      // For non-YouTube videos, show regular iframe
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
    
    // Rest of your media rendering code for images and audio...
  };
  
  // When processing an answer attempt
  const handleTeamAnswer = (teamIndex: TeamIndex) => {
    const team = teams[teamIndex];
    
    // Check if the team is blocked from answering
    if (team.blockedFromAnswering) {
      showNotification(`${team.name} is blocked from answering this question!`);
      playSound('button-click');
      return;
    }
    
    // Rest of the answer handling logic...
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
            <CategoryTitle>{question.category}</CategoryTitle>
            <PointsDisplay>{question.value} نقطة</PointsDisplay>
          </QuestionHeader>
          
          <ContentWrapper>
            <QuestionContent>
              <QuestionText>
                <BidirectionalText text={question.question} />
              </QuestionText>
              
              {question.image && !imageError && (
                <ImageContainer>
                  <img 
                    src={question.image} 
                    alt="Question" 
                    onError={() => setImageError(true)}
                  />
                </ImageContainer>
              )}
              
              {question.video && renderMedia()}
              
              {question.audio && (
                <AudioContainer>
                  <QuestionAudio 
                    controls
                    preload="none"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      console.error('Error loading audio:', question.audio);
                    }}
                  >
                    <source src={question.audio} />
                    Your browser does not support the audio tag.
                  </QuestionAudio>
                </AudioContainer>
              )}
            </QuestionContent>
            
            <ButtonsColumn>
              <ActionButton 
                className="reveal"
                onClick={handleRevealAnswer}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonIcon>👁️</ButtonIcon>
                <ButtonText>إظهار الإجابة</ButtonText>
              </ActionButton>
              
              <ActionButton 
                className="skip"
                onClick={handleSkipTimer}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonIcon>⏩</ButtonIcon>
                <ButtonText>تخطي السؤال</ButtonText>
              </ActionButton>
            </ButtonsColumn>
          </ContentWrapper>
          
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
        </QuestionContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionScreen; 