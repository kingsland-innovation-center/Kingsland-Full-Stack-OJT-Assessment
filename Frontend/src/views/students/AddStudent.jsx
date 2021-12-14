import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='white-wrap w-50'>
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
      </div>
    </Container>
  );
};

export default AddStudent;
