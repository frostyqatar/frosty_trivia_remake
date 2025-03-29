import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { setGamePhase, updateCategories } from '../store/gameSlice';
import { Category, Question } from '../types/game.types';
import { showNotification } from '../components/common/GameNotification';
import axios from 'axios';
import { getInitialCategories, resetToDefaultCategories } from '../data/questions';
import Papa from 'papaparse';
// Import the ImageCropper component
import ImageCropper from './common/ImageCropper';
// Import the new function
import { importQuestionsFromCSV } from '../utils/csvImport';
import { trackGameEvent } from '../services/analytics';
// Import QRCode component
import { QRCodeCanvas } from 'qrcode.react';
import ReactDOM from 'react-dom';
// Import SoundControls
import AudioTrimmer from './AudioTrimmer';
import VideoTrimmer from './VideoTrimmer';
import EmojiPickerTrigger from './common/EmojiPickerTrigger';
import EmojiPickerElement from './common/EmojiPickerElement';

// Temporary local implementation until module resolution is fixed
const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  console.log('Analytics event:', { category, action, label, value });
  // Attempt to use the real analytics if available
  try {
    // @ts-ignore - Dynamically import at runtime
    const ReactGA = require('react-ga4');
    ReactGA.event({ category, action, label, value });
  } catch (e) {
    console.warn('Analytics not available:', e);
  }
};

const DEFAULT_FORM_DATA = {
  id: '',
  categoryId: '',  // We'll set this when we have categories
  question: '',
  answer: '',
  value: 100,
  image: '',
  audio: '',
  video: '',
  imageBlur: 0,
  hideQuestion: false
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(140, 82, 255, 0.15);
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #8c52ff 0%, #5e17eb 100%);
  color: white;
  padding: 32px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--text-color, #333);
  text-align: center;
  font-family: var(--title-font-family, var(--heading-font-family));
`;

const Subtitle = styled.p`
  margin: 12px 0 0;
  font-size: 18px;
  opacity: 0.9;
  line-height: 1.5;
`;

const Content = styled.div`
  padding: 40px;
  max-height: 75vh;
  overflow-y: auto;
  
  & > * + * {
    margin-top: 36px;
  }
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 28px;
  background-color: #f9f7ff;
  padding: 24px;
  border-radius: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const Button = styled(motion.button)`
  background-color: #8c52ff;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(140, 82, 255, 0.2);
  
  &:hover {
    background-color: #7b45e8;
    box-shadow: 0 6px 8px rgba(140, 82, 255, 0.3);
  }
  
  &:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const DangerButton = styled(Button)`
  background-color: #ff5252;
  box-shadow: 0 4px 6px rgba(255, 82, 82, 0.2);
  
  &:hover {
    background-color: #e04747;
    box-shadow: 0 6px 8px rgba(255, 82, 82, 0.3);
  }
`;

const ImportButton = styled(Button)`
  background-color: #4caf50;
  box-shadow: 0 4px 6px rgba(76, 175, 80, 0.2);
  
  &:hover {
    background-color: #43a047;
    box-shadow: 0 6px 8px rgba(76, 175, 80, 0.3);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(76, 175, 80, 0.2);
  }
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  width: 100%;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: #333;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 24px;
  table-layout: fixed;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 16px 20px;
  background-color: #f5f5f5;
  font-weight: 600;
  border-bottom: 2px solid #e0e0e0;
  color: #333;
  font-size: 15px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f0f7ff;
  }
  
  &:last-child td {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 16px 20px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid #eaeaea;
  color: #444;
  font-size: 15px;
`;

const ActionCell = styled.td`
  padding: 16px 20px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #eaeaea;
`;

const ActionIcon = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #666;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #8c52ff;
    background-color: rgba(140, 82, 255, 0.1);
  }
`;

const DeleteIcon = styled(ActionIcon)`
  &:hover {
    color: #ff5252;
    background-color: rgba(255, 82, 82, 0.1);
  }
`;

const NoQuestionsMessage = styled.div`
  text-align: center;
  padding: 48px;
  color: #666;
  font-size: 20px;
  background-color: #f9f9f9;
  border-radius: 16px;
  margin: 32px 0;
`;

const Modal = styled(motion.div)<{ $isApiKeyModal?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.$isApiKeyModal ? 2000 : 1000};
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--text-color, #333);
  font-family: var(--heading-font-family);
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #444;
  font-size: 16px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: #fafafa;
  color: #8c52ff;
  &:focus {
    border-color: #8c52ff;
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
  background-color: #fafafa;
  color: #8c52ff;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: #fafafa;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`;

const PointValueButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const PointValueButton = styled(motion.button)<{ selected: boolean }>`
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid ${props => props.selected ? '#8c52ff' : '#e0e0e0'};
  background-color: ${props => props.selected ? 'rgba(140, 82, 255, 0.1)' : 'white'};
  color: ${props => props.selected ? '#8c52ff' : '#666'};
  font-weight: ${props => props.selected ? '600' : 'normal'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.selected ? 'rgba(140, 82, 255, 0.15)' : '#f5f5f5'};
    transform: translateY(-2px);
  }
`;

const RemoveMediaButton = styled(motion.button)`
  background-color: #ff5252;
  color: white;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const CreateCategoryLink = styled.button`
  background: none;
  border: none;
  color: #8c52ff;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;
  text-align: right;
  padding: 5px;
  
  &:hover {
    color: #7b45e8;
  }
`;

const MediaContainer = styled.div`
  position: relative;
  display: block;
  margin-top: 10px;
  width: 100%;
`;

const StyledText = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  color: #555;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
`;

const FileInput = styled.input`
  display: none;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 10px;
  padding: 16px;
`;

const PageButton = styled(motion.button)<{ $active?: boolean }>`
  padding: 10px 16px;
  border-radius: 10px;
  background-color: ${props => props.$active ? '#8c52ff' : '#f5f5f5'};
  color: ${props => props.$active ? 'white' : '#333'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$active ? '#7b45e8' : '#e0e0e0'};
  }
`;

const PageNumber = styled(PageButton)`
  min-width: 40px;
`;

const PageEllipsis = styled.span`
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

const PageJump = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PageJumpInput = styled.input`
  width: 50px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`;

const ItemsPerPageSelector = styled.div`
  margin-bottom: 24px;
  background-color: #f9f7ff;
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
`;

const SelectLabel = styled.label`
  margin-right: 12px;
  font-weight: 600;
  color: #444;
`;

const Select = styled.select`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 15px;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.1);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #333;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #8c52ff;
  
  &:checked {
    accent-color: #8c52ff;
  }
`;

const DangerButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-left: auto;
`;

const TableHeaderCell = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-weight: 600;
  background-color: #f7f9fc;
  border-bottom: 2px solid #e9ecef;
  color: #333;
  font-size: 15px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #eef2f7;
  }
  
  &:first-child {
    border-top-left-radius: 12px;
  }
  
  &:last-child {
    border-top-right-radius: 12px;
  }
`;

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const MediaPreview = ({ type, src, blur }: { type: 'image' | 'audio' | 'video', src: string, blur?: number }) => {
  console.log(`MediaPreview - type: ${type}, src: ${src}`);
  
  if (!src) {
    console.log('MediaPreview - No src provided');
    return null;
  }
  
  if (type === 'audio') {
    console.log('MediaPreview - Rendering audio element');
    return (
      <div style={{ marginTop: '12px', padding: '8px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <audio 
          controls 
          style={{ width: '100%', display: 'block' }} 
          src={src}
          preload="metadata"
          autoPlay={false}
        >
          Your browser does not support audio playback.
        </audio>
      </div>
    );
  }
  
  if (type === 'image') {
    return (
      <div style={{ marginTop: '12px', padding: '8px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <img 
          src={src} 
          alt="Preview" 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '200px', 
            borderRadius: '8px', 
            display: 'block', 
            margin: '0 auto',
            filter: blur && blur > 0 ? `blur(${blur}px)` : 'none'
          }} 
        />
      </div>
    );
  }
  
  if (type === 'video') {
    return (
      <div style={{ marginTop: '12px', padding: '8px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <video controls style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px', display: 'block', margin: '0 auto' }} src={src}>
          Your browser does not support video playback.
        </video>
      </div>
    );
  }
  
  return null;
};

const CategoriesSection = styled.div`
  margin-top: 48px;
  background-color: #f8f9fa;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const CategoriesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--text-color, #333);
  display: flex;
  align-items: center;
  font-family: var(--heading-font-family);
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
  margin-top: 28px;
`;

const CategoryCard = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  &:hover::after {
    content: "Click to view questions";
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #0099cc;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 4px 8px;
    border-radius: 4px;
  }
`;

const CategoryName = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 12px;
  color: #333;
`;

const CategoryIcon = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
  background-color: #f9f7ff;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

const CategoryInfo = styled.div`
  font-size: 15px;
  color: #666;
  background-color: #f9f7ff;
  padding: 8px 12px;
  border-radius: 8px;
  display: inline-block;
`;

const CategoryDeleteButton = styled(DeleteIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(255, 82, 82, 0.1);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(255, 82, 82, 0.2);
  }
`;

const CategoryEditButton = styled(motion.button)`
  position: absolute;
  top: 16px;
  right: 60px;
  background: rgba(52, 152, 219, 0.1);
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #3498db;
  z-index: 2;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(52, 152, 219, 0.2);
  }
`;

const COMMON_EMOJIS = [
  '📚', '🎮', '🎬', '🎵', '🎨', '🏛️', '🌍', '🏆', 
  '🧩', '⚽', '🏀', '🏈', '2️⃣', '🎲', '🎭', '🎪',
  '🧠', '💡', '⚙️', '💻', '🔬', '🔭', '📱', '📷',
  '🏖️', '🌋', '🏔️', '🌲', '🌊', '🐾', '🦁', '🐘',
  '🍕', '🍰', '🍦', '🍷', '👗', '👑', '💎', '🚗',
  '✈️', '🚀', '⏱️', '📆', '📝', '', '💰', '🏛️'
];

const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  margin-top: 20px;
  max-height: 220px;
  overflow-y: auto;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 12px;
`;

const EmojiButton = styled(motion.button)<{ selected: boolean }>`
  background-color: ${props => props.selected ? '#3498db' : 'white'};
  color: ${props => props.selected ? 'white' : 'inherit'};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.selected ? '#2980b9' : '#f0f0f0'};
    transform: scale(1.05);
  }
`;

const SelectedEmoji = styled.div`
  font-size: 36px;
  margin: 20px 0;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const GenerationSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 28px;
  border: 1px dashed #ddd;
`;

const GenerationPromptInput = styled.textarea`
  width: 100%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  margin-bottom: 20px;
  background-color: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`;

const GenerationButton = styled(motion.button)`
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #1d4ed8;
    box-shadow: 0 6px 8px rgba(37, 99, 235, 0.3);
  }
  
  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 15px;
  margin-top: 12px;
  padding: 12px;
  background-color: #fee2e2;
  border-radius: 8px;
`;

const HelpText = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 12px;
  line-height: 1.5;
  background-color: #f0f9ff;
  padding: 12px;
  border-radius: 8px;
  border-left: 3px solid #3b82f6;
`;

