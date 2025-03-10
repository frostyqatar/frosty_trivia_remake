import React, { useState, useRef, useEffect, useCallback } from 'react';
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
const Papa = require('papaparse');

const DEFAULT_FORM_DATA = {
  categoryId: '',
  question: '',
  answer: '',
  value: 100,
  image: '',
  audio: '',
  video: ''
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(140, 82, 255, 0.15);
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #8c52ff 0%, #5e17eb 100%);
  color: white;
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin: 8px 0 0;
  font-size: 16px;
  opacity: 0.8;
`;

const Content = styled.div`
  padding: 32px;
  max-height: 70vh;
  overflow-y: auto;
  
  & > * + * {
    margin-top: 28px;
  }
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  flex-wrap: wrap;
  gap: 24px;
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
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
  }
`;

const DangerButton = styled(Button)`
  background-color: #ff5252;
`;

const ImportButton = styled(Button)`
  background-color: #4caf50;
`;

const SearchInput = styled.input`
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  width: 250px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 2px rgba(140, 82, 255, 0.2);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  table-layout: fixed;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 12px 16px;
  background-color: #f5f5f5;
  font-weight: 600;
  border-bottom: 2px solid #e0e0e0;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
  
  &:hover {
    background-color: #f9f5ff;
  }
`;

const TableCell = styled.td`
  padding: 12px 16px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ActionCell = styled.td`
  padding: 12px 16px;
  display: flex;
  gap: 8px;
`;

const ActionIcon = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #666;
  
  &:hover {
    color: #8c52ff;
  }
`;

const DeleteIcon = styled(ActionIcon)`
  &:hover {
    color: #ff5252;
  }
`;

const NoQuestionsMessage = styled.div`
  text-align: center;
  padding: 32px;
  color: #666;
  font-size: 18px;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;

const ModalTitle = styled.h2`
  margin: 0 0 24px;
  font-size: 24px;
  color: #333;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #8c52ff;
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 2px rgba(140, 82, 255, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 2px rgba(140, 82, 255, 0.2);
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
`;

const FileInput = styled.input`
  display: none;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 8px;
`;

const PageButton = styled(motion.button)<{ $active?: boolean }>`
  padding: 8px 14px;
  border-radius: 8px;
  background-color: ${props => props.$active ? '#8c52ff' : '#f5f5f5'};
  color: ${props => props.$active ? 'white' : '#333'};
  border: none;
  cursor: pointer;
  font-weight: 600;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BatchSizeSelector = styled.div`
  margin-bottom: 16px;
`;

const SelectLabel = styled.label`
  margin-right: 8px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 14px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
  border-radius: 4px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  top: 16px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const DangerButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

const TableHeaderCell = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  background-color: #f7f9fc;
  border-bottom: 2px solid #e9ecef;
  
  &:first-child {
    border-top-left-radius: 8px;
  }
  
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const MediaPreview = ({ type, src }: { type: 'image' | 'audio' | 'video', src: string }) => {
  if (!src) return null;
  
  if (type === 'image') {
    return (
      <div style={{ marginTop: '8px' }}>
        <img 
          src={src} 
          alt="Preview" 
          style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '4px' }} 
        />
      </div>
    );
  }
  
  if (type === 'audio') {
    return (
      <div style={{ marginTop: '8px' }}>
        <audio controls style={{ width: '100%' }}>
          <source src={src} />
          Your browser does not support audio playback.
        </audio>
      </div>
    );
  }
  
  if (type === 'video') {
    return (
      <div style={{ marginTop: '8px' }}>
        <video controls style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '4px' }}>
          <source src={src} />
          Your browser does not support video playback.
        </video>
      </div>
    );
  }
  
  return null;
};

const CategoriesSection = styled.div`
  margin-top: 40px;
  background-color: #f8f9fa;
  padding: 24px;
  border-radius: 16px;
`;

const CategoriesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: #2c3e50;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 12px;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const CategoryCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  & > * + * {
    margin-top: 8px;
  }
`;

const CategoryName = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
`;

const CategoryIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const CategoryInfo = styled.div`
  font-size: 14px;
  color: #666;
`;

const CategoryDeleteButton = styled(DeleteIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CategoryEditButton = styled(motion.button)`
  position: absolute;
  top: 8px;
  right: 40px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #3498db;
  z-index: 2;
`;

const COMMON_EMOJIS = [
  '📚', '🎮', '🎬', '🎵', '🎨', '🏛️', '🌍', '🏆', 
  '🧩', '⚽', '🏀', '🏈', '🎯', '🎲', '🎭', '🎪',
  '🧠', '💡', '⚙️', '💻', '🔬', '🔭', '📱', '📷',
  '🏖️', '🌋', '🏔️', '🌲', '🌊', '🐾', '🦁', '🐘',
  '🍕', '🍰', '🍦', '🍷', '👗', '👑', '💎', '🚗',
  '✈️', '🚀', '⏱️', '📆', '📝', '��', '💰', '🏛️'
];

const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
  margin-top: 16px;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const EmojiButton = styled(motion.button)<{ selected: boolean }>`
  background-color: ${props => props.selected ? '#3498db' : 'white'};
  color: ${props => props.selected ? 'white' : 'inherit'};
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 8px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.selected ? '#2980b9' : '#f0f0f0'};
  }
`;

const SelectedEmoji = styled.div`
  font-size: 32px;
  margin: 16px 0;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const GenerationSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px dashed #ddd;
`;

const GenerationPromptInput = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  margin-bottom: 16px;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 2px rgba(140, 82, 255, 0.2);
  }
`;

const GenerationButton = styled(motion.button)`
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  
  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
