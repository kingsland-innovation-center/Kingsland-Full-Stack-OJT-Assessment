export const isAuthPublicRoute = () => localStorage.getItem("user") === null;
export const isAuthPrivateRoute = () => localStorage.getItem("user") !== null;
