import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './js/AppNavigator';
import { persistor, store } from './js/store/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
