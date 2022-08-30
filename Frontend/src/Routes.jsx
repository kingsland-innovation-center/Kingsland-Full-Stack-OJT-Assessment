import React from 'react';
import {
  Login,
  Welcome,
  Register,
  Dashboard,
  AddStudent,
  Students,
} from './views';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarLayout from './views/Components/Sidebar/SidebarLayout';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route
            exact
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route exact path='/students' element={<Students />} />
          <Route exact path='/students/add' element={<AddStudent />} />
          <Route exact path='/' element={<Welcome />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
