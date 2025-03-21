import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Snowfall from 'react-snowfall';
import { RootState } from '../store';
import { startGame, setGamePhase } from '../store/gameSlice';
import { Team } from '../types/game.types';
import CategorySelector from './setup/CategorySelector';
import TeamSetup from './setup/TeamSetup';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { categories } from '../data/questions';
import { trackGameEvent } from '../services/analytics';
import FeedbackModal from './FeedbackModal';
import SoundControls from './common/SoundControls';
import CursorStars from './effects/CursorStars';

// Enhanced color palette
const colors = {
  primary: '#0099cc',
  primaryLight: '#66d4ff',
  primaryDark: '#0077a2',
  accent: '#FF7E5F', // Vibrant orange for highlights
  accentHover: '#FF6347',
  background: '#e8f4ff', // Light blue background
  backgroundDark: '#d1e8f8',
  text: '#00354d', // Dark blue text
  textLight: '#3a7ca5',
  white: '#ffffff',
  lightGray: '#f0f8ff',
  mediumGray: '#cce4ff',
  darkGray: '#9ab9d1',
  snow: '#ffffff'
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  overflow: hidden;
  background-color: transparent;
  font-family: 'Poppins', 'Noto Sans Arabic', 'Roboto', sans-serif;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
`;

const Logo = styled.h1`
  font-size: 52px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
  color: ${colors.text};
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5),
               0 0 15px rgba(102, 212, 255, 0.4);
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  
  &::before {
    content: '❄️';
    margin-right: 15px;
    font-size: 42px;
  }
  
  &::after {
    content: '❄️';
    margin-left: 15px;
    font-size: 42px;
  }
`;

const CreatorInfo = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${colors.text};
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  margin-top: 10px;
  position: relative;
  padding-bottom: 5px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${colors.accent}, transparent);
    border-radius: 3px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: ${colors.textLight};
  margin-top: 15px;
  text-align: center;
  max-width: 700px;
  line-height: 1.6;
  font-weight: 300;
`;

const SnowToggleButton = styled(motion.button)`
  position: absolute;
  right: 20px;
  top: 20px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: rotate(15deg);
  }
`;

const TeamsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  z-index: 1;
  position: relative;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StartButton = styled(motion.button)`
  padding: 15px 40px;
  font-size: 22px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(255, 126, 95, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: all 0.5s ease;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${colors.accent}88 0%, ${colors.accentHover}88 100%);
    opacity: 0;
    border-radius: 50px;
    transition: opacity 0.3s ease;
    z-index: -2;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 15px 30px rgba(255, 126, 95, 0.5), 0 0 15px rgba(255, 126, 95, 0.3);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 5px 15px rgba(255, 126, 95, 0.4);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #cccccc 0%, #dddddd 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
    &::before {
      display: none;
    }
  }
`;

const Button = styled(motion.button)`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 15px rgba(0, 153, 204, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: all 0.5s ease;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${colors.primary}88 0%, ${colors.primaryLight}88 100%);
    opacity: 0;
    border-radius: 12px;
    transition: opacity 0.3s ease;
    z-index: -2;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 153, 204, 0.3), 0 0 15px rgba(0, 153, 204, 0.2);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 3px 10px rgba(0, 153, 204, 0.2);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #cccccc 0%, #dddddd 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FeedbackButton = styled(Button)`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%);
  position: relative;
  
  &::before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  z-index: 2;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
`;

const StartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 40px;
  z-index: 2;
  position: relative;
`;

const WaveBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

// New component for snowflake decorations
interface SnowflakeDecorationProps {
  size?: string;
  top?: string;
  left?: string;
  duration?: string;
  children: React.ReactNode;
}

const SnowflakeDecoration = styled.div<SnowflakeDecorationProps>`
  position: absolute;
  font-size: ${props => props.size || '32px'};
  color: rgba(255, 255, 255, 0.8);
  animation: float ${props => props.duration || '8s'} ease-in-out infinite;
  z-index: 1;
  top: ${props => props.top || '10%'};
  left: ${props => props.left || '10%'};
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  opacity: 0.8;
  
  @keyframes float {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(20px) rotate(10deg);
    }
    100% {
      transform: translateY(0) rotate(0deg);
    }
  }
`;

