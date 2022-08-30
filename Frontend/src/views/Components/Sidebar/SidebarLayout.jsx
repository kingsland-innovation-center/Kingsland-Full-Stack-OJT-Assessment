import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { sidebarContext } from './SidebarContext';
import Cookies from 'js-cookie';

const SidebarLayout = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(
    Boolean(Cookies.get('user_name'))
  );

  return (
    <sidebarContext.Provider
      value={{
        isUserAuthenticated: isUserAuthenticated,
        setIsUserAuthenticated: setIsUserAuthenticated,
      }}
    >
      <Row style={{ height: '100%' }}>
        <Sidebar />
        <Col>
          <Outlet />
        </Col>
      </Row>
    </sidebarContext.Provider>
  );
};

export default SidebarLayout;
