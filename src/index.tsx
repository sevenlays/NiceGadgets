import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import { persistor, store } from './store';
import { Provider } from 'react-redux';

import { App } from './App';

import './index.scss';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
);
