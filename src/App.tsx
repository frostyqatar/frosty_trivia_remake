import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import GameContainer from './components/GameContainer';
import GameNotification from './components/common/GameNotification';
import GlobalStyle from './styles/GlobalStyle';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <GameContainer />
        <GameNotification />
      </PersistGate>
    </Provider>
  );
};

export default App; 