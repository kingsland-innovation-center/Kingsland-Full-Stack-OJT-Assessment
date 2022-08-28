import React from 'react';
import {
  Login,
  Welcome,
  Register,
  Dashboard,
  AddStudent,
  Students,
} from './views';
import Sidebar from './views/Components/Sidebar/Sidebar';
import { Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';

const SidebarLayout = () => {
  return (
    <Row style={{ height: '100%' }}>
      <Sidebar />
      <Col style={{ width: '100%' }}>
        <Outlet />
      </Col>
    </Row>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route exact path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<SidebarLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route exact path='/students' element={<Students />} />
          <Route exact path='/students/add' element={<AddStudent />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
