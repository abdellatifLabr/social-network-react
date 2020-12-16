import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// const PostPage = lazy(() => import('./pages/PostPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const Routes = () => (
  <Suspense fallback={() => <div>Loading...</div>}>
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
