import { gql } from '@apollo/client';
import apolloClient from '../../graphql';

export const types = {
  SIGN_IN_USER: 'SIGN_IN_USER',
  SIGN_OUT_USER: 'SIGN_OUT_USER',
};

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      token
      refreshToken
    }
  }
`;

const ME_QUERY = gql`
  query {
    me {
      id
      pk
      email
      username
      fullName
      image
      cover
    }
  }
`;

export const signInUser = (email, password) => async (dispatch) => {
  const res = await apolloClient.mutate({
    mutation: LOGIN_MUTATION,
    variables: { email, password },
  });
  const { success, errors, token, refreshToken } = res.data.tokenAuth;

  if (errors) throw errors;

  if (success) {
    localStorage.setItem('access_token', token);
    localStorage.setItem('refresh_token', refreshToken);

    const { data } = await apolloClient.query({ query: ME_QUERY });

    dispatch({
      type: types.SIGN_IN_USER,
      payload: data.me,
    });
  }
};

const REVOKE_TOKEN_MUTATION = gql`
  mutation RevokeToken($refresh: String!) {
    revokeToken(refreshToken: $refresh) {
      success
      errors
    }
  }
`;

export const signOutUser = () => async (dispatch) => {
  const refresh = localStorage.getItem('refresh_token');
  await apolloClient.mutate({
    mutation: REVOKE_TOKEN_MUTATION,
    variables: { refresh },
  });

  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');

  dispatch({
    type: types.SIGN_OUT_USER,
    payload: null,
  });
};
