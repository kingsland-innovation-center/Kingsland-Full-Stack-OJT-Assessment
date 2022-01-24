import React from 'react';
import Container from 'react-bootstrap/Container';

/**
 * Nothing to do here, make sure you include this in the sidebar for authenticated users.
 */
const Dashboard = () => {
  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='white-wrap'>
        <h2>Dashboard</h2><br/>
        Hello! This is the dashboard page
      </div>
    </Container>
  );
};

export default Dashboard;
