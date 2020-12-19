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

export const REGISTER = gql`
  mutation Register(
    $email: String!
    $username: String!
    $fullName: String!
    $password1: String!
    $password2: String!
  ) {
    register(
      email: $email
      username: $username
      fullName: $fullName
      password1: $password1
      password2: $password2
    ) {
      success
      errors
      token
      refreshToken
    }
  }
`;
