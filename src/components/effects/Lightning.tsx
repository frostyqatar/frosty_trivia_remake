import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Create two canvas elements, one for main lightning and one for the glow effect
const LightningContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
  overflow: hidden;
`;

const MainCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const GlowCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  filter: blur(8px);
  background: rgba(0,0,0,0);
`;

interface LightningProps {
  active: boolean;
  fromTeam?: boolean;
  toTeam?: boolean;
  sourceTeamIndex?: 0 | 1;
  targetTeamIndex?: 0 | 1;
}

// Team positions data store
export interface TeamRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface TeamPositions {
  team0: TeamRect;
  team1: TeamRect;
  avatars: {
    team0: TeamRect;
    team1: TeamRect;
  };
}

const teamPositions: TeamPositions = {
  team0: { x: 0, y: 0, width: 0, height: 0 },
  team1: { x: 0, y: 0, width: 0, height: 0 },
  avatars: {
    team0: { x: 0, y: 0, width: 0, height: 0 },
    team1: { x: 0, y: 0, width: 0, height: 0 }
  }
};

// Update team position
export const updateTeamPosition = (teamIndex: 0 | 1, rect: TeamRect) => {
  teamPositions[`team${teamIndex}`] = rect;
};

// Update avatar position
export const updateAvatarPosition = (teamIndex: 0 | 1, rect: TeamRect) => {
  teamPositions.avatars[`team${teamIndex}`] = rect;
};

// Helper utility functions
function dis(x: number, y: number, x2: number, y2: number): number { 
  const xl = x2 - x;
  const yl = y2 - y;
  return Math.sqrt(xl ** 2 + yl ** 2);
}

function randFrom(min: number, max: number): number {
  return (Math.random() * (max - min)) + min;
}

// LightningBolt class based on the user's code
class LightningBolt {
  ang: number;
  x: number;
  y: number;
  num: number;
  points: { x: number; y: number }[];
  drift: number;
  timer: number;
  timerRate: number;
  width: number;
  fadeRate: number;
  angVel: number;
  phase: number;
  phaseDiff: number;
  amp: number;
  hue: number;
  
  constructor(origin: { x: number, y: number }, angle: number, hue: number) {
    this.ang = angle; 
    this.x = origin.x;
    this.y = origin.y;
    this.num = 12;
    this.points = [];
    
    // Increased maximum distance for lightning to travel
    const maxDistance = 600;
    
    for(let j = 0; j < this.num; j++) {
      this.points.push({ 
        x: this.x + (j/(this.num-1)) * maxDistance * Math.cos(this.ang), 
        y: this.y + (j/(this.num-1)) * maxDistance * Math.sin(this.ang) 
      });
    }
    
    this.drift = Math.random() * (0.03+0.03) - 0.03;
    this.timer = 1;
    this.timerRate = 0.02;
    this.width = 5;
    this.fadeRate = Math.random() * (0.15-0.05) + 0.05;
    this.angVel = 0.08;
    this.phase = 0;
    this.phaseDiff = Math.random() * (2.2-1.8) + 1.8;
    this.amp = 30;
    this.hue = hue;
  }
  
  draw(ctx: CanvasRenderingContext2D, ctx2: CanvasRenderingContext2D) {
    // Main lightning stroke
    ctx.lineWidth = this.width * 1.5;
    ctx.strokeStyle = `hsl(${this.hue}, 100%, 60%)`;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    
    for(let j = 1; j < this.num; j++) {
      ctx.lineTo(this.points[j].x, this.points[j].y);
    }
    
    ctx.stroke();
    ctx.restore();
    
    // Glow effect on second canvas
    ctx2.lineWidth = this.width * 5;
    ctx2.strokeStyle = `hsl(${this.hue}, 100%, 70%)`;
    ctx2.save();
    ctx2.beginPath();
    ctx2.moveTo(this.points[0].x, this.points[0].y);
    
    for(let j = 1; j < this.num; j++) {
      ctx2.lineTo(this.points[j].x, this.points[j].y);
    }
    
    ctx2.stroke();
    
    // End point glow
    ctx2.beginPath();
    ctx2.arc(
      this.points[this.num-1].x,
      this.points[this.num-1].y,
      this.width * 6 + Math.random() * 15,
      0,
      2 * Math.PI
    );
    ctx2.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
    ctx2.fill();
    ctx2.restore();
  }
  
