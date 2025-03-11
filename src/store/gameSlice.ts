import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, TeamIndex, AbilityType, GamePhase, Question, Category } from '../types/game.types';
import { getInitialCategories } from '../data/questions';
import { createAction } from '@reduxjs/toolkit';

interface TimerState {
  duration: number;
  remaining: number;
  isRunning: boolean;
  bothTeamsTimedOut: boolean;
}

const initialState: GameState = {
  gamePhase: 'setup',
  teams: [],
  categories: getInitialCategories(),
  selectedCategories: [],
  currentQuestion: null,
  timer: {
    duration: 30,
    remaining: 30,
    isRunning: false,
    bothTeamsTimedOut: false
  },
  volume: 0.7,
  musicEnabled: true,
  activeTeamIndex: 0,
  answerRevealed: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<GameState['teams']>) => {
      state.teams = action.payload;
      state.gamePhase = 'playing';
    },
    
    selectQuestion: (state, action: PayloadAction<{
      categoryId: string;
      questionIndex: number;
      question: Question;
    }>) => {
      state.currentQuestion = action.payload;
      state.gamePhase = 'question';
      state.timer.remaining = 30;
      state.timer.duration = 30;
    },
    
    awardPoints: (state, action: PayloadAction<{
      teamIndex: TeamIndex;
      points: number;
    }>) => {
      const { teamIndex, points } = action.payload;
      const team = state.teams[teamIndex];
      const multiplier = team.pointsMultiplier;
      
      team.score += points * multiplier;
      
      // Reset multiplier if it was used
      if (multiplier > 1) {
        team.pointsMultiplier = 1;
        team.abilities.double.active = false;
      }
    },
    
    activateAbility: (state, action: PayloadAction<{
      teamIndex: TeamIndex;
      abilityType: AbilityType;
    }>) => {
      const { teamIndex, abilityType } = action.payload;
      const team = state.teams[teamIndex];
      
      if (team && team.abilities && team.abilities[abilityType]) {
        team.abilities[abilityType].used = true;
        
        // For double points ability
        if (abilityType === 'double') {
          team.pointsMultiplier = 2;
          team.abilities[abilityType].active = true;
        }
      }
    },
    
    startCooldown: (state, action: PayloadAction<{
      teamIndex: TeamIndex;
      abilityType: AbilityType;
      duration: number;
    }>) => {
      const { teamIndex, abilityType, duration } = action.payload;
      const team = state.teams[teamIndex];
      
      if (team && team.abilities && team.abilities[abilityType]) {
        team.abilities[abilityType].cooldown = duration;
        team.abilities[abilityType].cooldownStart = Date.now();
      }
      
      // For electric ability, dispatch a custom event to trigger UI animation
      if (abilityType === 'electric') {
        // This will be handled by event listeners in components
        const event = new CustomEvent('electricShock', { 
          detail: { teamIndex } 
        });
        window.dispatchEvent(event);
      }
    },
    
    endCooldown: (state, action: PayloadAction<{
      teamIndex: TeamIndex;
      abilityType: AbilityType;
    }>) => {
      const { teamIndex, abilityType } = action.payload;
      const team = state.teams[teamIndex];
      
      if (team && team.abilities && team.abilities[abilityType]) {
        team.abilities[abilityType].cooldown = 0;
        team.abilities[abilityType].cooldownStart = 0;
      }
    },
    
    setGamePhase: (state, action: PayloadAction<GamePhase>) => {
      state.gamePhase = action.payload;
    },
    
    toggleMusic: (state) => {
      state.musicEnabled = !state.musicEnabled;
    },
    
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    
    startTimer: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        state.timer.duration = action.payload;
        state.timer.remaining = action.payload;
      }
      state.timer.isRunning = true;
    },
    
    pauseTimer: (state) => {
      state.timer.isRunning = false;
    },
    
    resetTimer: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        state.timer.duration = action.payload;
      }
      state.timer.remaining = state.timer.duration;
      state.timer.isRunning = false;
      state.timer.bothTeamsTimedOut = false;
    },
    
    tickTimer: (state) => {
      if (state.timer.isRunning && state.timer.remaining > 0) {
        state.timer.remaining -= 1;
      }
      
      if (state.timer.remaining <= 0) {
        state.timer.isRunning = false;
      }
    },
    
    selectCategory: (state, action: PayloadAction<string>) => {
      if (state.selectedCategories.length < 6 && !state.selectedCategories.includes(action.payload)) {
        state.selectedCategories.push(action.payload);
      }
    },
    
    deselectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategories = state.selectedCategories.filter(id => id !== action.payload);
    },
    
    dismissPlayer: (state, action: PayloadAction<{
      teamIndex: TeamIndex;
      playerId: string;
    }>) => {
      const { teamIndex, playerId } = action.payload;
      const opposingTeamIndex = teamIndex === 0 ? 1 : 0;
      const player = state.teams[opposingTeamIndex].players.find(p => p.id === playerId);
      
      if (player) {
        player.dismissed = true;
      }
    },
    
    returnPlayer: (state, action: PayloadAction<{
      teamIndex: TeamIndex;
      playerId: string;
    }>) => {
      const { teamIndex, playerId } = action.payload;
      const player = state.teams[teamIndex].players.find(p => p.id === playerId);
      
      if (player) {
        player.dismissed = false;
      }
    },
    
    revealAnswer: (state) => {
      if (state.currentQuestion) {
        // Set the answerRevealed flag to true
        state.answerRevealed = true;
      }
    },
    
    returnToBoard: (state, action: PayloadAction<{ markAsAnswered: boolean }>) => {
      if (state.currentQuestion) {
        // Find the question in the categories array
        const categoryIndex = state.categories.findIndex(
          c => c.id === state.currentQuestion?.categoryId
        );
        
        if (categoryIndex !== -1) {
          // Mark the question as answered if markAsAnswered is true
          if (action.payload.markAsAnswered) {
            state.categories[categoryIndex].questions[state.currentQuestion.questionIndex].answered = true;
          }
        }
      }
      
      // Reset the current question
      state.currentQuestion = null;
      state.gamePhase = 'playing';
      state.answerRevealed = false;
      
      // Reset dismissed state for all players - do this directly instead of creating a new array
      state.teams.forEach(team => {
        team.players.forEach(player => {
          player.dismissed = false;
        });
      });
    },
    
    setPointsMultiplier: (state, action: PayloadAction<{
      teamIndex: TeamIndex;
      multiplier: number;
    }>) => {
      const { teamIndex, multiplier } = action.payload;
      if (state.teams[teamIndex]) {
        state.teams[teamIndex].pointsMultiplier = multiplier;
      }
    },
    
    setActiveTeam: (state, action: PayloadAction<TeamIndex>) => {
      console.log("Setting active team in Redux to:", action.payload);
      state.activeTeamIndex = action.payload;
      
      // Force state update by creating a new array reference
      state.teams = [...state.teams];
    },
    
    setBothTeamsTimedOut: (state, action: PayloadAction<boolean>) => {
      state.timer.bothTeamsTimedOut = action.payload;
    },
    
    updateCategories: (state, action: PayloadAction<Category[]>) => {
      // Create a deep copy of the incoming categories to avoid reference issues
      const updatedCategories = JSON.parse(JSON.stringify(action.payload));
      
      // Replace the entire categories array
      state.categories = updatedCategories;
      
      // If you have selected categories, make sure they still exist in the updated list
      state.selectedCategories = state.selectedCategories.filter(
        id => updatedCategories.some((cat: Category) => cat.id === id)
      );
      
      // Force clear the current question if it's from a category that was modified
      if (state.currentQuestion) {
        const modifiedCategoryIds = updatedCategories.map((c: Category) => c.id);
        if (modifiedCategoryIds.includes(state.currentQuestion.categoryId)) {
          state.currentQuestion = null;
        }
      }
      
      // Update localStorage backup as well
      try {
        localStorage.setItem('trivia-game-categories', JSON.stringify(updatedCategories));
      } catch (e) {
        console.error('Failed to save categories to localStorage:', e);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetGame, (state) => {
      // Instead of completely replacing the state, preserve the categories
      const preservedCategories = [...state.categories];
      
      // Reset the state
      Object.assign(state, initialState);
      
      // Restore the categories
      state.categories = preservedCategories;
    });
  },
});

export const {
  startGame,
  selectQuestion,
  awardPoints,
  activateAbility,
  startCooldown,
  endCooldown,
  setGamePhase,
  toggleMusic,
  setVolume,
  startTimer,
  pauseTimer,
  resetTimer,
  tickTimer,
  selectCategory,
  deselectCategory,
  dismissPlayer,
  returnPlayer,
  revealAnswer,
  returnToBoard,
  setPointsMultiplier,
  setActiveTeam,
  setBothTeamsTimedOut,
  updateCategories,
} = gameSlice.actions;

export const resetGame = createAction('game/resetGame');

export default gameSlice.reducer; 