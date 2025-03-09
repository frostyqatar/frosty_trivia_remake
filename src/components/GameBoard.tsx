import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RootState } from '../store';
import QuestionCard from './QuestionCard';
import { BidirectionalText } from '../utils/textUtils';
import { resetGame, setGamePhase } from '../store/gameSlice';
import { showNotification } from '../utils/notificationUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { Category } from '../types/game.types';

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`;

const CategoryHeader = styled.div`
  background-color: #1c3f60;
  color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const CategoryName = styled.div`
  font-weight: bold;
`;

const QuestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
`;

const EndGameButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;

const EndGameButton = styled(motion.button)`
  background-color: #d9534f;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

const rowVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
};

const GameBoard: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategories, teams } = useSelector((state: RootState) => ({
    categories: state.categories,
    selectedCategories: state.selectedCategories,
    teams: state.teams
  }));
  const { playSound } = useSoundEffects();
  
  // Filter categories that are selected
  const displayCategories = categories.filter(
    (cat: Category) => selectedCategories.includes(cat.id)
  );
  
  // Get all possible point values
  const pointValues = [100, 200, 300, 400, 500];
  
  // Don't automatically check on every render
  // Instead, add a separate function to check and end the game
  const checkAllQuestionsAnswered = () => {
    if (selectedCategories.length > 0) {
      const allQuestionsAnswered = displayCategories.every((category: Category) => 
        category.questions.every((question: any) => question.answered)
      );
      
      // Add a console log to help debug
      console.log('Checking questions:', allQuestionsAnswered, displayCategories);
      
      if (allQuestionsAnswered) {
        // Play the winner-celebration sound
        playSound('winner-celebration');
        dispatch(setGamePhase('end'));
      }
    }
  };

  // Modify the useEffect to properly check when all questions are answered
  useEffect(() => {
    const handleReturnToBoard = () => {
      // Add debug logging
      console.log('Return to board event triggered, checking questions status...');
      // Small delay to ensure state is updated
      setTimeout(() => {
        checkAllQuestionsAnswered();
      }, 100);
    };
    
    window.addEventListener('returnToBoard', handleReturnToBoard);
    
    // Also check when the component updates with new categories data
    // This ensures we catch when all questions become answered
    const allQuestionsAnswered = displayCategories.length > 0 && 
      displayCategories.every((category: Category) => 
        category.questions.every((question: any) => question.answered)
      );
    
    console.log('Checking on update:', { 
      categoriesCount: displayCategories.length,
      allAnswered: allQuestionsAnswered
    });
    
    if (allQuestionsAnswered && displayCategories.length > 0) {
      console.log('All questions are now answered, ending game!');
      // Add small delay to ensure we don't end too early
      setTimeout(() => {
        playSound('winner-celebration');
        dispatch(setGamePhase('end'));
      }, 300);
    }
    
    return () => {
      window.removeEventListener('returnToBoard', handleReturnToBoard);
    };
  }, [displayCategories, selectedCategories]); // Add proper dependencies
  
  const handleEndGame = () => {
    // First check if all questions are already answered
    const allQuestionsAnswered = displayCategories.every((category: Category) => 
      category.questions.every((question: any) => question.answered)
    );
    
    if (allQuestionsAnswered) {
      // All questions answered, go directly to end game
      playSound('winner-celebration');
      dispatch(setGamePhase('end'));
    } else {
      // Not all questions answered, ask for confirmation
      if (window.confirm('هل أنت متأكد من أنك تريد إنهاء اللعبة؟')) {
        playSound('button-click');
        dispatch(setGamePhase('end'));  // Changed from resetGame() to setGamePhase('end')
        showNotification('تم إنهاء اللعبة');
      }
    }
  };

  return (
    <BoardContainer>
      {/* Category headers */}
      <CategoryRow>
        {displayCategories.map((category: Category, index: number) => (
          <motion.div
            key={category.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={rowVariants}
          >
            <CategoryHeader>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>
                <BidirectionalText text={category.name} />
              </CategoryName>
            </CategoryHeader>
          </motion.div>
        ))}
      </CategoryRow>
      
      {/* Questions for each point value row */}
      {pointValues.map((value, rowIndex) => (
        <motion.div
          key={value}
          custom={rowIndex + displayCategories.length}
          initial="hidden"
          animate="visible"
          variants={rowVariants}
        >
          <QuestionsGrid>
            {displayCategories.map((category: Category) => {
              const questionIndex = category.questions.findIndex((q: any) => q.value === value);
              const question = category.questions[questionIndex];
              
              return (
                <QuestionCard
                  key={`${category.id}-${value}`}
                  categoryId={category.id}
                  questionIndex={questionIndex}
                  question={question}
                  answered={!!question.answered}
                />
              );
            })}
          </QuestionsGrid>
        </motion.div>
      ))}
      
      {/* End Game Button */}
      <EndGameButtonContainer>
        <EndGameButton
          onClick={handleEndGame}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          إنهاء اللعبة
        </EndGameButton>
      </EndGameButtonContainer>
    </BoardContainer>
  );
};

export default GameBoard; 