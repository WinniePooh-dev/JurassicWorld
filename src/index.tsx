import {CssBaseline} from '@material-ui/core';
import {StylesProvider} from '@material-ui/styles';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import {App} from './App';
import GlobalStyle from './GlobalStyle';
import store from './store';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CssBaseline />
      <StylesProvider injectFirst>
        <MemoryRouter initialEntries={['/user_form']}>
          <App />
        </MemoryRouter>
      </StylesProvider>
    </Provider>
  );
};

render(<AppProvider />, document.getElementById('root'));
