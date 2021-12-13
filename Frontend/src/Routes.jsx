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

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Welcome />} />.
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route exact path='/students' element={<Students />} />
        <Route exact path='/students/add' element={<AddStudent />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
