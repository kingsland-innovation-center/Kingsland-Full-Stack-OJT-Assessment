import React from 'react';
import {
  Login,
  Welcome,
  Register,
  Dashboard,
  AddStudent,
  Students,
} from './views';
import DashboardLayout from './layouts/dashboard';
import { useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  
    return useRoutes([
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          { path: 'welcome', element: <Welcome />},
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'students', element: <Students /> },
          { path: 'students/add', element: <AddStudent /> },
        ]
      },
    ]);
};
export default AppRoutes;
