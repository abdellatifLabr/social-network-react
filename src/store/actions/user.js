import { gql } from '@apollo/client';

import apolloClient from '../../graphql';
import { revokeToken, signIn } from '../../lib/providers/user';

export const types = {
  SIGN_IN_USER: 'SIGN_IN_USER',
  SIGN_OUT_USER: 'SIGN_OUT_USER',
  FETCH_USER: 'FETCH_USER',
};

const ME_QUERY = gql`
  query {
    me {
      id
      email
      username
      fullName
      image
      cover
    }
  }
`;

export const signInUser = (email, password) => async (dispatch) => {
  const data = await signIn(email, password);
  const { success, errors, token, refreshToken } = data;

  if (errors) throw errors;

  if (success) {
    localStorage.setItem('access_token', token);
    localStorage.setItem('refresh_token', refreshToken);

    const res = await apolloClient.query({ query: ME_QUERY });

    dispatch({
      type: types.SIGN_IN_USER,
      payload: res.data.me,
    });
  }
};

export const signOutUser = () => async (dispatch) => {
  const refresh = localStorage.getItem('refresh_token');
  await revokeToken(refresh);

  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');

  dispatch({
    type: types.SIGN_OUT_USER,
    payload: null,
  });
};

export const fetchUser = () => async (dispatch) => {
  const res = await apolloClient.query({ query: ME_QUERY });

  dispatch({
    type: types.FETCH_USER,
    payload: res.data.me,
  });
};
