import React, {Fragment, lazy} from 'react';
import {Suspense} from 'react';
import {Route, Switch} from 'react-router';
import {Center, Content, StyledCircularProgress} from './@UI';
import {Header} from './components/Header';
import {default as Table} from './components/Table';

const UserForm = lazy(() =>
  import('./components/UserForm').then(module => ({default: module.UserForm}))
);

const Game = lazy(() => import('./components/Game'));

export const App = (): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <Table />
      <Content>
        <Suspense
          fallback={
            <Center>
              <StyledCircularProgress />
            </Center>
          }>
          <Switch>
            <Route path={'/user_form'} component={UserForm} exact={true} />
            <Route path={'/game'} component={Game} exact={true} />
            <Route>Not found</Route>
          </Switch>
        </Suspense>
      </Content>
    </Fragment>
  );
};
