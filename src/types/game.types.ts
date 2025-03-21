export type GamePhase = 'setup' | 'playing' | 'question' | 'answer' | 'end' | 'questionManagement';

export interface Question {
  value: number;
  question: string;
  answer: string;
  answered: boolean;
  image?: string;
  audio?: string;
  video?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  questions: Question[];
}

export type AbilityType = 'google' | 'chatgpt' | 'dismiss' | 'electric' | 'double';

export interface Ability {
  type: AbilityType;
  used: boolean;
  active?: boolean;
  cooldown?: number;
  cooldownStart?: number;
}

export interface Team {
  id: string;
  name: string;
  avatar: string;
  score: number;
  abilities: Record<AbilityType, Ability>;
  pointsMultiplier: number;
  blockedFromAnswering?: boolean;
}

export interface TimerState {
  duration: number;
  remaining: number;
  isRunning: boolean;
  bothTeamsTimedOut: boolean;
}

export interface GameState {
  gamePhase: GamePhase;
  teams: Team[];
  categories: Category[];
  selectedCategories: string[];
  currentQuestion: {
    categoryId: string;
    questionIndex: number;
    question: Question;
  } | null;
  timer: TimerState;
  volume: number;
  musicEnabled: boolean;
  effectsEnabled: boolean;
  activeTeamIndex: TeamIndex;
  answerRevealed: boolean;
  shockedTeam: TeamIndex | null;
}

export type TeamIndex = 0 | 1;

// Action types for reducer
export type Action = 
  | { type: 'START_GAME'; payload: Team[] }
  | { type: 'SELECT_QUESTION'; payload: { categoryId: string; questionIndex: number; question: Question } }
  | { type: 'AWARD_POINTS'; payload: { teamIndex: TeamIndex; points: number } }
  | { type: 'USE_ABILITY'; payload: { teamIndex: TeamIndex; abilityType: AbilityType } }
  | { type: 'START_COOLDOWN'; payload: { teamIndex: TeamIndex; abilityType: AbilityType; duration: number } }
  | { type: 'END_COOLDOWN'; payload: { teamIndex: TeamIndex; abilityType: AbilityType } }
  | { type: 'SET_POINTS_MULTIPLIER'; payload: { teamIndex: TeamIndex; multiplier: number } }
  | { type: 'RESET_POINTS_MULTIPLIER'; payload: { teamIndex: TeamIndex } }
  | { type: 'SET_GAME_PHASE'; payload: GamePhase }
  | { type: 'TOGGLE_MUSIC' }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'START_TIMER'; payload?: number }
  | { type: 'PAUSE_TIMER' }
  | { type: 'RESET_TIMER'; payload?: number }
  | { type: 'TICK_TIMER' }
  | { type: 'SELECT_CATEGORY'; payload: string }
  | { type: 'DESELECT_CATEGORY'; payload: string }
  | { type: 'DISMISS_PLAYER'; payload: { teamIndex: TeamIndex; playerId: string } }
  | { type: 'RETURN_PLAYER'; payload: { teamIndex: TeamIndex; playerId: string } }
  | { type: 'REVEAL_ANSWER' }
  | { type: 'RETURN_TO_BOARD' };

export type EmojiData = string; 