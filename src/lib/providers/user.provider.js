import { gql } from '@apollo/client';

import apolloClient from '../../graphql';

const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($refresh: String!) {
    refreshToken(refreshToken: $refresh) {
      token
      success
      errors
    }
  }
`;

export async function refreshToken(refresh) {
  const res = await apolloClient.mutate({
    mutation: REFRESH_TOKEN_MUTATION,
    variables: { refresh },
  });
  return res.data.refreshToken;
}

export function revokeToken() {
  //
}
