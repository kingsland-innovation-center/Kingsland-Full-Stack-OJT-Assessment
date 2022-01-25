import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, Container, Box, Typography  } from '@mui/material';
import { CustomTextField, CustomLoadingButton } from '../../components/common';
import {getCurrentUserId} from '../../utils/AuthorizationUtils';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

const AddStudent = () => {

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('Firstname is required'),
    lastName: Yup.string().required('Lastname is required'),
    program: Yup.string().required('Please enter the program'),
    email: Yup.string().required('Email is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      program: '',
      email: '',
    },

    validationSchema: RegisterSchema,
    onSubmit: async (values, actions) => {

      console.log("VALUES: ", values);

      try {
        const body = { 
          userId: getCurrentUserId(),
          firstName: values.firstName, 
          lastName: values.lastName, 
          program: values.program, 
          email: values.email 
        };
        
        await fetch('http://localhost:3100/student', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        setTimeout(() => {
          alert('Student was successfully added');
          window.location.reload(false)
        }, 500);
        
      } catch (err) {
        console.log(err.message);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='white-wrap' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)', padding: '35px', borderRadius: '15px', width: '40%'}}>
        <Row className='d-flex align-items-center'>
          <Col>
            <Box sx={{ mb: 2.5 }}>
              <Typography variant="h4" gutterBottom>
                Add Student
              </Typography>
            </Box>

            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  
                  <CustomTextField 
                    label='First Name' 
                    getfieldpropsfn={getFieldProps('firstName')}
                    error={Boolean(touched.firstName && errors.firstName)} 
                    helperText={touched.firstName && errors.firstName} 
                  />

                  <CustomTextField 
                    label='Last Name' 
                    getfieldpropsfn={getFieldProps('lastName')}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName} 
                  />

                  <CustomTextField 
                    label='Program' 
                    getfieldpropsfn={getFieldProps('program')}
                    error={Boolean(touched.program && errors.program)}
                    helperText={touched.program && errors.program} 
                  />

                  <CustomTextField 
                    label='Email' 
                    getfieldpropsfn={getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email} 
                  />

                  <CustomLoadingButton label={'Add'} loading={isSubmitting} /> 
                  
                </Stack>
              </Form>
            </FormikProvider>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AddStudent;
