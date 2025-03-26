import React, { useState } from 'react';
import styled from 'styled-components';

export interface SoundControlsProps {
  isMusicEnabled: boolean;
  volume: number;
  onToggleMusic: () => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MusicButton = styled.button`
  background: none;
  border: none;
  color: var(--button-text-color, white);
  font-size: 24px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;

const AudioControlsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const VolumeSlider = styled.input`
  position: absolute;
  top: 100%;
  left: 0;
  width: 120px;
  height: 8px;
  margin-top: 8px;
  background-color: var(--card-background, #f1f0fe);
  border-radius: var(--border-radius, 4px);
  outline: none;
  z-index: 10;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  
  &:hover {
    opacity: 1;
    visibility: visible;
  }
`;

const SoundControls: React.FC<SoundControlsProps> = ({
  isMusicEnabled,
  volume,
  onToggleMusic,
  onVolumeChange
}) => {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  
  return (
    <ControlsContainer>
      <MusicButton onClick={onToggleMusic}>
        {isMusicEnabled ? '🔊' : '🔇'}
      </MusicButton>
      
      <AudioControlsContainer
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <MusicButton>
          🎵
        </MusicButton>
        
        <VolumeSlider
          type="range"
          min="0"
          max="100"
          value={volume * 100}
          onChange={onVolumeChange}
          style={{
            opacity: showVolumeSlider ? 1 : 0,
            visibility: showVolumeSlider ? 'visible' : 'hidden'
          }}
        />
      </AudioControlsContainer>
    </ControlsContainer>
  );
};

export default SoundControls;
