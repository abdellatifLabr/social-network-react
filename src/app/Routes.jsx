import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// const PostPage = lazy(() => import('./pages/PostPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

const Routes = () => (
  <Suspense fallback={() => <div>Loading...</div>}>
    <Switch>
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={RegisterPage} exact />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
