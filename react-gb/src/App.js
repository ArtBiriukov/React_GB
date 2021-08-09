import React from 'react';
import { Provider } from 'react-redux';
import Router from './components/component/Router.js';
import { store } from './store/index.js';

function App() {

  return (
    <Provider store={store}>
          <Router />
    </Provider>
  );
}

export default App;
