import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { RootState } from '../../store';
import { toggleMusic, toggleEffects, setVolume } from '../../store/gameSlice';
import { useSoundEffects } from '../../hooks/useSoundEffects';

// Props interface for the component
interface SoundControlsProps {
  colorMode?: 'light' | 'dark';
}

// Container for the main button and controls
const SoundControlsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 9999;
`;

// Main mute/unmute button
const MuteButton = styled.button<{ colorMode: 'light' | 'dark' }>`
  background: var(--card-background); 
  border: 2px solid var(--border-color);
  color: ${props => props.colorMode === 'light' ? 'var(--text-color)' : 'var(--button-text-color)'};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s;
  z-index: 9999;
  box-shadow: var(--card-shadow);
  margin: 0 10px;
  
  &:hover {
    transform: scale(1.1);
  }
`;

// Popup controls panel
const ControlsPanel = styled(motion.div)`
  position: fixed;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  z-index: 99999; /* Extremely high z-index */
  display: flex;
  flex-direction: column;
  gap: 18px;
  pointer-events: auto;
  isolation: isolate;
  margin: 0;
  transform-origin: top left;
  user-select: none; /* Prevent text selection during drag */
`;

// Add a drag handle
const DragHandle = styled.div`
  height: 6px;
  width: 60px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin: 0 auto 10px auto;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

// Slider component with better styling
const VolumeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e0e0e0;
  outline: none;
  position: relative;
  z-index: 10001;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #0099cc;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    z-index: 10001;
  }
  
  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #0099cc;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    z-index: 10001;
  }
`;

// Container for the volume slider
const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 10002;
`;

// Toggle switch container
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Toggle switch label
const ToggleLabel = styled.span`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Toggle switch component
const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

// Hidden checkbox for toggle
const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: #0099cc;
  }
  
  &:checked + span:before {
    transform: translateX(16px);
  }
`;

// Toggle slider (background)
const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
  }
`;

// Volume label with icon
const VolumeLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Interface to track separate mute states
interface SoundState {
  masterVolume: number;
  musicEnabled: boolean;
  effectsEnabled: boolean;
}

// Interface for panel position
interface PanelPosition {
  x: number;
  y: number;
}

const SoundControls: React.FC<SoundControlsProps> = ({ colorMode = 'dark' }) => {
  const dispatch = useDispatch();
  const { playSound } = useSoundEffects();
  const [showControls, setShowControls] = useState(false);
  const controlsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // State for panel position - persisted in localStorage
  const [panelPosition, setPanelPosition] = useState<PanelPosition>(() => {
    try {
      const savedPosition = localStorage.getItem('soundControlsPosition');
      return savedPosition ? JSON.parse(savedPosition) : { x: 0, y: 0 };
    } catch (e) {
      return { x: 0, y: 0 };
    }
  });
  
  // Get current state from Redux
  const { volume: reduxVolume, musicEnabled: reduxMusicEnabled, effectsEnabled: reduxEffectsEnabled } = useSelector((state: RootState) => ({
    volume: state.volume,
    musicEnabled: state.musicEnabled,
    effectsEnabled: state.effectsEnabled
  }));
  
  // Local state for sound settings
  const [soundState, setSoundState] = useState<SoundState>({
    masterVolume: reduxVolume * 100,
    musicEnabled: reduxMusicEnabled,
    effectsEnabled: reduxEffectsEnabled
  });
  
  // Update local state when Redux state changes
  useEffect(() => {
    setSoundState(prev => ({
      ...prev,
      masterVolume: reduxVolume * 100,
      musicEnabled: reduxMusicEnabled,
      effectsEnabled: reduxEffectsEnabled
    }));
  }, [reduxVolume, reduxMusicEnabled, reduxEffectsEnabled]);
  
  // Save panel position to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('soundControlsPosition', JSON.stringify(panelPosition));
    } catch (e) {
      console.error('Failed to save panel position', e);
    }
  }, [panelPosition]);
  
  // Handle outside clicks to close the panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (controlsRef.current && !controlsRef.current.contains(event.target as Node)) {
        setShowControls(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Toggle the controls panel
  const handleToggleControls = () => {
    setShowControls(prev => !prev);
    playSound('button-click');
  };
  
  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setSoundState(prev => ({ ...prev, masterVolume: newVolume }));
    dispatch(setVolume(newVolume / 100));
  };
  
  // Handle music toggle
  const handleMusicToggle = () => {
    dispatch(toggleMusic());
    playSound('button-click');
  };
  
  // Handle effects toggle
  const handleEffectsToggle = () => {
    dispatch(toggleEffects());
    playSound('button-click');
  };
  
  // Determine button icon based on state
  const getButtonIcon = () => {
    if (soundState.masterVolume === 0) return '🔇';
    if (soundState.masterVolume < 50) return '🔉';
    return '🔊';
  };
  
  // Function to get initial panel position
  const getInitialPanelPosition = () => {
    if (buttonRef.current && !panelPosition.x && !panelPosition.y) {
      const rect = buttonRef.current.getBoundingClientRect();
      return {
        x: rect.left,
        y: rect.bottom + 10,
      };
    }
    return panelPosition;
  };
  
  // Handle drag end
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const newPosition = {
      x: panelPosition.x + info.offset.x,
      y: panelPosition.y + info.offset.y
    };
    
    setPanelPosition(newPosition);
  };
  
  return (
    <SoundControlsContainer 
      ref={controlsRef}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <MuteButton 
        ref={buttonRef}
        colorMode={colorMode} 
        onClick={handleToggleControls}
      >
        {getButtonIcon()}
      </MuteButton>
      
      <AnimatePresence>
        {showControls && (
          <ControlsPanel
            initial={{ 
              opacity: 0, 
              scale: 0.9, 
              x: getInitialPanelPosition().x, 
              y: getInitialPanelPosition().y 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: panelPosition.x,
              y: panelPosition.y
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            drag
            dragConstraints={{ left: 0, right: window.innerWidth - 300, top: 0, bottom: window.innerHeight - 250 }}
            dragElastic={0}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            onClick={(e) => e.stopPropagation()}
          >
            <DragHandle />
            <SliderContainer onClick={(e) => e.stopPropagation()}>
              <VolumeLabel>
                {getButtonIcon()} Volume
              </VolumeLabel>
              <VolumeSlider
                type="range"
                min="0"
                max="100"
                value={soundState.masterVolume}
                onChange={handleVolumeChange}
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
              />
            </SliderContainer>
            
            <ToggleContainer>
              <ToggleLabel>
                🎵 Background Music
              </ToggleLabel>
              <ToggleSwitch>
                <ToggleInput 
                  type="checkbox" 
                  checked={soundState.musicEnabled}
                  onChange={handleMusicToggle}
                />
                <ToggleSlider />
              </ToggleSwitch>
            </ToggleContainer>
            
            <ToggleContainer>
              <ToggleLabel>
                🔔 Sound Effects
              </ToggleLabel>
              <ToggleSwitch>
                <ToggleInput 
                  type="checkbox" 
                  checked={soundState.effectsEnabled}
                  onChange={handleEffectsToggle}
                />
                <ToggleSlider />
              </ToggleSwitch>
            </ToggleContainer>
          </ControlsPanel>
        )}
      </AnimatePresence>
    </SoundControlsContainer>
  );
};

export default SoundControls; 