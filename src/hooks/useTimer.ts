import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { startTimer, pauseTimer, resetTimer, tickTimer } from '../store/gameSlice';

export const useTimer = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state: RootState) => state.timer);
  
  const start = useCallback((duration?: number) => {
    dispatch(startTimer(duration));
  }, [dispatch]);
  
  const pause = useCallback(() => {
    dispatch(pauseTimer());
  }, [dispatch]);
  
  const reset = useCallback((duration?: number) => {
    dispatch(resetTimer(duration));
  }, [dispatch]);
  
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (timer.isRunning && timer.remaining > 0) {
      interval = setInterval(() => {
        dispatch(tickTimer());
      }, 1000);
    } else if (interval && (!timer.isRunning || timer.remaining <= 0)) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer.isRunning, timer.remaining, dispatch]);
  
  return {
    duration: timer.duration,
    remaining: timer.remaining,
    isRunning: timer.isRunning,
    start,
    pause,
    reset,
  };
}; 