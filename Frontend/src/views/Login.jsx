import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

/**
 * Implement the login functionality.
 *
 * Given a username and password, check the database for a match.
 * If a match is found, log the user in.
 *
 * For this assessment, tokenizing the username and password is not required.
 * You may simulate the response for correct/incorrect logins such as:
 * {
 *  isUserValid: boolean
 * }
 *
 * Then, redirect appropriately to /dashboard and adjust the sidebar menuitems accordingly.
 */

const Login = () => {
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    username: '',
    password: '',
  });

  const onUsernameChange = (input) => {
    setLoginInput({
      ...loginInput,
      username: input.target.value,
    });
  };

  const onPasswordChange = (input) => {
    setLoginInput({
      ...loginInput,
      password: input.target.value,
    });
  };

  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3100/user/login', {
        username: loginInput.username,
        password: loginInput.password,
      })
      .then((response) => {
        if (response.data.isUserValid) navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='white-wrap'>
        <h2>Login</h2>
        <Form>
          <Form.Group className='mb-3' controlId='formUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Username'
              onChange={onUsernameChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={onPasswordChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={handleSubmit}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
