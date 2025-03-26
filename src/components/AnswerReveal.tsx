import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RootState } from '../store';
import { awardPoints, returnToBoard, setActiveTeam } from '../store/gameSlice';
import { BidirectionalText } from '../utils/textUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(140, 82, 255, 0.15);
  width: 100%;
  max-width: 900px;
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
  background: linear-gradient(135deg, #8c52ff 0%, #5e17eb 100%);
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
  color: #666;
  margin-bottom: 32px;
  text-align: center;
  width: 100%;
  background-color: #f8f5ff;
  padding: 24px;
  border-radius: 16px;
  border-left: 5px solid #8c52ff;
`;

const AnswerText = styled(motion.div)`
  font-size: 80px;
  font-weight: 1000;
  color: #2c3e50;
  margin: 32px 0;
  text-align: center;
  padding: 24px;
  border-radius: 16px;
  background-color: #f0ebff;
  width: 100%;
  box-shadow: 0 4px 12px rgba(140, 82, 255, 0.1);
  border-left: 5px solid #8c52ff;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  width: 100%;
  margin-top: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

const TeamActionButton = styled(motion.button)`
  padding: 24px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: 160px;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    min-height: 120px;
  }
`;

const Team1Button = styled(TeamActionButton)`
  background: linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%);
`;

const Team2Button = styled(TeamActionButton)`
  background: linear-gradient(135deg, #ff9966 0%, #ff5e62 100%);
`;

const OrDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    width: 2px;
    height: 40px;
    background-color: #ddd;
    margin: 8px 0;
  }
  
  @media (max-width: 768px) {
    margin: 8px 0;
    
    &::before,
    &::after {
      display: none;
    }
  }
`;

const NoPointsButton = styled(motion.button)`
  background: linear-gradient(135deg, #8c52ff 0%, #5e17eb 100%);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 24px;
  box-shadow: 0 4px 12px rgba(140, 82, 255, 0.3);
  
  &:hover {
    box-shadow: 0 6px 16px rgba(140, 82, 255, 0.4);
  }
`;

const TeamIcon = styled.span`
  font-size: 32px;
`;

const TeamName = styled.span`
  font-size: 20px;
  text-align: center;
`;

const PointsValue = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 18px;
`;

const AnswerReveal: React.FC = () => {
  const dispatch = useDispatch();
  const [showSuspense, setShowSuspense] = useState(true);
  const { currentQuestion, teams, activeTeamIndex } = useSelector((state: RootState) => ({
    currentQuestion: state.currentQuestion,
    teams: state.teams,
    activeTeamIndex: state.activeTeamIndex || 0,
  }));
  const { playSound } = useSoundEffects();
  
  useEffect(() => {
    // Show suspense for 2 seconds
    const timer = setTimeout(() => {
      setShowSuspense(false);
      // Only play the sound in the traditional way if we're not using the enhanced sound system
      // Comment out or remove this line since we now handle this in the button click
      // playSound('answer-reveal');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    console.log("AnswerReveal mounted, current active team:", activeTeamIndex);
  }, []);
  
  if (!currentQuestion) {
    return <div>No question selected</div>;
  }
  
  const { question } = currentQuestion;
  
  const handleAwardPoints = (teamIndex: 0 | 1) => {
    // Play the new team award sound
    playSound('team-award');
    
    // Award points to the team that answered correctly
    dispatch(awardPoints({ 
      teamIndex, 
      points: question.value 
    }));
    
    // Team already switched when revealing answer, so no need to switch again
    console.log(`Awarding points to team ${teamIndex}, active team remains: ${activeTeamIndex}`);
    
    // Mark question as answered and return to board
    dispatch(returnToBoard({ markAsAnswered: true }));
  };
  
  const handleReturnToBoard = () => {
    // Play sound first before state changes
    playSound('button-click');
    
    // Team already switched when revealing answer, so no need to switch again
    console.log(`No points awarded. Active team remains: ${activeTeamIndex}`);
    
    // Return to board without marking as answered
    dispatch(returnToBoard({ markAsAnswered: false }));
  };
  
  const handleNoPoints = () => {
    // Play sound first before state changes
    playSound('button-click');
    
    // Return to the board and mark the question as answered
    dispatch(returnToBoard({ markAsAnswered: true }));
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
      
      <AnswerText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <BidirectionalText text={question.answer} />
      </AnswerText>
      
      <ButtonsContainer>
        <Team1Button
          onClick={() => handleAwardPoints(0)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <TeamIcon>🏆</TeamIcon>
          <TeamName>{teams[0].name}</TeamName>
          <PointsValue>+{question.value} points</PointsValue>
        </Team1Button>
        
        <OrDivider>أو</OrDivider>
        
        <Team2Button
          onClick={() => handleAwardPoints(1)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <TeamIcon>🏆</TeamIcon>
          <TeamName>{teams[1].name}</TeamName>
          <PointsValue>+{question.value} points</PointsValue>
        </Team2Button>
      </ButtonsContainer>
      
      <NoPointsButton
        onClick={handleNoPoints}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🚫 لا توجد نقاط - العودة للوحة اللعبة
      </NoPointsButton>
    </AnswerContainer>
  );
};

export default AnswerReveal; 