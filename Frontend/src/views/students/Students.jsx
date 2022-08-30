import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Cookies from 'js-cookie';

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
    axios
      .get('http://localhost:3100/student')
      .then((response) => {
        if (response.data) setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!Cookies.get('user_name')) {
    return <Navigate to='/' />;
  }
  return (
    <Container className='h-100 d-flex flex-column align-items-start justify-content-center'>
      <div className='white-wrap w-100'>
        <h2>Students</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Program</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr>
                  <td>
                    {student.firstname} {student.lastname}
                  </td>
                  <td>{student.program}</td>
                  <td>{student.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Students;
