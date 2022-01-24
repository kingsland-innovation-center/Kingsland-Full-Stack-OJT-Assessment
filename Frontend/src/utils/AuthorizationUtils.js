import { AUTH_ROLE, AUTH_TOKEN, CURRENT_USER_ID } from '../constants';

export const isAuthPublicRoute = () =>
  localStorage.getItem(AUTH_TOKEN) === null;

export const isAuthPrivateRoute = () =>
  localStorage.getItem(AUTH_TOKEN) !== null &&
  localStorage.getItem(AUTH_ROLE) === 'user';

export const login = (jwtToken) => {
  localStorage.setItem(AUTH_TOKEN, jwtToken);
  localStorage.setItem(AUTH_ROLE, 'user');
};

export const getCurrentUserId = () => {
  return localStorage.getItem(CURRENT_USER_ID);
}

export const logOut = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(AUTH_ROLE);
  localStorage.removeItem(CURRENT_USER_ID);
};
