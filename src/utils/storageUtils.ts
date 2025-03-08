import { GameState } from '../types/game.types';

export const saveGame = (state: GameState): void => {
  try {
    localStorage.setItem('frosty-trivia-state', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving game state:', error);
  }
};

export const loadGame = (): GameState | null => {
  try {
    const savedState = localStorage.getItem('frosty-trivia-state');
    if (savedState) {
      return JSON.parse(savedState);
    }
    return null;
  } catch (error) {
    console.error('Error loading game state:', error);
    return null;
  }
};

export const clearSavedGame = (): void => {
  try {
    localStorage.removeItem('frosty-trivia-state');
    localStorage.removeItem('persist:frosty-trivia');
    window.location.reload();
  } catch (error) {
    console.error('Error clearing game state:', error);
  }
}; 