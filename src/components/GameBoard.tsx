import React, { useEffect } from 'react';
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
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
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding-bottom: 12px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryHeader = styled.div`
  background-color: #8c52ff;
  color: white;
  padding: 16px 8px;
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
`;

const CategoryHeaderText = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CategoryIcon = styled.div`
  font-size: 36px;
  margin: 15px 0;
`;

const QuestionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 16px;
  width: 100%;
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  max-width: 500px;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 0 auto 30px;
  overflow: hidden;
`;

const Progress = styled.div<{ percent: number }>`
  height: 100%;
  width: ${props => props.percent}%;
  background-color: #8c52ff;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
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
  border: 3px solid black;
  border-radius: 12px;
  padding: 12px 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const SwitchTeamButton = styled(motion.button)`
  background-color: #39c0ee;
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
  
  &:hover {
    background-color: #2aaad6;
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
  background-color: ${props => props.answered ? '#f1f1f1' : '#8c52ff'};
  color: white;
  border-radius: 8px;
  padding: 14px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  cursor: ${props => props.answered ? 'default' : 'pointer'};
  transition: all 0.2s ease;
  min-height: 50px;
  
  &:hover {
    transform: ${props => props.answered ? 'none' : 'translateY(-5px)'};
    box-shadow: ${props => props.answered ? 'none' : '0 8px 15px rgba(0, 0, 0, 0.1)'};
  }
`;

const GameBoard: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategories, teams, activeTeamIndex } = useSelector((state: RootState) => ({
    categories: state.categories,
    selectedCategories: state.selectedCategories,
    teams: state.teams,
    activeTeamIndex: state.activeTeamIndex || 0,
  }));
  
  const { playSound } = useSoundEffects();
  const { switchTeam } = useAbilities();
  
  // Filter categories that are selected
  const displayCategories = categories.filter(
    (cat: Category) => selectedCategories.includes(cat.id)
  );
  
  // Get all possible point values
  const pointValues = [100, 200, 300, 400, 500];
  
  // Calculate completion percentage
  const totalQuestions = displayCategories.length * pointValues.length;
  const answeredQuestions = displayCategories.reduce((total: number, category: Category) => {
    return total + category.questions.filter((q: Question) => q.answered).length;
  }, 0);
  
  const completionPercent = totalQuestions > 0 
    ? (answeredQuestions / totalQuestions) * 100 
    : 0;
  
  const checkAllQuestionsAnswered = () => {
    if (selectedCategories.length > 0) {
      const allQuestionsAnswered = displayCategories.every((category: Category) => 
        category.questions.every((question: any) => question.answered)
      );
      
      if (allQuestionsAnswered) {
        playSound('winner-celebration');
        dispatch(setGamePhase('end'));
      }
    }
  };

  useEffect(() => {
    const handleReturnToBoard = () => {
      setTimeout(() => checkAllQuestionsAnswered(), 100);
    };
    
    window.addEventListener('returnToBoard', handleReturnToBoard);
    
    // Check when categories update
    if (completionPercent === 100) {
      setTimeout(() => {
        playSound('winner-celebration');
        dispatch(setGamePhase('end'));
      }, 300);
    }
    
    return () => {
      window.removeEventListener('returnToBoard', handleReturnToBoard);
    };
  }, [displayCategories, selectedCategories]);
  
  const handleEndGame = () => {
    if (window.confirm('هل أنت متأكد من أنك تريد إنهاء اللعبة؟')) {
      playSound('button-click');
      dispatch(setGamePhase('end'));
    }
  };

  const handleSelectQuestion = (categoryId: string, questionIndex: number) => {
    const category = categories.find((c: Category) => c.id === categoryId);
    if (!category) return;
    
    if (questionIndex >= 0 && questionIndex < category.questions.length) {
      const question = category.questions[questionIndex];
      if (question.answered) return;
      
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
  };

  const renderCategoryQuestions = (category: Category) => {
    // Create a map of questions indexed by their point value
    const questionsByValue: Record<number, any> = {};
    
    // Populate the map
    category.questions.forEach((question, index) => {
      questionsByValue[question.value] = {
        question,
        index
      };
    });
    
    // Render a card for each point value
    return pointValues.map(value => {
      const questionData = questionsByValue[value];
      
      // If there's no question for this value, show empty slot
      if (!questionData) {
        return (
          <EmptyQuestionSlot key={`${category.id}-${value}`}>
            {value}
          </EmptyQuestionSlot>
        );
      }
      
      // Otherwise render the question card
      return (
        <QuestionCard
          key={`${category.id}-${value}`}
          categoryId={category.id}
          questionIndex={questionData.index}
          question={questionData.question}
          answered={questionData.question.answered}
          onClick={() => handleSelectQuestion(category.id, questionData.index)}
        >
          {value}
        </QuestionCard>
      );
    });
  };

  // Add this styled component for empty question slots
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

  return (
    <BoardContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
      <ProgressBar>
        <Progress percent={completionPercent} />
      </ProgressBar>
      
      <TeamTurnIndicator>
        Current Team Turn: {teams[activeTeamIndex]?.name || `Team ${activeTeamIndex + 1}`} (
        <SwitchTeamButton
          onClick={switchTeam}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Switch team turn"
        >
          🔄
        </SwitchTeamButton>
        )
      </TeamTurnIndicator>
      
      <CategoryContainer>
        {displayCategories.map((category: Category) => (
          <CategoryCard 
            key={category.id}
            variants={cardVariants}
          >
            <CategoryHeader>
              <CategoryHeaderText>
                <BidirectionalText text={category.name} />
              </CategoryHeaderText>
            </CategoryHeader>
            <CategoryIcon>{category.icon}</CategoryIcon>
            
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