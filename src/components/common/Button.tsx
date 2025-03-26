import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

const StyledButton = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  background: ${props => {
    switch (props.$variant) {
      case 'secondary':
        return 'linear-gradient(135deg, #6c757d 0%, #495057 100%)';
      case 'danger':
        return 'linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%)';
      default:
        return 'var(--primary-gradient, linear-gradient(135deg, #0099cc 0%, #66d4ff 100%))';
    }
  }};
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  ...props 
}) => {
  return (
    <StyledButton
      $variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
}; 