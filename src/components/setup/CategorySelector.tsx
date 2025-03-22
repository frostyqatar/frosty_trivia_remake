import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { selectCategory, deselectCategory } from '../../store/gameSlice';
import { RootState } from '../../store';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { showNotification } from '../../components/common/GameNotification';
import { clearSavedGame } from '../../utils/storageUtils';
import { Category } from '../../types/game.types';
import ThemeSwitcher from '../../components/common/ThemeSwitcher';

import { BidirectionalText } from '../../utils/textUtils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  color: #0f5e87;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  margin-right: 16px;
`;

const CounterText = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  color: #0f5e87;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  width: 100%;
  position: relative;
  z-index: 1;
`;

// Add a keyframes definition for the bounce animation
const bounceKeyframes = `
  @keyframes bounceAnimation {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
`;

// Create a style element and append the keyframes
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(bounceKeyframes));
document.head.appendChild(style);

// Add a styled component for the bouncing emoji
const CategoryEmoji = styled.span<{ $selected: boolean }>`
  font-size: 36px;
  margin-bottom: 8px;
  display: block;
  transition: all 0.3s ease;
  animation: ${props => props.$selected ? 'bounceAnimation 1.5s infinite ease-in-out' : 'none'};
  transform-origin: center;
  
  ${props => !props.$selected && `
    &:hover {
      transform: scale(1.2);
    }
  `}
`;

const CategoryName = styled.div`
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  min-height: 40px;
  color: currentColor;
`;

const CategoryCard = styled(motion.div)<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.selected ? 'rgba(0, 153, 204, 0.2)' : 'rgba(255, 255, 255, 0.9)'};
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    pointer-events: none;
  }

  /* Add NES.css styling for retro theme */
  [data-theme="retro"] & {
    image-rendering: pixelated;
    background-color: #000;
    color: #fff;
    border-radius: 0;
    border: 4px solid ${props => props.selected ? '#92cc41' : '#209cee'};
    box-shadow: 0 4px 0 ${props => props.selected ? '#4aa52e' : '#006bb3'};
    padding: 8px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 3px 0 ${props => props.selected ? '#4aa52e' : '#006bb3'};
    }
    
    &:active {
      transform: translateY(2px);
      box-shadow: 0 0 0 ${props => props.selected ? '#4aa52e' : '#006bb3'};
    }
  }
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1000;
  gap: 15px;
`;

const EmergencyResetButton = styled.button`
  background: linear-gradient(135deg, #ff6464 0%, #ff5252 100%);
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 82, 82, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 82, 82, 0.4);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  /* Add NES.css styling for retro theme */
  [data-theme="retro"] & {
    background: #e76e55;
    image-rendering: pixelated;
    border-radius: 0;
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    padding: 6px 8px;
    margin: 4px;
    font-weight: normal;
    box-shadow: 0 4px 0 #c3533e;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 0 #c3533e;
    }
    
    &:active {
      transform: translateY(4px);
      box-shadow: 0 0 0 #c3533e;
    }
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: #666;
  font-size: 18px;
  padding: 20px;
  
  [data-theme="retro"] & {
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    color: #fff;
    padding: 10px;
  }
`;

const CategorySelector: React.FC = () => {
  const dispatch = useDispatch();
  
  // Use useSelector directly to get the categories rather than accessing the store
  const categories = useSelector((state: RootState) => {
    return state.categories || [];
  });
  
  const selectedCategories = useSelector((state: RootState) => 
    state.selectedCategories || []
  );
  
  const { playSound } = useSoundEffects();
  
  // Debug log
  useEffect(() => {
    console.log('Redux categories state:', categories);
    console.log('Selected categories:', selectedCategories);
  }, [categories, selectedCategories]);
  
  // Emergency reset function for debugging
  const handleEmergencyReset = () => {
    showNotification('This will reset the game state.');
    
    // Use setTimeout to give the user time to read the notification
    setTimeout(() => {
      clearSavedGame();
      localStorage.clear();
      window.location.reload();
    }, 2000);
  };
  
  const handleCategoryClick = (categoryId: string) => {
    playSound('button-click');
    
    console.log('Current selected categories:', selectedCategories);
    console.log('Attempting to select/deselect category:', categoryId);
    
    if (selectedCategories.includes(categoryId)) {
      dispatch(deselectCategory(categoryId));
      console.log('Deselected category:', categoryId);
    } else if (selectedCategories.length < 8) {
      dispatch(selectCategory(categoryId));
      console.log('Selected category:', categoryId);
    } else {
      console.warn('Cannot select more categories - max limit reached');
    }
  };
  
  return (
    <Container>
      <TitleContainer>
        <Title className="halloween-drip">📚 اختر الفئات (١-٨)</Title>
      </TitleContainer>
      <CounterText>اختر الفئات: {selectedCategories.length}/8</CounterText>
      
      <ActionBar>
        
        <EmergencyResetButton onClick={handleEmergencyReset}>
          Emergency Reset
        </EmergencyResetButton>
      </ActionBar>
      
      <CategoriesGrid>
        {categories && categories.length > 0 ? (
          categories.map((category: Category) => {
            const isSelected = selectedCategories.includes(category.id);
            
            return (
              <CategoryCard
                key={category.id}
                selected={isSelected}
                onClick={() => handleCategoryClick(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CategoryEmoji $selected={isSelected}>
                  {category.icon || '📚'}
                </CategoryEmoji>
                <CategoryName>
                  <BidirectionalText text={category.name || 'Unnamed Category'} />
                </CategoryName>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '5px',
                      color: '#0099cc',
                      fontSize: '20px'
                    }}
                  >
                    ✓
                  </motion.div>
                )}
              </CategoryCard>
            );
          })
        ) : (
          <EmptyMessage>No categories available. Please add some in Question Management.</EmptyMessage>
        )}
      </CategoriesGrid>
    </Container>
  );
};

export default CategorySelector;