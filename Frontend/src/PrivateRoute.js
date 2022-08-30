import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  if (!Cookies.get('user_name')) {
    return <Navigate to='/' />;
  }
  return children;
};

export default PrivateRoute;
