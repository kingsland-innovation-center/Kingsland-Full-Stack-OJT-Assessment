import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

/**
 * Implement the add student interaction.
 *
 * The model is limited to:
 * {
 *  firstName: string,
 *  lastName: string,
 *  email: string,
 *  program: string
 * }
 */
const AddStudent = () => {
  const [studentFormInput, setStudentFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: '',
  });
  if (!Cookies.get('user_name')) {
    return <Navigate to='/' />;
  }

  const onFirstNameChange = (input) => {
    setStudentFormInput({
      ...studentFormInput,
      firstName: input.target.value,
    });
  };

  const onLastNameChange = (input) => {
    setStudentFormInput({
      ...studentFormInput,
      lastName: input.target.value,
    });
  };

  const onEmailChange = (input) => {
    setStudentFormInput({
      ...studentFormInput,
      email: input.target.value,
    });
  };

  const onProgramChange = (input) => {
    setStudentFormInput({
      ...studentFormInput,
      program: input.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3100/student', {
        firstName: studentFormInput.firstName,
        lastName: studentFormInput.lastName,
        program: studentFormInput.program,
        email: studentFormInput.email,
      })
      .then((response) => {
        if (response.data) console.log('Student Added');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='white-wrap w-50'>
        <h2>Add Student</h2>
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

          <Form.Group className='mb-3' controlId='formProgram'>
            <Form.Label>Program</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Program'
              onChange={onProgramChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              onChange={onEmailChange}
            />
          </Form.Group>

          <Button variant='primary' type='submit' onClick={handleSubmit}>
            Add
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddStudent;
