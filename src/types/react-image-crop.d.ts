declare module 'react-image-crop' {
  import React from 'react';
  
  export interface Crop {
    unit?: '%' | 'px';
    x: number;
    y: number;
    width: number;
    height: number;
    aspect?: number;
  }

  export interface PixelCrop extends Crop {
    unit: 'px';
  }
  
  export interface PercentCrop extends Crop {
    unit: '%';
  }

  export interface ReactCropProps {
    crop: Crop;
    onChange: (crop: Crop) => void;
    onComplete?: (crop: PixelCrop) => void;
    children: React.ReactNode;
    [key: string]: any;
  }

  const ReactCrop: React.FC<ReactCropProps>;
  
  export default ReactCrop;
} 