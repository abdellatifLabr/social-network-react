import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loading from './components/Loading';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const CreatePostPage = lazy(() => import('./pages/CreatePostPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

const Routes = () => (
  <Suspense fallback={() => <Loading />}>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={RegisterPage} exact />
      <Route path="/profile" component={ProfilePage} exact />
      <Route path="/profile/:id" component={ProfilePage} exact />
      <Route path="/post/create" component={CreatePostPage} exact />
      <Route path="/post/:id" component={PostPage} exact />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
