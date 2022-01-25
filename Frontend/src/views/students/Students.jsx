import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Interaction from "../../components/StudentInteraction/Interaction";
import StudentService from "../../services/student.service";

/**
 * Implement the read students information.
 *
 * The model definition is:
 * [{
 *  firstName: string,
 *  lastName: string,
 *  email: string,
 *  program: string
 * }]
 */

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getAllStudents().then((response) => setStudents(response));
  }, [students]);

  return (
    <Container className="h-100 d-flex flex-column align-items-start justify-content-center">
      <div className="white-wrap w-100">
        <h2>Students</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Program</th>
              <th>Email</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>
                    {student.firstname} {student.lastname}
                  </td>
                  <td>{student.program}</td>
                  <td>{student.email}</td>
                  <td className="d-flex flex-column">
                    <Interaction id={student.id} />
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>Sean Cadubla</td>
              <td>Zero-to-Blockchain Program</td>
              <td>sean@kingsland.io</td>
            </tr>
            <tr>
              <td>Rave Arevalo</td>
              <td>Full Stack Developer Program</td>
              <td>rave@kingsland.io</td>
            </tr>
            <tr>
              <td>Pia Bonilla</td>
              <td>Tech Sales Program</td>
              <td>pia@kingsland.io</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Students;
