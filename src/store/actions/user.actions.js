import { gql } from '@apollo/client';
import apolloClient from '../../graphql';

export const types = {
  SET_USER: 'SET_USER',
  SIGN_OUT_USER: 'SIGN_OUT_USER',
};

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

export const fetchUser = () => async (dispatch) => {
  const res = await apolloClient.query({ query: ME_QUERY });
  dispatch({
    type: types.SET_USER,
    payload: res.data.me,
  });
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
