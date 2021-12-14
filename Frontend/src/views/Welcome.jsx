import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

/**
 * Nothing to do here.
 * Make sure you include this in the sidebar for unauthenticated users.
 */
const Welcome = () => {
  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <h2>Welcome, Prospect Intern.</h2>
      All available routes can be found under <b>Frontend/src/Routes.jsx</b>.

      <p>This task is a simulated assessment measuring how well you integrate your changes to an existing project.</p>
      <p>There is no time limit. Once you are ready, just submit a pull request to the main repository.
      </p>

      <p>If you have questions, reach out to <a href="mailto:internships@careers.kingsland.io">internships@careers.kingsland.io</a>.</p>
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
