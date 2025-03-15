import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TimerContainer = styled(motion.div)`
  position: fixed;
  top: 402px;
  left: 487px;
  width: 898px;
  height: 148px;
  z-index: 1001;
  background-color: #34495e;
  color: white;
  padding: 15px 25px;
  border-radius: 12px;
  border: 2px solid #2ecc71;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: none;
  
  /* Ensure dimensions are strictly enforced */
  min-width: 898px;
  max-width: 898px;
  min-height: 148px;
  max-height: 148px;
`;

const TimerTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: -8px;
`;

const TimerDisplay = styled.div<{ $timeRunningOut: boolean }>`
  font-size: 54px;
  font-weight: bold;
  color: ${props => props.$timeRunningOut ? '#ff5252' : '#2ecc71'};
  line-height: 1;
  margin-bottom: 15px;
`;

const ProgressBar = styled.div`
  width: 80%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  margin-top: 0px;
  overflow: hidden;
`;

const Progress = styled.div<{ $percent: number; $timeRunningOut: boolean }>`
  height: 100%;
  width: ${props => props.$percent}%;
  background-color: ${props => props.$timeRunningOut ? '#ff5252' : '#2ecc71'};
  border-radius: 5px;
  transition: width 1s linear;
`;

interface GoogleSearchTimerProps {
  duration?: number;
  onTimeUp?: () => void;
}

const GoogleSearchTimer: React.FC<GoogleSearchTimerProps> = ({ 
  duration = 25,
  onTimeUp
}) => {
  const [seconds, setSeconds] = useState(duration);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // When timer reaches zero
      if (onTimeUp) onTimeUp();
      
      // Hide the timer after 2 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  }, [seconds, onTimeUp]);
  
  const progressPercent = (seconds / duration) * 100;
  const timeRunningOut = seconds <= 5;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <TimerContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          <TimerTitle>🔍 Google Search Time</TimerTitle>
          <TimerDisplay $timeRunningOut={timeRunningOut}>
            {seconds}s
          </TimerDisplay>
          <ProgressBar>
            <Progress 
              $percent={progressPercent} 
              $timeRunningOut={timeRunningOut} 
            />
          </ProgressBar>
        </TimerContainer>
      )}
    </AnimatePresence>
  );
};

export default GoogleSearchTimer; 