import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import StudentService from "../../services/student.service";
import StudentForm from "../../components/StudentForm/StudentForm";

const initialValues = {
  firstName: "",
  lastName: "",
  program: "",
  email: "",
};

const EditStudent = () => {
  const [inputValues, setInputValues] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    StudentService.editStudent(
      inputValues.firstName,
      inputValues.lastName,
      inputValues.program,
      inputValues.email
    );
  };

  return (
    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="white-wrap w-50">
        <h2>Edit Student</h2>
        <StudentForm
          handleSubmit={handleSubmit}
          setInputValues={setInputValues}
          inputValues={inputValues}
          firstName={inputValues.firstName}
          lastName={inputValues.lastName}
          program={inputValues.program}
          email={inputValues.email}
        />
      </div>
    </Container>
  );
};

export default EditStudent;
