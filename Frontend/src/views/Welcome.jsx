import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Welcome = () => {
  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <h2>Welcome, Prospect Intern.</h2>
      All available routes can be found under <b>Frontend/src/Routes.jsx</b>.
      <Button className='my-3' variant='primary' type='submit'>
        Login
      </Button>
      <Button variant='secondary' type='submit'>
        Register
      </Button>
    </Container>
  );
};

export default Welcome;
