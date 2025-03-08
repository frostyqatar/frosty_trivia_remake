import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RootState } from '../store';
import { awardPoints, returnToBoard } from '../store/gameSlice';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background-color: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const SuspenseOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: bold;
  z-index: 10;
`;

const QuestionText = styled.div`
  font-size: 24px;
  color: #7f8c8d;
  margin-bottom: 24px;
  text-align: center;
  width: 100%;
`;

const AnswerText = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #2c3e50;
  margin: 32px 0;
  text-align: center;
  padding: 16px;
  border-radius: 8px;
  background-color: #e8f4fd;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 32px;
`;

const Button = styled(motion.button)`
  padding: 16px 24px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const AwardButton = styled(Button)`
  background-color: #2ecc71;
  color: white;
`;

const NoAwardButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
`;

const ReturnButton = styled(Button)`
  background-color: #3498db;
  color: white;
  margin-top: 16px;
`;

const AnswerReveal: React.FC = () => {
  const dispatch = useDispatch();
  const [showSuspense, setShowSuspense] = useState(true);
  const { currentQuestion, teams } = useSelector((state: RootState) => ({
    currentQuestion: state.currentQuestion,
    teams: state.teams,
  }));
  const { playSound } = useSoundEffects();
  
  useEffect(() => {
    // Show suspense for 2 seconds
    const timer = setTimeout(() => {
      setShowSuspense(false);
      playSound('answer-reveal');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [playSound]);
  
  if (!currentQuestion) {
    return <div>No question selected</div>;
  }
  
  const { question } = currentQuestion;
  
  const handleAwardPoints = (teamIndex: 0 | 1) => {
    playSound('button-click');
    dispatch(awardPoints({ 
      teamIndex, 
      points: question.value 
    }));
    dispatch(returnToBoard({ markAsAnswered: true }));
  };
  
  const handleReturnToBoard = () => {
    playSound('button-click');
    dispatch(returnToBoard({ markAsAnswered: false }));
  };
  
  return (
    <AnswerContainer>
      {showSuspense && (
        <SuspenseOverlay
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: [1, 0.8, 1, 0.8, 1], 
            scale: [1, 1.05, 1, 1.05, 1] 
          }}
          transition={{ 
            duration: 2,
            times: [0, 0.25, 0.5, 0.75, 1] 
          }}
        >
          إظهار الإجابة...
        </SuspenseOverlay>
      )}
      
      <QuestionText>
        <BidirectionalText text={question.question} />
      </QuestionText>
      
      <AnswerText>
        <BidirectionalText text={question.answer} />
      </AnswerText>
      
      <ButtonsContainer>
        <AwardButton
          onClick={() => handleAwardPoints(0)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          منح النقاط للفريق {teams[0].name}
        </AwardButton>
        
        <NoAwardButton
          onClick={handleReturnToBoard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          العودة للوحة اللعبة
        </NoAwardButton>
        
        <AwardButton
          onClick={() => handleAwardPoints(1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          منح النقاط للفريق {teams[1].name}
        </AwardButton>
      </ButtonsContainer>
      
      <ReturnButton
        onClick={handleReturnToBoard}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        العودة للوحة اللعبة
      </ReturnButton>
    </AnswerContainer>
  );
};

export default AnswerReveal; 