import React, { useState, useEffect } from 'react';
import GoogleSearchTimer from './GoogleSearchTimer';
import { showNotification } from './common/GameNotification';
import { GoogleSearchTimerEvent } from '../hooks/useAbilities';

const GoogleSearchTimerWrapper: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [teamName, setTeamName] = useState('');
  
  useEffect(() => {
    const handleGoogleSearchTimer = (event: CustomEvent<GoogleSearchTimerEvent>) => {
      const { isActive, teamName } = event.detail;
      
      // If timer is being deactivated (e.g., when answer is revealed)
      if (!isActive && teamName === '') {
        // Hide any active notification by showing an empty notification with 0 duration
        const notificationEvent = new CustomEvent('hide-all-notifications');
        window.dispatchEvent(notificationEvent);
      }
      
      setIsActive(isActive);
      setTeamName(teamName);
    };
    
    window.addEventListener('google-search-timer', handleGoogleSearchTimer as EventListener);
    
    return () => {
      window.removeEventListener('google-search-timer', handleGoogleSearchTimer as EventListener);
    };
  }, []);
  
  const handleTimeUp = () => {
    showNotification(`⏱️ ${teamName}'s Google search time is over!`);
    setIsActive(false);
  };
  
  if (!isActive) return null;
  
  return <GoogleSearchTimer onTimeUp={handleTimeUp} />;
};

export default GoogleSearchTimerWrapper; 