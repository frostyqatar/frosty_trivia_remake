import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Team, AbilityType, TeamIndex } from '../types/game.types';
import { awardPoints } from '../store/gameSlice';
import { useAbilities } from '../hooks/useAbilities';
import { RootState } from '../store';
import { useSoundEffects } from '../hooks/useSoundEffects';
import Lightning, { updateTeamPosition, updateAvatarPosition } from './effects/Lightning';
import CatLoader from './effects/CatLoader';

interface TeamPanelProps {
  team: Team;
  teamIndex: 0 | 1;
  isActive: boolean;
  isShocked: boolean;
}

const TeamContainer = styled(motion.div)<{ isActive: boolean, isShocked: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: ${props => props.isActive ? '4px solid #8c52ff' : '1px solid #e0e0e0'};
  position: relative;
  overflow: hidden;
  min-width: 390px;
  flex: 1;
`;

const ActiveTeamIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #8c52ff;
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 16px;
`;

const TeamAvatar = styled.div`
  position: relative;
  font-size: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f5f0ff;
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamName = styled.h2`
  margin: 0;
  font-size: 30px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
`;

const TeamScore = styled.div`
  font-size: 56px;
  font-weight: bold;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8c52ff;
  text-shadow: 0px 3px 4px rgba(140, 82, 255, 0.25);
`;

const ScoreAdjustButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  padding: 0 10px;
  opacity: 0.7;
  
  &:hover {
    opacity: 1;
  }
`;

const AbilitiesSection = styled.div`
  margin-top: 16px;
`;

const AbilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
`;

interface AbilityButtonProps {
  isUsed: boolean;
  isActive?: boolean;
  isCooldown?: boolean;
  disabled?: boolean;
}

const AbilityButton = styled(motion.button)<AbilityButtonProps>`
  font-size: 18px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: ${props => props.isUsed ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.isUsed ? 0.5 : 1};
  background-color: ${props => {
    if (props.isUsed) return '#e0e0e0';
    if (props.isActive) return '#ffcb2d';
    if (props.isCooldown) return '#ff6b6b';
    return '#f0f0f0';
  }};
  color: ${props => props.isUsed ? '#999' : '#333'};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CooldownOverlay = styled.div<{cooldownProgress: number}>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${props => props.cooldownProgress}%;
  background-color: rgba(0, 0, 0, 0.15);
  transition: height 1s linear;
`;

const PlayersSection = styled.div`
  margin-top: 20px;
`;

const PlayersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

interface PlayerItemProps {
  isDismissed: boolean;
}

const PlayerItem = styled.div<PlayerItemProps>`
  padding: 6px 12px;
  background-color: ${props => props.isDismissed ? '#f0f0f0' : '#f5f0ff'};
  color: ${props => props.isDismissed ? '#999' : '#333'};
  border-radius: 20px;
  font-size: 14px;
  text-decoration: ${props => props.isDismissed ? 'line-through' : 'none'};
`;

// Shock animation
const shockAnimation = {
  initial: { x: 0 },
  animate: {
    x: [-3, 3, -2, 2, -1, 1, 0],
    transition: { duration: 0.4 }
  }
};

const TeamPanel: React.FC<TeamPanelProps> = ({ team, teamIndex, isActive, isShocked }) => {
  const dispatch = useDispatch();
  const { activateAbility } = useAbilities();
  const { playSound } = useSoundEffects();
  
  // Track cooldown for electric ability
  const [electricCooldown, setElectricCooldown] = React.useState(0);
  
  const gamePhase = useSelector((state: RootState) => state.gamePhase);
  
  // Add this to track the panel position
  const panelRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  
  // Track panel position for lightning effect
  useEffect(() => {
    if (panelRef.current) {
      const rect = panelRef.current.getBoundingClientRect();
      updateTeamPosition(teamIndex, { 
        x: rect.left, 
        y: rect.top, 
        width: rect.width, 
        height: rect.height 
      });
    }

    // Track avatar position separately
    if (avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect();
      updateAvatarPosition(teamIndex, {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      });
    }
    
    // Update positions on resize and scroll
    const handlePositionUpdate = () => {
      if (panelRef.current) {
        const rect = panelRef.current.getBoundingClientRect();
        updateTeamPosition(teamIndex, { 
          x: rect.left, 
          y: rect.top, 
          width: rect.width, 
          height: rect.height 
        });
      }
      
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect();
        updateAvatarPosition(teamIndex, {
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height
        });
      }
    };
    
    window.addEventListener('resize', handlePositionUpdate);
    window.addEventListener('scroll', handlePositionUpdate);
    
    return () => {
      window.removeEventListener('resize', handlePositionUpdate);
      window.removeEventListener('scroll', handlePositionUpdate);
    };
  }, [teamIndex]);
  
  React.useEffect(() => {
    if (team?.abilities?.electric) {
      const cooldownTimer = setInterval(() => {
        const ability = team.abilities.electric;
        if (ability && ability.cooldown && ability.cooldownStart !== undefined) {
          const elapsed = Date.now() - ability.cooldownStart;
          const cooldown = ability.cooldown;
          
          if (cooldown > 0) {
            const remaining = Math.max(0, cooldown - elapsed);
            setElectricCooldown(remaining / cooldown * 100);
            
            if (remaining <= 0) {
              clearInterval(cooldownTimer);
              setElectricCooldown(0);
            }
          } else {
            setElectricCooldown(0);
          }
        } else {
          setElectricCooldown(0);
        }
      }, 100);
      
      return () => clearInterval(cooldownTimer);
    }
  }, [team?.abilities?.electric]);
  
  const handleAbilityClick = (abilityType: AbilityType) => {
    activateAbility(teamIndex, abilityType);
  };
  
  const handleAdjustScore = (amount: number) => {
    playSound('button-click');
    dispatch(awardPoints({ 
      teamIndex: teamIndex as TeamIndex, 
      points: amount 
    }));
  };
  
  if (!team) return <div>Loading team data...</div>;
  
  return (
    <TeamContainer 
      ref={panelRef}
      isActive={isActive} 
      isShocked={isShocked}
      variants={shockAnimation}
      animate={isShocked ? 'animate' : 'initial'}
    >
      {/* Only show the lightning effect on the team RECEIVING the shock */}
      {isShocked && 
        <Lightning 
          active={isShocked} 
          toTeam={true} 
          targetTeamIndex={teamIndex} 
          sourceTeamIndex={teamIndex === 0 ? 1 : 0} 
        />
      }
      
      {isActive && <ActiveTeamIndicator />}
      
      <TeamHeader>
        <TeamAvatar ref={avatarRef}>
          {team.avatar}
          <CatLoader active={true} size={1.2} />
        </TeamAvatar>
        <TeamInfo>
          <TeamName>{team.name}</TeamName>
          <TeamScore>
            <ScoreAdjustButton 
              onClick={() => handleAdjustScore(-10)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              ➖
            </ScoreAdjustButton>
            
            {team.score}
            
            <ScoreAdjustButton 
              onClick={() => handleAdjustScore(10)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              ➕
            </ScoreAdjustButton>
          </TeamScore>
        </TeamInfo>
      </TeamHeader>
      
      <AbilitiesSection>
        <AbilitiesGrid>
          <AbilityButton 
            isUsed={team.abilities.chatgpt.used}
            disabled={gamePhase !== 'question' || team.abilities.chatgpt.used}
            whileHover={!team.abilities.chatgpt.used ? { scale: 1.05 } : {}}
            whileTap={!team.abilities.chatgpt.used ? { scale: 0.95 } : {}}
            onClick={() => !team.abilities.chatgpt.used && handleAbilityClick('chatgpt')}
          >
            🤖
          </AbilityButton>
          
          <AbilityButton 
            isUsed={team.abilities.double.used}
            disabled={gamePhase !== 'question' || team.abilities.double.used}
            whileHover={!team.abilities.double.used ? { scale: 1.05 } : {}}
            whileTap={!team.abilities.double.used ? { scale: 0.95 } : {}}
            onClick={() => !team.abilities.double.used && handleAbilityClick('double')}
            isActive={team.abilities.double.active}
          >
            2️⃣
          </AbilityButton>
          
          <AbilityButton 
            isUsed={team.abilities.google.used}
            disabled={gamePhase !== 'question' || team.abilities.google.used}
            whileHover={!team.abilities.google.used ? { scale: 1.05 } : {}}
            whileTap={!team.abilities.google.used ? { scale: 0.95 } : {}}
            onClick={() => !team.abilities.google.used && handleAbilityClick('google')}
          >
            🔍
          </AbilityButton>
          
          <AbilityButton 
            isUsed={team.abilities.dismiss.used}
            disabled={gamePhase !== 'question' || team.abilities.dismiss.used}
            whileHover={!team.abilities.dismiss.used ? { scale: 1.05 } : {}}
            whileTap={!team.abilities.dismiss.used ? { scale: 0.95 } : {}}
            onClick={() => !team.abilities.dismiss.used && handleAbilityClick('dismiss')}
          >
            👋
          </AbilityButton>
          
          <AbilityButton 
            isUsed={team.abilities.electric.used}
            disabled={team.abilities.electric.used}
            whileHover={!team.abilities.electric.used ? { scale: 1.05 } : {}}
            whileTap={!team.abilities.electric.used ? { scale: 0.95 } : {}}
            onClick={() => !team.abilities.electric.used && handleAbilityClick('electric')}
          >
            ⚡
          </AbilityButton>
        </AbilitiesGrid>
      </AbilitiesSection>
      
      <PlayersSection>
        <PlayersList>
          {team.players && team.players.map(player => (
            <PlayerItem 
              key={player.id} 
              isDismissed={player.dismissed === true}
            >
              {player.name}
            </PlayerItem>
          ))}
        </PlayersList>
      </PlayersSection>
    </TeamContainer>
  );
};

export default TeamPanel; 