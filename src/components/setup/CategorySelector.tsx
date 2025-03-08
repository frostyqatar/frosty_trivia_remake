import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RootState } from '../../store';
import { selectCategory, deselectCategory } from '../../store/gameSlice';
import { BidirectionalText } from '../../utils/textUtils';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { clearSavedGame } from '../../utils/storageUtils';
import { showNotification } from '../../components/common/GameNotification';

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
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
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
`;

const CategoryIcon = styled.div`
  font-size: 32px;
  margin-bottom: 12px;
`;

const CategoryName = styled.div`
  font-weight: bold;
  text-align: center;
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
    }, 2000);
  };
  
  const handleCategoryClick = (categoryId: string) => {
    playSound('button-click');
    
    if (selectedCategories.includes(categoryId)) {
      dispatch(deselectCategory(categoryId));
    } else if (selectedCategories.length < 6) {
      dispatch(selectCategory(categoryId));
    }
  };
  
  return (
    <Container>
      <Title>📚 اختر الفئات (٣-٦)</Title>
      <CounterText>اختر الفئات: {selectedCategories.length}/6</CounterText>
      
      {/* Add a reset button for debugging */}
      <button onClick={handleEmergencyReset} style={{ marginBottom: '16px' }}>
        Emergency Reset
      </button>
      
      <CategoriesGrid>
        {categories && categories.length > 0 ? (
          categories.map(category => (
            <CategoryCard
              key={category.id}
              selected={selectedCategories.includes(category.id)}
              onClick={() => handleCategoryClick(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>
                <BidirectionalText text={category.name} />
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