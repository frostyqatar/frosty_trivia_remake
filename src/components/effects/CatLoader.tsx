import React from 'react';
import styled, { keyframes } from 'styled-components';

// Circular rotation animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CatLoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`;

const LoaderRing = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #8c52ff;
  border-radius: 50%;
  animation: ${rotateAnimation} 1.5s linear infinite;
`;

const InnerRing = styled(LoaderRing)`
  width: 85%;
  height: 85%;
  top: 7.5%;
  left: 7.5%;
  border-top-color: #ff9900;
  animation-duration: 2.5s;
  animation-direction: reverse;
`;

interface CatLoaderProps {
  active?: boolean;
  size?: number;
}

const CatLoader: React.FC<CatLoaderProps> = ({ active = true, size = 1 }) => {
  if (!active) return null;
  
  return (
    <CatLoaderContainer style={{ transform: `translate(-50%, -50%) scale(${size})` }}>
      <LoaderRing />
      <InnerRing />
    </CatLoaderContainer>
  );
};

export default CatLoader; 