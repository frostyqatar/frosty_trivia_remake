import { useCallback, useEffect, useRef, useState } from 'react';
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
  | 'winner-celebration'
  | 'team-award';

interface SoundMap {
  [key: string]: HTMLAudioElement;
}

// Track user interaction state for the entire app
let userHasInteracted = false;

// Track if sounds have been initialized
let soundsInitialized = false;

// Store sound URLs for consistent access
const SOUND_URLS: Record<SoundType, string> = {
  'button-click': 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_bf3620f48d.mp3?filename=yay-6120.mp3',
  'question-reveal': 'https://cdn.pixabay.com/download/audio/2023/03/18/audio_fec1635076.mp3?filename=particles-143023.mp3',
  'answer-reveal': 'https://cdn.pixabay.com/download/audio/2023/03/18/audio_fec1635076.mp3?filename=particles-143023.mp3',
  'ability-chatgpt': 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_a6c8d04aa5.mp3?filename=classcified-android-88675.mp3',
  'ability-double': 'https://cdn.pixabay.com/download/audio/2024/08/07/audio_42938daf19.mp3?filename=sweet-game-over-sound-effect-230470.mp3',
  'ability-google': 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_e8b2fa25cf.mp3?filename=goodresult-82807.mp3',
  'ability-dismiss': 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_e8b2fa25cf.mp3?filename=goodresult-82807.mp3',
  'ability-electric': 'https://cdn.pixabay.com/download/audio/2022/03/25/audio_1d3757234d.mp3?filename=electrical-shock-zap-106412.mp3',
  'timer-tick': 'https://cdn.pixabay.com/download/audio/2022/03/14/audio_3308d39191.mp3?filename=ticking-timer-65220.mp3',
  'victory': 'https://cdn.pixabay.com/download/audio/2024/08/07/audio_c11dea5bd4.mp3?filename=victorymale-version-230553.mp3',
  'winner-celebration': 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_2564010374.mp3?filename=tadaa-47995.mp3',
  'team-award': 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_e8b2fa25cf.mp3?filename=goodresult-82807.mp3',
  'background-music': 'https://cdn.pixabay.com/download/audio/2025/02/27/audio_9c5363b7af.mp3?filename=funny-cartoon-comedy-background-music-306997.mp3'
};

// Keep references to active playing sounds
const activeSounds: Record<string, HTMLAudioElement[]> = {};

// Create pre-loaded audio elements for critical sounds to avoid delays
const preloadedSounds: Record<string, HTMLAudioElement> = {};

// Create a singleton background music player that persists across screens
const backgroundMusicPlayer = new Audio(SOUND_URLS['background-music']);
backgroundMusicPlayer.loop = true;
backgroundMusicPlayer.volume = 0.5;
let musicInitialized = false;

// Add user interaction listeners to the document - handle autoplay restrictions
if (typeof window !== 'undefined') {
  const userInteractionEvents = ['click', 'touchstart', 'keydown'];
  
  const handleUserInteraction = () => {
    if (!userHasInteracted) {
      userHasInteracted = true;
      console.log('User has interacted with the page, audio can now play');
      
      // Try to initialize music after user interaction
      if (soundsInitialized && !musicInitialized) {
        initializeBackgroundMusic();
      }
      
      // Remove event listeners once we've captured interaction
      userInteractionEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    }
  };
  
  userInteractionEvents.forEach(event => {
    document.addEventListener(event, handleUserInteraction);
  });
}

// Initialize background music after user interaction
function initializeBackgroundMusic() {
  if (!musicInitialized && userHasInteracted) {
    try {
      backgroundMusicPlayer.play()
        .then(() => {
          musicInitialized = true;
          console.log('Background music initialized successfully');
        })
        .catch(e => {
          console.error('Error initializing background music:', e);
          // Try again later
          setTimeout(initializeBackgroundMusic, 1000);
        });
    } catch (e) {
      console.error('Exception initializing background music:', e);
    }
  }
}

// Create a new audio element with proper error handling
function createAudioElement(soundType: string): HTMLAudioElement | null {
  if (!(soundType in SOUND_URLS)) {
    console.error(`Sound URL not found for type: ${soundType}`);
    return null;
  }
  
  try {
    const audio = new Audio(SOUND_URLS[soundType as SoundType]);
    audio.preload = 'auto';
    return audio;
  } catch (e) {
    console.error(`Error creating audio element for ${soundType}:`, e);
    return null;
  }
}

// Preload critical sounds with proper error handling
function preloadCriticalSounds() {
  if (soundsInitialized) return;
  
  const criticalSounds = [
    'button-click',
    'question-reveal',
    'answer-reveal',
    'team-award'
  ];
  
  criticalSounds.forEach(soundType => {
    try {
      const audio = createAudioElement(soundType);
      if (audio) {
        // Ensure the sound is preloaded
        audio.load();
        preloadedSounds[soundType] = audio;
      }
    } catch (e) {
      console.error(`Error preloading ${soundType}:`, e);
    }
  });
  
  soundsInitialized = true;
  console.log('Critical sounds preloaded');
}

// Initialize sound system
preloadCriticalSounds();