  update() {
    this.ang += this.drift;
    this.width -= this.fadeRate;
    this.timer -= this.timerRate;
    
    if(this.width <= 0) {
      this.ang = Math.random() * 2 * Math.PI;
      this.width = 5;
      this.phaseDiff = Math.random() * (2.2-1.8) + 1.8;
      this.fadeRate = Math.random() * (0.15-0.05) + 0.05;
      this.timerRate = Math.random() * (0.15-0.02) + 0.02;
    }
    
    if(this.timer <= 0) {
      this.phase = Math.random() * 2 * Math.PI;
      this.amp = Math.random() * (35-15) + 15;
      this.angVel = Math.random() * (0.12-0.05) + 0.05;
      this.timer = 1;
    }
    
    // Update the starting point position (fixed at team panel)
    const baseX = this.x;
    const baseY = this.y;
    
    // Update all points along the bolt
    for(let j = 0; j < this.num; j++) {
      this.phase -= this.angVel;
      
      // Calculate the position along the angle direction
      const distance = (j/(this.num-1)) * 600;
      
      // Base position along the angle
      const basePointX = baseX + distance * Math.cos(this.ang);
      const basePointY = baseY + distance * Math.sin(this.ang);
      
      // Add wave effect perpendicular to the angle direction
      const perpAngle = this.ang + Math.PI/2;
      const waveAmount = this.amp * (j-0) * (this.num-1-j) * 0.15 * Math.sin(this.phase + (j * this.phaseDiff));
      
      this.points[j] = {
        x: basePointX + waveAmount * Math.cos(perpAngle),
        y: basePointY + waveAmount * Math.sin(perpAngle)
      };
    }
  }
}

