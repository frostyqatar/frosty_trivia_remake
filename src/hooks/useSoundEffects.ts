import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export type SoundType = 
  | 'button-click'
  | 'question-reveal'
  | 'answer-reveal'
  | 'ability-chatgpt'
  | 'ability-double'
  | 'ability-google'
  | 'ability-dismiss'
  | 'ability-electric'
  | 'timer-tick'
  | 'victory'
  | 'background-music'
  | 'winner-celebration';

interface SoundMap {
  [key: string]: HTMLAudioElement;
}

// Keep references to active playing sounds
const activeSounds: Record<string, HTMLAudioElement[]> = {};

// Create a singleton background music player that persists across screens
const backgroundMusicPlayer = new Audio('https://cdn.pixabay.com/download/audio/2025/02/27/audio_9c5363b7af.mp3?filename=funny-cartoon-comedy-background-music-306997.mp3');
backgroundMusicPlayer.loop = true;
let musicInitialized = false;

const createSoundMap = (): SoundMap => {
  return {
    'button-click': new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_bf3620f48d.mp3?filename=yay-6120.mp3'),
    'question-reveal': new Audio('https://cdn.pixabay.com/download/audio/2023/03/18/audio_fec1635076.mp3?filename=particles-143023.mp3'),
    'answer-reveal': new Audio('https://cdn.pixabay.com/download/audio/2023/03/18/audio_fec1635076.mp3?filename=particles-143023.mp3'),
    'ability-chatgpt': new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_a6c8d04aa5.mp3?filename=classcified-android-88675.mp3'),
    'ability-double': new Audio('https://cdn.pixabay.com/download/audio/2024/08/07/audio_42938daf19.mp3?filename=sweet-game-over-sound-effect-230470.mp3'),
    'ability-google': new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_e8b2fa25cf.mp3?filename=goodresult-82807.mp3'),
    'ability-dismiss': new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_e8b2fa25cf.mp3?filename=goodresult-82807.mp3'),
    'ability-electric': new Audio('https://cdn.pixabay.com/download/audio/2022/03/25/audio_1d3757234d.mp3?filename=electrical-shock-zap-106412.mp3'),
    'timer-tick': new Audio('https://cdn.pixabay.com/download/audio/2022/03/14/audio_3308d39191.mp3?filename=ticking-timer-65220.mp3'),
    'victory': new Audio('https://cdn.pixabay.com/download/audio/2024/08/07/audio_c11dea5bd4.mp3?filename=victorymale-version-230553.mp3'),
    // Don't recreate background music for each component
    'winner-celebration': new Audio('https://cdn.pixabay.com/download/audio/2022/03/10/audio_2564010374.mp3?filename=tadaa-47995.mp3'),
  };
};

export const useSoundEffects = () => {
  const soundsRef = useRef<SoundMap>({});
  const { volume, musicEnabled } = useSelector((state: RootState) => ({
    volume: state.volume,
    musicEnabled: state.musicEnabled
  }));
  
  // Initialize sounds on first render
  useEffect(() => {
    const sounds = createSoundMap();
    
    // Preload all sounds - background music is handled separately
    Object.entries(sounds).forEach(([key, audio]) => {
      soundsRef.current[key] = audio;
    });
    
    // Add background music to the ref so it's accessible through the same interface
    soundsRef.current['background-music'] = backgroundMusicPlayer;
    
    return () => {
      // Don't immediately stop all sounds on unmount
      // Instead, let them fade out naturally
      Object.values(soundsRef.current).forEach(audio => {
        // Don't touch the background music on unmount
        if (audio !== backgroundMusicPlayer) {
          // Create a fade-out effect
          let vol = audio.volume;
          const fadeOut = setInterval(() => {
            if (vol > 0.05) {
              vol -= 0.05;
              audio.volume = vol;
            } else {
              clearInterval(fadeOut);
              audio.pause();
              audio.currentTime = 0;
            }
          }, 50);
        }
      });
    };
  }, []);
  
  // Update volume and mute status whenever it changes
  useEffect(() => {
    // Apply volume setting to all regular sounds
    Object.values(soundsRef.current).forEach(audio => {
      audio.volume = volume;
      audio.muted = !musicEnabled;
    });
    
    // Also apply to the global background music player
    backgroundMusicPlayer.volume = volume;
    backgroundMusicPlayer.muted = !musicEnabled;
    
    // Also set muted state for any active sounds
    Object.values(activeSounds).forEach(sounds => {
      sounds.forEach(sound => {
        sound.muted = !musicEnabled;
      });
    });
  }, [volume, musicEnabled]);
  
  // Handle music toggling - only for background music
  useEffect(() => {
    // Initialize music only once across the entire app
    if (!musicInitialized && musicEnabled) {
      backgroundMusicPlayer.play().catch(e => console.error('Error playing music:', e));
      musicInitialized = true;
    }
    
    if (musicEnabled) {
      // If it was paused before, resume playing
      if (backgroundMusicPlayer.paused) {
        backgroundMusicPlayer.play().catch(e => console.error('Error playing music:', e));
      }
    } else {
      backgroundMusicPlayer.pause();
    }
  }, [musicEnabled]);
  
  const playSound = useCallback((soundType: SoundType) => {
    // Special case for background music
    if (soundType === 'background-music') {
      if (musicEnabled && backgroundMusicPlayer.paused) {
        backgroundMusicPlayer.play().catch(e => console.error('Error playing music:', e));
      }
      return;
    }
    
    // Normal sound handling for everything else
    if (soundType === 'question-reveal' && window.location.search.includes('noreveal')) {
      return;
    }
    
    // Handle priority sounds with cloning (victory, winner-celebration, answer-reveal, and now question-reveal)
    if (soundType === 'victory' || soundType === 'winner-celebration' || 
        soundType === 'answer-reveal' || soundType === 'question-reveal') {
      const originalSound = soundsRef.current[soundType];
      if (!originalSound) return;
      
      // Create a fresh clone for each play to avoid cutoffs and delays
      const soundClone = new Audio(originalSound.src);
      soundClone.volume = volume;
      soundClone.muted = !musicEnabled; // Apply mute state to new sounds
      
      // Store the clone to track it (except for answer-reveal and question-reveal which don't need tracking)
      if (soundType !== 'answer-reveal' && soundType !== 'question-reveal') {
        if (!activeSounds[soundType]) {
          activeSounds[soundType] = [];
        }
        activeSounds[soundType].push(soundClone);
        
        // Remove from tracking when done
        soundClone.addEventListener('ended', () => {
          activeSounds[soundType] = activeSounds[soundType].filter(s => s !== soundClone);
        });
      }
      
      // Play immediately with high priority
      soundClone.play().catch(e => console.error(`Error playing ${soundType}:`, e));
      return;
    }
    
    // Handle regular sounds
    const sound = soundsRef.current[soundType];
    if (!sound) return;
    
    // Don't play any sounds if muted
    if (!musicEnabled && soundType !== 'button-click') {
      return; // Skip playing non-essential sounds when muted
    }
    
    // For button clicks, allow multiple to play simultaneously
    if (soundType === 'button-click') {
      const clickSound = new Audio(sound.src);
      clickSound.volume = volume;
      clickSound.muted = !musicEnabled; // Apply mute state
      clickSound.play().catch(e => console.error(`Error playing ${soundType}:`, e));
    } else {
      sound.currentTime = 0;
      sound.play().catch(e => console.error(`Error playing ${soundType}:`, e));
    }
  }, [volume, musicEnabled]);
  
  return { playSound };
}; 