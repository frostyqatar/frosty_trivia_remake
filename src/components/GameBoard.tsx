import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RootState } from '../store';
import { setGamePhase } from '../store/gameSlice';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { Category, Question } from '../types/game.types';
import { useAbilities } from '../hooks/useAbilities';

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  margin: 0;
  padding: 0 16px;
  justify-content: flex-start;
  align-self: flex-start;
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
  width: 100%;
  
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(motion.div)`
  background-color: var(--card-background, rgba(255, 255, 255, 0.9));
  backdrop-filter: blur(8px);
  border-radius: var(--border-radius, 12px);
  box-shadow: var(--card-shadow, 0 6px 20px rgba(0, 153, 204, 0.15));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding-bottom: 12px;
  border: var(--card-border, 2px solid rgba(102, 212, 255, 0.3));
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 153, 204, 0.25);
  }
`;

const CategoryHeader = styled.div`
  background: linear-gradient(135deg, #0099cc 0%, #66d4ff 100%);
  color: white;
  padding: 16px 8px;
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-size: 35px;
  font-weight: bold;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
`;

// Add interface for CategoryHeaderText props
interface CategoryHeaderTextProps {
  textLength: number;
}

const CategoryHeaderText = styled.div<CategoryHeaderTextProps>`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Add dynamic font sizing based on content length */
  font-size: ${props => {
    if (props.textLength > 20) return '20px';
    if (props.textLength > 15) return '24px';
    if (props.textLength > 10) return '28px';
    return '35px'; // Default font size
  }};
  
  line-height: 1.2;
  text-align: center;
`;

const CategoryIcon = styled.div`
  font-size: 36px;
  margin: 15px 0;
`;

const QuestionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px 10px 10px;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

const TeamTurnIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  border: 3px solid rgba(0, 153, 204, 0.3);
  border-radius: 12px;
  padding: 12px 20px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  box-shadow: 0 6px 20px rgba(0, 153, 204, 0.15);
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: #0f5e87;
`;

const SwitchTeamButton = styled(motion.button)`
  background: linear-gradient(135deg, #0099cc 0%, #66d4ff 100%);
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 153, 204, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 153, 204, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

// First, let's define a proper interface for our QuestionCard props
interface QuestionCardProps {
  categoryId: string;
  questionIndex: number;
  question: Question;
  answered: boolean;
}

// Then update the QuestionCard component to use these props
const QuestionCard = styled(motion.div)<QuestionCardProps>`
  background: ${props => props.answered ? 
    'rgba(200, 200, 200, 0.9)' : 
    'linear-gradient(135deg, #0099cc 0%, #66d4ff 100%)'};
  color: ${props => props.answered ? '#999' : 'white'};
  border-radius: 8px;
  padding: 14px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 37px;
  font-weight: 800;
  cursor: ${props => props.answered ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  min-height: 50px;
  box-shadow: ${props => props.answered ? 
    'none' : 
    '0 4px 8px rgba(0, 153, 204, 0.15)'};
  opacity: ${props => props.answered ? 0.7 : 1};
  text-decoration: ${props => props.answered ? 'line-through' : 'none'};
  pointer-events: ${props => props.answered ? 'none' : 'auto'};
  position: relative;
  
  &:hover {
    transform: ${props => props.answered ? 'none' : 'translateY(-5px)'};
    box-shadow: ${props => props.answered ? 
      'none' : 
      '0 8px 16px rgba(0, 153, 204, 0.3)'};
  }
  
  &:after {
    content: ${props => props.answered ? '"✓"' : '""'};
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 16px;
    color: #666;
    background: rgba(255,255,255,0.8);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: ${props => props.answered ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
  }
`;

// Define the EmptyQuestionSlot component outside of the GameBoard component
const EmptyQuestionSlot = styled.div`
  background-color: #f1f1f1;
  color: #aaa;
  border-radius: 8px;
  padding: 14px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
`;

// Helper to save tile assignments to localStorage
const saveTileAssignments = (gameId: string, assignments: Record<string, {questionIndex: number, categoryId: string, initiallyAnswered?: boolean}>) => {
  try {
    localStorage.setItem(`tileAssignments_${gameId}`, JSON.stringify(assignments));
  } catch (e) {
    console.error("Failed to save tile assignments to localStorage:", e);
  }
};

// Helper to load tile assignments from localStorage
const loadTileAssignments = (gameId: string): Record<string, {questionIndex: number, categoryId: string, initiallyAnswered?: boolean}> => {
  try {
    const stored = localStorage.getItem(`tileAssignments_${gameId}`);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.error("Failed to load tile assignments from localStorage:", e);
    return {};
  }
};

// Helper to track answered questions in memory
const answeredQuestionsCache = new Map<string, boolean>();

// Store a record of questions that have been marked as answered in the current session
const answeredSessionQuestions = new Set<string>();

// Create a key for the question cache
const getQuestionKey = (categoryId: string, questionIndex: number) => `${categoryId}_${questionIndex}`;

// Update the cache when a question is answered
const markQuestionAsAnswered = (categoryId: string, questionIndex: number) => {
  const key = getQuestionKey(categoryId, questionIndex);
  answeredQuestionsCache.set(key, true);
};

// Check if a question is answered using the cache first
const isQuestionAnswered = (categoryId: string, questionIndex: number, categories: Category[]): boolean => {
  const key = getQuestionKey(categoryId, questionIndex);
  
  // First check our session cache
  if (answeredSessionQuestions.has(key)) {
    return true;
  }
  
  // If it's in our regular cache, use that value
  if (answeredQuestionsCache.has(key)) {
    return answeredQuestionsCache.get(key) || false;
  }
  
  // As a fallback, check Redux state
  const category = categories.find((c: Category) => c.id === categoryId);
  if (category && questionIndex >= 0 && questionIndex < category.questions.length) {
    const answered = !!category.questions[questionIndex].answered;
    
    // Update our cache
    if (answered) {
      answeredQuestionsCache.set(key, true);
      answeredSessionQuestions.add(key);
    }
    
    return answered;
  }
  
  return false;
};

const GameBoard: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategories, teams, activeTeamIndex, gameId, currentCategoryId, currentQuestionIndex } = useSelector((state: RootState) => ({
    categories: state.categories,
    selectedCategories: state.selectedCategories,
    teams: state.teams,
    activeTeamIndex: state.activeTeamIndex || 0,
    gameId: state.gameId || 'default',
    currentCategoryId: state.currentCategoryId,
    currentQuestionIndex: state.currentQuestionIndex
  }));
  
  const { playSound } = useSoundEffects();
  const { switchTeam } = useAbilities();
  
  // Create a persistent map to track tile-to-question assignments
  const tileAssignmentsRef = useRef<Record<string, {questionIndex: number, categoryId: string, initiallyAnswered?: boolean}>>({});
  
  // State to force re-render when questions are answered
  const [lastAnsweredTime, setLastAnsweredTime] = useState(Date.now());
  
  // Filter categories that are selected
  const displayCategories = categories.filter(
    (cat: Category) => selectedCategories.includes(cat.id)
  );
  
  // Get all possible point values
  const pointValues = [100, 200, 300, 400, 500];
  
  // Calculate completion percentage
  const totalQuestions = displayCategories.reduce((total: number, category: Category) => {
    // Count only tiles that have actual questions assigned (tiles in the grid)
    let tilesWithQuestions = 0;
    
    // Create pairs of point values: [100,100], [200,300], [400,500]
    const pointValuePairs = [
      [100, 100],
      [200, 300],
      [400, 500]
    ];
    
    // Count how many tiles actually have questions assigned
    pointValuePairs.forEach((pair, pairIndex) => {
      pair.forEach((value, valueIndex) => {
        const tileKey = `${category.id}-${value}-${pairIndex}-${valueIndex}`;
        // Check if there's an assignment for this tile
        if (tileAssignmentsRef.current[tileKey]) {
          tilesWithQuestions++;
        }
      });
    });
    
    return total + tilesWithQuestions;
  }, 0);
  
  // Count only answered questions that have tile assignments
  const answeredQuestions = Object.entries(tileAssignmentsRef.current).reduce((count, [tileKey, assignment]) => {
    // Only count this if the tile is for a displayed category
    const categoryId = assignment.categoryId;
    if (selectedCategories.includes(categoryId)) {
      const isAnswered = isQuestionAnswered(assignment.categoryId, assignment.questionIndex, categories) ||
                         !!assignment.initiallyAnswered;
      return isAnswered ? count + 1 : count;
    }
    return count;
  }, 0);
  
  console.log(`Game completion: ${answeredQuestions}/${totalQuestions} questions answered`);
  
  const completionPercent = totalQuestions > 0 
    ? (answeredQuestions / totalQuestions) * 100 
    : 0;
  
  // Check if all questions are answered
  const checkAllQuestionsAnswered = useCallback(() => {
    if (selectedCategories.length > 0) {
      // Instead of checking all questions in all categories,
      // only count questions that have been assigned to a tile
      const allAssignedQuestionsAnswered = Object.entries(tileAssignmentsRef.current).every(([tileKey, assignment]) => {
        // Only check tiles for categories that are in the game
        if (selectedCategories.includes(assignment.categoryId)) {
          return isQuestionAnswered(assignment.categoryId, assignment.questionIndex, categories) ||
                 !!assignment.initiallyAnswered;
        }
        // Ignore tiles for categories not in the game
        return true;
      });
      
      if (allAssignedQuestionsAnswered && answeredQuestions > 0 && answeredQuestions === totalQuestions) {
        console.log("All questions answered! Game complete!");
        playSound('winner-celebration');
        dispatch(setGamePhase('end'));
      }
    }
  }, [selectedCategories, categories, playSound, dispatch, answeredQuestions, totalQuestions]);
  
  // Handle selecting a question
  const handleSelectQuestion = useCallback((categoryId: string, questionIndex: number) => {
    // Find the latest state of the category
    const category = categories.find((c: Category) => c.id === categoryId);
    if (!category) return;
    
    if (questionIndex >= 0 && questionIndex < category.questions.length) {
      const question = category.questions[questionIndex];
      
      // Double-check if the question is already answered
      if (question.answered) {
        console.error("Question already answered, not selecting", { categoryId, questionIndex });
        return;
      }
      
      console.log("Selecting question:", { categoryId, questionIndex, answered: question.answered });
      playSound('question-reveal');
      dispatch({
        type: 'game/selectQuestion',
        payload: {
          categoryId,
          questionIndex,
          question
        }
      });
    }
  }, [categories, dispatch, playSound]);
  
  // Get or create a tile assignment
  const getOrCreateTileAssignment = useCallback((
    category: Category, 
    tileKey: string, 
    value: number, 
    valueIndex: number, 
    pairIndex: number
  ) => {
    // Check if we already have an assignment for this tile
    if (tileAssignmentsRef.current[tileKey]) {
      // Get the assignment information
      const assignment = tileAssignmentsRef.current[tileKey];
      const categoryId = assignment.categoryId;
      const questionIndex = assignment.questionIndex;
      
      // Check if the question is answered using our enhanced logic
      const isAnswered = isQuestionAnswered(categoryId, questionIndex, categories) || 
                         !!assignment.initiallyAnswered;
      
      // Log the assignment and current answered state
      console.log(`Tile ${tileKey} assigned to question ${questionIndex} in ${categoryId} (answered: ${isAnswered ? 'YES' : 'no'})`);
      
      // Always return the assignment, even if the category doesn't exist anymore
      // This ensures tile-to-question mapping stays consistent
      return {
        questionIndex,
        categoryId,
        answered: isAnswered
      };
    }
    
    // Create a map of questions indexed by their point value
    const questionsByValue: Record<number, Array<{question: Question, index: number}>> = {};
    
    // Populate the map with arrays of questions
    category.questions.forEach((question, index) => {
      if (!questionsByValue[question.value]) {
        questionsByValue[question.value] = [];
      }
      questionsByValue[question.value].push({
        question,
        index
      });
    });
    
    const questionsData = questionsByValue[value];
    
    // If there's no question for this value, return null
    if (!questionsData || questionsData.length === 0) {
      return null;
    }
    
    // We'll use ALL questions, not just unanswered ones
    // This makes tile assignments more stable
    let availableQuestions = [...questionsData];
    
    // If this is the second 100-point tile, make sure we don't use the same question as the first
    if (value === 100 && valueIndex === 1) {
      const firstTileKey = `${category.id}-100-${pairIndex}-0`;
      const firstTileAssignment = tileAssignmentsRef.current[firstTileKey];
      
      if (firstTileAssignment) {
        availableQuestions = availableQuestions.filter(
          q => q.index !== firstTileAssignment.questionIndex
        );
      }
      
      if (availableQuestions.length === 0) {
        return null;
      }
    }
    
    // Generate a deterministic seed based on the tile key
    const seedValue = tileKey.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomIndex = seedValue % availableQuestions.length;
    
    // Select a question based on the seed
    const questionToAssign = availableQuestions[randomIndex];
    
    // Check if the question is already answered
    const isAnswered = isQuestionAnswered(category.id, questionToAssign.index, categories);
    
    // Create a new assignment
    const newAssignment = {
      questionIndex: questionToAssign.index,
      categoryId: category.id,
      initiallyAnswered: isAnswered
    };
    
    // Store the assignment
    tileAssignmentsRef.current[tileKey] = newAssignment;
    
    // Save assignments to localStorage
    saveTileAssignments(gameId, tileAssignmentsRef.current);
    
    console.log(`Created new assignment for ${tileKey}: question ${newAssignment.questionIndex} (value: ${value})`);
    
    // Return the assignment with the current answered state
    return {
      questionIndex: newAssignment.questionIndex,
      categoryId: newAssignment.categoryId,
      answered: isAnswered
    };
  }, [categories, gameId]);

  // Render the question cards for a category
  const renderCategoryQuestions = useCallback((category: Category) => {
    // Create pairs of point values: [100,100], [200,300], [400,500]
    const pointValuePairs = [
      [100, 100],
      [200, 300],
      [400, 500]
    ];
    
    // Render cards for each pair of point values
    return pointValuePairs.flatMap((pair, pairIndex) => {
      return pair.map((value, valueIndex) => {
        const tileKey = `${category.id}-${value}-${pairIndex}-${valueIndex}`;
        
        // Get or create an assignment for this tile
        const assignment = getOrCreateTileAssignment(category, tileKey, value, valueIndex, pairIndex);
        
        // If no assignment was created (no suitable questions), show empty slot
        if (!assignment) {
          return (
            <EmptyQuestionSlot key={tileKey}>
              {value}
            </EmptyQuestionSlot>
          );
        }
        
        // Get the CURRENT question from Redux based on our assignment
        const questionIndex = assignment.questionIndex;
        const currentCategory = categories.find((c: Category) => c.id === assignment.categoryId);
        
        // Safeguard in case the category structure changed
        if (!currentCategory || questionIndex >= currentCategory.questions.length) {
          console.error(`Invalid assignment for ${tileKey}`);
          delete tileAssignmentsRef.current[tileKey];
          return (
            <EmptyQuestionSlot key={tileKey}>
              {value}
            </EmptyQuestionSlot>
          );
        }
        
        // Get the CURRENT state of the question from Redux
        const currentQuestion = currentCategory.questions[questionIndex];
        const isAnswered = !!currentQuestion.answered; // Ensure boolean type
        
        // Only log if there's a change in the answered state for debugging
        console.log(`Rendering tile ${tileKey} for question ${questionIndex} which is ${isAnswered ? 'ANSWERED' : 'unanswered'}`);
        
        // Create a click handler that prevents clicks on answered questions
        const handleClick = () => {
          if (isAnswered) {
            console.error("Question already answered, tile disabled");
            return; // Do nothing if answered
          }
          
          // Only call if not answered
          handleSelectQuestion(assignment.categoryId, questionIndex);
        };
        
        // Return the tile with its assigned question and current state
        return (
          <QuestionCard
            key={`${tileKey}-${isAnswered ? 'answered' : 'unanswered'}-${lastAnsweredTime}`}
            categoryId={assignment.categoryId}
            questionIndex={questionIndex}
            question={currentQuestion}
            answered={isAnswered}
            onClick={handleClick}
            className={`question-card ${isAnswered ? 'answered' : ''}`}
            data-answered={isAnswered}
            whileHover={isAnswered ? undefined : { y: -5 }}
          >
            {value}
          </QuestionCard>
        );
      });
    });
  }, [categories, getOrCreateTileAssignment, handleSelectQuestion, lastAnsweredTime]);
  
  // Initialize tile assignments from localStorage on mount
  useEffect(() => {
    // Load from localStorage if available
    const savedAssignments = loadTileAssignments(gameId);
    if (Object.keys(savedAssignments).length > 0) {
      console.log("Loaded saved tile assignments from localStorage");
      tileAssignmentsRef.current = savedAssignments;
      
      // Mark questions that were answered in a previous session
      Object.entries(savedAssignments).forEach(([tileKey, assignment]) => {
        if (assignment.initiallyAnswered) {
          const key = getQuestionKey(assignment.categoryId, assignment.questionIndex);
          answeredQuestionsCache.set(key, true);
          answeredSessionQuestions.add(key);
        }
      });
    } else if (selectedCategories.length > 0 && Object.keys(tileAssignmentsRef.current).length === 0) {
      console.log("Initializing new tile assignments for categories:", selectedCategories);
      // We'll create the assignments when rendering
    }
  }, [gameId, selectedCategories]);
  
  // Update the listener for the returnToBoard event
  useEffect(() => {
    const handleReturnToBoard = () => {
      console.log("Question answered, updating board state");
      
      // Get currently selected question from Redux
      const currentCategory = categories.find((c: Category) => c.id === currentCategoryId);
      
      if (currentCategory && currentQuestionIndex !== undefined && currentQuestionIndex !== null) {
        const key = getQuestionKey(currentCategory.id, currentQuestionIndex);
        
        // Mark as answered in our local cache
        markQuestionAsAnswered(currentCategory.id, currentQuestionIndex);
        answeredSessionQuestions.add(key);
        
        // Also update the assignment's initiallyAnswered property
        Object.entries(tileAssignmentsRef.current).forEach(([tileKey, assignment]) => {
          if (assignment.categoryId === currentCategory.id && 
              assignment.questionIndex === currentQuestionIndex) {
            assignment.initiallyAnswered = true;
            console.log(`Marked tile ${tileKey} as answered permanently`);
          }
        });
        
        // Save the updated assignments
        saveTileAssignments(gameId, tileAssignmentsRef.current);
      }
      
      // Force re-render
      setLastAnsweredTime(Date.now());
    };
    
    window.addEventListener('returnToBoard', handleReturnToBoard);
    
    // Check if all questions are answered when returning to board
    const checkAnsweredTimer = setInterval(() => {
      checkAllQuestionsAnswered();
    }, 1000);
    
    return () => {
      window.removeEventListener('returnToBoard', handleReturnToBoard);
      clearInterval(checkAnsweredTimer);
    };
  }, [checkAllQuestionsAnswered, categories, currentCategoryId, currentQuestionIndex, gameId]);
  
  // Check for game completion - but do it carefully to prevent early endings
  useEffect(() => {
    // Only check for completion if we have a significant number of questions answered
    // and the completion percent is very close to 100%
    if (totalQuestions > 0 && 
        answeredQuestions > 0 && 
        answeredQuestions >= totalQuestions - 1) {
      
      // Verify no tiles on the board can still be clicked
      let unansweredPlayableTilesExist = false;
      
      // Manually check each tile shown on the board
      displayCategories.forEach((category: Category) => {
        const pointValuePairs = [
          [100, 100],
          [200, 300],
          [400, 500]
        ];
        
        pointValuePairs.forEach((pair, pairIndex) => {
          pair.forEach((value, valueIndex) => {
            const tileKey = `${category.id}-${value}-${pairIndex}-${valueIndex}`;
            if (tileAssignmentsRef.current[tileKey]) {
              const assignment = tileAssignmentsRef.current[tileKey];
              const isAnswered = isQuestionAnswered(assignment.categoryId, assignment.questionIndex, categories) ||
                               !!assignment.initiallyAnswered;
              
              if (!isAnswered) {
                console.log(`Found unanswered tile: ${tileKey}`);
                unansweredPlayableTilesExist = true;
              }
            }
          });
        });
      });
      
      // Only end the game if no unanswered playable tiles exist
      if (!unansweredPlayableTilesExist && completionPercent >= 99) {
        console.log("Game completion verified! All playable tiles have been answered.");
        playSound('winner-celebration');
        dispatch(setGamePhase('end'));
      }
    }
  }, [completionPercent, playSound, dispatch, totalQuestions, answeredQuestions, displayCategories, categories]);
  
  // Handle end game button click
  const handleEndGame = () => {
    if (window.confirm('هل أنت متأكد من أنك تريد إنهاء اللعبة؟')) {
      playSound('button-click');
      dispatch(setGamePhase('end'));
    }
  };

  return (
    <BoardContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
      <TeamTurnIndicator>
        Current Team Turn: {teams[activeTeamIndex]?.name || `Team ${activeTeamIndex + 1}`} 
        <SwitchTeamButton
          onClick={switchTeam}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Switch team turn"
        >
          بدل الدور
        </SwitchTeamButton>
      </TeamTurnIndicator>
      
      <CategoryContainer>
        {displayCategories.map((category: Category) => (
          <CategoryCard 
            key={category.id}
            variants={cardVariants}
          >
            <CategoryHeader className="category-header">
              <CategoryHeaderText 
                className="category-name"
                textLength={(category.name + " " + category.icon).length}
              >
                <BidirectionalText text={category.name + " " + category.icon} />
              </CategoryHeaderText>
            </CategoryHeader>
            
            <QuestionGrid>
              {renderCategoryQuestions(category)}
            </QuestionGrid>
          </CategoryCard>
        ))}
      </CategoryContainer>
    </BoardContainer>
  );
};

export default GameBoard; 