const Lightning: React.FC<LightningProps> = ({ 
  active, 
  fromTeam, 
  toTeam, 
  sourceTeamIndex = 0, 
  targetTeamIndex = 1 
}) => {
  const mainCanvasRef = useRef<HTMLCanvasElement>(null);
  const glowCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const lightningBolts = useRef<LightningBolt[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hue, setHue] = useState<number>(210); // Blue hue for electric feel
  const [shakeValue, setShakeValue] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Set random hue on mount for variation
    setHue(Math.floor(Math.random() * 40) + 190); // Blue to purple range
  }, []);
  
  // Add a shake effect
  useEffect(() => {
    if (!active) return;
    
    const shakeInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to shake
        setShakeValue({
          x: (Math.random() - 0.5) * 10,
          y: (Math.random() - 0.5) * 10
        });
        
        // Reset shake after a short time
        setTimeout(() => {
          setShakeValue({ x: 0, y: 0 });
        }, 100);
      }
    }, 200);
    
    return () => clearInterval(shakeInterval);
  }, [active]);
  
  useEffect(() => {
    if (!active) {
      // Clear animation if not active
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }
    
    const mainCanvas = mainCanvasRef.current;
    const glowCanvas = glowCanvasRef.current;
    
    if (!mainCanvas || !glowCanvas) return;
    
    const mainCtx = mainCanvas.getContext('2d');
    const glowCtx = glowCanvas.getContext('2d');
    
    if (!mainCtx || !glowCtx) return;
    
    // Set canvas dimensions
    const resizeCanvases = () => {
      mainCanvas.width = window.innerWidth;
      mainCanvas.height = window.innerHeight;
      glowCanvas.width = window.innerWidth;
      glowCanvas.height = window.innerHeight;
    };
    
    resizeCanvases();
    window.addEventListener('resize', resizeCanvases);
    
    // Initialize lightning bolts
    const targetTeam = teamPositions[`team${targetTeamIndex}`];
    if (!targetTeam) return;
    
    const numBolts = 12; // Increased number of lightning bolts for more coverage
    lightningBolts.current = [];
    
    // Create bolts starting from different positions around the panel
    for (let i = 0; i < numBolts; i++) {
      // Create origins around and inside the target team panel
      // Distribute bolts evenly around the perimeter and inside
      let originX = targetTeam.x;
      let originY = targetTeam.y;
      
      if (i < numBolts / 2) {
        // Place half the bolts around the edges of the panel
        const edge = Math.floor(i % 4); // 0: top, 1: right, 2: bottom, 3: left
        
        switch (edge) {
          case 0: // top
            originX = targetTeam.x + Math.random() * targetTeam.width;
            originY = targetTeam.y;
            break;
          case 1: // right
            originX = targetTeam.x + targetTeam.width;
            originY = targetTeam.y + Math.random() * targetTeam.height;
            break;
          case 2: // bottom
            originX = targetTeam.x + Math.random() * targetTeam.width;
            originY = targetTeam.y + targetTeam.height;
            break;
          case 3: // left
            originX = targetTeam.x;
            originY = targetTeam.y + Math.random() * targetTeam.height;
            break;
        }
      } else {
        // Place the rest inside the panel
        originX = targetTeam.x + Math.random() * targetTeam.width;
        originY = targetTeam.y + Math.random() * targetTeam.height;
      }
      
      // Determine angle - for edge bolts, point inward; for inside bolts, random direction
      let angle = Math.random() * 2 * Math.PI;
      if (i < numBolts / 2) {
        // Angle inward for edge bolts
        const centerX = targetTeam.x + targetTeam.width / 2;
        const centerY = targetTeam.y + targetTeam.height / 2;
        angle = Math.atan2(centerY - originY, centerX - originX);
      }
      
      lightningBolts.current.push(new LightningBolt(
        { x: originX, y: originY },
        angle,
        hue
      ));
    }
    
    // Animation function
    const animate = () => {
      // Clear both canvases
      mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
      glowCtx.clearRect(0, 0, glowCanvas.width, glowCanvas.height);
      
      // Add a semi-transparent overlay to enhance the visual effect
      mainCtx.fillStyle = `hsla(${hue}, 100%, 50%, 0.05)`;
      mainCtx.fillRect(targetTeam.x, targetTeam.y, targetTeam.width, targetTeam.height);
      
      // Core effect in the center of the panel - larger and more dramatic
      const coreX = targetTeam.x + targetTeam.width / 2;
      const coreY = targetTeam.y + targetTeam.height / 2;
      const coreRadius = Math.min(targetTeam.width, targetTeam.height) / 5;
      
      // Draw core on main canvas
      mainCtx.fillStyle = "rgba(50,50,50,0.4)";
      mainCtx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
      mainCtx.lineWidth = Math.random() * 5 + 5;
      mainCtx.beginPath();
      mainCtx.arc(coreX, coreY, coreRadius, 0, 2 * Math.PI);
      mainCtx.fill();
      mainCtx.stroke();
      
      // Draw core middle
      mainCtx.fillStyle = `hsl(${hue}, 100%, 70%)`;
      mainCtx.beginPath();
      mainCtx.arc(coreX, coreY, coreRadius / 2.5, 0, 2 * Math.PI);
      mainCtx.fill();
      
      // Draw core on glow canvas
      glowCtx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
      glowCtx.lineWidth = mainCtx.lineWidth * 3;
      glowCtx.beginPath();
      glowCtx.arc(coreX, coreY, coreRadius, 0, 2 * Math.PI);
      glowCtx.stroke();
      
      // Draw core middle on glow canvas
      glowCtx.fillStyle = `hsl(${hue}, 100%, 70%)`;
      glowCtx.beginPath();
      glowCtx.arc(coreX, coreY, coreRadius / 2.5, 0, 2 * Math.PI);
      glowCtx.fill();
      
      // Outer glow ring for more drama
      glowCtx.strokeStyle = `hsla(${hue}, 100%, 80%, 0.3)`;
      glowCtx.lineWidth = 20;
      glowCtx.beginPath();
      glowCtx.arc(coreX, coreY, coreRadius * 1.5, 0, 2 * Math.PI);
      glowCtx.stroke();
      
      // Draw and update all lightning bolts
      lightningBolts.current.forEach(bolt => {
        // Random chance to not draw each frame for flicker effect
        if (Math.random() > 0.15) {
          bolt.draw(mainCtx, glowCtx);
        }
        bolt.update();
        
        // Randomly reposition some bolts to create dynamic movement
        if (Math.random() < 0.08) {
          // Reposition either on edge or inside
          if (Math.random() > 0.5) {
            // On edge
            const edge = Math.floor(Math.random() * 4);
            switch (edge) {
              case 0: // top
                bolt.x = targetTeam.x + Math.random() * targetTeam.width;
                bolt.y = targetTeam.y;
                bolt.ang = Math.PI / 2; // Downward
                break;
              case 1: // right
                bolt.x = targetTeam.x + targetTeam.width;
                bolt.y = targetTeam.y + Math.random() * targetTeam.height;
                bolt.ang = Math.PI; // Leftward
                break;
              case 2: // bottom
                bolt.x = targetTeam.x + Math.random() * targetTeam.width;
                bolt.y = targetTeam.y + targetTeam.height;
                bolt.ang = -Math.PI / 2; // Upward
                break;
              case 3: // left
                bolt.x = targetTeam.x;
                bolt.y = targetTeam.y + Math.random() * targetTeam.height;
                bolt.ang = 0; // Rightward
                break;
            }
            // Add some randomness to the angle
            bolt.ang += (Math.random() - 0.5) * Math.PI / 2;
          } else {
            // Inside
            bolt.x = targetTeam.x + Math.random() * targetTeam.width;
            bolt.y = targetTeam.y + Math.random() * targetTeam.height;
            bolt.ang = Math.random() * 2 * Math.PI;
          }
        }
      });
      
      // Add more random lightning strikes across the panel for extra effect
      if (Math.random() < 0.4) {
        for (let i = 0; i < 2; i++) {
          const startX = targetTeam.x + Math.random() * targetTeam.width;
          const startY = targetTeam.y + Math.random() * targetTeam.height;
          const endX = targetTeam.x + Math.random() * targetTeam.width;
          const endY = targetTeam.y + Math.random() * targetTeam.height;
          
          mainCtx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
          mainCtx.lineWidth = 3;
          mainCtx.beginPath();
          mainCtx.moveTo(startX, startY);
          
          const segments = 8;
          for (let i = 1; i < segments; i++) {
            const t = i / segments;
            const midX = startX + t * (endX - startX) + (Math.random() - 0.5) * 50;
            const midY = startY + t * (endY - startY) + (Math.random() - 0.5) * 50;
            mainCtx.lineTo(midX, midY);
          }
          mainCtx.lineTo(endX, endY);
          mainCtx.stroke();
          
          glowCtx.strokeStyle = `hsl(${hue}, 100%, 70%)`;
          glowCtx.lineWidth = 10;
          glowCtx.beginPath();
          glowCtx.moveTo(startX, startY);
          
          for (let i = 1; i < segments; i++) {
            const t = i / segments;
            const midX = startX + t * (endX - startX) + (Math.random() - 0.5) * 50;
            const midY = startY + t * (endY - startY) + (Math.random() - 0.5) * 50;
            glowCtx.lineTo(midX, midY);
          }
          glowCtx.lineTo(endX, endY);
          glowCtx.stroke();
        }
      }
      
      if (Math.random() < 0.05) {
        mainCtx.fillStyle = `hsla(${hue}, 100%, 80%, ${Math.random() * 0.2 + 0.1})`;
        mainCtx.fillRect(targetTeam.x, targetTeam.y, targetTeam.width, targetTeam.height);
        
        glowCtx.fillStyle = `hsla(${hue}, 100%, 90%, ${Math.random() * 0.3 + 0.1})`;
        glowCtx.fillRect(targetTeam.x, targetTeam.y, targetTeam.width, targetTeam.height);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
      animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvases);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [active, hue, sourceTeamIndex, targetTeamIndex]);
  
  if (!active) return null;
  
  return (
    <LightningContainer 
      ref={containerRef}
      style={{
        transform: `translate(${shakeValue.x}px, ${shakeValue.y}px)`
      }}
    >
      <MainCanvas ref={mainCanvasRef} />
      <GlowCanvas ref={glowCanvasRef} />
    </LightningContainer>
  );
};

export default Lightning; 