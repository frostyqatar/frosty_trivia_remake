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

// Create pre-loaded audio elements for all sounds to avoid delays
const preloadedSounds: Record<string, HTMLAudioElement[]> = {};

// Sound loading status tracking
const soundLoadStatus: Record<string, boolean> = {};

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
      
      // Eagerly preload all sounds after user interaction
      preloadAllSounds();
      
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
    
    // Mark this sound as loading
    soundLoadStatus[soundType] = false;
    
    // Listen for the loaded event
    audio.addEventListener('canplaythrough', () => {
      soundLoadStatus[soundType] = true;
      console.log(`Sound "${soundType}" loaded successfully`);
    });
    
    // Force loading
    audio.load();
    
    return audio;
  } catch (e) {
    console.error(`Error creating audio element for ${soundType}:`, e);
    return null;
  }
}

// Preload ALL sounds with proper error handling
function preloadAllSounds() {
  if (soundsInitialized) return;
  
  // Preload all sounds defined in SOUND_URLS
  (Object.keys(SOUND_URLS) as SoundType[]).forEach(soundType => {
    if (soundType === 'background-music') return; // Background music is handled separately
    
    try {
      // Create multiple instances for frequently used sounds
      const instances = soundType === 'button-click' ? 5 : 
                       ['question-reveal', 'answer-reveal', 'team-award'].includes(soundType) ? 3 : 2;
      
      preloadedSounds[soundType] = [];
      
      for (let i = 0; i < instances; i++) {
        const audio = createAudioElement(soundType);
        if (audio) {
          // Prioritize loading frequently used sounds
          if (['button-click', 'question-reveal', 'answer-reveal'].includes(soundType)) {
            audio.load(); // Force loading
          }
          
          preloadedSounds[soundType].push(audio);
        }
      }
    } catch (e) {
      console.error(`Error preloading ${soundType}:`, e);
    }
  });
  
  soundsInitialized = true;
  console.log('All sounds preloaded');
}

// Initialize sound system - start preloading critical sounds immediately
// and preload all sounds once user interacts
function initSoundSystem() {
  // Immediately start preloading critical sounds
  ['button-click', 'question-reveal', 'answer-reveal'].forEach(soundType => {
    try {
      const audio = createAudioElement(soundType);
      if (audio) {
        if (!preloadedSounds[soundType]) {
          preloadedSounds[soundType] = [];
        }
        preloadedSounds[soundType].push(audio);
      }
    } catch (e) {
      console.error(`Error preloading critical sound ${soundType}:`, e);
    }
  });
  
  // If user has already interacted, preload all sounds
  if (userHasInteracted) {
    preloadAllSounds();
  }
}

// Initialize sound system
initSoundSystem();

