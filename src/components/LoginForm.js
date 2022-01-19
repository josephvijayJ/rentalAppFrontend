import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'email is mandatory';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'password is Must !!!';
  } else if (values.password.length < 6) {
    errors.password = 'Length must be greater than 6';
  }

  return errors;
};

const LoginForm = () => {
  const [errorMessage, seterrorMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        const data = await axios.post('https://rental-app-backend.herokuapp.com/login', values);
        console.log(data.data.message);
        seterrorMessage(data.data.message);
      } catch (error) {
        console.log('login error');
      }
    },
  });

  return (
    <>
      <Card
        style={{
          width: '25rem',
          margin: 'auto',
          marginTop: '125px',
          padding: '30px',
          border: '3px solid black',
        }}
      >
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Enter email"
            />
            {formik.errors.email ? (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />
            {formik.errors.password ? (
              <div style={{ color: 'red' }}>{formik.errors.password}</div>
            ) : null}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p style={{ color: 'red', marginTop: '15px' }}>{errorMessage}</p>
      </Card>
    </>
  );
};

export default LoginForm;
