import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import store from './store';

function Main() {
  // Wrap our entire application in a provider,
  // which exposes the store to any descendant

  return (
    <CssBaseline>
      <Provider store={store}>
        <App />
      </Provider>
    </CssBaseline>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
