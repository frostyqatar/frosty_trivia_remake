import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ToggleButton = styled(motion.button)<{ $isOpen: boolean }>`
  position: fixed;
  right: ${props => props.$isOpen ? '295px' : '0'};
  left: auto;
  top: 450px;
  transform: none;
  background-color: #0a4d73;
  color: white;
  border: none;
  padding: 15px 10px;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  
  &:hover {
    background-color: #0b5d8a;
  }
  
  &:focus {
    outline: none;
    box-shadow: -2px 0 15px rgba(0, 0, 0, 0.3);
  }
`;

const ArrowIcon = styled.span<{ $isOpen: boolean }>`
  font-size: 24px;
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
  transition: transform 0.3s ease;
`;

// Legend container with fixed positioning and slide animation
const LegendContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  left: auto;
  top: 180px;
  width: 295px;
  height: 541px;
  transform: none;
  z-index: 1000;
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 12px 0 0 12px;
  padding: 20px;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  direction: rtl;
  border: 2px solid rgba(15, 94, 135, 0.3);
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  color: #0a4d73;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 700;
  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.8);
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background-color: rgba(242, 249, 255, 0.8);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`;

const FeatureIcon = styled.span`
  font-size: 24px;
  flex-shrink: 0;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
  text-shadow: 0px 0.5px 1px rgba(255, 255, 255, 0.8);
`;

// Animation variants
const legendVariants = {
  open: { 
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  closed: { 
    x: 295,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

const Legend: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ToggleButton
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowIcon $isOpen={isOpen}>◀</ArrowIcon>
      </ToggleButton>
      
      <AnimatePresence>
        {isOpen && (
          <LegendContainer
            initial="closed"
            animate="open"
            exit="closed"
            variants={legendVariants}
          >
            <Title>الميزات الخاصة:</Title>
            <FeatureList>
              <FeatureItem>
                <FeatureIcon>🤖</FeatureIcon>
                <FeatureDescription>يعطيك أول ثلاث حروف من الإجابة</FeatureDescription>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>2️⃣</FeatureIcon>
                <FeatureDescription>دبل نقاط الإجابة.. </FeatureDescription>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>🔍</FeatureIcon>
                <FeatureDescription>الإتصال بصديق مضيعة وقت... أنت دور بقوقل بنفسك... فقط حق نقاط 100 و200</FeatureDescription>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>⛔</FeatureIcon>
                <FeatureDescription>امنع الفريق الآخر من الإجابة</FeatureDescription>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>⚡</FeatureIcon>
                <FeatureDescription>خلها تبرق وترعد... احتمال يخسر الفريق بين 300 و500 نقطة</FeatureDescription>
              </FeatureItem>
            </FeatureList>
          </LegendContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Legend; 