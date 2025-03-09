import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { selectQuestion } from '../store/gameSlice';
import { Question } from '../types/game.types';
import { useSoundEffects } from '../hooks/useSoundEffects';

interface QuestionCardProps {
  categoryId: string;
  questionIndex: number;
  question: Question;
  answered: boolean;
}

const StyledCard = styled(motion.div)<{ answered: boolean }>`
  background-color: ${props => props.answered ? '#bdc3c7' : '#3498db'};
  color: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  height: 80px;
  cursor: ${props => props.answered ? 'default' : 'pointer'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: ${props => props.answered ? 'none' : 'translateY(-4px)'};
    box-shadow: ${props => props.answered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 8px 16px rgba(0, 0, 0, 0.3)'};
  }
`;

const QuestionCard: React.FC<QuestionCardProps> = ({
  categoryId,
  questionIndex,
  question,
  answered
}) => {
  const dispatch = useDispatch();
  const { playSound } = useSoundEffects();
  
  const handleClick = () => {
    if (answered) return;
    
    playSound('question-reveal');
    dispatch(selectQuestion({
      categoryId,
      questionIndex,
      question
    }));
  };
  
  // Card flip animation
  const variants = {
    initial: { 
      rotateY: 0,
    },
    flipped: {
      rotateY: 180,
      opacity: 0.5,
    }
  };

  return (
    <StyledCard
      answered={answered}
      onClick={handleClick}
      animate={answered ? 'flipped' : 'initial'}
      variants={variants}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={answered ? {} : { scale: 1.05 }}
    >
      {question.value}
    </StyledCard>
  );
};

export default QuestionCard; 