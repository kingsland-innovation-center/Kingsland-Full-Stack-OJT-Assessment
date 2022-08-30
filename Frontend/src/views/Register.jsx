import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * Implement the user registration functionality.
 *
 * You may limit your model to:
 * {
 *  firstName: string,
 *  lastName: string,
 *  username: string,
 *  password: string,
 * }
 *
 * Make sure to observe good password storage practices (eg. hashing).
 */
const Register = () => {
  const navigate = useNavigate();

  const [registrationInput, setRegistrationInput] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const onFirstNameChange = (input) => {
    setRegistrationInput({
      ...registrationInput,
      firstName: input.target.value,
    });
  };

  const onLastNameChange = (input) => {
    setRegistrationInput({
      ...registrationInput,
      lastName: input.target.value,
    });
  };

  const onUsernameChange = (input) => {
    setRegistrationInput({
      ...registrationInput,
      username: input.target.value,
    });
  };

  const onPasswordChange = (input) => {
    setRegistrationInput({
      ...registrationInput,
      password: input.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3100/user/register', {
        firstName: registrationInput.firstName,
        lastName: registrationInput.lastName,
        username: registrationInput.username,
        password: registrationInput.password,
      })
      .then((response) => {
        if (response.data === 'Registration Complete') navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='white-wrap d-flex'>
        <Row className='d-flex align-items-center'>
          <Col>
            <h2>Register</h2>
            <Form>
              <Form.Group className='mb-3' controlId='formFirstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter First Name'
                  onChange={onFirstNameChange}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Last Name'
                  onChange={onLastNameChange}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Username'
                  onChange={onUsernameChange}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formPassword'>
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
          </Col>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            sem id neque auctor interdum a in enim. Phasellus mollis dapibus
            quam commodo eleifend. Phasellus eu nibh sapien. Donec aliquet sem
            nec lorem condimentum ultricies. Ut vulputate aliquam turpis non
            pretium. Nulla leo arcu, bibendum vel lorem quis, sodales laoreet
            ante. Duis sit amet lectus porttitor, faucibus metus sed, elementum
            arcu. Cras quis nisl elementum felis malesuada tristique eu sit amet
            arcu. Nam velit lacus, sagittis eget diam ut, interdum blandit dui.
            Duis leo mi, tincidunt a consequat vel, mollis vel nisl. Ut ultrices
            malesuada sem quis lacinia. Aliquam porta ut ligula ut eleifend.
            Etiam tempus mauris sit amet erat sodales fermentum id sed sapien.
            Phasellus vitae condimentum magna, sed congue est. Vivamus tincidunt
            interdum mauris sit amet vulputate. Vestibulum viverra tincidunt
            sapien, vitae semper nunc blandit vel.
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
