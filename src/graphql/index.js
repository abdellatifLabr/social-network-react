import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';

import { isTokenExpired } from '../lib/utils';
import { refreshToken } from '../lib/providers/user';

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const authLink = setContext(async (req, { headers }) => {
  let currToken = localStorage.getItem('access_token');

  if (!currToken) return;
  if (req.operationName === 'RefreshToken') return;

  if (isTokenExpired(currToken)) {
    const refresh = localStorage.getItem('refresh_token');
    const { success, token, errors } = await refreshToken(refresh);

    if (success) {
      localStorage.setItem('access', token);
      currToken = token;
    }

    if (errors) return;
  }

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${currToken}`,
    },
  };
});

const defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;
