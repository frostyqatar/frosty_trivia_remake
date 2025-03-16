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

const CategoryCard = styled(motion.div)<{ selected: boolean }>`
  background: ${props => props.selected 
    ? 'linear-gradient(135deg, #0099cc 0%, #66d4ff 100%)' 
    : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.selected ? 'white' : '#0f5e87'};
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
  border: 2px solid ${props => props.selected 
    ? 'rgba(255, 255, 255, 0.3)' 
    : 'rgba(102, 212, 255, 0.3)'};
  box-shadow: ${props => props.selected 
    ? '0 6px 20px rgba(0, 153, 204, 0.25)' 
    : '0 4px 15px rgba(0, 153, 204, 0.15)'};
  height: 130px;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 153, 204, 0.25);
    border-color: ${props => props.selected 
      ? 'rgba(255, 255, 255, 0.5)' 
      : 'rgba(102, 212, 255, 0.5)'};
  }
`;

const CategoryIcon = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
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

const ActionBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
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
        <Title>📚 اختر الفئات (١-٨)</Title>
        
      </TitleContainer>
      <CounterText>اختر الفئات: {selectedCategories.length}/8</CounterText>
      
      <ActionBar>
        <EmergencyResetButton onClick={handleEmergencyReset}>
          Emergency Reset
        </EmergencyResetButton>
      </ActionBar>
      
      <CategoriesGrid>
        {categories && categories.length > 0 ? (
          categories.map((category: Category) => (
            <CategoryCard
              key={category.id}
              selected={selectedCategories.includes(category.id)}
              onClick={() => handleCategoryClick(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>
                <BidirectionalText text={category.name || 'Unnamed Category'} />
              </CategoryName>
            </CategoryCard>
          ))
        ) : (
          <div>No categories available. Try resetting the game.</div>
        )}
      </CategoriesGrid>
    </Container>
  );
};

export default CategorySelector;