import React from 'react';
import { Provider } from 'react-redux';
import Router from './components/Router.js';
import { store, persistor } from './store/index.js';
import { PersistGate } from "redux-persist/integration/react";

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor = {persistor}>
        <Router /> 
      </PersistGate>
    </Provider>
  );
}

export default App;
