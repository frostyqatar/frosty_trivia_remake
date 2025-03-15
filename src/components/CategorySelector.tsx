import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../store/gameSlice';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { Category } from '../types/game.types';
import styled from 'styled-components';

interface CategorySelectorProps {
  categories: Category[];
  setIsModalOpen: (isOpen: boolean) => void;
}

// Styled components for enhanced visual design
const CategorySelectorContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
`;

const WaveBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
`;

const CategoryCard = styled.button`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(102, 212, 255, 0.3);
  border-radius: 16px;
  padding: 20px;
  font-size: 22px;
  font-weight: 600;
  color: #0f5e87;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 8px 20px rgba(0, 153, 204, 0.15);
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 153, 204, 0.25);
    background: rgba(255, 255, 255, 0.98);
    border-color: rgba(102, 212, 255, 0.7);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(0, 153, 204, 0.2);
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 40px;
  margin-top: 20px;
  color: #0f5e87;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.6);
  text-align: center;
`;

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const { playSound } = useSoundEffects();

  const handleSelectCategory = (category: Category) => {
    // Play sound before UI updates
    playSound('button-click');
    
    // Pass the category ID as a string, not the whole object
    dispatch(selectCategory(category.id));
    setIsModalOpen(false);
  };
  
  return (
    <CategorySelectorContainer>
      <WaveBackground>
        <svg 
          width="100%" 
          height="100%" 
          id="svg" 
          viewBox="0 0 1440 690" 
          xmlns="http://www.w3.org/2000/svg" 
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#66d4ff" stopOpacity="0.2"></stop>
              <stop offset="95%" stopColor="#0099cc" stopOpacity="0.2"></stop>
            </linearGradient>
          </defs>
          <path 
            d="M 0,700 L 0,105 C 57.931295087598755,126.16935760906905 115.86259017519751,147.3387152181381 195,141 C 274.1374098248025,134.6612847818619 374.4809343868087,100.81449673651665 446,102 C 517.5190656131913,103.18550326348335 560.2136722775678,139.40329783579529 625,130 C 689.7863277224322,120.59670216420473 776.6643765029202,65.5723119203023 852,62 C 927.3356234970798,58.42768807969771 991.1288217107522,106.30745448299555 1047,128 C 1102.8711782892478,149.69254551700445 1150.8203366540708,145.19787014771558 1215,137 C 1279.1796633459292,128.80212985228442 1359.5898316729645,116.90106492614221 1440,105 L 1440,700 L 0,700 Z" 
            stroke="none" 
            strokeWidth="0" 
            fill="url(#gradient1)" 
            fillOpacity="0.4" 
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#66d4ff" stopOpacity="0.2"></stop>
              <stop offset="95%" stopColor="#0099cc" stopOpacity="0.2"></stop>
            </linearGradient>
          </defs>
          <path 
            d="M 0,700 L 0,245 C 51.778770182068016,233.00824458948816 103.55754036413603,221.01648917897631 172,216 C 240.44245963586397,210.98351082102369 325.5486087255239,212.94228787358296 393,208 C 460.4513912744761,203.05771212641704 510.2480247337686,191.21435932669186 586,194 C 661.7519752662314,196.78564067330814 763.4592923394022,214.20027481964962 844,237 C 924.5407076605978,259.7997251803504 983.9148059086224,287.9845413947097 1043,280 C 1102.0851940913776,272.0154586052903 1160.881484026108,227.86155960151152 1227,216 C 1293.118515973892,204.13844039848848 1366.559257986946,224.56922019924423 1440,245 L 1440,700 L 0,700 Z" 
            stroke="none" 
            strokeWidth="0" 
            fill="url(#gradient2)" 
            fillOpacity="0.53" 
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#66d4ff" stopOpacity="0.2"></stop>
              <stop offset="95%" stopColor="#0099cc" stopOpacity="0.2"></stop>
            </linearGradient>
          </defs>
          <path 
            d="M 0,700 L 0,385 C 72.97148746135349,385.92133287530055 145.94297492270698,386.84266575060116 208,397 C 270.057025077293,407.15733424939884 321.1995877705256,426.55066987289587 382,417 C 442.8004122294744,407.44933012710413 513.2586739951905,368.95465475781515 592,354 C 670.7413260048095,339.04534524218485 757.7657162487119,347.63071109584337 830,348 C 902.2342837512881,348.36928890415663 959.6784610099623,340.5225008588114 1031,337 C 1102.3215389900377,333.4774991411886 1187.5204397114394,334.27928546891104 1258,343 C 1328.4795602885606,351.72071453108896 1384.2397801442803,368.3603572655445 1440,385 L 1440,700 L 0,700 Z" 
            stroke="none" 
            strokeWidth="0" 
            fill="url(#gradient3)" 
            fillOpacity="0.53" 
            className="transition-all duration-300 ease-in-out delay-150 path-2"
          ></path>
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#66d4ff" stopOpacity="0.2"></stop>
              <stop offset="95%" stopColor="#0099cc" stopOpacity="0.2"></stop>
            </linearGradient>
          </defs>
          <path 
            d="M 0,700 L 0,525 C 56.53452421848161,538.7059429749227 113.06904843696321,552.4118859498454 181,548 C 248.93095156303679,543.5881140501546 328.2583304706287,521.0583991755411 403,505 C 477.7416695293713,488.94160082445893 547.8976296805223,479.35451734799045 616,492 C 684.1023703194777,504.64548265200955 750.1511508072829,539.5235314324974 825,543 C 899.8488491927171,546.4764685675026 983.4977670903468,518.55135692202 1052,524 C 1120.5022329096532,529.44864307798 1173.8577808313294,568.2710408794229 1236,574 C 1298.1422191686706,579.7289591205771 1369.0711095843353,552.3644795602886 1440,525 L 1440,700 L 0,700 Z" 
            stroke="none" 
            strokeWidth="0" 
            fill="url(#gradient4)" 
            fillOpacity="1" 
            className="transition-all duration-300 ease-in-out delay-150 path-3"
          ></path>
        </svg>
      </WaveBackground>
      
      <Title>اختر فئة السؤال</Title>
      
      <CategoryGrid>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            onClick={() => handleSelectCategory(category)}
          >
            <span style={{ fontSize: '32px', marginBottom: '10px', display: 'block' }}>
              {category.icon || '📚'}
            </span>
            {category.name}
          </CategoryCard>
        ))}
      </CategoryGrid>
    </CategorySelectorContainer>
  );
};

export default CategorySelector; 