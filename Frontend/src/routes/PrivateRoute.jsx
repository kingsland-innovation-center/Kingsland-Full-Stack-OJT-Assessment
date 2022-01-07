import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthPrivateRoute } from "./utils/authUtils";

function PrivateRoute() {
  console.log(isAuthPrivateRoute)

  return (
    isAuthPrivateRoute() ? <Outlet/> : <Navigate to='/login' />
  );
}

export default PrivateRoute;
