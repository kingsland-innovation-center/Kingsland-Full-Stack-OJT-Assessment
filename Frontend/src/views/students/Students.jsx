import React, {useState, useEffect} from 'react';
import { Box, Typography, IconButton, Modal, Button, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import editFill from '@iconify/icons-eva/edit-fill';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import {getCurrentUserId} from '../../utils/AuthorizationUtils';
import EditStudent from './EditStudent';

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

 const boxStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '28%',
  maxHeight: '100%',
  bgcolor: 'background.paper',
  boxShadow: 100,
  padding: '20px',
  paddingBottom: '30px',
  borderRadius: '8px'
};


const Students = () => {
  
  const [students, setStudents] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(1); 
  const [selectedStudent, setSelectedStudent] = useState({});

  const getStudents = async () => {
    try {
      const response = await fetch(
        'http://localhost:3100/student'
      );
      const jsonData = await response.json();
      const filteredData = jsonData.filter((student) => student.userId === Number(getCurrentUserId()));
      setStudents(filteredData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      await fetch(`http://localhost:3100/student/${studentId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getStudents();
  }, []);

  const handleDeleteModalOpen = () => {
    setOpenDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setOpenDeleteModal(false);
  };

  const handleEditModalOpen = () => {
    setOpenEditModal(true);
  };

  const handleEditModalClose = () => {
    setOpenEditModal(false);
  };

  const showDeleteStudentModal = openDeleteModal && (
    <span>
      {
        <div>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={openDeleteModal}
            onClose={handleDeleteModalClose}
          >
            <Box sx={boxStyles}>
              <Typography variant="subtitle1" noWrap style={{textAlign: 'center', fontWeight: 600}}>
                Are you sure you want to delete this student?
              </Typography>
              <br/>
              <Stack direction="row" alignItems="center" display='flex' justifyContent='center' spacing={4}>
                <Button variant="outlined" size="small" color="primary" 
                  onClick={() => {
                    deleteStudent(selectedStudentId);
                    handleDeleteModalClose()
                    setTimeout(() => {
                      window.location.reload(false);
                    }, 500)
                  }}>
                  Yes
                </Button>
                <Button variant="contained" size="small" sx={{backgroundColor: 'red'}} onClick={handleDeleteModalClose}>
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Modal>
        </div>
      }
    </span>
  )
  
  const showEditStudentModal = openEditModal && (
    <span>
      {
        <div>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={openEditModal}
            onClose={handleEditModalClose}
          > 
            <Box sx={boxStyles}>
              <EditStudent student={selectedStudent} />
            </Box>
          </Modal>
        </div>
      }
    </span>
  )

  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='white-wrap' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)', padding: '35px', borderRadius: '15px', width: '80%'}}>
        {showDeleteStudentModal}
        {showEditStudentModal}
        <Box sx={{ mb: 2.5 }}>
          <Typography variant="h4" gutterBottom>
            Students
          </Typography>
        </Box>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Program</th>
              <th>Email</th>
              <th/>
              <th/>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student, index) => {
                const {
                  studentId, 
                  firstname, 
                  lastname, 
                  program, 
                  email
                } = student;

                return (
                  <tr key={studentId}>
                    <td>{index + 1}</td>
                    <td>{firstname} {lastname}</td>
                    <td>{program}</td>
                    <td>{email}</td>
                    <td align='center'>
                      <IconButton
                        onClick={() => {
                          setSelectedStudent(student);
                          handleEditModalOpen();
                        }}
                      >
                        <Icon icon={editFill} width={24} height={24} color="inherit" />
                      </IconButton>
                    </td>
                    
                    <td align='center'>
                      <IconButton
                        onClick={() => {
                          setSelectedStudentId(studentId);
                          handleDeleteModalOpen();
                        }}
                      >
                        <Icon icon={trash2Fill} width={24} height={24} color="red" />
                      </IconButton>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Students;