`;

const QuestionManagement: React.FC = () => {
  const dispatch = useDispatch();
  const { playSound } = useSoundEffects();
  const { categories } = useSelector((state: RootState) => state);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [editingQuestion, setEditingQuestion] = useState<{ categoryId: string; questionIndex: number } | null>(null);
  
  const [batchSize, setBatchSize] = useState<number>(20);
  const [displayedQuestions, setDisplayedQuestions] = useState<any[]>([]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState<boolean>(false);
  const [newCategoryName, setNewCategoryName] = useState<string>('');
  const [newCategoryIcon, setNewCategoryIcon] = useState<string>('❓');
  
  const [formData, setFormData] = useState<{
    categoryId: string;
    question: string;
    answer: string;
    value: number;
    image?: string;
    audio?: string;
    video?: string;
  }>({
    categoryId: categories[0]?.id || '',
    question: '',
    answer: '',
    value: 100,
    image: '',
    audio: '',
    video: ''
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
  
  // Update the useEffect that handles displaying questions
  useEffect(() => {
    // Get all questions and apply search filter if needed
    let filteredQuestions = flattenQuestions();
    
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filteredQuestions = filteredQuestions.filter(q => 
        q.question.toLowerCase().includes(lowerQuery) || 
        q.answer.toLowerCase().includes(lowerQuery) ||
        q.categoryName.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Apply sorting
    filteredQuestions = sortQuestions(filteredQuestions);
    
    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedQuestions = filteredQuestions.slice(indexOfFirstItem, indexOfLastItem);
    
    // Update displayed questions
    setDisplayedQuestions(paginatedQuestions);
    
    // Update total pages if needed
    const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1); // Reset to first page if current page is now invalid
    }
  }, [categories, searchQuery, currentPage, itemsPerPage, flattenQuestions, sortBy, sortDirection]);
  
  // Fix the pagination handler
  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    
    const allQuestions = flattenQuestions();
    const filteredQuestions = searchQuery 
      ? allQuestions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allQuestions;
      
    const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
    
    if (newPage > totalPages) return;
    
    setCurrentPage(newPage);
    playSound('button-click');
  };
  
  // Ensure the form submission correctly adds questions
  const handleSubmit = () => {
    playSound('button-click');
    
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
          video: formData.video || ''
        };
        
        console.log('Adding new question:', newQuestion);
        
        // Add question to the category
        updatedCategories[categoryIndex].questions.push(newQuestion);
        
        // Update Redux
        dispatch(updateCategories(updatedCategories));
        
        // Close modal and clear form
        setFormData({...DEFAULT_FORM_DATA});
        setShowModal(false);
        
        // Manual save to localStorage for redundancy
        try {
          localStorage.setItem('trivia-game-categories', JSON.stringify(updatedCategories));
        } catch (e) {
          console.error('Error saving to localStorage:', e);
        }
        
        console.log('Categories after add:', updatedCategories);
      }
    } else if (modalMode === 'edit' && editingQuestion) {
      const { categoryId, questionIndex } = editingQuestion;
      const categoryIndex = updatedCategories.findIndex((c: Category) => c.id === categoryId);
      
      if (categoryIndex !== -1 && 
          questionIndex >= 0 && 
          questionIndex < updatedCategories[categoryIndex].questions.length) {
        
        // Create updated question with proper types for all fields
        const updatedQuestion: Question = {
          question: formData.question,
          answer: formData.answer,
          value: parseInt(formData.value.toString(), 10),
          answered: updatedCategories[categoryIndex].questions[questionIndex].answered,
          // Explicitly handle media fields
          image: formData.image || '',
          audio: formData.audio || '',
          video: formData.video || ''
        };
        
        console.log('Updating question:', updatedQuestion);
        
        // Update the question
        updatedCategories[categoryIndex].questions[questionIndex] = updatedQuestion;
        
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
        setFormData({...DEFAULT_FORM_DATA});
        setEditingQuestion(null);
        setShowModal(false);
      }
    }
    
    // Force a UI refresh by setting a state variable
    setLastUpdateTimestamp(Date.now());
  };
  
  const handleOpenModal = (mode: 'add' | 'edit', question?: { categoryId: string; questionIndex: number }) => {
    playSound('button-click');
    setModalMode(mode);
    
    if (mode === 'add') {
      setFormData({
        categoryId: categories[0]?.id || '',
        question: '',
        answer: '',
        value: 100,
        image: '',
        audio: '',
        video: ''
      });
      setEditingQuestion(null);
    } else if (mode === 'edit' && question) {
      const { categoryId, questionIndex } = question;
      const category = categories.find((c: Category) => c.id === categoryId);
      
      if (category) {
        const q = category.questions[questionIndex];
        setFormData({
          categoryId,
          question: q.question,
          answer: q.answer,
          value: q.value,
          image: q.image || '',
          audio: q.audio || '',
          video: q.video || ''
        });
        setEditingQuestion({ categoryId, questionIndex });
      }
    }
    
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    playSound('button-click');
    setShowModal(false);
  };
  
  const handleDeleteQuestion = (categoryId: string, questionIndex: number) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      playSound('button-click');
      
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
    setFormData({ ...formData, [name]: value });
  };
  
  const handleExportCSV = () => {
    playSound('button-click');
    
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
  
  const handleImportCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    playSound('button-click');
    
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      Papa.parse(file, {
        header: true,
        complete: function(results: any) {
          // Create deep copy of categories
          const updatedCategories = JSON.parse(JSON.stringify(categories));
          
          // Process each imported row
          results.data.forEach((row: any) => {
            if (!row.category || !row.question || !row.answer || !row.value) {
              // Skip invalid rows
              return;
            }
            
            // Find matching category by name
            let categoryIndex = updatedCategories.findIndex(
              (c: Category) => c.name.toLowerCase() === row.category.toLowerCase()
            );
            
            // Create category if it doesn't exist
            if (categoryIndex === -1) {
              const newCategory = {
                id: row.category.toLowerCase().replace(/\s+/g, '-'),
                name: row.category,
                icon: '📒', // Default icon
                questions: []
              };
              updatedCategories.push(newCategory);
              categoryIndex = updatedCategories.length - 1;
            }
            
            // Create question with all media fields
            const newQuestion = {
              value: parseInt(row.value, 10) || 100,
              question: row.question,
              answer: row.answer,
              answered: false,
              image: row.image || undefined,
              audio: row.audio || undefined,
              video: row.video || undefined
            };
            
            // Add question to category
            updatedCategories[categoryIndex].questions.push(newQuestion);
          });
          
          // Update Redux state
          dispatch(updateCategories(updatedCategories));
          
          // Show success notification
          showNotification(`Imported ${results.data.length} questions with media`);
          
          // Reset file input
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        },
        error: function(error: any) {
          console.error('CSV Import Error:', error);
          showNotification('Error importing CSV file. Check console for details.');
        }
      });
    }
  };
  
  const handleReturnToSetup = () => {
    playSound('button-click');
    dispatch(setGamePhase('setup'));
  };
  
  // Add handler for batch size change
  const handleBatchSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value);
    setBatchSize(newSize);
    setDisplayedQuestions(flattenQuestions().slice(0, newSize));
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
    alert('Category added successfully!');
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
      playSound('button-click');
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
      playSound('button-click');
    }
  };
  
  const handleSaveToLocalStorage = () => {
    try {
      // Store the current categories in localStorage
      localStorage.setItem('trivia-game-categories', JSON.stringify(categories));
      
      // Alert the user about cache clearing
      alert('Questions saved to browser storage successfully! Note that clearing your browser cache will remove these saved edits.');
      
      playSound('button-click');
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
    
    playSound('button-click');
  };
  
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    
    if (isChecked) {
      // Select all questions
      const allQuestions = flattenQuestions().map(q => ({
        categoryId: q.categoryId,
        questionIndex: q.questionIndex
      }));
      setSelectedQuestions(allQuestions);
    } else {
      // Deselect all questions
      setSelectedQuestions([]);
    }
    
    playSound('button-click');
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
          playSound('button-click');
          alert('Categories have been force reloaded from storage.');
        } else {
          // If no categories in localStorage, restore from the backup we just made
          const backupCategories = localStorage.getItem('trivia-game-categories-backup');
          if (backupCategories) {
            dispatch(updateCategories(JSON.parse(backupCategories)));
            playSound('button-click');
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
    } catch (e) {
      console.error('Error exporting data:', e);
      alert('Error exporting data. See console for details.');
    }
  };
  
  // Add a useEffect to debug changes to categories
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
      
      playSound('button-click');
      showNotification(`Category "${categoryToDelete.name}" has been deleted.`);
    }
  };
  
  // Add this function to your QuestionManagement component
  const handleImportClick = () => {
    playSound('button-click');
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleOpenEditCategoryModal = (category: Category) => {
    setCategoryToEdit(category);
    setEditCategoryName(category.name);
    setEditCategoryIcon(category.icon);
    setShowEditCategoryModal(true);
    playSound('button-click');
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
      
      playSound('button-click');
      showNotification('Category updated successfully!');
    }
  };
  
  const generateWithGemini = async () => {
    if (!generationPrompt.trim()) {
      setGenerationError('Please enter a prompt');
      return;
    }
    
    setIsGenerating(true);
    setGenerationError('');
    
    try {
      const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY'; // Replace with your actual Gemini API key
      
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
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
      const questionMatch = generatedContent.match(/Question:(.+?)(?=Answer:)/s);
      const answerMatch = generatedContent.match(/Answer:(.+)/s);
      
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
  
  // First, add a useEffect for Escape key handling
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showModal) {
          setShowModal(false);
        } else if (showAddCategoryModal) {
          setShowAddCategoryModal(false);
        } else if (showEditCategoryModal) {
          setShowEditCategoryModal(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showModal, showAddCategoryModal, showEditCategoryModal]);
  
  return (
    <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header>
        <Title>Question Management</Title>
        <Subtitle>Review, add, update, or delete questions before starting the game</Subtitle>
      </Header>
      
      <Content>
        <ActionBar>
          <ButtonGroup>
            <Button 
              onClick={() => handleOpenModal('add')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ➕ Add Question
            </Button>
            <Button 
              onClick={() => setShowAddCategoryModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ➕ Add Category
            </Button>
            <Button 
              onClick={handleSaveToLocalStorage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💾 Save Edits to Browser
            </Button>
            <ImportButton 
              onClick={handleImportClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📥 Import CSV
            </ImportButton>
            <Button 
              onClick={handleExportCSV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📤 Export CSV
            </Button>
            <FileInput 
              type="file" 
              ref={fileInputRef} 
              accept=".csv" 
              onChange={handleImportCSV} 
            />
            <Button
              onClick={handleToggleSelectMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: selectMode ? '#e67e22' : '#8c52ff' }}
            >
              {selectMode ? '❌ Cancel Selection' : '✓ Select Questions'}
            </Button>
          </ButtonGroup>
          
          <DangerButtonGroup>
            {selectMode && selectedQuestions.length > 0 && (
              <DangerButton
                onClick={handleDeleteSelected}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🗑️ Delete Selected ({selectedQuestions.length})
              </DangerButton>
            )}
            <DangerButton
              onClick={handleDeleteAllQuestions}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ⚠️ Delete All Questions
            </DangerButton>
          </DangerButtonGroup>
          
          <ButtonGroup>
            <SearchInput 
              type="text" 
              placeholder="Search questions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              onClick={handleReturnToSetup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Setup
            </Button>
          </ButtonGroup>
        </ActionBar>
        
        <BatchSizeSelector>
          <SelectLabel>Questions per page:</SelectLabel>
          <Select value={batchSize} onChange={handleBatchSizeChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={500}>500</option>
            <option value={1000}>1000</option>
          </Select>
        </BatchSizeSelector>
        
        {displayedQuestions.length > 0 ? (
          <>
            <Table>
              <thead>
                <TableRow>
                  {selectMode && <TableHeader style={{ width: '40px' }}></TableHeader>}
                  <TableHeader>
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
                        style={{ cursor: 'pointer' }}
                      >
                        Category {sortBy === 'categoryName' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeaderCell>
                      <TableHeaderCell 
                        onClick={() => handleSort('value')}
                        style={{ cursor: 'pointer' }}
                      >
                        Value {sortBy === 'value' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeaderCell>
                      <TableHeaderCell 
                        onClick={() => handleSort('question')}
                        style={{ cursor: 'pointer' }}
                      >
                        Question {sortBy === 'question' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeaderCell>
                      <TableHeaderCell 
                        onClick={() => handleSort('answer')}
                        style={{ cursor: 'pointer' }}
                      >
                        Answer {sortBy === 'answer' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeaderCell>
                      <TableHeaderCell style={{ width: '120px' }}>Actions</TableHeaderCell>
                    </TableRow>
                  </TableHeader>
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
            
            {flattenQuestions().length > 0 && (
              <Pagination>
                <PageButton 
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ⏮️
                </PageButton>
                <PageButton 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ◀️
                </PageButton>
                
                {Array.from({ length: Math.min(5, Math.ceil(flattenQuestions().length / itemsPerPage)) }, (_, i) => {
                  // Show 5 pages around current page
                  let pageNum = currentPage - 2 + i;
                  if (pageNum <= 0) pageNum = i + 1;
                  if (pageNum > Math.ceil(flattenQuestions().length / itemsPerPage)) return null;
                  
                  return (
                    <PageButton 
                      key={pageNum}
                      $active={pageNum === currentPage}
                      onClick={() => handlePageChange(pageNum)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {pageNum}
                    </PageButton>
                  );
                })}
                
                <PageButton 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === Math.ceil(flattenQuestions().length / itemsPerPage)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ▶️
                </PageButton>
                <PageButton 
                  onClick={() => handlePageChange(Math.ceil(flattenQuestions().length / itemsPerPage))}
                  disabled={currentPage === Math.ceil(flattenQuestions().length / itemsPerPage)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ⏭️
                </PageButton>
              </Pagination>
            )}
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
            onClick={handleCloseModal}
          >
            <ModalContent
              onClick={e => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <ModalHeader>
                <ModalTitle>{modalMode === 'add' ? 'Add New Question' : 'Edit Question'}</ModalTitle>
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
                  {categories.map((category: Category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Generate Question with DeepSeek AI</FormLabel>
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
                  placeholder="Enter question text"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Answer</FormLabel>
                <FormTextarea
                  name="answer"
                  value={formData.answer}
                  onChange={handleFormChange}
                  placeholder="Enter answer text"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Point Value</FormLabel>
                <FormSelect
                  name="value"
                  value={formData.value}
                  onChange={handleFormChange}
                >
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Image URL (optional)</FormLabel>
                <FormInput
                  name="image"
                  value={formData.image || ''}
                  onChange={handleFormChange}
                  placeholder="https://example.com/image.jpg"
                />
                {formData.image && <MediaPreview type="image" src={formData.image} />}
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Audio URL (optional)</FormLabel>
                <FormInput
                  type="text"
                  name="audio"
                  value={formData.audio || ''}
                  onChange={handleFormChange}
                  placeholder="Enter audio URL"
                />
                {formData.audio && (
                  <MediaPreview type="audio" src={formData.audio} />
                )}
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Video URL (optional)</FormLabel>
                <FormInput
                  type="text"
                  name="video"
                  value={formData.video || ''}
                  onChange={handleFormChange}
                  placeholder="Enter video URL (direct file or YouTube)"
                />
                {formData.video && (
                  <MediaPreview type="video" src={formData.video} />
                )}
              </FormGroup>
              
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
              <ModalTitle>Add New Category</ModalTitle>
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
              <SelectedEmoji>{newCategoryIcon}</SelectedEmoji>
              
              <EmojiGrid>
                {COMMON_EMOJIS.map((emoji) => (
                  <EmojiButton
                    key={emoji}
                    selected={emoji === newCategoryIcon}
                    onClick={() => setNewCategoryIcon(emoji)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {emoji}
                  </EmojiButton>
                ))}
              </EmojiGrid>
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
              <ModalTitle>Edit Category</ModalTitle>
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
              <SelectedEmoji>{editCategoryIcon}</SelectedEmoji>
              
              <EmojiGrid>
                {COMMON_EMOJIS.map((emoji) => (
                  <EmojiButton
                    key={emoji}
                    selected={emoji === editCategoryIcon}
                    onClick={() => setEditCategoryIcon(emoji)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {emoji}
                  </EmojiButton>
                ))}
              </EmojiGrid>
            </FormGroup>
            
            <ButtonGroup>
              <Button onClick={() => setShowEditCategoryModal(false)}>Cancel</Button>
              <Button onClick={handleSaveCategory}>Save Changes</Button>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
      
      <Button 
        onClick={handleForceReload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🔄 Force Reload Questions
      </Button>
      
      <ButtonGroup>
        <Button 
          onClick={handleExportAllData}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💾 Export All Data
        </Button>
      </ButtonGroup>
      
      <CategoriesSection>
        <CategoriesHeader>Category Management</CategoriesHeader>
        <CategoryList>
          {categories.map((category: Category) => (
            <CategoryCard key={category.id}>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
              <CategoryInfo>{category.questions.length} questions</CategoryInfo>
              <CategoryEditButton 
                onClick={() => handleOpenEditCategoryModal(category)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✏️
              </CategoryEditButton>
              <CategoryDeleteButton 
                onClick={() => handleDeleteCategory(category.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                🗑️
              </CategoryDeleteButton>
            </CategoryCard>
          ))}
        </CategoryList>
      </CategoriesSection>
      
      <GenerationSection>
        <GenerationPromptInput
          value={generationPrompt}
          onChange={(e) => setGenerationPrompt(e.target.value)}
          placeholder="Enter a prompt to generate a question"
        />
        <GenerationButton
          onClick={generateWithGemini}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate with Gemini'}
        </GenerationButton>
        {generationError && (
          <ErrorMessage>{generationError}</ErrorMessage>
        )}
      </GenerationSection>
    </Container>
  );
};

export default QuestionManagement; 