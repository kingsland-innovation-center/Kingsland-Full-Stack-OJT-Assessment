import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const Students = () => {
  return (
    <Container className='h-100 d-flex flex-column align-items-start justify-content-center'>
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
    </Container>
  );
};

export default Students;
