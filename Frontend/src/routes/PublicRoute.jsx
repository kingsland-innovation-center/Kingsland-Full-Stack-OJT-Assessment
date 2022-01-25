import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthPublicRoute } from "./utils/authUtils";

function PublicRoute() {
  return isAuthPublicRoute() ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default PublicRoute;
