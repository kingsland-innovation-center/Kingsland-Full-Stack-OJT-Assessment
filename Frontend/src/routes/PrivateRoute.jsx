import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthPrivateRoute } from "./utils/authUtils";

function PrivateRoute() {
  return (
    isAuthPrivateRoute() ? <Outlet/> : <Navigate to='/login' />
  );
}

export default PrivateRoute;