// Create a sound map with proper error handling
const createSoundMap = (): SoundMap => {
  const soundMap: SoundMap = {};
  
  (Object.keys(SOUND_URLS) as SoundType[]).forEach(soundType => {
    if (soundType === 'background-music') return; // Background music is handled separately
    
    try {
      // Use preloaded sounds if available
      if (preloadedSounds[soundType]) {
        soundMap[soundType] = preloadedSounds[soundType];
      } else {
        const audio = createAudioElement(soundType);
        if (audio) {
          soundMap[soundType] = audio;
        }
      }
    } catch (e) {
      console.error(`Error creating sound ${soundType} for sound map:`, e);
    }
  });
  
  return soundMap;
};

export const useSoundEffects = () => {
  const soundsRef = useRef<SoundMap>({});
  const [isReady, setIsReady] = useState(false);
  const { volume, musicEnabled } = useSelector((state: RootState) => ({
    volume: state.volume,
    musicEnabled: state.musicEnabled
  }));
  
  // Initialize sounds on first render
  useEffect(() => {
    try {
      // Create the sound map
      const sounds = createSoundMap();
      soundsRef.current = sounds;
      
      // Set volume for all sounds
      Object.values(soundsRef.current).forEach(audio => {
        if (audio) {
          audio.volume = volume;
        }
      });
      
      // Add background music to reference
      soundsRef.current['background-music'] = backgroundMusicPlayer;
      
      // Mark sounds as ready
      setIsReady(true);
      
      // Try to play background music if user has already interacted
      if (userHasInteracted && musicEnabled && !musicInitialized) {
        initializeBackgroundMusic();
      }
      
      return () => {
        // Clean up sounds on unmount
        Object.values(soundsRef.current).forEach(audio => {
          if (audio && audio !== backgroundMusicPlayer) {
            try {
              audio.pause();
              audio.currentTime = 0;
            } catch (e) {
              console.error('Error cleaning up audio:', e);
            }
          }
        });
      };
    } catch (e) {
      console.error('Error initializing sound effects:', e);
    }
  }, []);
  
  // Update volume and mute status whenever it changes
  useEffect(() => {
    try {
      // Apply volume setting to all sounds
      Object.values(soundsRef.current).forEach(audio => {
        if (audio) {
          audio.volume = volume;
          audio.muted = !musicEnabled;
        }
      });
      
      // Apply to background music player
      backgroundMusicPlayer.volume = volume;
      backgroundMusicPlayer.muted = !musicEnabled;
      
      // Apply to active sounds
      Object.values(activeSounds).forEach(sounds => {
        sounds.forEach(sound => {
          if (sound) {
            sound.volume = volume;
            sound.muted = !musicEnabled;
          }
        });
      });
    } catch (e) {
      console.error('Error updating volume settings:', e);
    }
  }, [volume, musicEnabled]);
  
  // Handle music toggling
  useEffect(() => {
    try {
      if (musicEnabled) {
        if (userHasInteracted && !musicInitialized) {
          initializeBackgroundMusic();
        } else if (backgroundMusicPlayer.paused && musicInitialized) {
          backgroundMusicPlayer.play().catch(e => {
            console.error('Error resuming background music:', e);
          });
        }
      } else if (backgroundMusicPlayer && !backgroundMusicPlayer.paused) {
        backgroundMusicPlayer.pause();
      }
    } catch (e) {
      console.error('Error toggling music:', e);
    }
  }, [musicEnabled]);
  
  // Play sound function with improved reliability
  const playSound = useCallback((soundType: SoundType) => {
    // Skip if no user interaction yet - but don't show warnings to reduce console noise
    if (!userHasInteracted && soundType !== 'button-click') {
      // Silent fail for autoplay restrictions
      return;
    }
    
    try {
      // Update user interaction state for button clicks
      if (soundType === 'button-click') {
        userHasInteracted = true;
      }
      
      // Special case for background music
      if (soundType === 'background-music') {
        if (musicEnabled && userHasInteracted) {
          if (!musicInitialized) {
            initializeBackgroundMusic();
          } else if (backgroundMusicPlayer.paused) {
            backgroundMusicPlayer.play().catch(() => {});
          }
        }
        return;
      }
      
      // Don't play non-critical sounds when muted
      if (!musicEnabled && soundType !== 'button-click') {
        return;
      }
      
      // Skip question-reveal if noreveal param is in URL
      if (soundType === 'question-reveal' && window.location.search.includes('noreveal')) {
        return;
      }
      
      // All sounds now get a new instance for reliable, immediate playback
      // This prevents random delayed sound playback
      try {
        // Get sound URL directly from our constant mapping
        const soundUrl = SOUND_URLS[soundType];
        if (!soundUrl) return;
        
        // Create a fresh instance for immediate playback
        const soundClone = new Audio(soundUrl);
        soundClone.volume = volume;
        soundClone.muted = !musicEnabled;
        
        // Track cleanup for special sounds
        if (['victory', 'winner-celebration'].includes(soundType)) {
          if (!activeSounds[soundType]) {
            activeSounds[soundType] = [];
          }
          
          activeSounds[soundType].push(soundClone);
          
          // Clean up on sound end
          soundClone.addEventListener('ended', () => {
            if (activeSounds[soundType]) {
              activeSounds[soundType] = activeSounds[soundType].filter(s => s !== soundClone);
            }
          });
        }
        
        // Play immediately with highest priority - no timeouts
        soundClone.play().catch(() => {
          // Silent fail for autoplay restrictions - no console spam
        });
      } catch (e) {
        // Silent fail to prevent console spam
      }
    } catch (e) {
      // Silent fail
    }
  }, [volume, musicEnabled]);
  
  return { playSound };
}; 