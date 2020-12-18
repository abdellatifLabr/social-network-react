import jwtDecode from 'jwt-decode';

export function isTokenExpired(token) {
  const decoded = jwtDecode(token);
  const currentTime = new Date().getTime() / 1000;
  return currentTime > decoded.exp;
}

export function other() {}
