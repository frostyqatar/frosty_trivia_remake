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

export const useSoundEffects = () => {
  const soundsRef = useRef<SoundMap>({});
  const { volume, musicEnabled } = useSelector((state: RootState) => ({
    volume: state.volume,
    musicEnabled: state.musicEnabled
  }));
  
  // Initialize sounds on first render
  useEffect(() => {
    const sounds: Record<SoundType, string> = {
      'button-click': '/assets/sounds/button-click.mp3',
      'question-reveal': '/assets/sounds/question-reveal.mp3',
      'answer-reveal': '/assets/sounds/answer-reveal.mp3',
      'ability-chatgpt': '/assets/sounds/ability-chatgpt.mp3',
      'ability-double': '/assets/sounds/ability-double.mp3',
      'ability-google': '/assets/sounds/ability-google.mp3',
      'ability-dismiss': '/assets/sounds/ability-dismiss.mp3',
      'ability-electric': '/assets/sounds/ability-electric.mp3',
      'timer-tick': '/assets/sounds/timer-tick.mp3',
      'victory': '/assets/sounds/victory.mp3',
      'background-music': '/assets/sounds/background-music.mp3',
      'winner-celebration': '/assets/sounds/victory.mp3',
    };
    
    // Preload all sounds
    Object.entries(sounds).forEach(([key, path]) => {
      const audio = new Audio(path);
      
      // Configure looping for background music
      if (key === 'background-music') {
        audio.loop = true;
      }
      
      soundsRef.current[key] = audio;
    });
    
    return () => {
      // Stop all sounds on unmount
      Object.values(soundsRef.current).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);
  
  // Update volume whenever it changes
  useEffect(() => {
    Object.values(soundsRef.current).forEach(audio => {
      audio.volume = volume;
    });
  }, [volume]);
  
  // Handle music toggling
  useEffect(() => {
    const music = soundsRef.current['background-music'];
    if (!music) return;
    
    if (musicEnabled) {
      music.play().catch(e => console.error('Error playing music:', e));
    } else {
      music.pause();
    }
  }, [musicEnabled]);
  
  const playSound = useCallback((soundType: SoundType) => {
    const sound = soundsRef.current[soundType];
    if (!sound) return;
    
    // For non-music sounds, always play from beginning
    if (soundType !== 'background-music') {
      sound.currentTime = 0;
      sound.play().catch(e => console.error(`Error playing ${soundType}:`, e));
    }
  }, []);
  
  return { playSound };
}; 