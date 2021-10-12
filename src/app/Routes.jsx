import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loading from './components/Loading';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const CreatePostPage = lazy(() => import('./pages/CreatePostPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));

const Routes = () => (
  <Suspense fallback={() => <Loading />}>
    <Switch>
      <Route path="/" render={() => <HomePage />} exact />
      <Route path="/login" render={() => <LoginPage />} exact />
      <Route path="/register" render={() => <RegisterPage />} exact />
      <Route path="/profile" render={() => <ProfilePage />} exact />
      <Route path="/community" render={() => <CommunityPage />} exact />
      <Route path="/profile/:id" render={() => <ProfilePage />} exact />
      <Route path="/post/create" render={() => <CreatePostPage />} exact />
      <Route path="/post/:id" render={() => <PostPage />} exact />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
