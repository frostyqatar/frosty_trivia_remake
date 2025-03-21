import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EmojiButton = styled(motion.button)`
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e8e8e8;
    transform: translateY(-2px);
  }
`;

const EmojiInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  width: 60px;
  text-align: center;
`;

const Instructions = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 8px;
  text-align: center;
`;

interface EmojiPickerTriggerProps {
  onEmojiSelected: (emoji: string) => void;
  currentEmoji?: string;
  label?: string;
  buttonStyle?: React.CSSProperties;
  className?: string;
}

/**
 * A component that allows selecting an emoji.
 */
const EmojiPickerTrigger: React.FC<EmojiPickerTriggerProps> = ({ 
  onEmojiSelected, 
  currentEmoji = '❓', 
  label = 'Select Emoji',
  buttonStyle = {},
  className
}) => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const openEmojiInput = () => {
    setShowInput(true);
    // Focus the input after a small delay to ensure it's rendered
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 50);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lastChar = value.trim().slice(-1);
    
    // Check if the last character is an emoji
    if (/\p{Emoji}/u.test(lastChar)) {
      onEmojiSelected(lastChar);
      setShowInput(false);
    } else if (value.trim() !== '' && value !== currentEmoji) {
      // If it's some other character but not empty, use the whole value
      onEmojiSelected(value.trim());
      setShowInput(false);
    }
  };
  
  const handleInputBlur = () => {
    setShowInput(false);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowInput(false);
    }
  };
  
  return (
    <div className={className}>
      {!showInput ? (
        <EmojiButton
          onClick={openEmojiInput}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={buttonStyle}
        >
          <span>{currentEmoji}</span>
          {label && <span>{label}</span>}
        </EmojiButton>
      ) : (
        <div>
          <EmojiInput
            ref={inputRef}
            type="text"
            defaultValue={currentEmoji}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <Instructions>
            Press Win+. to open emoji picker
          </Instructions>
        </div>
      )}
    </div>
  );
};

export default EmojiPickerTrigger; 