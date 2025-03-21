import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TrimmerContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
`;

const AudioContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const Button = styled(motion.button)`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0069d9;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const PlayButton = styled(Button)`
  width: 80px;
`;

const TimerLabel = styled.span`
  font-family: monospace;
  font-size: 0.9rem;
`;

const RangeSlider = styled.input`
  width: 100%;
  margin: 10px 0;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0;
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.8rem;
  color: #6c757d;
`;

interface AudioTrimmerProps {
  audioUrl: string;
  onTrimComplete: (trimmedAudioUrl: string) => void;
  onCancel: () => void;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

const AudioTrimmer: React.FC<AudioTrimmerProps> = ({ audioUrl, onTrimComplete, onCancel }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(100);
  const [isLoading, setIsLoading] = useState(true);
  const [isTrimming, setIsTrimming] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Function to handle CORS for external URLs
  const getProxiedUrl = (url: string): string => {
    // Check if it's an external URL
    if (url.startsWith('http') && !url.includes('localhost') && !url.includes('127.0.0.1')) {
      // Use a CORS proxy
      return `https://corsproxy.io/?${encodeURIComponent(url)}`;
    }
    return url;
  };

  // Handle audio metadata loaded
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setEndTime(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      
      // Loop playback within the selected range
      if (audio.currentTime >= endTime) {
        audio.currentTime = startTime;
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      audio.currentTime = startTime;
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [endTime, startTime]);

  // Handle loading errors
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const handleError = (e: Event) => {
      console.error('Error loading audio:', e);
      setIsLoading(false);
      alert('There was an error loading the audio. This might be due to CORS restrictions.');
    };
    
    audio.addEventListener('error', handleError);
    
    return () => {
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      // Ensure we're playing within the selected range
      if (audio.currentTime < startTime || audio.currentTime > endTime) {
        audio.currentTime = startTime;
      }
      audio.play();
    }
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartTime = parseFloat(e.target.value);
    setStartTime(newStartTime);
    
    // Adjust audio position if playing
    if (audioRef.current && audioRef.current.currentTime < newStartTime) {
      audioRef.current.currentTime = newStartTime;
    }
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndTime = parseFloat(e.target.value);
    setEndTime(newEndTime);
  };

  const handleTrim = async () => {
    if (!audioRef.current) return;
    
    try {
      setIsTrimming(true);
      
      // Fetch the audio file with CORS proxy if needed
      const proxyUrl = getProxiedUrl(audioUrl);
      const response = await fetch(proxyUrl);
      const arrayBuffer = await response.arrayBuffer();
      
      // Create an audio context
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Decode the audio data
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      
      // Calculate the number of frames to extract
      const sampleRate = audioBuffer.sampleRate;
      const channels = audioBuffer.numberOfChannels;
      const startFrame = Math.floor(startTime * sampleRate);
      const endFrame = Math.floor(endTime * sampleRate);
      const frameCount = endFrame - startFrame;
      
      // Create a new buffer for the trimmed audio
      const trimmedBuffer = audioContext.createBuffer(
        channels, 
        frameCount, 
        sampleRate
      );
      
      // Copy the frames from the original buffer to the trimmed buffer
      for (let channel = 0; channel < channels; channel++) {
        const originalData = audioBuffer.getChannelData(channel);
        const trimmedData = trimmedBuffer.getChannelData(channel);
        
        for (let i = 0; i < frameCount; i++) {
          trimmedData[i] = originalData[startFrame + i];
        }
      }
      
      // Convert the trimmed buffer to a WAV file
      const wavFile = bufferToWave(trimmedBuffer, frameCount);
      
      // Create a Blob from the WAV file
      const blob = new Blob([wavFile], { type: 'audio/wav' });
      
      // Create a URL for the blob
      const trimmedUrl = URL.createObjectURL(blob);
      
      // Call the onTrimComplete callback with the new URL
      onTrimComplete(trimmedUrl);
      
    } catch (error) {
      console.error('Error trimming audio:', error);
      alert('There was an error trimming the audio. Please try again.');
    } finally {
      setIsTrimming(false);
    }
  };

  // Function to convert an AudioBuffer to a WAV file
  const bufferToWave = (buffer: AudioBuffer, length: number) => {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const bitsPerSample = 16;
    const bytesPerSample = bitsPerSample / 8;
    const blockAlign = numChannels * bytesPerSample;
    const byteRate = sampleRate * blockAlign;
    const dataSize = length * blockAlign;
    const bufferLength = 44 + dataSize;
    const arrayBuffer = new ArrayBuffer(bufferLength);
    const view = new DataView(arrayBuffer);
    
    // RIFF chunk descriptor
    writeUTFBytes(view, 0, 'RIFF');
    view.setUint32(4, 36 + dataSize, true);
    writeUTFBytes(view, 8, 'WAVE');
    
    // FMT sub-chunk
    writeUTFBytes(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // subchunk1size: 16 for PCM
    view.setUint16(20, 1, true); // audio format: 1 for PCM
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitsPerSample, true);
    
    // Data sub-chunk
    writeUTFBytes(view, 36, 'data');
    view.setUint32(40, dataSize, true);
    
    // Write the PCM samples
    const data = new Float32Array(length);
    let offset = 44;
    let channel, sample;
    
    // Interleave the channels
    for (let i = 0; i < length; i++) {
      for (channel = 0; channel < numChannels; channel++) {
        sample = buffer.getChannelData(channel)[i];
        // Clamp samples to the range -1.0 to +1.0
        sample = Math.max(-1, Math.min(1, sample));
        // Convert to 16-bit signed integer
        sample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
        view.setInt16(offset, sample, true);
        offset += 2;
      }
    }
    
    return arrayBuffer;
  };
  
  // Helper function to write UTF bytes
  const writeUTFBytes = (view: DataView, offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  return (
    <TrimmerContainer>
      <h3>Trim Audio</h3>
      
      <TimeInfo>
        <TimerLabel>Start: {formatTime(startTime)}</TimerLabel>
        <TimerLabel>Current: {formatTime(currentTime)}</TimerLabel>
        <TimerLabel>End: {formatTime(endTime)}</TimerLabel>
        <TimerLabel>Duration: {formatTime(endTime - startTime)}</TimerLabel>
      </TimeInfo>
      
      <AudioContainer>
        <audio 
          ref={audioRef} 
          src={getProxiedUrl(audioUrl)} 
          controls={false} 
          preload="metadata"
          style={{ width: '100%' }}
          crossOrigin="anonymous"
        />
      </AudioContainer>
      
      <SliderContainer>
        <label>Start Time:</label>
        <RangeSlider
          type="range"
          min={0}
          max={duration}
          step={0.01}
          value={startTime}
          onChange={handleStartTimeChange}
          disabled={isLoading}
        />
        <SliderLabels>
          <span>0:00</span>
          <span>{formatTime(duration)}</span>
        </SliderLabels>
      </SliderContainer>
      
      <SliderContainer>
        <label>End Time:</label>
        <RangeSlider
          type="range"
          min={0}
          max={duration}
          step={0.01}
          value={endTime}
          onChange={handleEndTimeChange}
          disabled={isLoading}
        />
        <SliderLabels>
          <span>0:00</span>
          <span>{formatTime(duration)}</span>
        </SliderLabels>
      </SliderContainer>
      
      <Controls>
        <PlayButton 
          onClick={togglePlay}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </PlayButton>
        
        <div>
          <Button 
            onClick={handleTrim}
            disabled={isLoading || isTrimming || startTime >= endTime}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginRight: '10px' }}
          >
            {isTrimming ? 'Trimming...' : 'Apply Trim'}
          </Button>
          
          <Button 
            onClick={onCancel}
            disabled={isTrimming}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#6c757d' }}
          >
            Cancel
          </Button>
        </div>
      </Controls>
      
      <p style={{ fontSize: '0.8rem', color: '#6c757d' }}>
        Use the sliders to select the portion of audio you want to keep.
      </p>
    </TrimmerContainer>
  );
};

export default AudioTrimmer;
