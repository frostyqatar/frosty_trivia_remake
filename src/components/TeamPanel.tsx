import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Team, AbilityType } from '../types/game.types';
import { awardPoints } from '../store/gameSlice';
import { useAbilities } from '../hooks/useAbilities';
import { showNotification } from './common/GameNotification';
import { RootState } from '../store';

interface TeamPanelProps {
  team: Team;
  teamIndex: 0 | 1;
  isActive: boolean;
  isShocked: boolean;
}

const TeamContainer = styled(motion.div)<{ isActive: boolean, isShocked: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.isActive ? '#fff' : '#f5f5f5'};
  border-radius: 16px;
  padding: 24px;
  box-shadow: ${props => props.isActive 
    ? '0 8px 16px rgba(52, 152, 219, 0.4)' 
    : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
  border: 2px solid ${props => props.isActive ? '#3498db' : 'transparent'};
  position: relative;
  overflow: hidden;
`;

const ActiveTeamIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #3498db;
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TeamAvatar = styled.div`
  font-size: 36px;
  margin-right: 16px;
`;

const TeamInfo = styled.div`
  flex: 1;
`;

const TeamName = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #2c3e50;
`;

const ScoreControls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const ScoreButton = styled(motion.button)`
  background-color: #3498db;
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
`;

const ScoreValue = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #2c3e50;
  width: 80px;
  text-align: center;
`;

const AbilitiesSection = styled.div`
  margin-top: 16px;
`;

const AbilitiesTitle = styled.h3`
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 12px;
`;

const AbilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

interface AbilityButtonProps {
  isUsed: boolean;
  isActive?: boolean;
  isCooldown?: boolean;
  disabled?: boolean;
}

const AbilityButton = styled(motion.button)<AbilityButtonProps>`
  font-size: 24px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: ${props => props.isUsed ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.isUsed ? 0.5 : 1};
  background-color: ${props => {
    if (props.isUsed) return '#95a5a6';
    if (props.isActive) return '#f39c12';
    if (props.isCooldown) return '#e74c3c';
    return '#3498db';
  }};
  color: white;
  position: relative;
  overflow: hidden;
`;

const CooldownOverlay = styled.div<{cooldownProgress: number}>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${props => props.cooldownProgress}%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: height 1s linear;
`;

const PlayersSection = styled.div`
  margin-top: 24px;
`;

const PlayersTitle = styled.h3`
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 12px;
`;

const PlayersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface PlayerItemProps {
  isDismissed: boolean;
}

const PlayerItem = styled.li<PlayerItemProps>`
  padding: 8px 12px;
  background-color: ${props => props.isDismissed ? '#ecf0f1' : '#e1f0fa'};
  color: ${props => props.isDismissed ? '#95a5a6' : '#2c3e50'};
  margin-bottom: 8px;
  border-radius: 6px;
  text-decoration: ${props => props.isDismissed ? 'line-through' : 'none'};
`;

// Shock animation
const shockAnimation = {
  initial: { x: 0 },
  animate: {
    x: [-5, 5, -3, 3, -1, 1, 0],
    transition: { duration: 0.5 }
  }
};

const TeamPanel: React.FC<TeamPanelProps> = ({ team, teamIndex, isActive, isShocked }) => {
  const dispatch = useDispatch();
  const { activateAbility } = useAbilities();
  
  // Track cooldown for electric ability
  const [electricCooldown, setElectricCooldown] = React.useState(0);
  
  const gamePhase = useSelector((state: RootState) => state.gamePhase);
  
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
  
  const handleScoreAdjust = (amount: number) => {
    dispatch(awardPoints({ 
      teamIndex, 
      points: amount 
    }));
  };
  
  const handleAbilityClick = (abilityType: AbilityType) => {
    activateAbility(teamIndex, abilityType);
  };
  
  if (!team) return <div>Loading team data...</div>;
  
  return (
    <TeamContainer 
      isActive={isActive} 
      isShocked={isShocked}
      variants={shockAnimation}
      animate={isShocked ? 'animate' : 'initial'}
    >
      {isActive && <ActiveTeamIndicator />}
      
      <TeamHeader>
        <TeamAvatar>{team.avatar}</TeamAvatar>
        <TeamInfo>
          <TeamName>{team.name}</TeamName>
          <ScoreControls>
            <ScoreButton 
              onClick={() => handleScoreAdjust(-10)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              -
            </ScoreButton>
            <ScoreValue>{team.score}</ScoreValue>
            <ScoreButton 
              onClick={() => handleScoreAdjust(10)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              +
            </ScoreButton>
          </ScoreControls>
        </TeamInfo>
      </TeamHeader>
      
      <AbilitiesSection>
        <AbilitiesTitle>الصلاحيات الخاصة</AbilitiesTitle>
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
            isUsed={false} // Electric can be used multiple times
            isCooldown={electricCooldown > 0}
            disabled={electricCooldown > 0}
            whileHover={electricCooldown === 0 ? { scale: 1.05 } : {}}
            whileTap={electricCooldown === 0 ? { scale: 0.95 } : {}}
            onClick={() => electricCooldown === 0 && handleAbilityClick('electric')}
          >
            ⚡
            {electricCooldown > 0 && (
              <CooldownOverlay cooldownProgress={electricCooldown} />
            )}
          </AbilityButton>
        </AbilitiesGrid>
      </AbilitiesSection>
      
      <PlayersSection>
        <PlayersTitle>اللاعبون</PlayersTitle>
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