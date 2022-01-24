import React from "react";
import Form from "react-bootstrap/Form";

function StudentFormField(props) {
  const { onChange, label, placeholder, value } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="formProgram">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type="text"
          placeholder={placeholder}
          defaultValue={value}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
}

export default StudentFormField;
