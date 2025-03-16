import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Image container with absolute positioning that doesn't block interactions
// Updated with exact positioning as specified by the user
const ImageContainer = styled(motion.div)`
  position: fixed;
  left: 7px; /* Exact X coordinate specified by user */
  top: 133px; /* Exact Y coordinate specified by user */
  width: 300px; /* Exact width specified by user */
  height: 643px; /* Exact height specified by user */
  z-index: 1000;
  pointer-events: none; /* This ensures the component doesn't block interactions */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.25));
`;

// Array of image URLs
const imageUrls = [
  "https://i.ibb.co/JFpwY3Xt/1-dub.png",
  "https://i.ibb.co/fY6RXnR0/2-dub.png",
  "https://i.ibb.co/Ng9Gn3QR/3-dub.png",
  "https://i.ibb.co/zWZpxRJb/4-dub.png",
  "https://i.ibb.co/BK6CXVS0/5-dub.png",
  "https://i.ibb.co/wZPzbkQ9/6-dub.png",
  "https://i.ibb.co/XrhXCRp5/7-dub.png",
  "https://i.ibb.co/8LbChbjb/8-dub.png",
  "https://i.ibb.co/TqxWkvrs/9-dub.png",
  "https://i.ibb.co/TB9tTM8G/10-dub.png",
  "https://i.ibb.co/Zz7kTM7M/11-dub.png",
  "https://i.ibb.co/zhrfW4qp/12-dub.png",
  "https://i.ibb.co/TM0wDSYM/13-dub.png",
  "https://i.ibb.co/4nXKb6ny/14-dub.png"
];

// Animation variants for the image
// Updated to use the exact ending coordinates provided by the user
const imageVariants = {
  hidden: { 
    opacity: 0, 
    x: -100 
  },
  visible: { 
    opacity: 1, 
    x: 0, // Start at container position (7px)
    y: 0, // Start at container position (133px)
    transition: { 
      duration: 1,
    } 
  },
  exit: { 
    opacity: 0, 
    x: 300, // Move toward ending X (307px - 7px = 300px)
    y: 643, // Move toward ending Y (776px - 133px = 643px)
    transition: { duration: 1 } 
  }
};

const RandomImages: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  useEffect(() => {
    // Function to show a random image
    const showRandomImage = () => {
      // Get a random image URL
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      setCurrentImage(imageUrls[randomIndex]);
      
      // Make the image visible
      setIsVisible(true);
      
      // Hide the image after 10 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 20000); // Changed from 6000 to 20000 (20 seconds)
    };
    
    // Show the first image after a brief delay
    const initialDelay = setTimeout(() => {
      showRandomImage();
    }, 10000); // Start after 10 seconds of app load
    
    // Set up interval to show images every minute
    const interval = setInterval(() => {
      showRandomImage();
    }, 60000); // 60000ms = 1 minute
    
    // Clean up on component unmount
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <ImageContainer
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={imageVariants}
        >
          <StyledImage 
            src={currentImage} 
            alt="Random funny image" 
            animate={{
              scale: [1, 1.05, 1, 1.05, 1], // Subtle scale animation
              rotate: [-1, 1, -1, 1, 0], // Subtle rotation animation
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop'
              }
            }}
          />
        </ImageContainer>
      )}
    </AnimatePresence>
  );
};

export default RandomImages; 