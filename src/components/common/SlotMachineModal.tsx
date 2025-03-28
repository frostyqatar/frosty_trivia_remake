import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SlotMachine, SlotSymbol } from 'slot-machine';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { AbilityType } from '../../types/game.types';

const ModalOverlay = styled(motion.div)`
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

const ModalContent = styled(motion.div)`
  background-color: var(--card-background, #fff);
  border-radius: 16px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: visible;
  max-height: 90vh;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: var(--text-color);
`;

const SlotMachineContainer = styled.div`
  background: linear-gradient(135deg, #333, #1a1a1a);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  border: 3px solid gold;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 215, 0, 0.5);
`;

const SlotDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 40px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 10px;
  border: 2px solid #666;
`;

const SlotItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  min-height: 60px;
  font-size: 40px;
`;

const SpinButton = styled(motion.button)`
  background: linear-gradient(135deg, #ffcc00, #ff9900);
  color: #000;
  border: none;
  border-radius: 30px;
  padding: 12px 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  margin-top: 10px;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CloseButton = styled(motion.button)`
  background: linear-gradient(135deg, #0099cc, #66d4ff);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  margin-top: 10px;
`;

const ResultMessage = styled.div`
  font-size: 22px;
  margin-top: 20px;
  text-align: center;
  color: var(--text-color);
  font-weight: bold;
`;

const AbilityDescription = styled.div`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  color: var(--text-color);
  opacity: 0.8;
`;

interface SlotMachineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAbilitySelected: (ability: AbilityType) => void;
}

// Define ability descriptions
const abilityDescriptions = {
  electric: "Reduce the opposing team's points by 300-500 points.",
  google: "Allow 25 seconds to search on Google for the answer.",
  double: "Double the points for your next correct answer.",
  chatgpt: "Get a hint with the first 3 letters of the answer.",
  dismiss: "Block the opposing team from answering the current question."
};

const SlotMachineModal: React.FC<SlotMachineModalProps> = ({ isOpen, onClose, onAbilitySelected }) => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<AbilityType | null>(null);
  const [displaySymbols, setDisplaySymbols] = useState<string[]>(['❓', '❓', '❓']);
  const { playSound } = useSoundEffects();

  // Create SlotSymbols for the slot machine
  const electric = new SlotSymbol('electric', {
    display: '⚡',
    points: 10,
    weight: 50
  });

  const google = new SlotSymbol('google', {
    display: '🔍',
    points: 10,
    weight: 60
  });

  const double = new SlotSymbol('double', {
    display: '2️⃣',
    points: 10,
    weight: 60
  });

  const chatgpt = new SlotSymbol('chatgpt', {
    display: '🤖',
    points: 10,
    weight: 60
  });

  const dismiss = new SlotSymbol('dismiss', {
    display: '⛔',
    points: 10,
    weight: 60
  });

  // Create slot machine with the symbols
  const machine = new SlotMachine(3, [electric, google, double, chatgpt, dismiss]);

  const handleSpin = () => {
    if (spinning) return;
    
    setSpinning(true);
    playSound('button-click');
    
    // Start with random symbols rapidly changing
    const symbolInterval = setInterval(() => {
      const symbols = ['⚡', '🔍', '2️⃣', '🤖', '⛔'];
      setDisplaySymbols([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
      ]);
    }, 100);
    
    // Play slot machine sound
    // Ideally we would have a slot machine sound, but using an existing sound for now
    playSound('ability-electric');
    
    // Stop after 2 seconds and show result
    setTimeout(() => {
      clearInterval(symbolInterval);
      
      // Get result from slot machine
      const slotResults = machine.play();
      const firstSymbol = slotResults.lines[0].symbols[0].name as AbilityType;
      
      // Set the result ability
      setResult(firstSymbol);
      
      // Set the display symbols to all be the same as the result (three in a row)
      const symbolMap: Record<string, string> = {
        'electric': '⚡',
        'google': '🔍',
        'double': '2️⃣',
        'chatgpt': '🤖',
        'dismiss': '⛔'
      };
      
      const resultSymbol = symbolMap[firstSymbol];
      setDisplaySymbols([resultSymbol, resultSymbol, resultSymbol]);
      
      // Play a sound for the result
      playSound('ability-electric');
      
      // Stop spinning
      setSpinning(false);
    }, 2000);
  };

  const handleClose = () => {
    if (result) {
      onAbilitySelected(result);
    }
    onClose();
  };

  // Reset state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setSpinning(false);
      setResult(null);
      setDisplaySymbols(['❓', '❓', '❓']);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContent
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            
            
            <SlotMachineContainer>
              <SlotDisplay>
                {displaySymbols.map((symbol, index) => (
                  <SlotItem key={index}>{symbol}</SlotItem>
                ))}
              </SlotDisplay>
            </SlotMachineContainer>
            
            {result ? (
              <>
                <ResultMessage>
                  You got: {result === 'electric' ? '⚡ Electric Shock' : 
                          result === 'google' ? '🔍 Google Search' : 
                          result === 'double' ? '2️⃣ Double Points' : 
                          result === 'dismiss' ? '⛔ Block Team' :
                          '🤖 ChatGPT Hint'}
                </ResultMessage>
                <CloseButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                >
                  Use Ability
                </CloseButton>
              </>
            ) : (
              <SpinButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSpin}
                disabled={spinning}
              >
                {spinning ? 'Spinning...' : 'Spin!'}
              </SpinButton>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default SlotMachineModal; 