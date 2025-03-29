import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineUser, AiOutlineUsergroupAdd } from 'react-icons/ai';
import Avatar from 'avataaars';
import { RootState } from '../../store';
import { Team, AbilityType } from '../../types/game.types';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import EmojiPickerElement from '../common/EmojiPickerElement';

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 6px 20px rgba(0, 153, 204, 0.15);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(102, 212, 255, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 153, 204, 0.25);
    border-color: rgba(102, 212, 255, 0.5);
  }
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  z-index: 5;
`;

const AvatarContainer = styled.div`
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const TeamNameInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 2px solid rgba(102, 212, 255, 0.3);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.8);
  color: #0f5e87;
  transition: all 0.2s ease;
  max-width: 200px;
  height: 36px;
  text-align: center;
  direction: rtl; /* For proper Arabic text display */
  
  &:focus {
    border-color: #0099cc;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 153, 204, 0.2);
  }
`;

const RefreshButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 8px;
  color: #0099cc;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  
  &:hover {
    color: #66d4ff;
  }
`;

// After the existing AvatarOptions interface, add gender-specific constraints
const maleSpecificFeatures = {
  facialHair: ['BeardLight', 'BeardMajestic', 'BeardMedium', 'MoustacheFancy', 'MoustacheMagnum'],
  top: ['NoHair', 'Eyepatch', 'Hat', 'ShortHairDreads01', 'ShortHairDreads02', 
        'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 
        'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 
        'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart']
};

const femaleSpecificFeatures = {
  facialHair: ['Blank'],
  top: ['LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 
        'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 
        'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 
        'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 
        'LongHairStraightStrand', 'Hijab', 'Turban']
};

// Add gender property to the existing AvatarOptions interface
export interface AvatarOptions {
  topType?: string;
  accessoriesType?: string;
  hatColor?: string;
  hairColor?: string;
  facialHairType?: string;
  facialHairColor?: string;
  clotheType?: string;
  clotheColor?: string;
  graphicType?: string;
  eyeType?: string;
  eyebrowType?: string;
  mouthType?: string;
  skinColor?: string;
  gender?: 'male' | 'female'; // Add gender property
}

const defaultMaleOptions: AvatarOptions = {
  topType: 'ShortHairShortRound',
  accessoriesType: 'Blank',
  hairColor: 'BrownDark',
  facialHairType: 'Blank',
  facialHairColor: 'BrownDark',
  clotheType: 'BlazerShirt',
  clotheColor: 'Blue03',
  eyeType: 'Default',
  eyebrowType: 'Default',
  mouthType: 'Default',
  skinColor: 'Light',
  gender: 'male'
};

const defaultFemaleOptions: AvatarOptions = {
  topType: 'LongHairBob',
  accessoriesType: 'Blank',
  hairColor: 'BrownDark',
  facialHairType: 'Blank',
  facialHairColor: 'BrownDark',
  clotheType: 'ShirtScoopNeck',
  clotheColor: 'Pink',
  eyeType: 'Default',
  eyebrowType: 'Default',
  mouthType: 'Default',
  skinColor: 'Light',
  gender: 'female'
};

// Define the original getRandomAvatarOptions function first
// Fix the sequence to avoid using before declaration
export const getRandomAvatarOptions = (): AvatarOptions => {
  // Define all possible avatar options
  const allTopTypes = [
    ...maleSpecificFeatures.top,
    ...femaleSpecificFeatures.top
  ];
  
  const allClothesTypes = [
    'BlazerShirt', 'BlazerSweater', 'CollarSweater', 
    'GraphicShirt', 'Hoodie', 'Overall', 
    'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'
  ];
  
  const allFacialHairTypes = [
    'Blank', 'BeardMedium', 'BeardLight', 
    'BeardMajestic', 'MoustacheFancy', 'MoustacheMagnum'
  ];
  
  const allSkinColors = [
    'Light', 'Pale', 'Brown', 'DarkBrown', 'Black', 'Yellow', 'Red', 'Tanned'
  ];
  
  const allHairColors = [
    'Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 
    'BrownDark', 'PastelPink', 'Platinum', 'Red', 'SilverGray'
  ];
  
  const allEyeTypes = [
    'Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 
    'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 
    'Wink', 'WinkWacky'
  ];
  
  const allEyebrowTypes = [
    'Angry', 'AngryNatural', 'Default', 'DefaultNatural', 
    'FlatNatural', 'RaisedExcited', 'RaisedExcitedNatural', 
    'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 
    'UpDown', 'UpDownNatural'
  ];
  
  const allMouthTypes = [
    'Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 
    'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 
    'Twinkle', 'Vomit'
  ];
  
  // Generate random avatar options
  return {
    topType: allTopTypes[Math.floor(Math.random() * allTopTypes.length)],
    clotheType: allClothesTypes[Math.floor(Math.random() * allClothesTypes.length)],
    facialHairType: allFacialHairTypes[Math.floor(Math.random() * allFacialHairTypes.length)],
    skinColor: allSkinColors[Math.floor(Math.random() * allSkinColors.length)],
    hairColor: allHairColors[Math.floor(Math.random() * allHairColors.length)],
    facialHairColor: allHairColors[Math.floor(Math.random() * allHairColors.length)],
    eyeType: allEyeTypes[Math.floor(Math.random() * allEyeTypes.length)],
    eyebrowType: allEyebrowTypes[Math.floor(Math.random() * allEyebrowTypes.length)],
    mouthType: allMouthTypes[Math.floor(Math.random() * allMouthTypes.length)],
    clotheColor: 'Blue03',
    accessoriesType: 'Blank' // Default no accessories
  };
};

