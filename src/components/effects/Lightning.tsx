import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const LightningCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
`;

interface LightningProps {
  active: boolean;
  fromTeam?: boolean;
  toTeam?: boolean;
  sourceTeamIndex?: 0 | 1;
  targetTeamIndex?: 0 | 1;
}

class Vector {
  constructor(public X: number, public Y: number, public X1: number, public Y1: number) {}

  dX() {
    return this.X1 - this.X;
  }
  
  dY() {
    return this.Y1 - this.Y;
  }
  
  Normalized() {
    const l = this.Length();
    return new Vector(this.X, this.Y, this.X + (this.dX() / l), this.Y + (this.dY() / l));
  }

  Length() {
    return Math.sqrt(Math.pow(this.dX(), 2) + Math.pow(this.dY(), 2));
  }

  Multiply(n: number) {
    return new Vector(this.X, this.Y, this.X + this.dX() * n, this.Y + this.dY() * n);
  }
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

class LightningEffect {
  config: any;

  constructor(c: any) {
    this.config = c;
  }

  Cast(context: CanvasRenderingContext2D, from: Vector, to: Vector) {
    context.save();

    if (!from || !to) {
      return;
    }
    
    //Main vector
    const v = new Vector(from.X, from.Y, to.X, to.Y);
    
    //skip cast if not close enough
    if (this.config.Threshold && v.Length() > context.canvas.width * this.config.Threshold) {
      return;
    }
    
    const vLen = v.Length();
    let refv = from;
    const lR = (vLen / context.canvas.width);
    
    //count of segments
    const segments = Math.floor(this.config.Segments * lR);
    //length of each
    const l = vLen / segments;

    for (let i = 1; i <= segments; i++) {
      //position in the main vector
      const dv = v.Multiply((1 / segments) * i);

      //add position noise
      if (i !== segments) {
        dv.Y1 += l * Math.random();
        dv.X1 += l * Math.random();
      }
      
      //new vector for segment
      const r = new Vector(refv.X1, refv.Y1, dv.X1, dv.Y1);
      
      //background blur
      this.Line(context, r, {
        Color: this.config.GlowColor,
        With: this.config.GlowWidth * lR,
        Blur: this.config.GlowBlur * lR,
        BlurColor: this.config.GlowColor,
        Alpha: this.Random(this.config.GlowAlpha, this.config.GlowAlpha * 2) / 100
      });

      //main line
      this.Line(context, r, {
        Color: this.config.Color,
        With: this.config.Width,
        Blur: this.config.Blur,
        BlurColor: this.config.BlurColor,
        Alpha: this.config.Alpha
      });
      
      refv = r;
    }

    this.Circle(context, to, lR);
    this.Circle(context, from, lR);

    context.restore();
  }

  Circle(context: CanvasRenderingContext2D, p: Vector, lR: number) {
    context.beginPath();
    context.arc(p.X1 + Math.random() * 10 * lR, p.Y1 + Math.random() * 10 * lR, 5, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.shadowBlur = 15;
    context.shadowColor = "#2319FF";
    context.fill();
  }

  Line(context: CanvasRenderingContext2D, v: Vector, c: any) {
    context.beginPath();
    context.strokeStyle = c.Color;
    context.lineWidth = c.With;
    context.moveTo(v.X, v.Y);
    context.lineTo(v.X1, v.Y1);
    context.globalAlpha = c.Alpha;
    context.shadowBlur = c.Blur;
    context.shadowColor = c.BlurColor;
    context.stroke();
  }

  Random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

const Lightning: React.FC<LightningProps> = ({ 
  active, 
  fromTeam, 
  toTeam, 
  sourceTeamIndex = 0, 
  targetTeamIndex = 1 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightningRef = useRef<LightningEffect | null>(null);
  const animationRef = useRef<number>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create lightning effect with your preferred settings
    lightningRef.current = new LightningEffect({
      Segments: 40,
      Threshold: 0.5,
      Width: 1,
      Color: 'white',
      Blur: 5,
      BlurColor: 'white', 
      Alpha: 1,
      GlowColor: '#000055',
      GlowWidth: 40,
      GlowBlur: 100,
      GlowAlpha: 30
    });
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match container
    const resizeCanvas = () => {
      if (canvas && wrapperRef.current) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let animationActive = true;
    
    const animate = () => {
      if (!animationActive || !ctx) return;
      
      // Use clearRect instead of fillRect for transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (fromTeam) {
        // Use the sourceTeamIndex and targetTeamIndex to determine which team is shocking which
        const sourceTeam = teamPositions[`team${sourceTeamIndex}`];
        const targetTeam = teamPositions[`team${targetTeamIndex}`];

        // Generate bolts to fill the panel
        const numBolts = 4;
        
        for (let i = 0; i < numBolts; i++) {
          // Random position in source team panel
          const startX = sourceTeam.x + sourceTeam.width * 0.75;
          const startY = sourceTeam.y + sourceTeam.height / 2;
          
          // Random position in target team panel
          const endX = targetTeam.x + Math.random() * targetTeam.width;
          const endY = targetTeam.y + Math.random() * targetTeam.height;
          
          const from = new Vector(0, 0, startX, startY);
          const to = new Vector(0, 0, endX, endY);
          
          lightningRef.current?.Cast(ctx, from, to);
        }
      } else if (toTeam) {
        // This is receiving team, add lightning across entire panel
        const numBolts = 6; // More bolts for better coverage
        const teamRect = teamPositions[`team${targetTeamIndex}`]; // Use the target team index
        
        for (let i = 0; i < numBolts; i++) {
          // Create random start and end points across the entire panel
          const startX = teamRect.x + Math.random() * teamRect.width;
          const startY = teamRect.y + Math.random() * teamRect.height;
          const endX = teamRect.x + Math.random() * teamRect.width;
          const endY = teamRect.y + Math.random() * teamRect.height;
          
          const from = new Vector(0, 0, startX, startY);
          const to = new Vector(0, 0, endX, endY);
          
          lightningRef.current?.Cast(ctx, from, to);
        }
        
        // Add some specific bolts to the avatar for emphasis
        const avatarRect = teamPositions.avatars[`team${targetTeamIndex}`]; // Use target team's avatar
        for (let i = 0; i < 2; i++) {
          const centerX = avatarRect.x + avatarRect.width / 2;
          const centerY = avatarRect.y + avatarRect.height / 2;
          
          const startX = teamRect.x + Math.random() * teamRect.width;
          const startY = teamRect.y;
          const endX = centerX + (Math.random() - 0.5) * avatarRect.width * 0.8;
          const endY = centerY + (Math.random() - 0.5) * avatarRect.height * 0.8;
          
          const from = new Vector(0, 0, startX, startY);
          const to = new Vector(0, 0, endX, endY);
          
          lightningRef.current?.Cast(ctx, from, to);
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    if (active) {
      animate();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    return () => {
      animationActive = false;
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [active, fromTeam, toTeam, sourceTeamIndex, targetTeamIndex]);
  
  return (
    <div ref={wrapperRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <LightningCanvas ref={canvasRef} style={{ opacity: active ? 1 : 0 }} />
    </div>
  );
};

export default Lightning; 