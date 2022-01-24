import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function StudentForm(props) {

  const handleChange = (key) => (e) => {
    const { value } = e.target;
    props.setInputValues({
      ...props.inputValues,
      [key]: value,
    });

    console.log(props.inputValues);
  };
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter First Name"
          value={props.firstName}
          onChange={handleChange('firstName')}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
          value={props.lastName}
          onChange={handleChange('lastName')}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formProgram">
        <Form.Label>Program</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Program"
          value={props.program}
          onChange={handleChange('program')}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          value={props.email}
          onChange={handleChange('email')}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default StudentForm;