// Footer component
const Footer = styled.footer`
  margin-top: auto;
  text-align: center;
  padding: 20px;
  color: ${colors.textLight};
  font-size: 14px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  margin: 20px 0;
  z-index: 2;
`;

const SectionWrapper = styled(motion.div)`
  margin: 20px 0;
  padding: 25px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  z-index: 2;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
    z-index: -1;
    backdrop-filter: blur(5px);
    border-radius: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: ${colors.text};
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
  position: relative;
  padding-bottom: 10px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${colors.accent};
    border-radius: 3px;
  }
`;

// Add a styled component for the sound controls wrapper
const SoundControlsWrapper = styled.div`
  position: relative;
  z-index: 9999; /* Ensure sound controls are always on top */
  margin: 10px 0;
`;

const SetupScreen: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state: RootState) => state.selectedCategories);
  const { playSound } = useSoundEffects();
  
  const [teams, setTeams] = useState<[Partial<Team>, Partial<Team>]>([{}, {}]);
  const [isReady, setIsReady] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [showSnow, setShowSnow] = useState(true);
  const snowfallRef = useRef<HTMLCanvasElement>(null);
  
  // Add a useEffect to make sure snowfall is visible when component mounts and remove any stored settings
  useEffect(() => {
    // Always set snow to visible on mount
    setShowSnow(true);
    
    // Remove any stored snow visibility preferences from localStorage if they exist
    try {
      if (localStorage.getItem('showSnow') !== null) {
        localStorage.removeItem('showSnow');
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);
  
  // Check if setup is complete and game can start
  useEffect(() => {
    const [team1, team2] = teams;
    
    const teamsReady = 
      team1.name && team1.name.trim() !== '' &&
      team2.name && team2.name.trim() !== '';
    
    const categoriesReady = selectedCategories.length >= 3;
    
    setIsReady(Boolean(teamsReady && categoriesReady));
  }, [teams, selectedCategories]);
  
  const handleTeamChange = (index: 0 | 1, teamData: Partial<Team>) => {
    const newTeams = [...teams] as [Partial<Team>, Partial<Team>];
    newTeams[index] = teamData;
    setTeams(newTeams);
  };
  
  const handleStartGame = () => {
    if (!isReady) return;
    
    playSound('button-click');
    
    // Create full team objects with initial state
    const fullTeams = teams.map((team, index) => ({
      id: `team-${index + 1}`,
      name: team.name || `Team ${index + 1}`,
      avatar: team.avatar || '😎',
      score: 0,
      abilities: {
        chatgpt: { type: 'chatgpt', used: false },
        double: { type: 'double', used: false, active: false },
        google: { type: 'google', used: false },
        dismiss: { type: 'dismiss', used: false },
        electric: { type: 'electric', used: false, cooldown: 0, cooldownStart: 0 }
      },
      pointsMultiplier: 1,
    })) as Team[];
    
    // Make sure we're going to the playing phase
    console.log("Starting game with teams:", fullTeams);
    
    // Track the game start in analytics
    trackGameEvent.startGame();
    
    // Dispatch with the teams
    dispatch(startGame(fullTeams));
  };
  
  const handleToggleSnow = () => {
    // Simply toggle the visibility state without storing it
    setShowSnow(!showSnow);
    playSound('button-click');
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <Container as={motion.div} initial="hidden" animate="visible" variants={containerVariants}>
      {/* Snowfall effect */}
      <Snowfall 
        snowflakeCount={200}
        speed={[0.5, 1.5]} 
        wind={[-0.5, 0.5]} 
        radius={[0.5, 1.5]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: showSnow ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      />
      
      {/* Cursor stars effect */}
      <CursorStars active={true} hideDefaultCursor={false} />

      {/* Decorative snowflakes */}
      <SnowflakeDecoration size="42px" top="15%" left="5%" duration="10s">❄️</SnowflakeDecoration>
      <SnowflakeDecoration size="36px" top="25%" left="85%" duration="12s">❄️</SnowflakeDecoration>
      <SnowflakeDecoration size="28px" top="65%" left="8%" duration="15s">❄️</SnowflakeDecoration>
      <SnowflakeDecoration size="32px" top="70%" left="90%" duration="9s">❄️</SnowflakeDecoration>
      <SnowflakeDecoration size="24px" top="40%" left="92%" duration="11s">❄️</SnowflakeDecoration>

      {/* Wave background */}
      <WaveBackground
        animate={{ 
          y: [0, 10, 0],
          transition: { 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }
        }}
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 690" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#66d4ff" stopOpacity="0.15"></stop>
              <stop offset="95%" stopColor="#0099cc" stopOpacity="0.15"></stop>
            </linearGradient>
          </defs>
          <path 
            d="M 0,700 L 0,105 C 57.931295087598755,126.16935760906905 115.86259017519751,147.3387152181381 195,141 C 274.1374098248025,134.6612847818619 374.4809343868087,100.81449673651665 446,102 C 517.5190656131913,103.18550326348335 560.2136722775678,139.40329783579529 625,130 C 689.7863277224322,120.59670216420473 776.6643765029202,65.5723119203023 852,62 C 927.3356234970798,58.42768807969771 991.1288217107522,106.30745448299555 1047,128 C 1102.8711782892478,149.69254551700445 1150.8203366540708,145.19787014771558 1215,137 C 1279.1796633459292,128.80212985228442 1359.5898316729645,116.90106492614221 1440,105 L 1440,700 L 0,700 Z" 
            fill="url(#waveGradient)"
          ></path>
          <path 
            d="M 0,700 L 0,245 C 51.778770182068016,233.00824458948816 103.55754036413603,221.01648917897631 172,216 C 240.44245963586397,210.98351082102369 325.5486087255239,212.94228787358296 393,208 C 460.4513912744761,203.05771212641704 510.2480247337686,191.21435932669186 586,194 C 661.7519752662314,196.78564067330814 763.4592923394022,214.20027481964962 844,237 C 924.5407076605978,259.7997251803504 983.9148059086224,287.9845413947097 1043,280 C 1102.0851940913776,272.0154586052903 1160.881484026108,227.86155960151152 1227,216 C 1293.118515973892,204.13844039848848 1366.559257986946,224.56922019924423 1440,245 L 1440,700 L 0,700 Z" 
            fill="url(#waveGradient)"
            fillOpacity="0.3"
          ></path>
          <path 
            d="M 0,700 L 0,385 C 72.97148746135349,385.92133287530055 145.94297492270698,386.84266575060116 208,397 C 270.057025077293,407.15733424939884 321.1995877705256,426.55066987289587 382,417 C 442.8004122294744,407.44933012710413 513.2586739951905,368.95465475781515 592,354 C 670.7413260048095,339.04534524218485 757.7657162487119,347.63071109584337 830,348 C 902.2342837512881,348.36928890415663 959.6784610099623,340.5225008588114 1031,337 C 1102.3215389900377,333.4774991411886 1187.5204397114394,334.27928546891104 1258,343 C 1328.4795602885606,351.72071453108896 1384.2397801442803,368.3603572655445 1440,385 L 1440,700 L 0,700 Z" 
            fill="url(#waveGradient)"
            fillOpacity="0.4"
          ></path>
          <path 
            d="M 0,700 L 0,525 C 56.53452421848161,538.7059429749227 113.06904843696321,552.4118859498454 181,548 C 248.93095156303679,543.5881140501546 328.2583304706287,521.0583991755411 403,505 C 477.7416695293713,488.94160082445893 547.8976296805223,479.35451734799045 616,492 C 684.1023703194777,504.64548265200955 750.1511508072829,539.5235314324974 825,543 C 899.8488491927171,546.4764685675026 983.4977670903468,518.55135692202 1052,524 C 1120.5022329096532,529.44864307798 1173.8577808313294,568.2710408794229 1236,574 C 1298.1422191686706,579.7289591205771 1369.0711095843353,552.3644795602886 1440,525 L 1440,700 L 0,700 Z" 
            fill="url(#waveGradient)"
            fillOpacity="0.5"
          ></path>
        </svg>
      </WaveBackground>
      
      {/* Header section */}
      <Header as={motion.header} variants={itemVariants}>
        <Logo>Frosty Trivia ☃️</Logo>
        <CreatorInfo>برمجة:  - </CreatorInfo>
        <Subtitle>استعد لتجربة لعبة سؤال وجواب رائعة ومسلية! اختبر معلوماتك وتنافس في هذه اللعبة الجماعية </Subtitle>
        
        <SoundControlsWrapper>
          <SoundControls />
        </SoundControlsWrapper>
        
        <SnowToggleButton 
          onClick={handleToggleSnow}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          {showSnow ? '❄️' : '☀️'}
        </SnowToggleButton>
      </Header>
      
      {/* Action buttons */}
      <ButtonContainer as={motion.div} variants={itemVariants}>
        <FeedbackButton
          onClick={() => setIsFeedbackModalOpen(true)}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95, y: 2 }}
          initial={{ boxShadow: "0 8px 15px rgba(0, 153, 204, 0.2)" }}
          animate={{ 
            boxShadow: ["0 8px 15px rgba(0, 153, 204, 0.2)", "0 12px 20px rgba(0, 153, 204, 0.3)", "0 8px 15px rgba(0, 153, 204, 0.2)"],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          عطنا رايك 📝
        </FeedbackButton>
        
        <Button
          onClick={() => dispatch(setGamePhase('questionManagement'))}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95, y: 2 }}
          initial={{ boxShadow: "0 8px 15px rgba(0, 153, 204, 0.2)" }}
          animate={{ 
            boxShadow: ["0 8px 15px rgba(0, 153, 204, 0.2)", "0 12px 20px rgba(0, 153, 204, 0.3)", "0 8px 15px rgba(0, 153, 204, 0.2)"],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
        >
          📝 إدارة الأسئلة
        </Button>
      </ButtonContainer>
      
      <FeedbackModal 
        isOpen={isFeedbackModalOpen} 
        onClose={() => setIsFeedbackModalOpen(false)} 
      />
      
      {/* Category selector */}
      <SectionWrapper as={motion.div} variants={itemVariants}>
        <SectionTitle>اختر الفئات</SectionTitle>
        <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
          <CategorySelector />
        </div>
      </SectionWrapper>
      
      {/* Team setup */}
      <SectionWrapper as={motion.div} variants={itemVariants}>
        <SectionTitle>إعداد الفرق</SectionTitle>
        <TeamsContainer>
          <TeamSetup 
            teamNumber={1} 
            onChange={(data) => handleTeamChange(0, data)} 
            teamData={teams[0]} 
          />
          <TeamSetup 
            teamNumber={2} 
            onChange={(data) => handleTeamChange(1, data)} 
            teamData={teams[1]} 
          />
        </TeamsContainer>
      </SectionWrapper>
      
      {/* Start button */}
      <StartButtonContainer as={motion.div} variants={itemVariants}>
        <StartButton
          disabled={!isReady}
          onClick={handleStartGame}
          whileHover={{ scale: 1.08, y: -5 }}
          whileTap={{ scale: 0.95, y: 2 }}
          animate={isReady ? {
            boxShadow: ["0 10px 25px rgba(255, 126, 95, 0.4)", "0 15px 35px rgba(255, 126, 95, 0.7)", "0 10px 25px rgba(255, 126, 95, 0.4)"],
            y: [0, -5, 0],
            scale: [1, 1.05, 1],
            transition: {
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              },
              scale: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }
            }
          } : {}}
        >
          {isReady && <span style={{ position: 'absolute', top: '-15px', left: '-15px', fontSize: '28px', animation: 'spin 4s linear infinite' }}>✨</span>}
          ابدأ اللعبة
          {isReady && <span style={{ position: 'absolute', bottom: '-15px', right: '-15px', fontSize: '28px', animation: 'spin 4s linear infinite' }}>✨</span>}
        </StartButton>
      </StartButtonContainer>
      
      {/* Footer */}
      <Footer as={motion.footer} variants={itemVariants}>
        Frosty Trivia - صنع في قطر - إصدار 1.0 
      </Footer>
    </Container>
  );
};

// Add this at the end of the file, before the export statement
const keyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

// Add the keyframes to the document
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(keyframes));
document.head.appendChild(style);

export default SetupScreen; 