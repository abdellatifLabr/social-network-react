import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      token
      refreshToken
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refresh: String!) {
    refreshToken(refreshToken: $refresh) {
      token
      success
      errors
    }
  }
`;

export const REVOKE_TOKEN = gql`
  mutation RevokeToken($refresh: String!) {
    revokeToken(refreshToken: $refresh) {
      success
      errors
    }
  }
`;
