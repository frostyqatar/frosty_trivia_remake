import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Team, AbilityType } from '../../types/game.types';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import EmojiPickerElement from '../common/EmojiPickerElement';
import Avatar from 'avataaars';

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

interface TeamSetupProps {
  teamNumber: number;
  onChange: (team: Partial<Team>) => void;
  teamData: Partial<Team>;
}

// Define avatar config types
interface AvatarConfigs {
  topType: string[];
  accessoriesType: string[];
  hatColor: string[];
  hairColor: string[];
  facialHairType: string[];
  facialHairColor: string[];
  clotheType: string[];
  clotheColor: string[];
  graphicType: string[];
  eyeType: string[];
  eyebrowType: string[];
  mouthType: string[];
  skinColor: string[];
}

// Update AvatarOptions interface to include all possible properties
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
}

// Define avatar options with all possible configurations
const configs: AvatarConfigs = {
  topType: [
    'NoHair',
    'Eyepatch',
    'Hat',
    'Hijab',
    'Turban',
    'WinterHat1',
    'WinterHat2',
    'WinterHat3',
    'WinterHat4',
    'LongHairBigHair',
    'LongHairBob',
    'LongHairBun',
    'LongHairCurly',
    'LongHairCurvy',
    'LongHairDreads',
    'LongHairFrida',
    'LongHairFro',
    'LongHairFroBand',
    'LongHairNotTooLong',
    'LongHairShavedSides',
    'LongHairMiaWallace',
    'LongHairStraight',
    'LongHairStraight2',
    'LongHairStraightStrand',
    'ShortHairDreads01',
    'ShortHairDreads02'
  ],
  accessoriesType: [
    'Blank',
    'Kurt',
    'Prescription01',
    'Prescription02',
    'Round',
    'Sunglasses',
    'Wayfarers'
  ],
  hatColor: [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White'
  ],
  hairColor: [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'PastelPink',
    'Platinum',
    'Red',
    'SilverGray'
  ],
  facialHairType: [
    'Blank',
    'BeardMedium',
    'BeardLight',
    'BeardMajestic',
    'MoustacheFancy',
    'MoustacheMagnum'
  ],
  facialHairColor: [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'Platinum',
    'Red'
  ],
  clotheType: [
    'BlazerShirt',
    'BlazerSweater',
    'CollarSweater',
    'GraphicShirt',
    'Hoodie',
    'Overall',
    'ShirtCrewNeck',
    'ShirtScoopNeck',
    'ShirtVNeck'
  ],
  clotheColor: [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White'
  ],
  graphicType: [
    'Bat',
    'Cumbia',
    'Deer',
    'Diamond',
    'Hola',
    'Pizza',
    'Resist',
    'Selena',
    'Bear',
    'SkullOutline',
    'Skull'
  ],
  eyeType: [
    'Close',
    'Cry',
    'Default',
    'Dizzy',
    'EyeRoll',
    'Happy',
    'Hearts',
    'Side',
    'Squint',
    'Surprised',
    'Wink',
    'WinkWacky'
  ],
  eyebrowType: [
    'Angry',
    'AngryNatural',
    'Default',
    'DefaultNatural',
    'FlatNatural',
    'RaisedExcited',
    'RaisedExcitedNatural',
    'SadConcerned',
    'SadConcernedNatural',
    'UnibrowNatural',
    'UpDown',
    'UpDownNatural'
  ],
  mouthType: [
    'Concerned',
    'Default',
    'Disbelief',
    'Eating',
    'Grimace',
    'Sad',
    'ScreamOpen',
    'Serious',
    'Smile',
    'Tongue',
    'Twinkle',
    'Vomit'
  ],
  skinColor: [
    'Tanned',
    'Yellow',
    'Pale',
    'Light',
    'Brown',
    'DarkBrown',
    'Black'
  ]
};

const configsKeys = Object.keys(configs);

// Replace existing avatar arrays and randomization function
const getRandomAvatarOptions = (): AvatarOptions => {
  const options: AvatarOptions = {};
  const keys = [...configsKeys];
  keys.forEach(key => {
    const configArray = configs[key as keyof AvatarConfigs];
    options[key as keyof AvatarOptions] = configArray[Math.floor(Math.random() * configArray.length)];
  });

  return options;
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

export const TeamSetup: React.FC<TeamSetupProps> = ({ teamNumber, onChange, teamData }) => {
  const { playSound } = useSoundEffects();
  
  const [isCustomizingAvatar, setIsCustomizingAvatar] = useState(false);
  
  useEffect(() => {
    if (!teamData.name || !teamData.avatar) {
      const randomAvatarOptions = getRandomAvatarOptions();
      onChange({
        name: `Team ${teamNumber}`,
        avatar: JSON.stringify(randomAvatarOptions),
        abilities: generateDefaultAbilities(),
      });
    }
  }, [teamData, teamNumber, onChange]);
  
  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...teamData,
      name: e.target.value
    });
  };
  
  const handleRefreshAvatar = () => {
    playSound('button-click');
    const randomAvatarOptions = getRandomAvatarOptions();
    onChange({
      ...teamData,
      avatar: JSON.stringify(randomAvatarOptions)
    });
  };

  const getAvatarOptions = (): AvatarOptions => {
    try {
      if (teamData.avatar && teamData.avatar.startsWith('{')) {
        return JSON.parse(teamData.avatar);
      }
    } catch (e) {
      console.error('Error parsing avatar options:', e);
    }
    
    return {
      topType: 'ShortHairShortFlat',
      accessoriesType: 'Blank',
      hatColor: 'Black',
      hairColor: 'Brown',
      facialHairType: 'Blank',
      facialHairColor: 'Brown',
      clotheType: 'Hoodie',
      clotheColor: 'Blue03',
      graphicType: 'Diamond',
      eyeType: 'Default',
      eyebrowType: 'Default',
      mouthType: 'Smile',
      skinColor: 'Pale'
    };
  };
  
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
      </TeamHeader>
    </Container>
  );
};

export default TeamSetup; 