// Create a sound map with proper error handling
const createSoundMap = (): SoundMap => {
  const soundMap: SoundMap = {};
  
  (Object.keys(SOUND_URLS) as SoundType[]).forEach(soundType => {
    if (soundType === 'background-music') return; // Background music is handled separately
    
    try {
      // Use preloaded sounds if available
      if (preloadedSounds[soundType] && preloadedSounds[soundType].length > 0) {
        soundMap[soundType] = preloadedSounds[soundType][0];
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
  const { volume, musicEnabled, effectsEnabled } = useSelector((state: RootState) => ({
    volume: state.volume,
    musicEnabled: state.musicEnabled,
    effectsEnabled: state.effectsEnabled
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
    } catch (e) {
      console.error('Error initializing sounds:', e);
    }
  }, []);
  
  // Update volume and mute status whenever it changes
  useEffect(() => {
    try {
      // Apply volume and music setting to background music
      backgroundMusicPlayer.volume = volume;
      backgroundMusicPlayer.muted = !musicEnabled;
      
      // Handle sound effects separately from background music
      Object.entries(soundsRef.current).forEach(([key, audio]) => {
        if (audio) {
          audio.volume = volume;
          
          // Apply different mute settings based on sound type
          if (key === 'background-music') {
            audio.muted = !musicEnabled;
          } else {
            audio.muted = !effectsEnabled;
          }
        }
      });
      
      // Also update preloaded sounds
      Object.entries(preloadedSounds).forEach(([key, audioArray]) => {
        audioArray.forEach(sound => {
          if (sound) {
            sound.volume = volume;
            if (key === 'background-music') {
              sound.muted = !musicEnabled;
            } else {
              sound.muted = !effectsEnabled;
            }
          }
        });
      });
    } catch (e) {
      console.error('Error updating sound settings:', e);
    }
  }, [volume, musicEnabled, effectsEnabled]);
  
  // Handle music toggling
  useEffect(() => {
    try {
      if (musicEnabled) {
        if (userHasInteracted && !musicInitialized) {
          initializeBackgroundMusic();
        } else if (userHasInteracted && backgroundMusicPlayer.paused) {
          backgroundMusicPlayer.play().catch(e => {
            console.error('Error resuming background music:', e);
          });
        }
      } else {
        backgroundMusicPlayer.pause();
      }
    } catch (e) {
      console.error('Error toggling music:', e);
    }
  }, [musicEnabled]);
  
  // Play sound function
  const playSound = useCallback((soundType: SoundType) => {
    // Check if sounds are ready and user has interacted
    if (!isReady || !userHasInteracted) return;
    
    // Skip playing if effects are disabled (for non-music sounds)
    if (!effectsEnabled && soundType !== 'background-music') return;
    
    // Skip playing if music is disabled (for background music)
    if (!musicEnabled && soundType === 'background-music') return;
    
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
    
    // Skip question-reveal if noreveal param is in URL
    if (soundType === 'question-reveal' && window.location.search.includes('noreveal')) {
      return;
    }

    try {
      // Try to get a preloaded sound from the pool
      let soundToPlay: HTMLAudioElement | null = null;
      
      if (preloadedSounds[soundType] && preloadedSounds[soundType].length > 0) {
        // Find an audio element that's not currently playing
        soundToPlay = preloadedSounds[soundType].find(audio => 
          audio.paused || audio.ended
        ) || null;
        
        // If all are playing, clone the first one
        if (!soundToPlay && preloadedSounds[soundType][0]) {
          soundToPlay = preloadedSounds[soundType][0].cloneNode(true) as HTMLAudioElement;
        }
      }
      
      // Fallback to the sound map if no preloaded sound is available
      if (!soundToPlay) {
        const sound = soundsRef.current[soundType];
        if (!sound) return;
        
        // Clone the sound to allow multiple plays
        soundToPlay = sound.cloneNode(true) as HTMLAudioElement;
      }
      
      if (soundToPlay) {
        // Apply volume and mute settings
        soundToPlay.volume = volume;
        
        // Apply mute settings based on sound type
        if (soundType === 'background-music' as SoundType) {
          soundToPlay.muted = !musicEnabled;
        } else {
          soundToPlay.muted = !effectsEnabled;
        }
        
        // Play the sound with error handling - use catch to handle autoplay restrictions gracefully
        soundToPlay.play().catch(error => {
          console.error(`Error playing sound ${soundType}:`, error);
        });
        
        // Track active sounds for cleanup
        if (!activeSounds[soundType]) {
          activeSounds[soundType] = [];
        }
        activeSounds[soundType].push(soundToPlay);
        
        // Clean up when sound finishes
        soundToPlay.onended = () => {
          const index = activeSounds[soundType]?.indexOf(soundToPlay!);
          if (index !== -1) {
            activeSounds[soundType].splice(index, 1);
          }
        };
      }
    } catch (error) {
      console.error(`Error playing sound ${soundType}:`, error);
    }
  }, [volume, musicEnabled, effectsEnabled, isReady]);

  return { playSound };
}; 