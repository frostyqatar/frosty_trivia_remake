import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import 'emoji-picker-element';

// Define types for the emoji-picker-element 
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'emoji-picker': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        skinToneEmoji?: string;
        class?: string;
      };
    }
  }
}

interface EmojiClickEvent extends Event {
  detail: {
    emoji: {
      unicode: string;
      annotation: string;
      shortcodes: string[];
    };
    skinTone: number;
    unicode: string;
  };
}

const PickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TriggerButton = styled.button`
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

const PickerWrapper = styled(motion.div)`
  position: absolute;
  z-index: 10000;
  right: calc(100% + 10px);
  top: 0;
  
  @media (max-width: 360px) {
    right: auto;
    left: 0;
    top: calc(100% + 10px);
  }
  
  .drag-handle {
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #eee;
    color: #888;
    font-size: 12px;
    cursor: grab;
    background-color: white;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
    &:active {
      cursor: grabbing;
    }
  }
  
  emoji-picker {
    height: 350px;
    --emoji-size: 1.5rem;
    --background: white;
    --border-color: #e0e0e0;
    --border-size: 1px;
    --input-border-color: #e0e0e0;
    --input-font-color: #333;
    --input-placeholder-color: #999;
    --category-font-color: #111;
    --indicator-color: #385ac1;
    --num-columns: 8;
  }
`;

interface EmojiPickerElementProps {
  onEmojiSelected: (emoji: string) => void;
  currentEmoji?: string;
  label?: string;
  buttonStyle?: React.CSSProperties;
  className?: string;
}

/**
 * A component that uses the emoji-picker-element library for emoji selection
 */
const EmojiPickerElement: React.FC<EmojiPickerElementProps> = ({
  onEmojiSelected,
  currentEmoji = '❓',
  label = 'Select Emoji',
  buttonStyle = {},
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEmojiClick = (event: Event) => {
      const emojiEvent = event as EmojiClickEvent;
      onEmojiSelected(emojiEvent.detail.unicode);
      setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current && 
        !containerRef.current.contains(event.target as Node) && 
        pickerRef.current && 
        !pickerRef.current.contains(event.target as Node) &&
        !isDragging
      ) {
        setIsOpen(false);
      }
    };

    const picker = pickerRef.current;
    if (picker) {
      picker.addEventListener('emoji-click', handleEmojiClick);
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      if (picker) {
        picker.removeEventListener('emoji-click', handleEmojiClick);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onEmojiSelected, isDragging]);

  const togglePicker = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PickerContainer ref={containerRef} className={className}>
      <TriggerButton 
        onClick={togglePicker}
        style={buttonStyle}
      >
        <span>{currentEmoji}</span>
        {label && <span>{label}</span>}
      </TriggerButton>
      
      {isOpen && (
        <PickerWrapper
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          drag
          dragConstraints={{ left: -500, right: 500, top: -300, bottom: 300 }}
          dragElastic={0.1}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          data-dragging={isDragging}
        >
          <div className="drag-handle">Drag to move</div>
          <emoji-picker 
            ref={pickerRef as React.RefObject<HTMLElement>}
            class="emoji-picker"
          />
        </PickerWrapper>
      )}
    </PickerContainer>
  );
};

export default EmojiPickerElement; 