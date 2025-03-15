import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { 
  activateAbility as activateAbilityAction,
  startCooldown, 
  endCooldown, 
  setPointsMultiplier,
  awardPoints,
  setActiveTeam
} from '../store/gameSlice';
import { RootState } from '../store';
import { AbilityType, TeamIndex, GamePhase } from '../types/game.types';
import { useSoundEffects } from './useSoundEffects';
import { showNotification } from '../components/common/GameNotification';
import { trackGameEvent } from '../services/analytics';

// Google Search Timer Event
export interface GoogleSearchTimerEvent {
  isActive: boolean;
  teamName: string;
}

export const triggerGoogleSearchTimer = (isActive: boolean, teamName: string) => {
  const event = new CustomEvent('google-search-timer', {
    detail: { isActive, teamName }
  });
  window.dispatchEvent(event);
};

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
      duration: 200000, // 20 minutes (was 20000)
      skipAnimation: true // Add this to skip animation
    }));
    dispatch(startCooldown({ 
      teamIndex: 1, 
      abilityType: 'electric', 
      duration: 200000, // 20 minutes (was 20000)
      skipAnimation: true // Add this to skip animation
    }));
    
    // Auto end cooldown after 20 minutes
    setTimeout(() => {
      dispatch(endCooldown({ teamIndex: 0, abilityType: 'electric' }));
      dispatch(endCooldown({ teamIndex: 1, abilityType: 'electric' }));
    }, 200000); // 20 minutes (was 20000)
  }, [dispatch]);
  
  const triggerAbility = useCallback((
    teamIndex: TeamIndex, 
    abilityType: AbilityType
  ) => {
    const team = game.teams[teamIndex];
    
    // Special handling for electric shock - can be used only once per game now
    if (abilityType === 'electric') {
      if (!team || !team.abilities || !team.abilities[abilityType]) {
        showNotification('Ability not available');
        return false;
      }
      
      // Check if ability has already been used
      if (team.abilities[abilityType].used) {
        showNotification('Electric shock already used this game');
        return false;
      }
      
      // Play appropriate sound
      playSound(`ability-${abilityType}`);
      
      // Mark ability as used (instead of setting cooldown)
      dispatch(activateAbilityAction({ 
        teamIndex, 
        abilityType 
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
      
      // Show notification about the electric shock
      showNotification(`⚡ ${team.name} used Electric Shock! ${game.teams[opposingTeamIndex].name} lost ${pointsReduction} points!`);
      
      // Dispatch custom event for the animation
      const shockEvent = new CustomEvent('electricShock', { 
        detail: { teamIndex: opposingTeamIndex } 
      });
      window.dispatchEvent(shockEvent);
      
      // No need to return the function for handling cooldown anymore
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
        // Show initial notification
        showNotification(`🔍 ${team.name} is using Google search!`);
        
        // Trigger the Google search timer
        triggerGoogleSearchTimer(true, team.name);
        
        // Start a timer to notify when the search time is over
        setTimeout(() => {
          showNotification('⏱️ Google search time is over!');
        }, 25000);
        break;
        
      case 'dismiss':
        if (gamePhase !== 'question') {
          playSound('button-click');
          showNotification('Block ability can only be used during a question!');
          return false;
        }

        if (team.abilities.dismiss.used) {
          playSound('button-click');
          showNotification('Block ability already used!');
          return false;
        }

        // Mark ability as used
        dispatch(activateAbilityAction({ 
          teamIndex, 
          abilityType: 'dismiss'
        }));
        
        playSound('ability-dismiss');
        
        // Get opposing team index
        const opposingTeamIndex = teamIndex === 0 ? 1 : 0;
        const opposingTeam = game.teams[opposingTeamIndex];
        
        // Block the entire opposing team from answering this question
        dispatch({
          type: 'game/blockTeamFromAnswering',
          payload: { teamIndex: opposingTeamIndex }
        });
        
        // Show notification about team being blocked
        showNotification(`🚫 ${opposingTeam.name} has been blocked from answering this question!`);
        break;
    }
    
    return true;
  }, [dispatch, game, playSound]);
  
  const switchTeam = useCallback(() => {
    // Get current active team index
    const currentTeamIndex = game.activeTeamIndex || 0;
    
    // Switch to the other team
    const nextTeamIndex = currentTeamIndex === 0 ? 1 : 0;
    
    // Play a sound for the switch
    playSound('button-click');
    
    // Dispatch the action to switch teams
    dispatch(setActiveTeam(nextTeamIndex));
    
    // Show notification about team switching
    showNotification(`🔁 Switching to ${game.teams[nextTeamIndex].name}'s turn`);
    
    return true;
  }, [dispatch, game, playSound]);
  
  return {
    activateAbility: triggerAbility,
    initializeElectricCooldown,
    switchTeam
  };
}; 