// Implement our validation function here (since the import is having issues)
const validateGenderFeatures = (
  avatarOptions: AvatarOptions, 
  gender: 'male' | 'female'
): AvatarOptions => {
  const validatedOptions = { ...avatarOptions };
  
  // Apply gender-specific constraints
  if (gender === 'male') {
    // Ensure no female-specific tops
    if (validatedOptions.topType && femaleSpecificFeatures.top.includes(validatedOptions.topType)) {
      // Replace with a random male top
      const maleTop = maleSpecificFeatures.top[Math.floor(Math.random() * maleSpecificFeatures.top.length)];
      validatedOptions.topType = maleTop;
    }
    
    // Males can have facial hair (no need to restrict)
  } else if (gender === 'female') {
    // Ensure no male-specific tops
    if (validatedOptions.topType && maleSpecificFeatures.top.includes(validatedOptions.topType)) {
      // Replace with a random female top
      const femaleTop = femaleSpecificFeatures.top[Math.floor(Math.random() * femaleSpecificFeatures.top.length)];
      validatedOptions.topType = femaleTop;
    }
    
    // Ensure no facial hair for females
    if (validatedOptions.facialHairType && validatedOptions.facialHairType !== 'Blank') {
      validatedOptions.facialHairType = 'Blank';
    }
  }
  
  return validatedOptions;
};

// Gender-aware avatar generator
export const getGenderedRandomAvatarOptions = (gender: 'male' | 'female'): AvatarOptions => {
  // Get random avatar
  const randomOptions = getRandomAvatarOptions();
  // Apply gender validation
  const validatedOptions = validateGenderFeatures(randomOptions, gender);
  return {
    ...validatedOptions,
    gender
  };
};

const generateDefaultAbilities = (): Record<AbilityType, { type: AbilityType; used: boolean }> => {
  return {
    chatgpt: { type: 'chatgpt', used: false },
    double: { type: 'double', used: false },
    google: { type: 'google', used: false },
    dismiss: { type: 'dismiss', used: false },
    electric: { type: 'electric', used: false }
  };
};

// Extend Team type to support avatar options
interface ExtendedTeam extends Team {
  avatarOptions?: AvatarOptions;
}

interface TeamSetupProps {
  teamNumber: number;
  onChange: (team: Partial<ExtendedTeam>) => void;
  teamData: Partial<ExtendedTeam>;
}

export const TeamSetup: React.FC<TeamSetupProps> = ({ teamNumber, onChange, teamData }) => {
  const { playSound } = useSoundEffects();
  const dispatch = useDispatch();
  
  const [isCustomizingAvatar, setIsCustomizingAvatar] = useState(false);
  
  // Get initial gender from avatar options or default to male
  const initialGender = teamData.avatarOptions?.gender || 'male';
  const [gender, setGender] = useState<'male' | 'female'>(initialGender);
  
  useEffect(() => {
    if (!teamData.name || !teamData.avatar) {
      const randomAvatarOptions = getGenderedRandomAvatarOptions(gender);
      onChange({
        name: `Team ${teamNumber}`,
        avatar: JSON.stringify(randomAvatarOptions),
        abilities: generateDefaultAbilities(),
        avatarOptions: randomAvatarOptions // Add avatar options
      });
    }
  }, [teamData, teamNumber, onChange, gender]);
  
  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...teamData,
      name: e.target.value
    });
  };
  
  // Add this to handle gender toggle
  const handleGenderToggle = () => {
    const newGender = gender === 'male' ? 'female' : 'male';
    setGender(newGender);
    
    // Update avatar options when gender changes
    if (teamData.avatarOptions) {
      const validatedOptions = validateGenderFeatures(teamData.avatarOptions, newGender);
      onChange({
        ...teamData,
        avatarOptions: {
          ...validatedOptions,
          gender: newGender
        }
      });
    }
    
    playSound('button-click');
  };
  
  // Modify handleRefreshAvatar to respect gender
  const handleRefreshAvatar = () => {
    playSound('button-click');
    // Use the gender-aware randomization
    const newOptions = getGenderedRandomAvatarOptions(gender);
    
    onChange({
      ...teamData,
      avatar: JSON.stringify(newOptions),
      avatarOptions: newOptions
    });
  };
  
  const getAvatarOptions = (): AvatarOptions => {
    // Check if we already have avatar options stored
    if (teamData.avatarOptions) {
      return teamData.avatarOptions;
    }
    
    // Otherwise try to parse from avatar string
    try {
      if (teamData.avatar && teamData.avatar.startsWith('{')) {
        return JSON.parse(teamData.avatar);
      }
    } catch (e) {
      console.error('Error parsing avatar options:', e);
    }
    
    // Default fallback
    return gender === 'male' ? defaultMaleOptions : defaultFemaleOptions;
  };
  
  // Add gender button component
  const GenderToggleButton = styled(motion.button)`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0;
  `;
  
  return (
    <Container>
      <TeamHeader>
        <AvatarContainer onClick={() => setIsCustomizingAvatar(!isCustomizingAvatar)}>
          <Avatar
            style={{ width: '80px', height: '80px' }}
            avatarStyle='Circle'
            {...getAvatarOptions()}
          />
        </AvatarContainer>
        
        <TeamNameInput
          value={teamData.name || ''}
          onChange={handleTeamNameChange}
          placeholder={`Team ${teamNumber} Name`}
        />
        <RefreshButton
          onClick={handleRefreshAvatar}
          whileHover={{ rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          🔄
        </RefreshButton>
        
        {/* Add gender toggle button */}
        <GenderToggleButton
          onClick={handleGenderToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {gender === 'male' ? '👨' : '👩'}
        </GenderToggleButton>
      </TeamHeader>
    </Container>
  );
};

export default TeamSetup; 