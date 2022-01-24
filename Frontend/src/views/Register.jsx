import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Stack, Container, Box, Typography  } from '@mui/material';
import { CustomTextField, CustomLoadingButton, CustomPasswordField } from '../components/common';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Implement the user registration functionality.
 * 
 * You may limit your model to:
 * {
 *  firstName: string,
 *  lastName: string,
 *  username: string,
 *  password: string,
 * }
 * 
 * Make sure to observe good password storage practices (eg. hashing).
 */

const Register = () => {
  const navigate = useNavigate();
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('Firstname is required'),
    lastName: Yup.string().required('Lastname is required'),
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },

    validationSchema: RegisterSchema,
    onSubmit: async (values, actions) => {

      console.log("VALUES: ", values);

      try {
        const body = { 
          firstName: values.firstName, 
          lastName: values.lastName, 
          username: values.username, 
          password: values.password 
        };
        
        await fetch('http://localhost:3100/user/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 2000);

      } catch (err) {
        console.log(err.message);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='white-wrap d-flex' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)', padding: '35px', borderRadius: '15px'}}>
        <Row className='d-flex align-items-center'>
          <Col>
          
            <Box sx={{ mb: 2.5 }}>
              <Typography variant="h4" gutterBottom>
                Register
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
                    label='Username' 
                    getfieldpropsfn={getFieldProps('username')}
                    error={Boolean(touched.username && errors.username)}
                    helperText={touched.username && errors.username} 
                  />

                  <CustomPasswordField 
                    getfieldpropsfn={getFieldProps('password')}
                    error={Boolean(touched.password && errors.password)} 
                    helperText={touched.password && errors.password}
                  />

                  <CustomLoadingButton label={'Register'} loading={isSubmitting} />

                </Stack>
              </Form>
            </FormikProvider>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
