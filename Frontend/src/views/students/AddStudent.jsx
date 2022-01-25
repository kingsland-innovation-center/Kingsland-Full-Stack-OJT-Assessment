import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import StudentService from "../../services/student.service";
import StudentFormField from "../../components/StudentForm";
import InteractionModal from "../../components/InteractionModal";
import data from "../../components/data/modalMessage.json";

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

const initialValues = {
  firstName: "",
  lastName: "",
  program: "",
  email: "",
};

const AddStudent = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState(initialValues);

  const handleChange = (key) => (value) => {
    setInputValues({
      ...inputValues,
      [key]: value,
    });
  };

  const modalMessage = data.add.message;

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleConfirm = () => {
    StudentService.addStudent(
      inputValues.firstName,
      inputValues.lastName,
      inputValues.program,
      inputValues.email
    ).then(() => setTimeout(() => navigate("/students"), 1000));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
  };

  return (
    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="white-wrap w-50">
        <h2>Add Student</h2>
        <Form onSubmit={handleSubmit}>
          <StudentFormField
            onChange={handleChange("firstName")}
            label="First Name"
            placeholder="Enter First Name"
            value={inputValues.firstName}
          />
          <StudentFormField
            onChange={handleChange("lastName")}
            label="Last Name"
            placeholder="Enter Last Name"
            value={inputValues.lastName}
          />
          <StudentFormField
            onChange={handleChange("program")}
            label="Program"
            placeholder="Enter Program"
            value={inputValues.program}
          />
          <StudentFormField
            onChange={handleChange("email")}
            label="Email"
            placeholder="Enter Email"
            value={inputValues.email}
          />
          <Button variant="primary" type="submit">
            Add
          </Button>
          <InteractionModal
            showModal={show}
            setShowModal={setShow}
            confirmModal={handleConfirm}
            message={modalMessage}
          />
        </Form>
      </div>
    </Container>
  );
};

export default AddStudent;
