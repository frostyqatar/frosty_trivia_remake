import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RootState } from '../store';
import { startGame, setGamePhase } from '../store/gameSlice';
import { Team } from '../types/game.types';
import CategorySelector from './setup/CategorySelector';
import TeamSetup from './setup/TeamSetup';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { categories } from '../data/questions';
import { trackGameEvent } from '../services/analytics';
import FeedbackModal from './FeedbackModal';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  overflow: hidden;
  background-color: transparent; /* Make sure container is transparent to see waves */
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
`;

const Logo = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
  color: #0f5e87;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
`;

const CreatorInfo = styled.div`
  font-size: 16px;
  color: #7f8c8d;
`;

const TeamsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  z-index: 1;
  position: relative;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const StartButton = styled(motion.button)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #0099cc 0%, #66d4ff 100%);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 153, 204, 0.3);
  transition: all 0.2s ease;
  width: 150px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 153, 204, 0.4);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Button = styled(motion.button)`
  background: linear-gradient(135deg, #0099cc 0%, #66d4ff 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 153, 204, 0.2);
  transition: all 0.2s ease;
  width: auto;
  align-self: flex-start;
  margin-bottom: 15px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 153, 204, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #cccccc 0%, #dddddd 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FeedbackButton = styled(motion.button)`
  background: linear-gradient(135deg, #0099cc 0%, #66d4ff 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  box-shadow: 0 4px 15px rgba(0, 153, 204, 0.2);
  transition: all 0.2s ease;
  width: auto;
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 153, 204, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #cccccc 0%, #dddddd 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// Add a ButtonContainer styled component to organize the buttons
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  z-index: 1;
  position: relative;
`;

// Adjust the StartButtonContainer
const StartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  z-index: 1;
  position: relative;
`;

// Update the WaveBackground styled component to work inside Container
const WaveBackground = styled.div`
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

const SetupScreen: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state: RootState) => state.selectedCategories);
  const { playSound } = useSoundEffects();
  
  const [teams, setTeams] = useState<[Partial<Team>, Partial<Team>]>([{}, {}]);
  const [isReady, setIsReady] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  
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
  
  return (
    <Container>
      <WaveBackground>
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 690" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#66d4ff" stopOpacity="0.2"></stop>
              <stop offset="95%" stopColor="#0099cc" stopOpacity="0.2"></stop>
            </linearGradient>
          </defs>
          <path 
            d="M 0,700 L 0,105 C 57.931295087598755,126.16935760906905 115.86259017519751,147.3387152181381 195,141 C 274.1374098248025,134.6612847818619 374.4809343868087,100.81449673651665 446,102 C 517.5190656131913,103.18550326348335 560.2136722775678,139.40329783579529 625,130 C 689.7863277224322,120.59670216420473 776.6643765029202,65.5723119203023 852,62 C 927.3356234970798,58.42768807969771 991.1288217107522,106.30745448299555 1047,128 C 1102.8711782892478,149.69254551700445 1150.8203366540708,145.19787014771558 1215,137 C 1279.1796633459292,128.80212985228442 1359.5898316729645,116.90106492614221 1440,105 L 1440,700 L 0,700 Z" 
            fill="url(#waveGradient)"
          ></path>
          <path 
            d="M 0,700 L 0,245 C 51.778770182068016,233.00824458948816 103.55754036413603,221.01648917897631 172,216 C 240.44245963586397,210.98351082102369 325.5486087255239,212.94228787358296 393,208 C 460.4513912744761,203.05771212641704 510.2480247337686,191.21435932669186 586,194 C 661.7519752662314,196.78564067330814 763.4592923394022,214.20027481964962 844,237 C 924.5407076605978,259.7997251803504 983.9148059086224,287.9845413947097 1043,280 C 1102.0851940913776,272.0154586052903 1160.881484026108,227.86155960151152 1227,216 C 1293.118515973892,204.13844039848848 1366.559257986946,224.56922019924423 1440,245 L 1440,700 L 0,700 Z" 
            fill="url(#waveGradient)"
            fillOpacity="0.4"
          ></path>
          <path 
            d="M 0,700 L 0,385 C 72.97148746135349,385.92133287530055 145.94297492270698,386.84266575060116 208,397 C 270.057025077293,407.15733424939884 321.1995877705256,426.55066987289587 382,417 C 442.8004122294744,407.44933012710413 513.2586739951905,368.95465475781515 592,354 C 670.7413260048095,339.04534524218485 757.7657162487119,347.63071109584337 830,348 C 902.2342837512881,348.36928890415663 959.6784610099623,340.5225008588114 1031,337 C 1102.3215389900377,333.4774991411886 1187.5204397114394,334.27928546891104 1258,343 C 1328.4795602885606,351.72071453108896 1384.2397801442803,368.3603572655445 1440,385 L 1440,700 L 0,700 Z" 
            fill="url(#waveGradient)"
            fillOpacity="0.5"
          ></path>
          <path 
            d="M 0,700 L 0,525 C 56.53452421848161,538.7059429749227 113.06904843696321,552.4118859498454 181,548 C 248.93095156303679,543.5881140501546 328.2583304706287,521.0583991755411 403,505 C 477.7416695293713,488.94160082445893 547.8976296805223,479.35451734799045 616,492 C 684.1023703194777,504.64548265200955 750.1511508072829,539.5235314324974 825,543 C 899.8488491927171,546.4764685675026 983.4977670903468,518.55135692202 1052,524 C 1120.5022329096532,529.44864307798 1173.8577808313294,568.2710408794229 1236,574 C 1298.1422191686706,579.7289591205771 1369.0711095843353,552.3644795602886 1440,525 L 1440,700 L 0,700 Z" 
            fill="url(#waveGradient)"
            fillOpacity="0.6"
          ></path>
        </svg>
      </WaveBackground>
      <Header>
        <Logo>Frosty Trivia ❄️</Logo>
        <CreatorInfo>برمجة: عبدالله الشاعر - QATAR</CreatorInfo>
      </Header>
      
      <ButtonContainer>
        <FeedbackButton
          onClick={() => setIsFeedbackModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          عطنا رايك 📝
        </FeedbackButton>
        
        <Button
          onClick={() => dispatch(setGamePhase('questionManagement'))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📝 إدارة الأسئلة
        </Button>
      </ButtonContainer>
      
      <FeedbackModal 
        isOpen={isFeedbackModalOpen} 
        onClose={() => setIsFeedbackModalOpen(false)} 
      />
      
      <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <CategorySelector />
      </div>
      
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
      
      <StartButtonContainer>
        <StartButton
          disabled={!isReady}
          onClick={handleStartGame}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ابدأ اللعبة
        </StartButton>
      </StartButtonContainer>
    </Container>
  );
};

export default SetupScreen; 