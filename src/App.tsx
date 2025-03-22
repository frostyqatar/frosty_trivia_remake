import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import GameContainer from './components/GameContainer';
import GameNotification from './components/common/GameNotification';
import WelcomeMessage from './components/common/WelcomeMessage';
import GlobalStyle from './styles/GlobalStyle';
import GoogleSearchTimerWrapper from './components/GoogleSearchTimerWrapper';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/common/ThemeWrapper';
import './App.css';
import 'emoji-picker-element';
import { initGA, pageView } from './services/analytics';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    pageView(window.location.pathname);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <ThemeWrapper>
            <GlobalStyle />
            <GameContainer />
            <GameNotification />
            <GoogleSearchTimerWrapper />
            <WelcomeMessage />
          </ThemeWrapper>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App; 