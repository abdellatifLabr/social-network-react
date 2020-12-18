import apolloClient from '../../graphql';
import * as mutations from '../graphql/mutations/user.mutations';

export async function signIn(email, password) {
  const res = await apolloClient.mutate({
    mutation: mutations.LOGIN,
    variables: { email, password },
  });
  return res.data.tokenAuth;
}

export async function refreshToken(refresh) {
  const res = await apolloClient.mutate({
    mutation: mutations.REFRESH_TOKEN,
    variables: { refresh },
  });
  return res.data.refreshToken;
}

export async function revokeToken(refresh) {
  const res = await apolloClient.mutate({
    mutation: mutations.REVOKE_TOKEN,
    variables: { refresh },
  });
  return res.data.refreshToken;
}
