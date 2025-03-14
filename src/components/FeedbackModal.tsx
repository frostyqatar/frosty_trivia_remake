import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const ModalContainer = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  height: 90vh;
  max-height: 700px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8c52ff;
  color: white;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const FormContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

const FormIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle>عطنا رايك</ModalTitle>
              <CloseButton
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </CloseButton>
            </ModalHeader>
            <FormContainer>
              <FormIframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe84FITNwzxxuqJwPvbrxKrIbX-ZZKMR2GRTWmIkGU5qZkNqQ/viewform?embedded=true"
                title="Feedback Form"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </FormContainer>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal; 