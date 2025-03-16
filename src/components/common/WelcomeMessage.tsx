import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const MessageOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const MessageContainer = styled(motion.div)`
  background: linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%);
  max-width: 600px;
  width: 90%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  margin: auto;
`;

const MessageHeader = styled.div`
  background: linear-gradient(135deg, #0693e3 0%, #004c8c 100%);
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const MessageContent = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ArabicText = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  direction: rtl;
  text-align: right;
  color: #333;
  background-color: rgba(6, 147, 227, 0.05);
  padding: 15px;
  border-radius: 10px;
  border-right: 4px solid #0693e3;
`;

const EnglishText = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 15px;
  border-radius: 10px;
  border-left: 4px solid #ccc;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const DismissButton = styled(motion.button)`
  background: linear-gradient(135deg, #0693e3 0%, #004c8c 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const WelcomeMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // Always start visible
  
  const handleDismiss = () => {
    setIsVisible(false);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <MessageOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MessageContainer
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <MessageHeader>
              Frosty Trivia - Welcome Message
              <CloseButton 
                onClick={handleDismiss}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </CloseButton>
            </MessageHeader>
            
            <MessageContent>
              <ArabicText>
                هذي لعبة صناعة قطرية، مبرمحة من مبرمجين قطرين.<br/>
                هذه هي النسخة الألفا...<br/>
                الاسئلة واللعبة تحت الصيانة، فراح تحتاج أنت تسوي الأسئلة..<br/>
                ميزة اللعبة إنك تقدر تسوي اسئلة حق الشباب بنفسك<br/>
                عشان ما تكون في اسئلة سهلة وصعبة على الفاضي<br/>
                اللعبة مجانية حالياَ
              </ArabicText>
              
              <EnglishText>
                This is a Qatari-made game, programmed by Qatari programmers.<br/>
                This is the alpha version...<br/>
                The questions and the game are under maintenance, so you'll need to create the questions yourself.<br/>
                The advantage of the game is that you can create questions for the players yourself,<br/>
                so there won't be unnecessarily easy or difficult questions.<br/>
                The game is currently free.
              </EnglishText>
              
              <ButtonContainer>
                <DismissButton 
                  onClick={handleDismiss}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Got It
                </DismissButton>
              </ButtonContainer>
            </MessageContent>
          </MessageContainer>
        </MessageOverlay>
      )}
    </AnimatePresence>
  );
};

export default WelcomeMessage; 