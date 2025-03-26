import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define a local Button component instead of importing
const StyledButton = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  background: ${props => {
    switch (props.$variant) {
      case 'secondary':
        return 'linear-gradient(135deg, #6c757d 0%, #495057 100%)';
      case 'danger':
        return 'linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%)';
      default:
        return 'var(--primary-gradient, linear-gradient(135deg, #0099cc 0%, #66d4ff 100%))';
    }
  }};
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  ...props 
}) => {
  return (
    <StyledButton
      $variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

// Default sounds
const DEFAULT_SOUNDS = [
  { id: 'fail', name: 'Fail Trumpet', src: '/cartoon-fail-trumpet-278822.mp3' },
  { id: 'applause', name: 'Applause', src: '/applause-crowd-242638.mp3' },
  { id: 'rimshot', name: 'Rimshot', src: '/rimshot-joke-funny-80325.mp3' },
  { id: 'whip', name: 'Whip Sound', src: '/whip-123738.mp3' }
];

// Styled components
const SoundboardContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  padding: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const SoundboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

const SoundboardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const SoundList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
`;

const SoundButton = styled.button<{ $isCustom?: boolean }>`
  background: ${props => props.$isCustom ? 'linear-gradient(45deg, #7928CA, #FF0080)' : 'linear-gradient(45deg, #2563EB, #3B82F6)'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  margin-left: 8px;
  
  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const UploadContainer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px dashed #ddd;
`;

const UploadButton = styled(Button)`
  background-color: #10B981;
  width: 100%;
  margin-top: 10px;
`;

const UploadInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px dashed #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: all 0.2s ease;
  margin-bottom: 10px;
  
  &:hover {
    border-color: #10B981;
  }
`;

const ErrorMessage = styled.div`
  color: #EF4444;
  margin-top: 8px;
  font-size: 14px;
`;

// Main component
const Soundboard: React.FC = () => {
  const [customSounds, setCustomSounds] = useState<Array<{ id: string; name: string; src: string }>>([]);
  const [soundName, setSoundName] = useState('');
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Load custom sounds from localStorage when component mounts
  useEffect(() => {
    const savedSounds = localStorage.getItem('trivia-custom-sounds');
    if (savedSounds) {
      try {
        const parsedSounds = JSON.parse(savedSounds);
        // For each saved sound, recreate the URL from the stored data
        const loadedSounds = parsedSounds.map((sound: any) => {
          // If sound doesn't have blob data, just return it (backward compatibility)
          if (!sound.blobData) return sound;
          
          // Recreate blob from stored data
          const byteCharacters = atob(sound.blobData);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: sound.blobType });
          
          // Create URL from blob
          return {
            ...sound,
            src: URL.createObjectURL(blob)
          };
        });
        
        setCustomSounds(loadedSounds);
      } catch (e) {
        console.error('Failed to load custom sounds:', e);
      }
    }
  }, []);
  
  // Save custom sounds to localStorage whenever they change
  useEffect(() => {
    if (customSounds.length > 0) {
      try {
        localStorage.setItem('trivia-custom-sounds', JSON.stringify(customSounds));
      } catch (e) {
        console.error('Failed to save custom sounds:', e);
      }
    }
  }, [customSounds]);
  
  // Play a sound
  const playSound = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };
  
  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    if (!file.type.includes('audio')) {
      setError('Please select an audio file.');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('File size exceeds 5MB limit.');
      return;
    }
    
    setError('');
  };
  
  // Handle upload
  const handleUpload = async () => {
    if (!fileInputRef.current?.files || fileInputRef.current.files.length === 0) {
      setError('Please select a file first.');
      return;
    }
    
    if (!soundName.trim()) {
      setError('Please enter a name for the sound.');
      return;
    }
    
    const file = fileInputRef.current.files[0];
    setIsUploading(true);
    
    try {
      // Create a URL for the file
      const soundUrl = URL.createObjectURL(file);
      
      // Read file as base64 to store in localStorage
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        // Extract base64 data (remove the data:audio/xxx;base64, prefix)
        const base64data = (reader.result as string).split(',')[1];
        
        // Add to custom sounds
        const newSound = {
          id: `custom-${Date.now()}`,
          name: soundName.trim(),
          src: soundUrl,
          blobData: base64data,
          blobType: file.type
        };
        
        setCustomSounds([...customSounds, newSound]);
        setSoundName('');
        
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        
        setError('');
      };
      
      reader.onerror = () => {
        setError('Failed to read audio file.');
      };
    } catch (error) {
      setError('Failed to process audio file.');
      console.error('Error processing audio:', error);
    } finally {
      setIsUploading(false);
    }
  };
  
  // Delete a custom sound
  const handleDelete = (id: string) => {
    const updatedSounds = customSounds.filter(sound => sound.id !== id);
    setCustomSounds(updatedSounds);
    
    // Update localStorage
    if (updatedSounds.length > 0) {
      localStorage.setItem('trivia-custom-sounds', JSON.stringify(updatedSounds));
    } else {
      localStorage.removeItem('trivia-custom-sounds');
    }
  };
  
  return (
    <SoundboardContainer>
      <SoundboardHeader>
        <SoundboardTitle>Soundboard</SoundboardTitle>
      </SoundboardHeader>
      
      <h3>Built-in Sounds</h3>
      <SoundList>
        {DEFAULT_SOUNDS.map(sound => (
          <SoundButton 
            key={sound.id}
            onClick={() => playSound(sound.src)}
          >
            {sound.name}
          </SoundButton>
        ))}
      </SoundList>
      
      {customSounds.length > 0 && (
        <>
          <h3>Custom Sounds</h3>
          <SoundList>
            {customSounds.map(sound => (
              <SoundButton 
                key={sound.id}
                $isCustom
                onClick={() => playSound(sound.src)}
              >
                {sound.name}
                <DeleteButton onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(sound.id);
                }}>✕</DeleteButton>
              </SoundButton>
            ))}
          </SoundList>
        </>
      )}
      
      <UploadContainer>
        <h3>Add Custom Sound</h3>
        <input
          type="text"
          placeholder="Sound name"
          value={soundName}
          onChange={(e) => setSoundName(e.target.value)}
          style={{ 
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            marginBottom: '10px' 
          }}
        />
        
        <UploadInput
          type="file"
          accept="audio/*"
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
        
        <UploadButton 
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Add Sound'}
        </UploadButton>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </UploadContainer>
    </SoundboardContainer>
  );
};

export default Soundboard; 