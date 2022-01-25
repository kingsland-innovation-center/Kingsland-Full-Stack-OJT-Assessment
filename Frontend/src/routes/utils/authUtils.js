export const isAuthPublicRoute = () =>
  localStorage.getItem("user") === null &&
  localStorage.getItem("userId") === null;
export const isAuthPrivateRoute = () =>
  localStorage.getItem("user") !== null &&
  localStorage.getItem("userId") !== null;
