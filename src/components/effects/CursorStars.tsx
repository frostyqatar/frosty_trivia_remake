import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
  background: transparent;
`;

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: transparent;
`;

const CustomCursor = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 5px rgba(100, 200, 255, 0.9);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  transition: width 0.1s, height 0.1s, box-shadow 0.1s;
  opacity: 0.9;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,240,255,1) 100%);
`;

const CursorTrail = styled.div`
  position: fixed;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  opacity: 0.5;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9998;
`;

// A simplified Particle class
class Particle {
  x: number = 0;
  y: number = 0;
  size: number = 3;
  speedX: number = 0;
  speedY: number = 0;
  life: number = 1;
  color: string = 'rgba(255, 255, 255, 0.8)';
  
  constructor() {}
  
  init(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4 + 1;
    this.speedX = Math.cos(angle) * speed;
    this.speedY = Math.sin(angle) * speed;
    this.life = 1;
    return this;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 0.02;
    return this.life > 0;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.life})`;
    ctx.fill();
  }
}

function createFrames(numFrames: number, width: number, height: number) {
  const frames = [];
  for (let i = 0; i < numFrames; i++) {
    frames.push({
      x: width * i,
      y: 0,
      width: width,
      height: height
    });
  }
  return frames;
}

function random(min: number, max?: number): number {
  if (max == null) {
    max = min;
    min = 0;
  }
  if (min > max) {
    const tmp = min;
    min = max;
    max = tmp;
  }
  return min + (max - min) * Math.random();
}

function sample<T>(array: T[]): T {
  return array[(Math.random() * array.length) | 0];
}

function removeItems(array: any[], startIndex: number, removeCount: number) {
  const length = array.length;
  if (startIndex >= length || removeCount === 0) {
    return;
  }
  removeCount = (startIndex + removeCount > length ? length - startIndex : removeCount);
  const len = length - removeCount;
  for (let i = startIndex; i < len; ++i) {
    array[i] = array[i + removeCount];
  }
  array.length = len;
}

interface TrailDot {
  x: number;
  y: number;
  life: number;
}

interface CursorStarsProps {
  active?: boolean;
  hideDefaultCursor?: boolean;
}

const CursorStars: React.FC<CursorStarsProps> = ({ 
  active = true,
  hideDefaultCursor = false // Default to false for safety
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const poolRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);
  
  // Add event listeners
  useEffect(() => {
    if (!active) return;
    
    // Apply cursor style if needed
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Create particles
      for (let i = 0; i < 3; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        
        // Create particles
        for (let i = 0; i < 3; i++) {
          createParticle(e.touches[0].clientX, e.touches[0].clientY);
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      
      if (hideDefaultCursor) {
        document.body.style.cursor = '';
      }
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [active, hideDefaultCursor]);
  
  // Set up canvas and animation
  useEffect(() => {
    if (!active || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Resize function
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Create a particle
    const createParticle = (x: number, y: number) => {
      let particle;
      
      // Reuse particle from pool if available
      if (poolRef.current.length > 0) {
        particle = poolRef.current.pop();
      } else {
        particle = new Particle();
      }
      
      if (particle) {
        particle.init(x, y);
        particlesRef.current.push(particle);
      }
    };
    
    // Animation loop
    const animate = () => {
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        const isAlive = particle.update();
        
        if (isAlive) {
          particle.draw(ctx);
        } else {
          // Move to pool for reuse
          poolRef.current.push(particle);
          particlesRef.current.splice(i, 1);
        }
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, [active]);
  
  // Expose createParticle function for other components
  const createParticle = (x: number, y: number) => {
    let particle;
    
    // Reuse particle from pool if available
    if (poolRef.current.length > 0) {
      particle = poolRef.current.pop();
    } else {
      particle = new Particle();
    }
    
    if (particle) {
      particle.init(x, y);
      particlesRef.current.push(particle);
    }
  };
  
  if (!active) return null;
  
  return (
    <CanvasContainer>
      <Canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default CursorStars; 