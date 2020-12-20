import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import { isUserAuthenticated } from './lib/providers/user';
import { fetchUser } from './store/actions/user';
import apolloClient from './graphql';
import store from './store';
import './index.scss';
import App from './App';

async function resolvePreRenderRequirements() {
  if (isUserAuthenticated()) {
    await store.dispatch(fetchUser());
  }
}

resolvePreRenderRequirements().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
