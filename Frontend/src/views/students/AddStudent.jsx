import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddStudent = () => {
  return (
    <Container className='h-100 d-flex flex-column align-items-start justify-content-center'>
      <h2>Add Student</h2>
      <Form>
        <Form.Group className='mb-3' controlId='formFirstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type='text' placeholder='Enter First Name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formLastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Last Name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formProgram'>
          <Form.Label>Program</Form.Label>
          <Form.Control type='text' placeholder='Enter Program' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Password' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddStudent;