const SectionDivider = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 40px 0;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
  color: var(--text-color, #555);
  font-family: var(--accent-font-family, var(--heading-font-family));
`;

// Replace the duplicate components with renamed versions
const BatchSizeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

// Rename to avoid conflict with existing SelectLabel
const BatchSelectLabel = styled.label`
  font-weight: 600;
  color: #333;
`;

// Rename to avoid conflict with existing Select
const BatchSelect = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: white;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`;

// Add a styled component for the sound controls container
const SoundControlsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

// Add these styled component definitions after the other styled components and before the QuestionManagement component

const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
  font-size: 14px;
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 18px;
  color: #666;
  cursor: pointer;
`;

const StyledTextBlock = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;

const CategoryEmojiPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  input {
    font-size: 20px;
    width: 70px;
    text-align: center;
  }
  
  div {
    margin-top: 5px;
  }
  
  /* Styling for the emoji picker */
  div[class*='PickerWrapper'] {
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    z-index: 10001 !important; /* Higher than modal z-index */
    
    /* Reset position when being dragged */
    &[data-dragging="true"] {
      position: absolute !important;
      top: auto !important;
      left: auto !important;
      transform: none !important;
    }
  }
`;

// Add this back after some of the other styled components near the top of the file
const NotificationDisplay = styled(motion.div)<{ type: 'success' | 'error' | 'info' | 'warning' }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 16px 20px;
  border-radius: 12px;
  background-color: ${({ type }) => 
    type === 'success' ? '#4caf50' : 
    type === 'error' ? '#f44336' : 
    type === 'warning' ? '#ff9800' : '#2196f3'};
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  z-index: 1100;
  white-space: pre-line;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  flex-wrap: wrap;
`;

const RadioButton = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid ${props => props.selected ? '#8c52ff' : '#e0e0e0'};
  background-color: ${props => props.selected ? 'rgba(140, 82, 255, 0.1)' : 'white'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${props => props.selected ? '600' : 'normal'};
  color: ${props => props.selected ? '#8c52ff' : '#333'};
  
  &:hover {
    background-color: ${props => props.selected ? 'rgba(140, 82, 255, 0.15)' : '#f5f5f5'};
    transform: translateY(-2px);
  }
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

const QuestionManagement: React.FC = () => {
  const dispatch = useDispatch();
  const { playSound } = useSoundEffects();
  const { categories } = useSelector((state: RootState) => state);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Define default form data inside the component where 'categories' is available
  const DEFAULT_FORM_DATA = {
    id: '',
    categoryId: '',  // We'll set this when we have categories
    question: '',
    answer: '',
    value: 100,
    image: '',
    audio: '',
    video: '',
    imageBlur: 0,
    hideQuestion: false
  };
  
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [editingQuestion, setEditingQuestion] = useState<{ categoryId: string; questionIndex: number } | null>(null);
  
  const [batchSize, setBatchSize] = useState<number>(20);
  const [displayedQuestions, setDisplayedQuestions] = useState<any[]>([]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState<boolean>(false);
  const [newCategoryName, setNewCategoryName] = useState<string>('');
  const [newCategoryIcon, setNewCategoryIcon] = useState<string>('❓');
  
  const [formData, setFormData] = useState<{
    id: string;
    categoryId: string;
    question: string;
    answer: string;
    value: number;
    image: string;
    audio: string;
    video: string;
    imageBlur: number;
    hideQuestion: boolean;
  }>({
    id: '',
    categoryId: '',  // We'll set this when we have categories
    question: '',
    answer: '',
    value: 100,
    image: '',
    audio: '',
    video: '',
    imageBlur: 0,
    hideQuestion: false
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [selectedQuestions, setSelectedQuestions] = useState<{categoryId: string, questionIndex: number}[]>([]);
  const [selectMode, setSelectMode] = useState<boolean>(false);
  
  const [sortBy, setSortBy] = useState<string>('categoryName');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState<number>(Date.now());
  
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState<Category | null>(null);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [editCategoryIcon, setEditCategoryIcon] = useState('');
  
  const [generationPrompt, setGenerationPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState('');
  
  const [geminiApiKey, setGeminiApiKey] = useState(localStorage.getItem('gemini-api-key') || '');
  const [showApiKeyPrompt, setShowApiKeyPrompt] = useState(false);
  
  // Add state for image cropping
  const [showImageCropper, setShowImageCropper] = useState(false);
  const [originalImageUrl, setOriginalImageUrl] = useState('');
  
  // Add state for audio/video trimming
  const [showAudioTrimmer, setShowAudioTrimmer] = useState(false);
  const [showVideoTrimmer, setShowVideoTrimmer] = useState(false);
  const [originalAudioUrl, setOriginalAudioUrl] = useState('');
  const [originalVideoUrl, setOriginalVideoUrl] = useState('');
  
  // Add state for file handling
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedAudioFile, setSelectedAudioFile] = useState<File | null>(null);
  const [selectedVideoFile, setSelectedVideoFile] = useState<File | null>(null);
  
  // Add notification state to your component if not already there
  const [notification, setNotification] = useState({ message: '', type: 'info', visible: false });
  
  // Add state for QR code generation
  const [isGeneratingQR, setIsGeneratingQR] = useState(false);

  // Add a new state variable to track if we're in simple mode
  const [simpleMode, setSimpleMode] = useState<boolean>(false);

  // Add state for image blur in the component
  const [imageBlur, setImageBlur] = useState<number>(0);

  // Add this with the other useState declarations in the component
  const [isImporting, setIsImporting] = useState(false);

  // Add these state variables after other useState declarations
  const [showGenerateCategoryModal, setShowGenerateCategoryModal] = useState(false);
  const [generatingCategory, setGeneratingCategory] = useState(false);
  const [categoryPrompt, setCategoryPrompt] = useState('');
  const [categoryNameInput, setCategoryNameInput] = useState('');
  const [categoryIcon, setCategoryIcon] = useState('❓');
  const [categoryGenerationError, setCategoryGenerationError] = useState('');
  const [categoryLanguage, setCategoryLanguage] = useState<'English' | 'Arabic'>('English');
  const [categoryDifficulty, setCategoryDifficulty] = useState<'Kid-friendly' | 'Default'>('Default');
  const [questionCount, setQuestionCount] = useState<number>(6);

  // Helper function to generate QR code image data URL
  // Removed the generateQRCodeDataURL function

  // Add QR code generation handler
  const handleGenerateQRCode = () => {
    if (!formData.answer.trim()) {
      alert('Please enter an answer text before generating a QR code.');
      return;
    }

    setIsGeneratingQR(true);
    try {
      // Create a canvas element with larger dimensions
      const canvas = document.createElement('canvas');
      canvas.width = 500; 
      canvas.height = 500;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        throw new Error('Could not get canvas context');
      }
      
      // Draw a white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create temporary container to render QRCode
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '-9999px';
      document.body.appendChild(tempContainer);
      
      // Process answer text - if too long, it might need special handling
      let qrValue = formData.answer;
      const MAX_RECOMMENDED_LENGTH = 300; // QR codes become harder to scan at higher data densities
      
      if (qrValue.length > MAX_RECOMMENDED_LENGTH) {
        console.log(`Warning: QR code content is very long (${qrValue.length} chars). This may affect scannability.`);
        showNotification(`Warning: Long answer (${qrValue.length} chars) may affect QR code scannability.`);
      }
      
      // Create a QRCodeCanvas element directly
      const qrElement = document.createElement('div');
      tempContainer.appendChild(qrElement);
      
      // Use a Promise to wait for the QR code to be rendered
      const renderQRCode = new Promise<void>((resolve, reject) => {
        try {
          ReactDOM.render(
            <QRCodeCanvas 
              value={qrValue} 
              size={400}
              level="H" // High error correction
              includeMargin={true}
              bgColor="#FFFFFF"
              fgColor="#000000"
            />, 
            qrElement,
            () => {
              // Resolve when rendering is complete
              resolve();
            }
          );
        } catch (err) {
          reject(err);
        }
      });
      
      renderQRCode
        .then(() => {
          // Allow time for browser to fully render
          setTimeout(() => {
            try {
              // Get rendered canvas from QRCodeCanvas
              const qrCanvas = qrElement.querySelector('canvas');
              
              if (!qrCanvas) {
                throw new Error('QR code canvas not found');
              }
              
              // Draw QR code onto our main canvas (centered)
              ctx.drawImage(
                qrCanvas, 
                (canvas.width - qrCanvas.width) / 2, 
                (canvas.height - qrCanvas.height) / 2
              );
              
              // Add a caption
              ctx.font = '16px Arial';
              ctx.fillStyle = '#333333';
              ctx.textAlign = 'center';
              ctx.fillText('Scan for answer', canvas.width / 2, canvas.height - 30);
              
              // Convert to data URL with higher quality
              const dataURL = canvas.toDataURL('image/png', 1.0);
              
              // Update form data
              setFormData({
                ...formData,
                image: dataURL,
                question: formData.question.includes('Do not scan the qr code')
                  ? formData.question
                  : `${formData.question || ''} Do not scan the qr code`.trim()
              });
              
              // Clean up
              ReactDOM.unmountComponentAtNode(qrElement);
              document.body.removeChild(tempContainer);
              
              // Play sound for feedback
              playSound('button-click');
              
              setIsGeneratingQR(false);
            } catch (err) {
              console.error('Error processing QR code:', err);
              alert('Failed to generate QR code. Please try again.');
              setIsGeneratingQR(false);
              
              // Clean up on error
              if (tempContainer.parentNode) {
                document.body.removeChild(tempContainer);
              }
            }
          }, 200); // Increase timeout for slower devices/browsers
        })
        .catch((err) => {
          console.error('Error rendering QR code:', err);
          alert('Failed to generate QR code. Please try again.');
          setIsGeneratingQR(false);
          
          // Clean up on error
          if (tempContainer.parentNode) {
            document.body.removeChild(tempContainer);
          }
        });
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Failed to generate QR code. Please try again.');
      setIsGeneratingQR(false);
    }
  };

  // Add this function before handleSubmit to check missing point values for a category
  const getMissingPointValues = (categoryId: string): number[] => {
    if (!categoryId) return [];
    
    const category = categories.find((c: Category) => c.id === categoryId);
    if (!category) return [];
    
    // Track counts for each point value
    let count100 = 0;
    let count200 = 0;
    let count300 = 0;
    let count400 = 0;
    let count500 = 0;
    
    // Count each point value
    category.questions.forEach((q: Question) => {
      switch (q.value) {
        case 100:
          count100++;
          break;
        case 200:
          count200++;
          break;
        case 300:
          count300++;
          break;
        case 400:
          count400++;
          break;
        case 500:
          count500++;
          break;
      }
    });
    
    // Check which values are missing
    const missing: number[] = [];
    if (count100 < 2) missing.push(100);
    if (count200 < 1) missing.push(200);
    if (count300 < 1) missing.push(300); 
    if (count400 < 1) missing.push(400);
    if (count500 < 1) missing.push(500);
    
    return missing;
  };

  const handleSubmit = () => {
    if (!formData.categoryId || formData.question.trim() === '' || formData.answer.trim() === '') {
      alert('Category, question and answer are required.');
      return;
    }
    
    // Create a deep copy of categories to avoid reference issues
    const updatedCategories = JSON.parse(JSON.stringify(categories));
    
    // Log what we're trying to submit
    console.log('Submitting form data:', formData);
    
    if (modalMode === 'add') {
      // Find the selected category
      const categoryIndex = updatedCategories.findIndex((c: Category) => c.id === formData.categoryId);
      
      if (categoryIndex !== -1) {
        // Create the new question object with proper types for all fields
        const newQuestion: Question = {
          question: formData.question,
          answer: formData.answer,
          value: parseInt(formData.value.toString(), 10),
          answered: false,
          // Explicitly handle media fields, ensuring they're strings or empty strings
          image: formData.image || '',
          audio: formData.audio || '',
          video: formData.video || '',
          imageBlur: imageBlur,
          hideQuestion: formData.hideQuestion
        };
        
        console.log('Adding new question:', newQuestion);
        
        // Add question to the category
        updatedCategories[categoryIndex].questions.push(newQuestion);
        
        // Update Redux
        dispatch(updateCategories(updatedCategories));
        
        // Close modal and clear form
        setFormData({...DEFAULT_FORM_DATA, imageBlur: 0});
        setShowModal(false);
        
        // Reset the URL inputs
        setAudioUrlInput('');
        setVideoUrlInput('');
        
        // Manual save to localStorage for redundancy
        try {
          localStorage.setItem('trivia-game-categories', JSON.stringify(updatedCategories));
        } catch (e) {
          console.error('Error saving to localStorage:', e);
        }
        
        console.log('Categories after add:', updatedCategories);
      }
    } else if (modalMode === 'edit' && editingQuestion) {
      const { categoryId: originalCategoryId, questionIndex } = editingQuestion;
      const originalCategoryIndex = updatedCategories.findIndex((c: Category) => c.id === originalCategoryId);
      
      if (originalCategoryIndex !== -1) {
        // Create updated question with proper types for all fields
        const updatedQuestion: Question = {
          question: formData.question,
          answer: formData.answer,
          value: parseInt(formData.value.toString(), 10),
          answered: updatedCategories[originalCategoryIndex].questions[questionIndex].answered,
          // Explicitly handle media fields
          image: formData.image || '',
          audio: formData.audio || '',
          video: formData.video || '',
          imageBlur: imageBlur,
          hideQuestion: formData.hideQuestion
        };
        
        console.log('Updating question:', updatedQuestion);
        
        // Check if the category has changed
        if (formData.categoryId !== originalCategoryId) {
          console.log('Category changed from', originalCategoryId, 'to', formData.categoryId);
          
          // Find the new category
          const newCategoryIndex = updatedCategories.findIndex((c: Category) => c.id === formData.categoryId);
          
          if (newCategoryIndex !== -1) {
            // Add the question to the new category
            updatedCategories[newCategoryIndex].questions.push(updatedQuestion);
            
            // Remove the question from the original category
            updatedCategories[originalCategoryIndex].questions.splice(questionIndex, 1);
            
            console.log('Question moved to new category');
          } else {
            console.error('New category not found');
            alert('Error: Could not find the selected category. Please try again.');
            return;
          }
        } else {
          // Update the question in the original category
          updatedCategories[originalCategoryIndex].questions[questionIndex] = updatedQuestion;
        }
        
        // Update Redux
        dispatch(updateCategories(updatedCategories));
        
        // Manual save to localStorage for redundancy
        try {
          localStorage.setItem('trivia-game-categories', JSON.stringify(updatedCategories));
        } catch (e) {
          console.error('Error saving to localStorage:', e);
        }
        
        console.log('Categories after edit:', updatedCategories);
        
        // Close modal and clear form
        setFormData({...DEFAULT_FORM_DATA, imageBlur: 0});
        setEditingQuestion(null);
        setShowModal(false);
        
        // Reset the URL inputs
        setAudioUrlInput('');
        setVideoUrlInput('');
      }
    }
    
    // Force a UI refresh by setting a state variable
    setLastUpdateTimestamp(Date.now());
  };
  
  // Add a function to open the modal in simple mode
  const handleOpenSimpleModal = () => {
    setShowModal(true);
    setModalMode('add');
    setSimpleMode(true);
    setFormData({
      id: '',
      categoryId: '',  // We'll set this when we have categories
      question: '',
      answer: '',
      value: 100,
      image: '',
      audio: '',
      video: '',
      imageBlur: 0,
      hideQuestion: false
    });
    setEditingQuestion(null);
  };
  
  // Modify the existing handleOpenModal to reset simple mode
  const handleOpenModal = (mode: 'add' | 'edit', question?: { categoryId: string; questionIndex: number }) => {
    setModalMode(mode);
    setSimpleMode(false);
    
    if (mode === 'add') {
      setFormData({
        id: '',
        categoryId: '',  // Empty string so no category is pre-selected
        question: '',
        answer: '',
        value: 100,
        image: '',
        audio: '',
        video: '',
        imageBlur: 0,
        hideQuestion: false
      });
      setEditingQuestion(null);
      
      // Reset URL inputs to prevent persistence
      setAudioUrlInput('');
      setVideoUrlInput('');
    } else if (mode === 'edit' && question) {
      const { categoryId, questionIndex } = question;
      const category = categories.find((c: Category) => c.id === categoryId);
      
      if (category) {
        const q = category.questions[questionIndex];
        setFormData({
          id: q.id || '',
          categoryId,
          question: q.question,
          answer: q.answer,
          value: q.value,
          image: q.image || '',
          audio: q.audio || '',
          video: q.video || '',
          imageBlur: q.imageBlur || 0,
          hideQuestion: q.hideQuestion || false
        });
        setEditingQuestion({ categoryId, questionIndex });
      }
    }
    
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    const hasData = formData.question.trim() !== '' || 
                    formData.answer.trim() !== '' || 
                    formData.image !== '' || 
                    formData.audio !== '' || 
                    formData.video !== '';
    
    if (hasData) {
      if (window.confirm('Are you sure you want to close? All unsaved changes will be lost.')) {
        setShowModal(false);
        setFormData({...DEFAULT_FORM_DATA, imageBlur: 0});
        setEditingQuestion(null);
      }
    } else {
      setShowModal(false);
      setFormData({...DEFAULT_FORM_DATA, imageBlur: 0});
      setEditingQuestion(null);
    }
  };
  
  const handleDeleteQuestion = (categoryId: string, questionIndex: number) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      // Create a proper deep copy of the categories
      const updatedCategories = JSON.parse(JSON.stringify(categories));
      
      const categoryIndex = updatedCategories.findIndex((c: Category) => c.id === categoryId);
      
      if (categoryIndex !== -1) {
        // Make a new copy of the questions array
        const updatedQuestions = [...updatedCategories[categoryIndex].questions];
        
        // Remove the question
        updatedQuestions.splice(questionIndex, 1);
        
        // Assign the new questions array to the category
        updatedCategories[categoryIndex].questions = updatedQuestions;
        
        dispatch(updateCategories(updatedCategories));
      }
    }
  };
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'image' && value !== '') {
      // Store the original image URL
      setOriginalImageUrl(value);
      
      // We'll show the cropper when the image loads successfully
      const img = new Image();
      img.onload = () => {
        setShowImageCropper(true);
      };
      img.onerror = () => {
        // If the image doesn't load, just use the URL directly
        setFormData({
          ...formData,
          [name]: value
        });
      };
      img.src = value;
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleExportCSV = () => {
    // Prompt for password using browser's prompt dialog
    const enteredPassword = prompt("Enter the export password:");
    
    // Check if password is correct
    if (enteredPassword !== "LcCxMx") {
      alert("Incorrect password. Export cancelled.");
      return;
    }
    
    // Prepare data for CSV export with all media fields
    const csvData = flattenQuestions().map(q => ({
      category: q.categoryName,
      question: q.question,
      answer: q.answer,
      value: q.value,
      image: q.image || '',
      audio: q.audio || '',
      video: q.video || ''
    }));
    
    // Convert to CSV
    const csv = Papa.unparse(csvData);
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'game_questions_with_media.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleImportCSV = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    // Store reference to file input for later reset
    const fileInput = e.target;
    
    // Set loading state
    setIsImporting(true);
    
    // Show loading notification
    setNotification({
      message: 'Importing CSV file...',
      type: 'info',
      visible: true
    });
    
    try {
      const file = e.target.files[0];
      
      try {
        const questions = await importQuestionsFromCSV(file);
        
        // Add the questions to the categories state
        if (questions.length > 0) {
          // Create a TRUE deep copy of categories (important!)
          const updatedCategories = JSON.parse(JSON.stringify(categories));
          
          // Track categories for reporting
          const existingCategoriesUpdated = new Set<string>();
          const newCategoriesCreated = new Set<string>();
          
          // Group questions by category
          questions.forEach(question => {
            const categoryName = question.category;
            
            // Find existing category with case-insensitive matching
            let category = updatedCategories.find((c: any) => 
              c.name.toLowerCase().trim() === categoryName.toLowerCase().trim()
            );
            
            if (!category) {
              // Create new category with unique ID
              category = {
                id: `category-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
                name: categoryName, // Preserve original case from CSV
                icon: '❓',
                questions: []
              };
              updatedCategories.push(category);
              newCategoriesCreated.add(categoryName);
            } else {
              existingCategoriesUpdated.add(category.name);
            }
            
            // Add question to category
            category.questions.push({
              ...question,
              id: `question-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
            });
          });
          
          // Update Redux store with modified categories
          dispatch(updateCategories(updatedCategories));
          
          // Track analytics
          trackGameEvent.importQuestions(questions.length);
          
          // Create detailed success message
          let successMessage = `Successfully imported ${questions.length} questions`;
          
          if (newCategoriesCreated.size > 0) {
            successMessage += `\n✅ Created ${newCategoriesCreated.size} new categories: ${Array.from(newCategoriesCreated).join(', ')}`;
          }
          
          if (existingCategoriesUpdated.size > 0) {
            successMessage += `\n✅ Updated ${existingCategoriesUpdated.size} existing categories: ${Array.from(existingCategoriesUpdated).join(', ')}`;
          }
          
          // Show success notification
          setNotification({
            message: successMessage,
            type: 'success',
            visible: true
          });
        } else {
          setNotification({
            message: 'No valid questions found in the CSV file.',
            type: 'warning',
            visible: true
          });
        }
      } catch (error) {
        console.error('Error parsing CSV:', error);
        setNotification({
          message: `Error parsing CSV: ${error instanceof Error ? error.message : String(error)}`,
          type: 'error',
          visible: true
        });
      }
    } catch (error) {
      console.error('Error importing CSV:', error);
      setNotification({
        message: `Error importing CSV: ${error instanceof Error ? error.message : String(error)}`,
        type: 'error',
        visible: true
      });
    } finally {
      // Always reset the file input to allow reimporting the same file
      if (fileInput) fileInput.value = '';
      setIsImporting(false);
    }
  };
  
  const handleReturnToSetup = () => {
    dispatch(setGamePhase('setup'));
  };
  
  // Add handler for batch size change
  const handleBatchSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    
    // Handle "all" as a special case
    if (value === 'all') {
      const totalQuestions = flattenQuestions().length;
      setBatchSize(totalQuestions);
      setItemsPerPage(totalQuestions > 0 ? totalQuestions : 1000000); // Use a very high number or actual count
    } else {
      const newSize = parseInt(value);
      setBatchSize(newSize);
      setItemsPerPage(newSize);
    }
    
    // Reset to first page when changing batch size
    setCurrentPage(1);
  };
  
  // Add handler for new category
  const handleAddCategory = () => {
    if (!newCategoryName || newCategoryName.trim() === '') {
      alert('Please enter a category name');
      return;
    }
    
    const updatedCategories = JSON.parse(JSON.stringify(categories));
    const newCategoryId = `category-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    
    updatedCategories.push({
      id: newCategoryId,
      name: newCategoryName,
      icon: newCategoryIcon,
      questions: []
    });
    
    dispatch(updateCategories(updatedCategories));
    setShowAddCategoryModal(false);
    setNewCategoryName('');
    setNewCategoryIcon('❓');
  };
  
  const handleEditQuestion = (categoryId: string, questionIndex: number) => {
    const category = categories.find((c: Category) => c.id === categoryId);
    if (category) {
      const question = category.questions[questionIndex];
      handleOpenModal('edit', { categoryId, questionIndex });
    }
  };
  
  const handleToggleSelectMode = () => {
    setSelectMode(!selectMode);
    if (selectMode) {
      // Clear selections when exiting select mode
      setSelectedQuestions([]);
    }
  };
  
  const handleSelectQuestion = (categoryId: string, questionIndex: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedQuestions([...selectedQuestions, { categoryId, questionIndex }]);
    } else {
      setSelectedQuestions(selectedQuestions.filter(q => 
        !(q.categoryId === categoryId && q.questionIndex === questionIndex)
      ));
    }
  };
  
  const handleDeleteSelected = () => {
    if (selectedQuestions.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedQuestions.length} selected questions? This action cannot be undone.`)) {
      // Create a proper deep copy
      const updatedCategories = JSON.parse(JSON.stringify(categories));
      
      // Sort by category and index in descending order to avoid index shifting issues
      const sortedSelections = [...selectedQuestions].sort((a, b) => {
        if (a.categoryId === b.categoryId) {
          return b.questionIndex - a.questionIndex; // Descending order by index
        }
        return a.categoryId.localeCompare(b.categoryId);
      });
      
      // Process deletions
      sortedSelections.forEach(({ categoryId, questionIndex }) => {
        const categoryIndex = updatedCategories.findIndex((c: Category) => c.id === categoryId);
        if (categoryIndex !== -1) {
          // Create a new array for the questions
          const updatedQuestions = [...updatedCategories[categoryIndex].questions];
          
          // Remove the question
          updatedQuestions.splice(questionIndex, 1);
          
          // Assign the new questions array
          updatedCategories[categoryIndex].questions = updatedQuestions;
        }
      });
      
      dispatch(updateCategories(updatedCategories));
      setSelectedQuestions([]);
    }
  };
  
  const handleDeleteAllQuestions = () => {
    if (window.confirm("WARNING: Are you sure you want to delete ALL questions from ALL categories? This action cannot be undone.")) {
      // Create a deep copy of categories but with empty questions arrays
      const emptiedCategories = categories.map((category: Category) => ({
        ...category,
        questions: []
      }));
      
      dispatch(updateCategories(emptiedCategories));
    }
  };
  
  const handleSaveToLocalStorage = () => {
    try {
      // Store the current categories in localStorage
      localStorage.setItem('trivia-game-categories', JSON.stringify(categories));
      
      // Alert the user about cache clearing
      alert('Questions saved to browser storage successfully! Note that clearing your browser cache will remove these saved edits.');
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      alert('Failed to save questions to browser storage. Your browser may have insufficient storage space or has restrictions on localStorage.');
    }
  };
  
  const sortQuestions = (questions: any[]) => {
    return [...questions].sort((a, b) => {
      let valA, valB;
      
      // Handle different column types
      if (sortBy === 'value') {
        valA = a[sortBy];
        valB = b[sortBy];
      } else {
        valA = String(a[sortBy] || '').toLowerCase();
        valB = String(b[sortBy] || '').toLowerCase();
      }
      
      // Compare values
      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  };
  
  const handleSort = (column: string) => {
    // If clicking on the same column, toggle direction
    if (sortBy === column) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      // New column, set it as the sort column with ascending order
      setSortBy(column);
      setSortDirection('asc');
    }
  };
  
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    
    if (isChecked) {
      // Select only filtered questions
      const { filteredQuestions } = calculatePagination();
      const filteredSelectableQuestions = filteredQuestions.map(q => ({
        categoryId: q.categoryId,
        questionIndex: q.questionIndex
      }));
      setSelectedQuestions(filteredSelectableQuestions);
    } else {
      // Deselect all questions
      setSelectedQuestions([]);
    }
  };
  
  const handleForceReload = () => {
    // First, save current categories to localStorage
    localStorage.setItem('trivia-game-categories-backup', JSON.stringify(categories));
    
    // Now, clear the Redux store and reload from localStorage
    dispatch(updateCategories([]));
    
    // Wait a short time to ensure state updates, then reload from localStorage
    setTimeout(() => {
      try {
        const savedCategories = localStorage.getItem('trivia-game-categories');
        if (savedCategories) {
          const parsedCategories = JSON.parse(savedCategories);
          dispatch(updateCategories(parsedCategories));
          alert('Categories have been force reloaded from storage.');
        } else {
          // If no categories in localStorage, restore from the backup we just made
          const backupCategories = localStorage.getItem('trivia-game-categories-backup');
          if (backupCategories) {
            dispatch(updateCategories(JSON.parse(backupCategories)));
            alert('Categories have been restored from backup.');
          }
        }
      } catch (e) {
        console.error('Error reloading categories:', e);
        alert('Failed to reload categories. See console for details.');
      }
    }, 300);
  };
  
  const handleExportAllData = () => {
    try {
      // Create a downloadable JSON file with all categories data
      const dataStr = JSON.stringify(categories, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileDefaultName = `trivia-categories-backup-${new Date().toISOString().split('T')[0]}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      document.body.removeChild(linkElement);
    } catch (e) {
      console.error('Error exporting data:', e);
      alert('Error exporting data. See console for details.');
    }
  };
  
  const handleExportAsTypeScript = () => {
    // Prompt for password using browser's prompt dialog
    const enteredPassword = prompt("Enter the export password:");
    
    // Check if password is correct
    if (enteredPassword !== "LcCxMx") {
      alert("Incorrect password. Export cancelled.");
      return;
    }
    
    try {
      // Create clean copy of categories without the 'answered' property 
      // which is not needed in the source file and removed when embedding
      const cleanedCategories = categories.map((category: Category) => {
        return {
          id: category.id,
          name: category.name,
          icon: category.icon,
          questions: category.questions.map((q: Question) => ({
            value: q.value,
            question: q.question,
            answer: q.answer,
            image: q.image || undefined,
            audio: q.audio || undefined,
            video: q.video || undefined
          }))
        };
      });
      
      // Format the data as TypeScript code
      const tsCode = `import { Category } from '../types/game.types';\n\n` +
        `export const categories: Category[] = ${JSON.stringify(cleanedCategories, null, 2)};\n\n` +
        `export const getInitialCategories = (): Category[] => {\n` +
        `  return JSON.parse(JSON.stringify(categories));\n` +
        `};\n\n` +
        `export const resetToDefaultCategories = (): Category[] => {\n` +
        `  return JSON.parse(JSON.stringify(categories));\n` +
        `};\n`;
      
      // Create a downloadable TS file
      const dataUri = 'data:text/typescript;charset=utf-8,'+ encodeURIComponent(tsCode);
      const exportFileName = `questions-${new Date().toISOString().split('T')[0]}.ts`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileName);
      linkElement.click();
      
      // Track export event
      trackGameEvent.exportQuestions(
        cleanedCategories.reduce((sum: number, cat: Category) => sum + cat.questions.length, 0)
      );
    } catch (e) {
      console.error('Error exporting as TypeScript:', e);
      alert('Error exporting as TypeScript. See console for details.');
    }
  };
  
  // First, add a useEffect to debug changes to categories
  useEffect(() => {
    console.log('Categories changed:', categories);
  }, [categories]);
  
  // First, add a new function to handle category deletion
  const handleDeleteCategory = (categoryId: string) => {
    const categoryToDelete = categories.find((c: Category) => c.id === categoryId);
    
    if (!categoryToDelete) return;
    
    if (window.confirm(`Are you sure you want to delete the category "${categoryToDelete.name}" and all its questions? This action cannot be undone.`)) {
      // Create a deep copy of categories without the one to delete
      const updatedCategories = categories.filter((c: Category) => c.id !== categoryId);
      
      // Update Redux
      dispatch(updateCategories(updatedCategories));
      
      // Manual save to localStorage for redundancy
      try {
        localStorage.setItem('trivia-game-categories', JSON.stringify(updatedCategories));
      } catch (e) {
        console.error('Error saving to localStorage:', e);
      }
      
      alert(`Category "${categoryToDelete.name}" has been deleted.`);
    }
  };
  
  // Add this function to your QuestionManagement component
  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleOpenEditCategoryModal = (category: Category) => {
    setCategoryToEdit(category);
    setEditCategoryName(category.name);
    setEditCategoryIcon(category.icon);
    setShowEditCategoryModal(true);
  };
  
  const handleSaveCategory = () => {
    if (!categoryToEdit || editCategoryName.trim() === '') {
      alert('Category name is required.');
      return;
    }

    // Create a deep copy of categories to avoid reference issues
    const updatedCategories = JSON.parse(JSON.stringify(categories));
    
    // Find the category to update
    const categoryIndex = updatedCategories.findIndex(
      (c: Category) => c.id === categoryToEdit.id
    );
    
    if (categoryIndex !== -1) {
      // Update the category
      updatedCategories[categoryIndex].name = editCategoryName;
      updatedCategories[categoryIndex].icon = editCategoryIcon;
      
      // Update Redux state
      dispatch(updateCategories(updatedCategories));
      
      // Save to localStorage
      try {
        localStorage.setItem('trivia-game-categories', JSON.stringify(updatedCategories));
      } catch (e) {
        console.error('Error saving to localStorage:', e);
      }
      
      // Close modal and reset state
      setShowEditCategoryModal(false);
      setCategoryToEdit(null);
      setEditCategoryName('');
      setEditCategoryIcon('');
      
      
    }
  };
  
  const generateWithGemini = async () => {
    if (!generationPrompt.trim()) {
      setGenerationError('Please enter a prompt');
      return;
    }
    
    // Check if we have an API key, if not show the prompt
    if (!geminiApiKey) {
      setShowApiKeyPrompt(true);
      return;
    }
    
    setIsGenerating(true);
    setGenerationError('');
    
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
        {
          contents: [{
            parts: [{
              text: `You are a trivia question generator. Create a trivia question with its answer based on the following prompt: ${generationPrompt}. Format your response exactly like this: "Question: [your question] Answer: [your answer]"`
            }]
          }]
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      // Extract the generated content from Gemini's response
      const generatedContent = response.data.candidates[0].content.parts[0].text;
      
      // Simple parsing assuming format "Question: ... Answer: ..."
      const questionMatch = generatedContent.match(/Question:([\s\S]+?)(?=Answer:)/);
      const answerMatch = generatedContent.match(/Answer:([\s\S]+)/);
      
      const generatedQuestion = questionMatch ? questionMatch[1].trim() : '';
      const generatedAnswer = answerMatch ? answerMatch[1].trim() : '';
      
      // Update form data with generated content
      setFormData({
        ...formData,
        question: generatedQuestion,
        answer: generatedAnswer
      });
      
      setGenerationPrompt('');
    } catch (error) {
      console.error('Error generating content:', error);
      setGenerationError(`Failed to generate content: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
    }
  };
  
  // Add an API key submission handler
  const handleApiKeySubmit = () => {
    // Save the API key (could also save to localStorage if you want to persist it)
    if (geminiApiKey.trim()) {
      setShowApiKeyPrompt(false);
      // Now call generate again
      generateWithGemini();
    } else {
      setGenerationError('Please enter a valid API key');
    }
  };
  
  // First, add a useEffect for Escape key handling
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showModal) {
        event.stopPropagation(); // Prevent event bubbling
        
        // Check if form has data
        if (hasFormData()) {
          // Use the custom notification instead of window.confirm
          const confirmClose = window.confirm('Are you sure you want to close? All unsaved changes will be lost.');
          if (confirmClose) {
            handleCloseModal();
          }
        } else {
          handleCloseModal();
        }
      }
    };

    // Helper function to check if form has any data
    const hasFormData = () => {
      return formData.question.trim() !== '' || 
             formData.answer.trim() !== '' || 
             formData.image !== '' || 
             formData.audio !== '' || 
             formData.video !== '';
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showModal, formData]);
  
  // Update the renderPagination function to use the calculation function without state changes
  const renderPagination = () => {
    const { totalPages } = calculatePagination();
    
    if (totalPages <= 1) return null;
    
    // Create an improved pagination UI with ellipses for large page counts
    const renderPageNumbers = () => {
      const pageNumbers = [];
      const maxPagesToShow = 7; // Show max 7 page numbers in the pagination
      
      if (totalPages <= maxPagesToShow) {
        // Show all pages if there are fewer than maxPagesToShow
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Always show first page
        pageNumbers.push(1);
        
        // Show ellipsis if needed
        if (currentPage > 3) {
          pageNumbers.push('ellipsis-start');
        }
        
        // Show pages around current page
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);
        
        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
        }
        
        // Show ellipsis if needed
        if (currentPage < totalPages - 2) {
          pageNumbers.push('ellipsis-end');
        }
        
        // Always show last page
        pageNumbers.push(totalPages);
      }
      
      return pageNumbers;
    };
    
    return (
      <PaginationContainer>
        <PageButton 
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          &laquo; Previous
        </PageButton>
        
        {renderPageNumbers().map((page, index) => 
          typeof page === 'number' ? (
            <PageNumber 
              key={index} 
              $active={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PageNumber>
          ) : (
            <PageEllipsis key={page}>...</PageEllipsis>
          )
        )}
        
        <PageButton 
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </PageButton>
        
        <PageJump>
          <span>Go to:</span>
          <PageJumpInput 
            type="number" 
            min="1" 
            max={totalPages}
            value={currentPage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value >= 1 && value <= totalPages) {
                setCurrentPage(value);
              }
            }}
          />
          <span>of {totalPages}</span>
        </PageJump>
        
        <ItemsPerPageSelector>
          <span>Items per page:</span>
          <select 
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </ItemsPerPageSelector>
      </PaginationContainer>
    );
  };
  
  // Add handler for crop completion
  const handleCropComplete = (croppedImageUrl: string) => {
    setFormData({
      ...formData,
      image: croppedImageUrl
    });
    setShowImageCropper(false);
  };
  
  // Add handler for crop cancellation
  const handleCropCancel = () => {
    setShowImageCropper(false);
    setFormData({
      ...formData,
      image: originalImageUrl
    });
  };
  
  // Add handler for clicking on a category to view its questions
  const handleViewCategoryQuestions = (categoryId: string) => {
    // Get the category name for the search
    const categoryName = categories.find((c: Category) => c.id === categoryId)?.name || '';
    
    // Update the search query to reflect that we're viewing a specific category
    // This will trigger the useEffect that recalculates pagination
    setSearchQuery(`category:${categoryName}`);
    
    // Reset to the first page
    setCurrentPage(1);
    
    // Scroll to the questions section
    document.querySelector('.question-table')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Create a function to compare category structures
  const checkCategoryStructureChanges = () => {
    try {
      // Get categories from localStorage
      const savedCategoriesJson = localStorage.getItem('trivia-game-categories');
      if (!savedCategoriesJson) return false;
      
      const savedCategories = JSON.parse(savedCategoriesJson);
      
      // Get default categories 
      const defaultCategories = resetToDefaultCategories();
      
      // If saved categories length doesn't match default categories, structure has changed
      if (savedCategories.length !== defaultCategories.length) return true;
      
      // Check if any category IDs in default categories aren't in saved categories
      const savedCategoryIds = savedCategories.map((c: Category) => c.id);
      const defaultCategoryIds = defaultCategories.map((c: Category) => c.id);
      
      // Check if any default category ID is missing from saved categories
      for (const id of defaultCategoryIds) {
        if (!savedCategoryIds.includes(id)) return true;
      }
      
      return false;
    } catch (error) {
      console.error("Error checking category structure changes:", error);
      return false;
    }
  };

  // Check for category structure changes on component mount
  useEffect(() => {
    const structureChanged = checkCategoryStructureChanges();
    if (structureChanged) {
      const confirmation = window.confirm(
        "⚠️ ATTENTION: Category structure has changed. Would you like to reset to the latest default categories? " +
        "(This will discard any custom questions you've created.)"
      );
      
      if (confirmation) {
        handleEmergencyReset();
      }
    }
  }, []);
  
  const handleEmergencyReset = () => {
    if (window.confirm("⚠️ EMERGENCY RESET: This will restore all original questions and discard all your changes. Are you absolutely sure?")) {
      // Get the original default categories
      const defaultCategories = resetToDefaultCategories();
      
      // Update Redux state with the defaults
      dispatch(updateCategories(defaultCategories));
      
      // Clear localStorage to prevent it from overriding our reset
      localStorage.removeItem('trivia-game-categories');
      
      // Track this event in Google Analytics
      trackEvent('Admin', 'Reset Questions');
      
      // Show confirmation
      alert('All questions have been reset to factory defaults.');
      
      // Play sound for feedback
      playSound('button-click');
    }
  };
  
  // First, update the flattenQuestions function to properly handle all questions
  const flattenQuestions = useCallback(() => {
    const allQuestions: any[] = [];
    
    categories.forEach((category: Category) => {
      if (category.questions && Array.isArray(category.questions)) {
        category.questions.forEach((question: Question, index: number) => {
          allQuestions.push({
            categoryId: category.id,
            categoryName: category.name,
            questionIndex: index,
            ...question
          });
        });
      }
    });
    
    return allQuestions;
  }, [categories]);
  
  // Add this function to calculate pagination data without modifying state
  const calculatePagination = () => {
    // Get all questions from all categories in a flat array
    let filteredQuestions = flattenQuestions();
    
    // Apply search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      
      // Special filters for category:name
      if (lowerQuery.startsWith('category:')) {
        const categoryName = lowerQuery.substring(9).trim().toLowerCase();
        filteredQuestions = filteredQuestions.filter(q => 
          q.categoryName.toLowerCase().includes(categoryName)
        );
      } else {
        // Regular search across all fields
        filteredQuestions = filteredQuestions.filter(q => 
          q.question.toLowerCase().includes(lowerQuery) || 
          q.answer.toLowerCase().includes(lowerQuery) ||
          q.categoryName.toLowerCase().includes(lowerQuery)
        );
      }
    }
    
    // Apply sorting
    filteredQuestions = sortQuestions(filteredQuestions);
    
    // Calculate pagination
    const totalItems = filteredQuestions.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedQuestions = filteredQuestions.slice(indexOfFirstItem, indexOfLastItem);
    
    return { 
      totalPages,
      filteredQuestions,
      paginatedQuestions
    };
  };
  
  // Update the useEffect to use the calculate function and update state
  useEffect(() => {
    const { totalPages, paginatedQuestions } = calculatePagination();
    
    // Ensure current page is valid
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1); // Reset to first page if current page is now invalid
    } else {
      // Update displayed questions
      setDisplayedQuestions(paginatedQuestions);
    }
  }, [currentPage, searchQuery, itemsPerPage, categories, sortBy, sortDirection]);
  
  // Function to handle audio file upload
  const handleAudioFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      console.log('Audio file selected:', file.name, file.type);
      
      setSelectedAudioFile(file);
      
      // Create a URL for the audio file
      const audioUrl = URL.createObjectURL(file);
      console.log('Created audio URL:', audioUrl);
      
      setOriginalAudioUrl(audioUrl);
      
      // Update form data with audio URL
      setFormData({
        ...formData,
        audio: audioUrl
      });
      
      console.log('Updated formData with audio:', audioUrl);
      
      // Play sound for feedback
      playSound('button-click');
    } else {
      console.log('No audio file selected');
    }
  };
  
  // Function to handle video file upload
  const handleVideoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedVideoFile(file);
      
      // Create a URL for the video file
      const videoUrl = URL.createObjectURL(file);
      setOriginalVideoUrl(videoUrl);
      
      // Update form data with video URL
      setFormData({
        ...formData,
        video: videoUrl
      });
      
      // Play sound for feedback
      playSound('button-click');
    }
  };

  // State for direct URL inputs
  const [audioUrlInput, setAudioUrlInput] = useState<string>('');
  const [videoUrlInput, setVideoUrlInput] = useState<string>('');

  // Function to handle direct audio URL input
  const handleAudioUrlSubmit = () => {
    if (audioUrlInput.trim() === '') return;
    
    // Use the URL directly
    setFormData({
      ...formData,
      audio: audioUrlInput
    });
    
    // Play sound for feedback
    playSound('button-click');
  };
  
  // Function to handle direct video URL input
  const handleVideoUrlSubmit = () => {
    if (videoUrlInput.trim() === '') return;
    
    // Use the URL directly
    setFormData({
      ...formData,
      video: videoUrlInput
    });
    
    // Play sound for feedback
    playSound('button-click');
  };

  // Handler for audio trim completion
  const handleAudioTrimComplete = (trimmedAudioUrl: string) => {
    setFormData({
      ...formData,
      audio: trimmedAudioUrl
    });
    setShowAudioTrimmer(false);
    
    // Play sound for feedback
    playSound('button-click');
  };
  
  // Handler for audio trim cancellation
  const handleAudioTrimCancel = () => {
    setShowAudioTrimmer(false);
  };
  
  // Handler for video trim completion
  const handleVideoTrimComplete = (trimmedVideoUrl: string) => {
    setFormData({
      ...formData,
      video: trimmedVideoUrl
    });
    setShowVideoTrimmer(false);
    
    // Play sound for feedback
    playSound('button-click');
  };
  
  // Handler for video trim cancellation
  const handleVideoTrimCancel = () => {
    setShowVideoTrimmer(false);
  };

  // Point value selection helper
  const handlePointValueSelect = (value: number) => {
    setFormData({
      ...formData,
      value: value
    });
    playSound('button-click');
  };

  // Handle removing media
  const handleRemoveMedia = (mediaType: 'image' | 'audio' | 'video') => {
    setFormData({
      ...formData,
      [mediaType]: ''
    });
    
    // If we're removing the image, also reset the cropper
    if (mediaType === 'image') {
      setShowImageCropper(false);
      setOriginalImageUrl('');
    }
    
    // If we're removing audio/video, reset URL inputs as well
    if (mediaType === 'audio') {
      setAudioUrlInput('');
      setShowAudioTrimmer(false);
    }
    
    if (mediaType === 'video') {
      setVideoUrlInput('');
      setShowVideoTrimmer(false);
    }
    
    playSound('button-click');
  };

  // Function to open category creation directly from the form
  const handleCreateCategoryFromForm = () => {
    setShowAddCategoryModal(true);
  };

  // First, add a new function to generate QR codes in bulk
  const generateBulkQRCodes = async () => {
    if (selectedQuestions.length === 0) {
      alert('Please select at least one question to generate QR codes for.');
      return;
    }

    // Confirm with user
    if (!window.confirm(`Generate QR codes for ${selectedQuestions.length} selected questions? This may take a moment.`)) {
      return;
    }

    // Track how many were successfully generated
    let successCount = 0;
    let errorCount = 0;

    // Create a deep copy of categories to avoid reference issues
    const updatedCategories = JSON.parse(JSON.stringify(categories));

    // Show notification that process is starting
    showNotification(`Starting QR code generation for ${selectedQuestions.length} questions...`);

    // Process questions one by one
    for (const { categoryId, questionIndex } of selectedQuestions) {
      try {
        // Find category and question
        const categoryIndex = updatedCategories.findIndex((c: Category) => c.id === categoryId);
        if (categoryIndex === -1) continue;

        const question = updatedCategories[categoryIndex].questions[questionIndex];
        if (!question) continue;

        // Only generate QR code if there's an answer and no existing QR code (image)
        if (!question.answer || question.answer.trim() === '') {
          errorCount++;
          continue;
        }

        // Create canvas for QR code
        const canvas = document.createElement('canvas');
        canvas.width = 500;
        canvas.height = 500;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          throw new Error('Could not get canvas context');
        }

        // Draw white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Create temporary container for QR code
        const tempContainer = document.createElement('div');
        document.body.appendChild(tempContainer);

        // Render QR code
        ReactDOM.render(
          <QRCodeCanvas
            value={question.answer}
            size={440}
            level="H"
            includeMargin={true}
            bgColor="#FFFFFF"
            fgColor="#000000"
          />,
          tempContainer
        );

        // Wait for render to complete and capture the QR code
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            try {
              const qrCanvas = tempContainer.querySelector('canvas');
              if (qrCanvas) {
                // Draw QR code onto main canvas
                ctx.drawImage(
                  qrCanvas,
                  (canvas.width - qrCanvas.width) / 2,
                  (canvas.height - qrCanvas.height) / 2
                );

                // Add small note at bottom
                ctx.font = '14px Arial';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.fillText('no cheating!', canvas.width / 2, canvas.height - 20);

                // Convert to data URL and update question
                const dataURL = canvas.toDataURL('image/png');
                updatedCategories[categoryIndex].questions[questionIndex].image = dataURL;

                // Update question text to include QR code notice if not already there
                if (!question.question.includes('Do not scan the qr code')) {
                  updatedCategories[categoryIndex].questions[questionIndex].question = 
                    `${question.question || ''} Do not scan the qr code`.trim();
                }

                successCount++;
              }

              // Clean up
              ReactDOM.unmountComponentAtNode(tempContainer);
              document.body.removeChild(tempContainer);
              resolve();
            } catch (error) {
              console.error('Error processing QR code:', error);
              errorCount++;
              
              // Clean up in case of error
              if (document.body.contains(tempContainer)) {
                ReactDOM.unmountComponentAtNode(tempContainer);
                document.body.removeChild(tempContainer);
              }
              resolve();
            }
          }, 100);
        });

      } catch (error) {
        console.error('Error generating QR code:', error);
        errorCount++;
      }
    }

    // Update Redux store with the modified categories
    dispatch(updateCategories(updatedCategories));

    // Show completion notification
    showNotification(`QR code generation complete: ${successCount} successful, ${errorCount} failed.`);
    
    // Play sound for feedback
    playSound('button-click');
  };

  // Add this function with the other utility functions
  const handleDownloadSampleCSV = () => {
    const csvContent = `category,question,answer,value,image,audio,video,batch
Science,What is the chemical symbol for water?,H2O,100,,,,"default"
History,Who was the first President of the United States?,George Washington,200,,,,"default"
Entertainment,Who directed the movie "Jurassic Park"?,Steven Spielberg,300,,,,"default"`;
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'sample_questions_template.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show notification
    setNotification({
      message: 'Sample CSV template downloaded',
      type: 'success',
      visible: true
    });
  };

  // Add this as a new handler function
  const handleFormKeyDown = (e: React.KeyboardEvent) => {
    // Check for Ctrl+Enter shortcut
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      
      // Only submit if we're in the modal and the form has valid data
      if (showModal && formData.question && formData.answer) {
        handleSubmit();
        playSound('button-click');
      }
    }
  };

  // Add this function after handleDeleteCategory
  const handleDeleteAllCategories = () => {
    if (window.confirm("WARNING: Are you sure you want to delete ALL categories? This action cannot be undone.")) {
      // Dispatch an empty array to clear all categories
      dispatch(updateCategories([]));
      
      // Clear localStorage as well
      try {
        localStorage.setItem('trivia-game-categories', JSON.stringify([]));
        alert('All categories have been deleted.');
      } catch (e) {
        console.error('Error saving to localStorage:', e);
        alert('Categories were deleted but there was an error updating localStorage.');
      }
    }
  };

  // Add this function to generate an entire category with Gemini AI
  const generateCategoryWithGemini = async () => {
    if (!categoryNameInput.trim() || !categoryPrompt.trim()) {
      setCategoryGenerationError('Please enter both a category name and what the questions should be about');
      return;
    }
    
    // Check if we have an API key, if not show the prompt
    if (!geminiApiKey) {
      setShowApiKeyPrompt(true);
      return;
    }
    
    setGeneratingCategory(true);
    setCategoryGenerationError('');
    
    try {
      // Create a new category ID
      const newCategoryId = `category-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      
      // Helper function to get difficulty instructions based on point value
      const getDifficultyInstructions = (level: number): string => {
        const kidInstructions: Record<string, string> = {
          '100': 'Very very easy, simple facts, one-word answers',
          '200': 'Very easy, basic concepts with simple reasoning',
          '300': 'Easy, specific details that are well-known',
          '400': 'Straightforward, common knowledge with clear answers',
          '500': 'Straightforward, familiar topics with slightly more detail'
        };

        const standardInstructions: Record<string, string> = {
          '100': 'Simple facts',
          '200': 'Basic concepts requiring simple reasoning',
          '300': 'Specific details with multi-step facts',
          '400': 'Lesser-known facts requiring connections',
          '500': 'Obscure knowledge or complex reasoning'
        };

        return categoryDifficulty === 'Kid-friendly'
          ? kidInstructions[level.toString()]
          : standardInstructions[level.toString()];
      };
      
      // Calculate how many questions of each difficulty level based on the distribution
      // Base distribution: 2 x 100pt, 1 x 200pt, 1 x 300pt, 1 x 400pt, 1 x 500pt = 6 questions
      const baseDistribution = {
        100: 2,
        200: 1,
        300: 1,
        400: 1,
        500: 1
      };
      
      // Calculate the multiplier based on the total question count
      const baseCount = Object.values(baseDistribution).reduce((sum, count) => sum + count, 0);
      const multiplier = Math.max(1, Math.floor(questionCount / baseCount));
      const remainder = questionCount % baseCount;
      
      // Create the distribution with the multiplier applied
      const distribution: Record<number, number> = {
        100: baseDistribution[100] * multiplier,
        200: baseDistribution[200] * multiplier,
        300: baseDistribution[300] * multiplier,
        400: baseDistribution[400] * multiplier,
        500: baseDistribution[500] * multiplier
      };
      
      // Distribute any remainder questions starting from the lowest difficulty
      let remainingToDistribute = remainder;
      const pointValues = [100, 200, 300, 400, 500];
      let index = 0;
      
      while (remainingToDistribute > 0 && index < pointValues.length) {
        distribution[pointValues[index]]++;
        remainingToDistribute--;
        index++;
      }
      
      // Build the enhanced prompt for Gemini
      const prompt = `You are a professional trivia question generator. Please create exactly ${questionCount} trivia questions about ${categoryNameInput} ${categoryPrompt} in ${categoryLanguage} language.

      STRICT RULES:
      1. Format your response EXACTLY like this JSON structure, with no additional text:
      [
        {"value": 100, "question": "Question text here", "answer": "Answer text here"},
        {"value": 200, "question": "Question text here", "answer": "Answer text here"},
        ...
      ]
      
      2. Difficulty distribution:
         - 100pts: ${getDifficultyInstructions(100)} (${distribution[100]} questions)
         - 200pts: ${getDifficultyInstructions(200)} (${distribution[200]} questions)
         - 300pts: ${getDifficultyInstructions(300)} (${distribution[300]} questions)
         - 400pts: ${getDifficultyInstructions(400)} (${distribution[400]} questions)
         - 500pts: ${getDifficultyInstructions(500)} (${distribution[500]} questions)
      
      3. ${
        categoryDifficulty === 'Kid-friendly'
          ? 'Use child-friendly language, avoid complex terms, include fun facts'
          : 'Use precise terminology, include historical dates/names for 300+ points'
      }
      
      4. Include 1 "curveball" question per 10 questions
      5. Verify facts through cross-references
      6. ${
        categoryLanguage === 'Arabic'
          ? 'Write both questions and answers in Arabic script with simple vocabulary for kids'
          : 'Use age-appropriate terminology'
      }
      7. ${
        categoryDifficulty === 'Kid-friendly'
          ? 'Avoid abstract concepts, use relatable examples'
          : 'Require multi-step reasoning for 400+ points'
      }
      
      Ensure all questions are accurate and factual.`;
      
      // Call the Gemini API
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
        {
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      // Extract the generated content
      const generatedContent = response.data.candidates[0].content.parts[0].text;
      
      // Parse the JSON response - first clean up any potential markdown code blocks
      let cleanedJson = generatedContent.replace(/```json\s+/g, '').replace(/```/g, '').trim();
      const questions = JSON.parse(cleanedJson);
      
      // Create a deep copy of categories
      const updatedCategories = JSON.parse(JSON.stringify(categories));
      
      // Create the new category with generated questions
      const newCategory = {
        id: newCategoryId,
        name: categoryNameInput.trim(),
        icon: categoryIcon,
        questions: questions.map((q: any) => ({
          question: q.question,
          answer: q.answer,
          value: parseInt(q.value, 10),
          answered: false,
          image: '',
          audio: '',
          video: '',
          imageBlur: 0,
          hideQuestion: false
        }))
      };
      
      // Add the new category to the list
      updatedCategories.push(newCategory);
      
      // Update Redux
      dispatch(updateCategories(updatedCategories));
      
      // Manual save to localStorage for redundancy
      try {
        localStorage.setItem('trivia-game-categories', JSON.stringify(updatedCategories));
      } catch (e) {
        console.error('Error saving to localStorage:', e);
      }
      
      // Reset the form and close the modal
      setCategoryNameInput('');
      setCategoryPrompt('');
      setCategoryIcon('❓');
      setShowGenerateCategoryModal(false);
      
      // Show success notification
      alert(`Category "${categoryNameInput.trim()}" has been created with ${questionCount} generated questions!`);
      
    } catch (error) {
      console.error('Error generating category:', error);
      setCategoryGenerationError(`Failed to generate category: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setGeneratingCategory(false);
    }
  };

  // Add a list of emojis to use for random assignment
  const CATEGORY_EMOJIS = [
    '🌟', '🎮', '🎬', '🎭', '🎨', '🎵', '📚', '🏛️', '🧪', '🔬', 
    '🪐', '🌍', '🌋', '🏔️', '🌊', '🌲', '🌱', '🍄', '🍎', '🍕', 
    '🍦', '🎂', '🍩', '🏆', '🎯', '⚽', '🏀', '🎾', '🏓', '🎣', 
    '✈️', '🚀', '🚗', '🚂', '🏰', '🏠', '🔮', '⏰', '📱', '💻', 
    '🧠', '❤️', '🧩', '🎪', '🎠', '🎢', '🎡', '🎲', '🎯', '🎺',
    '🤫' // ولا كلمة - silence
  ];

  // Function to assign random emojis to categories with default icons
  const handleAssignRandomEmojis = () => {
    // Create a deep copy of categories
    const updatedCategories = JSON.parse(JSON.stringify(categories));
    let updatedCount = 0;

    // Loop through categories and assign random emojis to those with '❓' icon
    updatedCategories.forEach((category: Category) => {
      if (!category.icon || category.icon === '❓') {
        // Pick a random emoji from the list
        const randomIndex = Math.floor(Math.random() * CATEGORY_EMOJIS.length);
        category.icon = CATEGORY_EMOJIS[randomIndex];
        updatedCount++;
      }
    });

    // Only update if changes were made
    if (updatedCount > 0) {
      // Update Redux
      dispatch(updateCategories(updatedCategories));
      
      // Manual save to localStorage for redundancy
      try {
        localStorage.setItem('trivia-game-categories', JSON.stringify(updatedCategories));
      } catch (e) {
        console.error('Error saving to localStorage:', e);
      }
      
      // Show success notification
      setNotification({
        type: 'success',
        message: `Assigned random emojis to ${updatedCount} categories!`,
        visible: true
      });
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setNotification(prev => ({ ...prev, visible: false }));
      }, 3000);
    } else {
      // Show info notification if no categories needed updating
      setNotification({
        type: 'info',
        message: 'No categories needed emoji assignment!',
        visible: true
      });
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setNotification(prev => ({ ...prev, visible: false }));
      }, 3000);
    }
  };

  return (
    <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header>
        <Title className="halloween-drip">Question Management</Title>
        <Subtitle>Review, add, update, or delete questions before starting the game</Subtitle>
      </Header>
      
      <Content>
        <ActionBar>
          <ButtonGroup>
            <Button 
              onClick={handleReturnToSetup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← رجوع
            </Button>
            <ImportButton 
              onClick={handleImportClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isImporting}
              title="CSV must include 'category', 'question', and 'answer' columns. Optional columns: 'value', 'image', 'audio', 'video', 'batch'"
            >
              {isImporting ? '⏳ Importing...' : '📥 Import CSV'}
            </ImportButton>
            <FileInput 
              type="file" 
              ref={fileInputRef} 
              accept=".csv" 
              onChange={handleImportCSV} 
            />
            <Button 
              onClick={handleDownloadSampleCSV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#8338ec' }}
              title="Download a CSV template with example questions"
            >
              📋 CSV Template
            </Button>
            <Button 
              onClick={handleExportCSV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📤 Export CSV
            </Button>
            <Button 
              onClick={() => handleOpenModal('add')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ➕ Add Question
            </Button>
      
            <Button 
              onClick={handleOpenSimpleModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#43a047' }}
            >
              ✨ Add Simple Question
            </Button>
            
            <Button 
              onClick={handleSaveToLocalStorage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💾 Save Edits to Browser
            </Button>
            
            <Button
              onClick={handleToggleSelectMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: selectMode ? '#e67e22' : '#8c52ff' }}
            >
              {selectMode ? '❌ Cancel Selection' : '✓ Select Questions'}
            </Button>
              
            <Button 
              onClick={handleForceReload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔄 Force Reload Questions
            </Button>
            
            <Button 
              onClick={handleExportAllData}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💾 Export All Data
            </Button>
            
            <Button 
              onClick={handleExportAsTypeScript}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📋 Export as TypeScript
            </Button>
            
         
          </ButtonGroup>
          
          <DangerButtonGroup>
            {selectMode && (
              <>
                {selectedQuestions.length > 0 && (
                  <DangerButton
                    onClick={handleDeleteSelected}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🗑️ Delete Selected ({selectedQuestions.length})
                  </DangerButton>
                )}
                
                {selectedQuestions.length > 0 && (
                  <Button
                    onClick={generateBulkQRCodes}
                    style={{ marginLeft: '8px', backgroundColor: '#5bc0de' }}
                  >
                    📱 Generate QR Codes ({selectedQuestions.length})
                  </Button>
                )}
              </>
            )}
            <DangerButton
              onClick={handleDeleteAllQuestions}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ⚠️ Delete All Questions
            </DangerButton>
          </DangerButtonGroup>
        </ActionBar>
        
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Search questions, answers, or categories..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
          {searchQuery && (
            <ClearButton 
              onClick={() => {
                setSearchQuery('');
                setCurrentPage(1);
              }}
              title="Clear search"
            >
              ✖
            </ClearButton>
          )}
        </SearchBar>
        
        <BatchSizeSelector>
          <BatchSelectLabel>Questions per page:</BatchSelectLabel>
          <BatchSelect 
            value={typeof batchSize === 'number' && batchSize > 1000 ? 'all' : batchSize} 
            onChange={handleBatchSizeChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={500}>500</option>
            <option value={1000}>1000</option>
            <option value="all">All</option>
          </BatchSelect>
        </BatchSizeSelector>
        
        {displayedQuestions.length > 0 ? (
          <>
            <Table className="question-table">
              <thead>
                <TableRow>
                  {selectMode && (
                    <TableHeaderCell style={{ width: '50px' }}>
                      <input 
                        type="checkbox" 
                        checked={selectedQuestions.length === flattenQuestions().length}
                        onChange={handleSelectAll}
                      />
                    </TableHeaderCell>
                  )}
                  <TableHeaderCell 
                    onClick={() => handleSort('categoryName')}
                    style={{ cursor: 'pointer', width: '20%' }}
                  >
                    Category {sortBy === 'categoryName' && (sortDirection === 'asc' ? '▲' : '▼')}
                  </TableHeaderCell>
                  <TableHeaderCell 
                    onClick={() => handleSort('value')}
                    style={{ cursor: 'pointer', width: '10%' }}
                  >
                    Value {sortBy === 'value' && (sortDirection === 'asc' ? '▲' : '▼')}
                  </TableHeaderCell>
                  <TableHeaderCell 
                    onClick={() => handleSort('question')}
                    style={{ cursor: 'pointer', width: '30%' }}
                  >
                    Question {sortBy === 'question' && (sortDirection === 'asc' ? '▲' : '▼')}
                  </TableHeaderCell>
                  <TableHeaderCell 
                    onClick={() => handleSort('answer')}
                    style={{ cursor: 'pointer', width: '30%' }}
                  >
                    Answer {sortBy === 'answer' && (sortDirection === 'asc' ? '▲' : '▼')}
                  </TableHeaderCell>
                  <TableHeaderCell style={{ width: '10%' }}>Actions</TableHeaderCell>
                </TableRow>
              </thead>
              <tbody>
                {displayedQuestions.map((item, index) => (
                  <TableRow key={index}>
                    {selectMode && (
                      <TableCell style={{ width: '40px' }}>
                        <Checkbox 
                          type="checkbox"
                          checked={selectedQuestions.some(
                            q => q.categoryId === item.categoryId && q.questionIndex === item.questionIndex
                          )}
                          onChange={(e) => handleSelectQuestion(
                            item.categoryId, 
                            item.questionIndex, 
                            e.target.checked
                          )}
                        />
                      </TableCell>
                    )}
                    <TableCell>{item.categoryName}</TableCell>
                    <TableCell>{item.value}</TableCell>
                    <TableCell>
                      <BidirectionalText text={truncateText(item.question, 100)} />
                    </TableCell>
                    <TableCell>
                      <BidirectionalText text={truncateText(item.answer, 100)} />
                    </TableCell>
                    <TableCell>
                      <ActionButtons>
                        <ActionButton onClick={() => handleEditQuestion(item.categoryId, item.questionIndex)}>
                          ✏️
                        </ActionButton>
                        <ActionButton onClick={() => handleDeleteQuestion(item.categoryId, item.questionIndex)}>
                          🗑️
                        </ActionButton>
                      </ActionButtons>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
            
            {renderPagination()}
          </>
        ) : (
          <NoQuestionsMessage>
            {searchQuery ? 'No questions match your search' : 'No questions found. Add some questions to get started!'}
          </NoQuestionsMessage>
        )}
      </Content>
      
      <AnimatePresence>
        {showModal && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              // Prevent the modal from closing when clicking the overlay
              e.stopPropagation();
            }}
          >
            <ModalContent
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle className="halloween-drip">
                  {modalMode === 'add' 
                    ? (simpleMode ? 'Add Simple Question' : 'Add New Question') 
                    : 'Edit Question'}
                </ModalTitle>
                <CloseButton 
                  onClick={handleCloseModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </CloseButton>
              </ModalHeader>
              
              <FormGroup>
                <FormLabel>Category</FormLabel>
                <FormSelect
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleFormChange}
                >
                  <option value="">-- Select a category --</option>
                  {categories.map((category: Category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </FormSelect>
                <CreateCategoryLink onClick={handleCreateCategoryFromForm}>
                  + Create New Category
                </CreateCategoryLink>
                
                {/* Show missing point values for selected category */}
                {formData.categoryId && (
                  <div style={{ marginTop: '10px' }}>
                    {getMissingPointValues(formData.categoryId).length > 0 ? (
                      <div style={{ 
                        color: 'red', 
                        fontWeight: 'bold',
                        padding: '8px',
                        border: '1px solid red',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 0, 0, 0.05)'
                      }}>
                        Missing point values: {getMissingPointValues(formData.categoryId).join(', ')}
                        <div style={{ fontSize: '12px', marginTop: '4px' }}>
                          Each category needs 2x100 point questions and 1 each of 200, 300, 400, 500
                        </div>
                      </div>
                    ) : (
                      <div style={{ color: 'green', fontWeight: 'bold' }}>
                        ✓ All required point values are present
                      </div>
                    )}
                  </div>
                )}
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Generate Question with AI</FormLabel>
                <GenerationPromptInput
                  placeholder="Describe what kind of trivia question you want (e.g., 'A question about astronomy' or 'Rewrite this: What is the capital of France?')"
                  value={generationPrompt}
                  onChange={(e) => setGenerationPrompt(e.target.value)}
                />
                <GenerationButton
                  onClick={generateWithGemini}
                  disabled={isGenerating || !generationPrompt.trim()}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isGenerating ? '⏳ Generating...' : '✨ Generate with Gemini'}
                </GenerationButton>
                {generationError && <ErrorMessage>{generationError}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Question</FormLabel>
                <FormTextarea
                  name="question"
                  value={formData.question}
                  onChange={handleFormChange}
                  onKeyDown={handleFormKeyDown}
                  placeholder="Enter question text"
                />
                
                {/* Add the hide question checkbox */}
                <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    id="hideQuestion"
                    checked={formData.hideQuestion}
                    onChange={(e) => setFormData({...formData, hideQuestion: e.target.checked})}
                    style={{ marginRight: '8px' }}
                  />
                  <label htmlFor="hideQuestion" style={{ cursor: 'pointer' }}>
                    Hide question? <span style={{ color: '#777', fontSize: '0.9em' }}>(A "Reveal Question" button will be shown instead)</span>
                  </label>
                </div>
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Answer</FormLabel>
                <FormTextarea
                  name="answer"
                  value={formData.answer}
                  onChange={handleFormChange}
                  onKeyDown={handleFormKeyDown}
                  placeholder="Enter answer text"
                />
                <Button
                  onClick={handleGenerateQRCode}
                  disabled={isGeneratingQR || !formData.answer.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isGeneratingQR ? '⏳ Generating QR...' : '📱 Generate QR Code حق لعبة ولا كلمة فقط!'}
                </Button>
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Point Value</FormLabel>
                <PointValueButtonGroup>
                  {[100, 200, 300, 400, 500].map((value) => (
                    <PointValueButton
                      key={value}
                      selected={formData.value === value}
                      onClick={() => handlePointValueSelect(value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {value}
                    </PointValueButton>
                  ))}
                </PointValueButtonGroup>
              </FormGroup>
              
              {/* Only show optional media fields if not in simple mode */}
              {!simpleMode && (
                <>
                  <FormGroup>
                    <FormLabel>Image (optional)</FormLabel>
                    <FormInput
                      name="image"
                      value={formData.image || ''}
                      onChange={handleFormChange}
                      placeholder="https://example.com/image.jpg"
                    />
                    
                    {/* Image blur slider - only show if an image URL is provided */}
                    {formData.image && (
                      <div style={{ margin: '10px 0' }}>
                        <FormLabel>Image Blur Level: {imageBlur}px</FormLabel>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <input
                            type="range"
                            min="0"
                            max="50"
                            value={imageBlur}
                            onChange={(e) => setImageBlur(parseInt(e.target.value))}
                          />
                          <button onClick={() => setImageBlur(0)}>Reset</button>
                        </div>
                      </div>
                    )}
                    
                    <div style={{ marginTop: '8px' }}>
                      <label htmlFor="file-upload" style={{ cursor: 'pointer', background: '#f0f0f0', padding: '8px 12px', borderRadius: '4px', display: 'inline-block' }}>
                        Or upload image file
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            setSelectedFile(file);
                            
                            // Create local URL for the file
                            const localUrl = URL.createObjectURL(file);
                            setOriginalImageUrl(localUrl);
                            setShowImageCropper(true);
                          }
                        }}
                      />
                    </div>
                    
                    {formData.image && !showImageCropper && (
                      <MediaContainer>
                        <MediaPreview type="image" src={formData.image} blur={imageBlur} />
                        <RemoveMediaButton
                          onClick={() => handleRemoveMedia('image')}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          ✖
                        </RemoveMediaButton>
                      </MediaContainer>
                    )}
                    {showImageCropper && (
                      <ImageCropper
                        imageUrl={originalImageUrl}
                        onCropComplete={handleCropComplete}
                        onCancel={handleCropCancel}
                      />
                    )}
                  </FormGroup>
              
                  <FormGroup>
                    <FormLabel>Audio URL (optional)</FormLabel>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div>
                        <StyledTextBlock>Upload from your device:</StyledTextBlock>
                        <StyledInput
                          type="file"
                          accept="audio/*"
                          onChange={handleAudioFileUpload}
                        />
                      </div>
                      
                      <div>
                        <StyledTextBlock>Or use a direct URL:</StyledTextBlock>
                        <div style={{ display: 'flex', gap: '5px' }}>
                          <StyledInput
                            type="text"
                            placeholder="Enter audio URL"
                            value={audioUrlInput}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAudioUrlInput(e.target.value)}
                            style={{ flex: 1 }}
                          />
                          <Button
                            onClick={handleAudioUrlSubmit}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Use URL
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {showAudioTrimmer && formData.audio && (
                      <AudioTrimmer
                        audioUrl={formData.audio!}
                        onTrimComplete={handleAudioTrimComplete}
                        onCancel={handleAudioTrimCancel}
                      />
                    )}
                    {formData.audio && !showAudioTrimmer && (
                      <div style={{ marginTop: '15px' }}>
                        <MediaContainer>
                          <MediaPreview type="audio" src={formData.audio} />
                          <RemoveMediaButton
                            onClick={() => handleRemoveMedia('audio')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            ✖
                          </RemoveMediaButton>
                        </MediaContainer>
                        
                        <Button
                          onClick={() => setShowAudioTrimmer(true)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ marginTop: '10px', backgroundColor: '#6c757d' }}
                        >
                          ✂️ Trim Audio
                        </Button>
                      </div>
                    )}
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Video URL (optional)</FormLabel>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div>
                        <StyledTextBlock>Upload from your device:</StyledTextBlock>
                        <StyledInput
                          type="file"
                          accept="video/*"
                          onChange={handleVideoFileUpload}
                        />
                      </div>
                      
                      <div>
                        <StyledTextBlock>Or use a direct URL:</StyledTextBlock>
                        <div style={{ display: 'flex', gap: '5px' }}>
                          <StyledInput
                            type="text"
                            placeholder="Enter video URL"
                            value={videoUrlInput}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVideoUrlInput(e.target.value)}
                            style={{ flex: 1 }}
                          />
                          <Button
                            onClick={handleVideoUrlSubmit}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Use URL
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {showVideoTrimmer && formData.video && (
                      <VideoTrimmer
                        videoUrl={formData.video!}
                        onTrimComplete={handleVideoTrimComplete}
                        onCancel={handleVideoTrimCancel}
                      />
                    )}
                    {formData.video && !showVideoTrimmer && (
                      <div>
                        <MediaContainer>
                          <MediaPreview type="video" src={formData.video} />
                          <RemoveMediaButton
                            onClick={() => handleRemoveMedia('video')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            ✖
                          </RemoveMediaButton>
                        </MediaContainer>
                        <Button
                          onClick={() => setShowVideoTrimmer(true)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ marginTop: '10px', backgroundColor: '#6c757d' }}
                        >
                          ✂️ Trim Video
                        </Button>
                      </div>
                    )}
                  </FormGroup>
                </>
              )}
              
              <ModalActions>
                <Button
                  onClick={handleCloseModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {modalMode === 'add' ? 'Add Question' : 'Save Changes'}
                </Button>
              </ModalActions>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
      
      {showAddCategoryModal && (
        <Modal onClick={e => e.stopPropagation()}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="halloween-drip">Add New Category</ModalTitle>
              <CloseButton onClick={() => setShowAddCategoryModal(false)}>×</CloseButton>
            </ModalHeader>
            
            <FormGroup>
              <FormLabel>Category Name</FormLabel>
              <FormInput
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Enter category name"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Select Category Icon:</FormLabel>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <SelectedEmoji>{newCategoryIcon}</SelectedEmoji>
                
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CategoryEmojiPickerWrapper>
                    <EmojiPickerElement 
                      onEmojiSelected={(emoji) => setNewCategoryIcon(emoji)}
                      currentEmoji={newCategoryIcon}
                      label="Choose Emoji"
                      buttonStyle={{ backgroundColor: '#f5f5f5' }}
                      centered={true}
                    />
                  </CategoryEmojiPickerWrapper>
                  
                  <Button
                    onClick={() => setNewCategoryIcon('❓')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: '#6c757d' }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </FormGroup>
            
            <ModalActions>
              <Button
                onClick={() => setShowAddCategoryModal(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddCategory}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add Category
              </Button>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}
      
      {showEditCategoryModal && (
        <Modal onClick={e => e.stopPropagation()}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="halloween-drip">Edit Category</ModalTitle>
              <CloseButton onClick={() => setShowEditCategoryModal(false)}>×</CloseButton>
            </ModalHeader>
            
            <FormGroup>
              <FormLabel>Category Name</FormLabel>
              <FormInput
                value={editCategoryName}
                onChange={(e) => setEditCategoryName(e.target.value)}
                placeholder="Enter category name"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Select Category Icon</FormLabel>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <SelectedEmoji>{editCategoryIcon}</SelectedEmoji>
                
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CategoryEmojiPickerWrapper>
                    <EmojiPickerElement 
                      onEmojiSelected={(emoji) => setEditCategoryIcon(emoji)}
                      currentEmoji={editCategoryIcon}
                      label="Choose Emoji"
                      buttonStyle={{ backgroundColor: '#f5f5f5' }}
                      centered={true}
                    />
                  </CategoryEmojiPickerWrapper>
                  
                  <Button
                    onClick={() => setEditCategoryIcon('❓')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: '#6c757d' }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </FormGroup>
            
            <ButtonGroup>
              <Button onClick={() => setShowEditCategoryModal(false)}>Cancel</Button>
              <Button onClick={handleSaveCategory}>Save Changes</Button>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
      
      {showApiKeyPrompt && (
        <Modal
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          $isApiKeyModal={true}
        >
          <ModalHeader>
            <h2>Enter Gemini API Key</h2>
            <CloseButton 
              onClick={() => setShowApiKeyPrompt(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </CloseButton>
          </ModalHeader>
          
          <ModalContent>
            <FormGroup>
              <FormLabel>Gemini API Key</FormLabel>
              <FormInput
                type="text"
                value={geminiApiKey}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGeminiApiKey(e.target.value)}
                placeholder="Enter your Gemini API key here"
              />
              <HelpText>
                You can get a Gemini API key from the Google AI Studio. This key will only be used in your browser.
              </HelpText>
            </FormGroup>
          </ModalContent>
          
          <ButtonGroup style={{ justifyContent: 'flex-end', padding: '20px' }}>
            <Button 
              onClick={handleApiKeySubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </Button>
            <Button 
              onClick={() => setShowApiKeyPrompt(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Modal>
      )}
      
      <CategoriesSection>
        <CategoriesHeader className="halloween-drip">Category Management</CategoriesHeader>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
          <Button 
            onClick={handleReturnToSetup}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← رجوع
          </Button>
          <Button 
            onClick={() => setShowAddCategoryModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ➕ Add Category
          </Button>
          <Button 
            onClick={() => setShowGenerateCategoryModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: '#8C43A8',
              color: 'white'
            }}
          >
            🤖 Generate Category with AI
          </Button>
          <Button 
            onClick={handleAssignRandomEmojis}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: '#4CAF50',
              color: 'white'
            }}
          >
            🎲 Assign Random Emojis
          </Button>
          <Button 
            onClick={handleDeleteAllCategories}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: '#d00000',
              color: 'white'
            }}
          >
            🗑️ Delete All Categories
          </Button>
        </div>
        <CategoryList>
          {categories.map((category: Category) => (
            <CategoryCard 
              key={category.id}
              onClick={(e) => {
                // Only trigger if not clicking on edit or delete buttons
                if (!(e.target as HTMLElement).closest('button')) {
                  handleViewCategoryQuestions(category.id);
                }
              }}
            >
              <CategoryIcon>{category.icon || '❓'}</CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
              <CategoryInfo>{category.questions.length} questions</CategoryInfo>
              <CategoryEditButton 
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenEditCategoryModal(category);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✏️
              </CategoryEditButton>
              <CategoryDeleteButton 
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteCategory(category.id);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                🗑️
              </CategoryDeleteButton>
            </CategoryCard>
          ))}
        </CategoryList>
      </CategoriesSection>
      
      <Button
        onClick={handleEmergencyReset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          backgroundColor: '#d00000',
          color: 'white'
        }}
      >
        🔄 Emergency Reset
      </Button>
      
      {notification.visible && (
        <NotificationDisplay
          type={notification.type as 'success' | 'error' | 'info' | 'warning'}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          {notification.message}
        </NotificationDisplay>
      )}
      {showGenerateCategoryModal && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalContent
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle className="halloween-drip">Generate Category with AI</ModalTitle>
              <CloseButton 
                onClick={() => setShowGenerateCategoryModal(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </CloseButton>
            </ModalHeader>
            
            <FormGroup>
              <FormLabel>Category Name</FormLabel>
              <FormInput
                value={categoryNameInput}
                onChange={(e) => setCategoryNameInput(e.target.value)}
                placeholder="Enter category name"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Category Icon</FormLabel>
              <FormInput
                value={categoryIcon}
                onChange={(e) => setCategoryIcon(e.target.value)}
                placeholder="Enter an emoji or character for the icon"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Language</FormLabel>
              <RadioGroup>
                <RadioButton 
                  selected={categoryLanguage === 'English'}
                  onClick={() => setCategoryLanguage('English')}
                >
                  <input 
                    type="radio" 
                    name="categoryLanguage" 
                    checked={categoryLanguage === 'English'}
                    onChange={() => {}}
                  />
                  English
                </RadioButton>
                <RadioButton 
                  selected={categoryLanguage === 'Arabic'}
                  onClick={() => setCategoryLanguage('Arabic')}
                >
                  <input 
                    type="radio" 
                    name="categoryLanguage" 
                    checked={categoryLanguage === 'Arabic'}
                    onChange={() => {}}
                  />
                  Arabic
                </RadioButton>
              </RadioGroup>
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Difficulty</FormLabel>
              <RadioGroup>
                <RadioButton 
                  selected={categoryDifficulty === 'Default'}
                  onClick={() => setCategoryDifficulty('Default')}
                >
                  <input 
                    type="radio" 
                    name="categoryDifficulty" 
                    checked={categoryDifficulty === 'Default'}
                    onChange={() => {}}
                  />
                  Default (Progressive Difficulty)
                </RadioButton>
                <RadioButton 
                  selected={categoryDifficulty === 'Kid-friendly'}
                  onClick={() => setCategoryDifficulty('Kid-friendly')}
                >
                  <input 
                    type="radio" 
                    name="categoryDifficulty" 
                    checked={categoryDifficulty === 'Kid-friendly'}
                    onChange={() => {}}
                  />
                  Kid-friendly (Easy Questions)
                </RadioButton>
              </RadioGroup>
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Number of Questions (in multiples of 6)</FormLabel>
              <FormSelect
                value={questionCount.toString()}
                onChange={(e) => setQuestionCount(parseInt(e.target.value, 10))}
              >
                <option value="6">6 Questions</option>
                <option value="12">12 Questions</option>
                <option value="18">18 Questions</option>
                <option value="24">24 Questions</option>
                <option value="30">30 Questions</option>
                <option value="36">36 Questions</option>
              </FormSelect>
            </FormGroup>
            
            <FormGroup>
              <FormLabel>What should the questions be about?</FormLabel>
              <FormTextarea
                value={categoryPrompt}
                onChange={(e) => setCategoryPrompt(e.target.value)}
                placeholder="E.g., 'Ancient Roman history', 'Solar system facts', or 'Famous artists and their works'"
                rows={5}
              />
            </FormGroup>
            
            {categoryGenerationError && <ErrorMessage>{categoryGenerationError}</ErrorMessage>}
            
            <ButtonGroup>
              <Button
                onClick={generateCategoryWithGemini}
                disabled={generatingCategory || !categoryNameInput.trim() || !categoryPrompt.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#43a047' }}
              >
                {generatingCategory ? '⏳ Generating...' : '✨ Generate Complete Category'}
              </Button>
              <Button
                onClick={() => setShowGenerateCategoryModal(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default QuestionManagement; 
