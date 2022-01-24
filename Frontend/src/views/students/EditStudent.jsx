import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import StudentService from "../../services/student.service";
import StudentFormField from "../../components/StudentForm";
import InteractionModal from "../../components/InteractionModal";
import data from "../../components/data/modalMessage.json";

const initialValues = {
  firstname: "",
  lastname: "",
  program: "",
  email: "",
};

const EditStudent = () => {
  const history = useNavigate();

  const params = useParams();

  const [inputValues, setInputValues] = useState(initialValues);

  useEffect(() => {
    StudentService.getStudent(params.id).then((response) => {
      setInputValues(response);
    });
  }, []);

  // console.log(inputValues);
  const handleChange = (key) => (value) => {
    console.log(inputValues);
    setInputValues({
      ...inputValues,
      [key]: value,
    });
  };
  const modalMessage = data.edit.message;

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleConfirm = () => {
    StudentService.editStudent(
      inputValues.id,
      inputValues.firstname,
      inputValues.lastname,
      inputValues.program,
      inputValues.email
    );
    setTimeout(() => history("/students"), 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
  };

  return (
    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="white-wrap w-50">
        <h2>Edit Student</h2>
        <Form onSubmit={handleSubmit}>
          <StudentFormField
            onChange={handleChange("firstname")}
            label="First Name"
            placeholder="Enter First Name"
            value={inputValues.firstname}
          />
          <StudentFormField
            onChange={handleChange("lastname")}
            label="Last Name"
            placeholder="Enter Last Name"
            value={inputValues.lastname}
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
            Save
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

export default EditStudent;
