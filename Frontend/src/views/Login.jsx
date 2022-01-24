import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, Container, Box, Typography  } from '@mui/material';
import { CustomTextField, CustomLoadingButton, CustomPasswordField } from '../components/common';
import { useNavigate } from "react-router-dom";
import { login } from '../utils/AuthorizationUtils';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Implement the login functionality.
 * 
 * Given a username and password, check the database for a match.
 * If a match is found, log the user in.
 * 
 * For this assessment, tokenizing the username and password is not required.
 * You may simulate the response for correct/incorrect logins such as:
 * {
 *  isUserValid: boolean
 * }
 * 
 * Then, redirect appropriately to /dashboard and adjust the sidebar menuitems accordingly.
 */

const Login = () => {
  const navigate = useNavigate();

  const loginUser = (jwtToken) => {
    login(jwtToken);
  }

  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: RegisterSchema,
    onSubmit: async (values, actions) => {

      try {
        const body = { username: values.username, password: values.password };
        const response = await fetch(
          'http://localhost:3100/user/login',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          }
        );

        const loginResponse = await response.json().then((value) => {
          return value;
        });

        const authenticateUser = async () => {
          await fetch('http://localhost:3100/user/isAuth', {
            headers: {
              authorization: `Bearer ${localStorage.getItem('auth-token')}`
            }
          })
            .then((response) => response.json())
            .then((user) => {
              localStorage.setItem('user-id', user.user.id);
              return user;
            });
      
          const authRole = localStorage.getItem('auth-role');
      
          if (authRole === 'user') {
            setTimeout(() => {
              navigate('/dashboard', {replace: true}) 
            }, 1500)
          }
        };

        if (loginResponse.success) {
          loginUser(loginResponse.token);
          authenticateUser();
        } else {
          alert(loginResponse.message);
        }
      } catch (error) {
        console.log(error)
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
                Login
              </Typography>
            </Box>

            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
              
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

                  <CustomLoadingButton label={'Login'} loading={isSubmitting} />
                  
                </Stack>
              </Form>
            </FormikProvider>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
