import ReactGA from 'react-ga4';

// Your GA Measurement ID from the script
const MEASUREMENT_ID = 'G-JYL04258QT';

// Initialize GA
export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

// Track page views
export const pageView = (page: string) => {
  ReactGA.send({ hitType: "pageview", page });
};

// Track events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
};

// Track game-specific events
export const trackGameEvent = {
  startGame: () => trackEvent('Game', 'Start Game'),
  endGame: (winner: string, score: number) => trackEvent('Game', 'End Game', winner, score),
  questionSelected: (value: number, category: string) => trackEvent('Question', 'Select', category, value),
  correctAnswer: (questionValue: number) => trackEvent('Answer', 'Correct', undefined, questionValue),
  incorrectAnswer: (questionValue: number) => trackEvent('Answer', 'Incorrect', undefined, questionValue),
  abilityUsed: (abilityName: string, team: string) => trackEvent('Ability', 'Used', `${team}:${abilityName}`),
  resetQuestions: () => trackEvent('Admin', 'Reset Questions'),
  importQuestions: (count: number) => trackEvent('Admin', 'Import Questions', undefined, count),
  exportQuestions: (count: number) => trackEvent('Admin', 'Export Questions', undefined, count)
}; 