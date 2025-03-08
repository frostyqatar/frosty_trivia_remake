import React from 'react';

// Check if a string contains RTL characters
export const isRTL = (text: string): boolean => {
  const rtlChars = /[\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;
  return rtlChars.test(text);
};

// Split text into RTL and LTR segments
export const getBiDiSegments = (text: string): string[] => {
  const segments: string[] = [];
  let currentSegment = '';
  let currentDir = isRTL(text[0] || '');
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const charDir = isRTL(char);
    
    if (charDir !== currentDir) {
      segments.push(currentSegment);
      currentSegment = char;
      currentDir = charDir;
    } else {
      currentSegment += char;
    }
  }
  
  if (currentSegment) {
    segments.push(currentSegment);
  }
  
  return segments;
};

// Render text with proper RTL/LTR direction
export const renderBiDiText = (text: string): JSX.Element[] => {
  const segments = getBiDiSegments(text);
  
  return segments.map((segment, index) => {
    const dir = isRTL(segment) ? 'rtl' : 'ltr';
    return (
      <span key={index} dir={dir} style={{ unicodeBidi: 'embed' }}>
        {segment}
      </span>
    );
  });
};

// Add the missing BidirectionalText component
interface BidirectionalTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const BidirectionalText: React.FC<BidirectionalTextProps> = ({ 
  text, 
  className = '', 
  style = {} 
}) => {
  // Simple implementation that just renders the text
  // This handles both LTR and RTL text automatically in browsers
  return (
    <span className={className} style={style}>
      {text}
    </span>
  );
}; 