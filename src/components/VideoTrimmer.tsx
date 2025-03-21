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

const VideoContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
  position: relative;

  video {
    width: 100%;
    border-radius: 4px;
    background-color: #000;
  }
`;

const TimelineContainer = styled.div`
  width: 100%;
  position: relative;
  height: 60px;
  background-color: #e9ecef;
  border-radius: 4px;
  margin: 15px 0;
  overflow: hidden;
`;

const TimelineSlider = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #e9ecef;
`;

const TimelineSelection = styled.div<{ left: number; width: number }>`
  position: absolute;
  height: 100%;
  background-color: rgba(0, 123, 255, 0.2);
  border-left: 2px solid #007bff;
  border-right: 2px solid #007bff;
  top: 0;
  cursor: move;
  left: ${(props) => props.left}%;
  width: ${(props) => props.width}%;
`;

const SliderHandle = styled.div<{ isLeft?: boolean }>`
  position: absolute;
  top: 0;
  width: 10px;
  height: 100%;
  background-color: #007bff;
  cursor: ${(props) => (props.isLeft ? 'w-resize' : 'e-resize')};
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
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

interface VideoTrimmerProps {
  videoUrl: string;
  onTrimComplete: (trimmedVideoUrl: string) => void;
  onCancel: () => void;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

const VideoTrimmer: React.FC<VideoTrimmerProps> = ({ videoUrl, onTrimComplete, onCancel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTrimming, setIsTrimming] = useState(false);
  const [isDragging, setIsDragging] = useState<'start' | 'end' | 'selection' | null>(null);
  const [selectionStartPercent, setSelectionStartPercent] = useState(0);
  const [selectionWidthPercent, setSelectionWidthPercent] = useState(100);
  
  const [streamRef, setStreamRef] = useState<MediaStream | null>(null);
  const [recorderRef, setRecorderRef] = useState<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  // Function to handle CORS for external URLs
  const getProxiedUrl = (url: string): string => {
    // Check if it's an external URL
    if (url.startsWith('http') && !url.includes('localhost') && !url.includes('127.0.0.1')) {
      // Use a CORS proxy
      return `https://corsproxy.io/?${encodeURIComponent(url)}`;
    }
    return url;
  };

  // Initialize video element
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const videoDuration = video.duration;
      setDuration(videoDuration);
      setEndTime(videoDuration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', () => setIsPlaying(true));
    video.addEventListener('pause', () => setIsPlaying(false));

    // Clean up
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', () => setIsPlaying(true));
      video.removeEventListener('pause', () => setIsPlaying(false));
    };
  }, []);

  // Handle loading errors
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleError = (e: Event) => {
      console.error('Error loading video:', e);
      setIsLoading(false);
      alert('There was an error loading the video. This might be due to CORS restrictions.');
    };
    
    video.addEventListener('error', handleError);
    
    return () => {
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Handle mouse interactions for trimming
  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    let lastClientX = 0;

    const handleMouseDown = (e: MouseEvent) => {
      if (isLoading) return;

      const rect = timeline.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percentX = (offsetX / rect.width) * 100;
      lastClientX = e.clientX;

      // Determine which part was clicked
      const startPercentage = selectionStartPercent;
      const endPercentage = startPercentage + selectionWidthPercent;
      
      // Check if we're on the start handle
      if (Math.abs(percentX - startPercentage) < 3) {
        setIsDragging('start');
      }
      // Check if we're on the end handle
      else if (Math.abs(percentX - endPercentage) < 3) {
        setIsDragging('end');
      }
      // Check if we're within the selection
      else if (percentX > startPercentage && percentX < endPercentage) {
        setIsDragging('selection');
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || isLoading) return;

      const rect = timeline.getBoundingClientRect();
      const deltaX = e.clientX - lastClientX;
      const deltaPercent = (deltaX / rect.width) * 100;
      lastClientX = e.clientX;

      if (isDragging === 'start') {
        const newStart = Math.max(0, Math.min(selectionStartPercent + deltaPercent, selectionStartPercent + selectionWidthPercent - 5));
        const newWidth = selectionStartPercent + selectionWidthPercent - newStart;
        setSelectionStartPercent(newStart);
        setSelectionWidthPercent(newWidth);
        setStartTime((newStart / 100) * duration);
      } else if (isDragging === 'end') {
        const newWidth = Math.max(5, Math.min(selectionWidthPercent + deltaPercent, 100 - selectionStartPercent));
        setSelectionWidthPercent(newWidth);
        setEndTime(((selectionStartPercent + newWidth) / 100) * duration);
      } else if (isDragging === 'selection') {
        const newStart = Math.max(0, Math.min(selectionStartPercent + deltaPercent, 100 - selectionWidthPercent));
        setSelectionStartPercent(newStart);
        setStartTime((newStart / 100) * duration);
        setEndTime(((newStart + selectionWidthPercent) / 100) * duration);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(null);
    };

    timeline.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      timeline.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, selectionStartPercent, selectionWidthPercent, duration, isLoading]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      if (video.currentTime < startTime || video.currentTime > endTime) {
        video.currentTime = startTime;
      }
      video.play();
    }
  };

  const handleTrim = () => {
    if (isLoading || !videoRef.current) return;
    
    try {
      setIsTrimming(true);
      const video = videoRef.current;
      
      // Check if browser supports canvas.captureStream()
      const canvas = document.createElement('canvas');
      if (!canvas.captureStream) {
        alert('Your browser does not support the required features for video trimming.');
        setIsTrimming(false);
        return;
      }
      
      // Set up canvas and context
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        alert('Could not create canvas context for video trimming.');
        setIsTrimming(false);
        return;
      }
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Get the video stream from canvas
      const stream = canvas.captureStream(30); // 30 FPS
      
      // Get the audio track if available
      let audioTrack: MediaStreamTrack | undefined;
      if (video.srcObject instanceof MediaStream) {
        audioTrack = video.srcObject.getAudioTracks()[0];
        if (audioTrack) {
          stream.addTrack(audioTrack);
        }
      }
      
      // Set up MediaRecorder
      const chunks: Blob[] = [];
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
      
      recorder.onstop = () => {
        // Create a new blob from all the chunks
        const blob = new Blob(chunks, { type: 'video/webm' });
        const trimmedUrl = URL.createObjectURL(blob);
        onTrimComplete(trimmedUrl);
        setIsTrimming(false);
      };
      
      // Prepare to record
      setStreamRef(stream);
      setRecorderRef(recorder);
      setRecordedChunks([]);
      
      // Start recording process
      video.currentTime = startTime;
      recorder.start();
      
      // This function will drive the trimming process
      const processVideo = () => {
        if (video.currentTime >= endTime) {
          // Stop when we reach the end point
          recorder.stop();
          return;
        }
        
        // Draw the current video frame on the canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Request the next frame
        video.currentTime += 1/30; // Advance by approximately one frame
        
        if (video.currentTime < endTime) {
          // Continue processing frames
          setTimeout(processVideo, 0);
        } else {
          // We've reached the end
          recorder.stop();
        }
      };
      
      // Start the processing
      processVideo();
      
    } catch (error) {
      console.error('Error trimming video:', error);
      alert('There was an error trimming the video. Please try again.');
      setIsTrimming(false);
    }
  };

  // Simplified trimming method that doesn't attempt to re-encode the video
  const handleSimpleTrim = () => {
    if (isLoading) return;
    
    try {
      setIsTrimming(true);
      
      // For simple approach, we'll use media fragments with the original URL
      // This is better supported across browsers compared to the canvas/MediaRecorder approach
      const trimRange = `#t=${startTime.toFixed(2)},${endTime.toFixed(2)}`;
      
      // Check if the URL already has a media fragment
      let baseUrl = videoUrl;
      if (baseUrl.includes('#t=')) {
        // Remove existing media fragment
        baseUrl = baseUrl.split('#')[0];
      }
      
      // Create new URL with the trim range
      const trimmedUrl = `${baseUrl}${trimRange}`;
      
      // Call the completion handler
      onTrimComplete(trimmedUrl);
      
    } catch (error) {
      console.error('Error creating trim information:', error);
      alert('There was an error processing the video. Please try again.');
    } finally {
      setIsTrimming(false);
    }
  };

  // Clean up event listeners when component unmounts
  useEffect(() => {
    return () => {
      // Clean up any event listeners that might be attached to document
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mouseup', () => {});
      
      // Clean up video element if needed
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
        videoRef.current.load();
      }
      
      // Release media stream if one was created
      if (streamRef) {
        try {
          if (streamRef.getTracks) {
            streamRef.getTracks().forEach(track => track.stop());
          }
        } catch (error) {
          console.error('Error stopping media stream:', error);
        }
      }
    };
  }, [streamRef]);

  return (
    <TrimmerContainer>
      <h3>Trim Video</h3>
      
      <VideoContainer>
        <video 
          ref={videoRef}
          src={getProxiedUrl(videoUrl)} 
          preload="metadata"
          controls={false}
          crossOrigin="anonymous"
        />
      </VideoContainer>
      
      <TimeInfo>
        <TimerLabel>Start: {formatTime(startTime)}</TimerLabel>
        <TimerLabel>End: {formatTime(endTime)}</TimerLabel>
        <TimerLabel>Duration: {formatTime(endTime - startTime)}</TimerLabel>
      </TimeInfo>
      
      <TimelineContainer ref={timelineRef}>
        <TimelineSlider>
          <TimelineSelection 
            left={selectionStartPercent} 
            width={selectionWidthPercent}
          >
            <SliderHandle isLeft style={{ left: 0 }} />
            <SliderHandle style={{ right: 0 }} />
          </TimelineSelection>
        </TimelineSlider>
      </TimelineContainer>
      
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
            onClick={handleSimpleTrim}
            disabled={isLoading || isTrimming || startTime === endTime}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginRight: '10px' }}
          >
            {isTrimming ? 'Processing...' : 'Apply Trim'}
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
        Drag the blue handles to select the portion of video you want to keep.
        <br />
        Note: For best results with downloaded videos, we recommend using shorter clips.
      </p>
    </TrimmerContainer>
  );
};

export default VideoTrimmer;
