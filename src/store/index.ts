import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import gameReducer from './gameSlice'; // Use the gameSlice directly

// Configure persistence to ensure game state is properly saved
const persistConfig = {
  key: 'root',
  storage,
  // Make sure to persist all necessary game state
  whitelist: [
    'gamePhase', 
    'teams', 
    'categories', 
    'selectedCategories', 
    'currentQuestion', 
    'timer',
    'volume',
    'musicEnabled',
    'activeTeamIndex'
  ],
};

const persistedReducer = persistReducer(persistConfig, gameReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// For debugging
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 