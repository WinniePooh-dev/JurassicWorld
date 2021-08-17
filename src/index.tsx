import {CssBaseline} from '@material-ui/core';
import {StylesProvider} from '@material-ui/styles';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './App';
import GlobalStyle from './GlobalStyle';
import store from './store';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CssBaseline />
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </Provider>
  );
};

render(<AppProvider />, document.getElementById('root'));
