import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, TeamIndex, AbilityType, GamePhase, Question } from '../types/game.types';
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
      
      // Mark question as answered
      const category = state.categories.find(c => c.id === action.payload.categoryId);
      if (category) {
        category.questions[action.payload.questionIndex].answered = true;
      }
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
      const { markAsAnswered } = action.payload;
      
      if (markAsAnswered && state.currentQuestion) {
        // Find the category and question in the categories array
        const { categoryId, questionIndex } = state.currentQuestion;
        const category = state.categories.find(c => c.id === categoryId);
        
        if (category && category.questions[questionIndex]) {
          // Mark the question as answered
          category.questions[questionIndex].answered = true;
        }
      }
      
      // Reset game state
      state.gamePhase = 'playing';
      state.currentQuestion = null;
      state.answerRevealed = false;
      
      // Dispatch custom event when returning to board
      // This will allow GameBoard to check if all questions are answered
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('returnToBoard'));
      }
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
      state.activeTeamIndex = action.payload;
    },
    
    setBothTeamsTimedOut: (state, action: PayloadAction<boolean>) => {
      state.timer.bothTeamsTimedOut = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetGame, (state) => {
        // Reset the game state to initial values
        return initialState;
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
} = gameSlice.actions;

export const resetGame = createAction('game/resetGame');

export default gameSlice.reducer; 