import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationContainer = styled(motion.div)`
  position: fixed;
  top: 402px;
  left: 487px;
  width: 898px;
  height: 148px;
  /* Redundant but included for clarity */
  bottom: 550px;
  right: 1385px;
  
  /* Remove transform as we're using absolute positioning */
  transform: none;
  
  /* Ensure dimensions are strictly enforced */
  min-width: 898px;
  max-width: 898px;
  min-height: 148px;
  max-height: 148px;
  
  /* Keep styling */
  background-color: #34495e;
  color: white;
  padding: 20px 30px;
  border-radius: 12px;
  z-index: 1000;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  border: 2px solid #2ecc71;
  margin: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  overflow: hidden;
  
  /* Display settings for content */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const showNotification = (message: string, duration = 4000): void => {
  const event = new CustomEvent('game-notification', { 
    detail: { message, duration } 
  });
  window.dispatchEvent(event);
};

const GameNotification: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleNotification = (event: CustomEvent) => {
      const { message, duration } = event.detail;
      setNotification(message);
      setVisible(true);
      
      setTimeout(() => {
        setVisible(false);
      }, duration);
    };
    
    window.addEventListener('game-notification', handleNotification as EventListener);
    
    return () => {
      window.removeEventListener('game-notification', handleNotification as EventListener);
    };
  }, []);
  
  return (
    <AnimatePresence>
      {visible && notification && (
        <NotificationContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          {notification}
        </NotificationContainer>
      )}
    </AnimatePresence>
  );
};

export default GameNotification; 