import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { 
  activateAbility as activateAbilityAction,
  startCooldown, 
  endCooldown, 
  dismissPlayer,
  returnPlayer,
  setPointsMultiplier,
  awardPoints
} from '../store/gameSlice';
import { RootState } from '../store';
import { AbilityType, TeamIndex, GamePhase, Player } from '../types/game.types';
import { useSoundEffects } from './useSoundEffects';
import { showNotification } from '../components/common/GameNotification';

export const useAbilities = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state);
  const gamePhase = useSelector((state: RootState) => state.gamePhase);
  const { playSound } = useSoundEffects();
  
  // Called when component mounts to initialize electric shock cooldown
  const initializeElectricCooldown = useCallback(() => {
    // Start both teams with cooldown
    dispatch(startCooldown({ 
      teamIndex: 0, 
      abilityType: 'electric', 
      duration: 20000 
    }));
    dispatch(startCooldown({ 
      teamIndex: 1, 
      abilityType: 'electric', 
      duration: 20000 
    }));
    
    // Auto end cooldown after 20 seconds
    setTimeout(() => {
      dispatch(endCooldown({ teamIndex: 0, abilityType: 'electric' }));
      dispatch(endCooldown({ teamIndex: 1, abilityType: 'electric' }));
    }, 20000);
  }, [dispatch]);
  
  const triggerAbility = useCallback((
    teamIndex: TeamIndex, 
    abilityType: AbilityType
  ) => {
    const team = game.teams[teamIndex];
    
    // Special handling for electric shock - can be used anytime
    if (abilityType === 'electric') {
      if (!team || !team.abilities || !team.abilities[abilityType]) {
        showNotification('Ability not available');
        return false;
      }
      
      // Check if ability is on cooldown
      if (team.abilities[abilityType].cooldown && 
          team.abilities[abilityType].cooldownStart !== undefined) {
        const elapsed = Date.now() - (team.abilities[abilityType].cooldownStart || 0);
        const cooldown = team.abilities[abilityType].cooldown || 0;
        
        if (elapsed < cooldown) {
          // Still on cooldown
          const remainingSeconds = Math.ceil((cooldown - elapsed) / 1000);
          showNotification(`Ability on cooldown: ${remainingSeconds}s remaining`);
          return false;
        }
      }
      
      // Play appropriate sound
      playSound(`ability-${abilityType}`);
      
      // Start cooldown timer - 20 seconds
      dispatch(startCooldown({ 
        teamIndex, 
        abilityType, 
        duration: 20000 
      }));
      
      // Electric shock the opposing team - reduce points by 300-500
      const opposingTeamIndex = teamIndex === 0 ? 1 : 0;
      const opposingTeam = game.teams[opposingTeamIndex];
      
      // Generate random points reduction between 300-500
      const pointsReduction = Math.floor(Math.random() * 201) + 300; // Random between 300-500
      
      // Reduce opposing team's points
      dispatch(awardPoints({ 
        teamIndex: opposingTeamIndex, 
        points: -pointsReduction 
      }));
      
      // Dispatch custom event for the animation
      const shockEvent = new CustomEvent('electricShock', { 
        detail: { teamIndex: opposingTeamIndex } 
      });
      window.dispatchEvent(shockEvent);
      
      // Show notification
      showNotification(`⚡ ${team.name} used Electric Shock on ${opposingTeam?.name || 'opposing team'}! -${pointsReduction} points!`);
      
      return true;
    }
    
    // For all other abilities, check if we're in question phase
    if (gamePhase !== 'question') {
      showNotification('Abilities can only be used during questions');
      return false;
    }
    
    // Check if ability is available
    if (!team || !team.abilities || 
        (team.abilities[abilityType] && team.abilities[abilityType].used)) {
      showNotification('Ability already used');
      return false;
    }
    
    // Mark ability as used in state
    dispatch(activateAbilityAction({ teamIndex, abilityType }));
    
    // Play appropriate sound
    playSound(`ability-${abilityType}`);
    
    // Handle specific abilities
    switch (abilityType) {
      case 'chatgpt':
        // Show first 3 letters of answer
        if (game.currentQuestion && game.currentQuestion.question) {
          const answer = game.currentQuestion.question.answer;
          showNotification(`🤖 ChatGPT hint: The answer starts with "${answer.substring(0, 3)}..."`);
        }
        break;
        
      case 'double':
        // Double points for next correct answer
        dispatch(setPointsMultiplier({ teamIndex, multiplier: 2 }));
        showNotification(`🎯 ${team.name} activated Double Points! Next correct answer will be worth double points!`);
        break;
        
      case 'google':
        // Open Google search in new tab
        if (game.currentQuestion) {
          const searchQuery = encodeURIComponent(game.currentQuestion.question.question);
          window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
          showNotification('Google search opened in new tab');
        }
        break;
        
      case 'dismiss':
        // Randomly select a player from opposing team to dismiss
        const opposingTeamIndex = teamIndex === 0 ? 1 : 0;
        const opposingTeam = game.teams[opposingTeamIndex];
        
        if (opposingTeam && opposingTeam.players) {
          // Filter to get only active players
          const activePlayers = opposingTeam.players.filter((p: Player) => !p.dismissed);
          
          if (activePlayers.length > 0) {
            // Randomly select a player
            const randomIndex = Math.floor(Math.random() * activePlayers.length);
            const playerToRemove = activePlayers[randomIndex];
            
            dispatch(dismissPlayer({ 
              teamIndex: opposingTeamIndex, 
              playerId: playerToRemove.id 
            }));
            
            showNotification(`${playerToRemove.name} from ${game.teams[opposingTeamIndex].name} has been dismissed for this question!`);
          } else {
            showNotification("No eligible players to dismiss!");
          }
        }
        break;
    }
    
    return true;
  }, [dispatch, game, playSound]);
  
  const dismissOpponentPlayer = useCallback((
    teamIndex: TeamIndex, 
    playerId: string
  ) => {
    dispatch(dismissPlayer({ teamIndex, playerId }));
    
    // Auto-return the player after one question
    const handleReturnAfterQuestion = () => {
      const opposingTeamIndex = teamIndex === 0 ? 1 : 0;
      dispatch(returnPlayer({ 
        teamIndex: opposingTeamIndex, 
        playerId 
      }));
    };
    
    return handleReturnAfterQuestion;
  }, [dispatch]);
  
  return {
    activateAbility: triggerAbility,
    dismissOpponentPlayer,
    initializeElectricCooldown
  };
}; 