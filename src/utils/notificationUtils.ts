import { showNotification as showUINotification } from '../components/common/GameNotification';

/**
 * Shows a notification to the user
 * @param message The message to show
 * @param duration How long to show the message (in ms, default: 4000)
 */
export const showNotification = (message: string, duration = 4000): void => {
  showUINotification(message, duration);
}; 