import React, { useState, useRef } from 'react';
import ReactCrop, { type Crop, type PixelCrop, type PercentCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ImageCropperProps {
  imageUrl: string;
  onCropComplete: (croppedImageUrl: string) => void;
  onCancel: () => void;
}

const CropperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  max-width: 100%;
  max-height: 500px;
  overflow: auto;
`;

const CropperControls = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled(motion.button)`
  background-color: #8c52ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
  }
`;

const ImageCropper: React.FC<ImageCropperProps> = ({ imageUrl, onCropComplete, onCancel }) => {
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 80,
    height: 80,
    x: 10,
    y: 10
  });
  
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Natural dimensions of the image
    const { width, height } = e.currentTarget;
    
    // Calculate initial crop to maintain aspect ratio but fit within view
    const initialCrop: Crop = {
      unit: '%',
      width: 80,
      height: 80,
      x: 10,
      y: 10
    };
    
    setCrop(initialCrop);
  };
  
  // Generate a cropped image from the selected area
  const generateCroppedImage = () => {
    if (!imageRef.current || !completedCrop) return;
    
    try {
      const canvas = document.createElement('canvas');
      const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
      const scaleY = imageRef.current.naturalHeight / imageRef.current.height;
      
      canvas.width = completedCrop.width;
      canvas.height = completedCrop.height;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.drawImage(
        imageRef.current,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        completedCrop.width,
        completedCrop.height
      );
      
      // Convert canvas to data URL
      const croppedImageUrl = canvas.toDataURL('image/jpeg');
      onCropComplete(croppedImageUrl);
    } catch (error) {
      console.error('Error generating cropped image:', error);
      alert('Unable to crop this image due to security restrictions. Try uploading a local file instead of using a URL.');
      onCancel();
    }
  };
  
  return (
    <CropperContainer>
      <ReactCrop
        crop={crop}
        onChange={(c: Crop) => setCrop(c)}
        onComplete={(c: PixelCrop) => setCompletedCrop(c)}
      >
        <img 
          ref={imageRef} 
          src={imageUrl} 
          alt="Crop me" 
          crossOrigin="anonymous"
          style={{ maxWidth: '100%', maxHeight: '400px' }}
          onLoad={onImageLoad}
          onError={(e) => {
            console.error("Could not load image with CORS enabled", e);
            onCancel();
            alert("This image cannot be cropped due to security restrictions. Try downloading it first and then uploading it locally.");
          }}
        />
      </ReactCrop>
      
      <CropperControls>
        <Button 
          onClick={onCancel}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cancel
        </Button>
        <Button 
          onClick={generateCroppedImage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!completedCrop}
        >
          Apply Crop
        </Button>
      </CropperControls>
    </CropperContainer>
  );
};

export default ImageCropper; 