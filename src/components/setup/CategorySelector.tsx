import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RootState } from '../../store';
import { selectCategory, deselectCategory, toggleMusic } from '../../store/gameSlice';
import { BidirectionalText } from '../../utils/textUtils';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { clearSavedGame } from '../../utils/storageUtils';
import { showNotification } from '../../components/common/GameNotification';
import { Category } from '../../types/game.types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  color: #2c3e50;
  font-size: 24px;
  text-align: center;
`;

const CounterText = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  color: #7f8c8d;
  text-align: center;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  width: 100%;
`;

const CategoryCard = styled(motion.div)<{ selected: boolean }>`
  background-color: ${props => props.selected ? '#3498db' : '#ecf0f1'};
  color: ${props => props.selected ? 'white' : '#2c3e50'};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.selected ? '0 6px 12px rgba(52, 152, 219, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  height: 120px;
  overflow: hidden;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const MuteButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  color: #7f8c8d;
  transition: all 0.2s;
  
  &:hover {
    color: #3498db;
    transform: scale(1.1);
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
  
  const musicEnabled = useSelector((state: RootState) => state.musicEnabled);
  
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

  const handleToggleSound = () => {
    dispatch(toggleMusic());
    playSound('button-click');
  };
  
  return (
    <Container>
      <Title>📚 اختر الفئات (١-٨)</Title>
      <CounterText>اختر الفئات: {selectedCategories.length}/8</CounterText>
      
      <ActionBar>
        {/* Add mute button */}
        <MuteButton onClick={handleToggleSound}>
          {musicEnabled ? '🔊' : '🔇'}
        </MuteButton>
        
        {/* Add a reset button for debugging */}
        <button onClick={handleEmergencyReset}>
          Emergency Reset
        </button>
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