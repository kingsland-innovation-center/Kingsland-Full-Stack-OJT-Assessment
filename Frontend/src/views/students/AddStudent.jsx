import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import StudentForm from "../../components/StudentForm/StudentForm";
import StudentService from "../../services/student.service";

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
  const [inputValues, setInputValues] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    StudentService.addStudent(
      inputValues.firstName,
      inputValues.lastName,
      inputValues.program,
      inputValues.email
    ).then((response) => console.log(response));
  };

  return (
    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="white-wrap w-50">
        <h2>Add Student</h2>
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

export default AddStudent;
