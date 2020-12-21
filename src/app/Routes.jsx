import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

const Routes = () => (
  <Suspense fallback={() => <div>Loading...</div>}>
    <Switch>
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={RegisterPage} exact />
      <Route path="/profile" component={ProfilePage} exact />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
