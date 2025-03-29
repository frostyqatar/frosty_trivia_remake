import Avatar from 'avataaars';

// Define our own AvatarProps interface based on the library's props
export interface AvatarProps {
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
  avatarStyle?: string;
  gender?: 'male' | 'female';
}

// Define gender-specific features
const maleSpecificFeatures = {
  // Facial hair is male-specific
  facialHair: ['BeardLight', 'BeardMajestic', 'BeardMedium', 'MoustacheFancy', 'MoustacheMagnum'],
  // Some tops/hairstyles are typically male
  top: ['NoHair', 'Eyepatch', 'Hat', 'ShortHairDreads01', 'ShortHairDreads02', 
        'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 
        'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 
        'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart']
};

const femaleSpecificFeatures = {
  // No facial hair for female avatars
  facialHair: ['Blank'],
  // Some tops/hairstyles are typically female
  top: ['LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 
        'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 
        'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 
        'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 
        'LongHairStraightStrand', 'Hijab', 'Turban']
};

// Define clothes that are gender-specific
const maleSpecificClothes = ['GraphicShirt', 'BlazerShirt', 'BlazerSweater'];
const femaleSpecificClothes = ['Hoodie', 'Overall', 'ShirtVNeck', 'ShirtScoopNeck'];

// Function to check if avatar options respect gender constraints
export const validateGenderFeatures = (
  avatarOptions: Partial<AvatarProps>, 
  gender: 'male' | 'female'
): Partial<AvatarProps> => {
  const validatedOptions = { ...avatarOptions };
  
  // Apply gender-specific constraints
  if (gender === 'male') {
    // Ensure no female-specific tops
    if (validatedOptions.topType && femaleSpecificFeatures.top.includes(validatedOptions.topType)) {
      // Replace with a random male top
      const maleTop = maleSpecificFeatures.top[Math.floor(Math.random() * maleSpecificFeatures.top.length)];
      validatedOptions.topType = maleTop;
    }
    
    // Ensure no female-specific clothes
    if (validatedOptions.clotheType && femaleSpecificClothes.includes(validatedOptions.clotheType)) {
      // Default to a neutral/male clothing option
      validatedOptions.clotheType = 'BlazerShirt';
    }
    
    // Males can have facial hair (no need to restrict)
  } else if (gender === 'female') {
    // Ensure no male-specific tops
    if (validatedOptions.topType && maleSpecificFeatures.top.includes(validatedOptions.topType)) {
      // Replace with a random female top
      const femaleTop = femaleSpecificFeatures.top[Math.floor(Math.random() * femaleSpecificFeatures.top.length)];
      validatedOptions.topType = femaleTop;
    }
    
    // Ensure no male-specific clothes
    if (validatedOptions.clotheType && maleSpecificClothes.includes(validatedOptions.clotheType)) {
      // Default to a neutral/female clothing option
      validatedOptions.clotheType = 'ShirtScoopNeck';
    }
    
    // Ensure no facial hair for females
    if (validatedOptions.facialHairType && validatedOptions.facialHairType !== 'Blank') {
      validatedOptions.facialHairType = 'Blank';
    }
  }
  
  return validatedOptions;
};

// Generate a random avatar with gender-specific features
export const generateRandomAvatar = (gender: 'male' | 'female'): Partial<AvatarProps> => {
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
  const randomOptions: Partial<AvatarProps> = {
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
    accessoriesType: 'Blank', // Default no accessories
  };
  
  // Validate and return gender-appropriate avatar
  return validateGenderFeatures(randomOptions, gender);
};

// Update an existing avatar to ensure gender compliance
export const updateAvatarWithGender = (
  existingOptions: Partial<AvatarProps>, 
  gender: 'male' | 'female'
): Partial<AvatarProps> => {
  return validateGenderFeatures(existingOptions, gender);
}; 