import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));

const Routes = () => (
  <Suspense fallback={() => <div>Loading...</div>}>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
